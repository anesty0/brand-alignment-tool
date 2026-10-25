import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, Minus, Plus, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export type LightboxImage = { src: string; alt: string; caption?: string };

type Props = {
  images: LightboxImage[];
  /** Index to show, or `null` when closed. */
  index: number | null;
  onIndexChange: (index: number | null) => void;
  /** Returns the on-page thumbnail for an index, so the photo can grow out of it and shrink back. */
  getOrigin?: (index: number) => HTMLElement | null;
};

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const DOUBLE_TAP_SCALE = 2.5;
const OPEN_MS = 380;
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

type View = { scale: number; x: number; y: number };
const RESET: View = { scale: 1, x: 0, y: 0 };

/**
 * Full-screen photo viewer.
 *
 * - Opens with the photo growing out of its thumbnail and closes back into it.
 * - Zoom: mouse wheel / trackpad, pinch on touch screens, double-click or double-tap,
 *   or the + / − buttons. Drag to pan while zoomed.
 * - Navigate: arrows, keyboard ← →, or swipe left/right. Swipe down, Esc, the × button
 *   or a click on the dark backdrop closes it.
 */
export function Lightbox({ images, index, onIndexChange, getOrigin }: Props) {
  const { t } = useI18n();
  const open = index !== null;
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false); // drives backdrop + chrome fade
  const [closing, setClosing] = useState(false);
  const [view, setView] = useState<View>(RESET);
  const [animating, setAnimating] = useState(true); // smooth transform vs. follow-the-finger
  const [swipeX, setSwipeX] = useState(0);
  const [swipeY, setSwipeY] = useState(0);
  const [navCount, setNavCount] = useState(0); // >0 once the user flips to another photo

  const stageRef = useRef<HTMLDivElement>(null);
  const flipRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const viewRef = useRef(view);
  viewRef.current = view;

  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const gesture = useRef<{
    startX: number;
    startY: number;
    startView: View;
    pinchDist?: number;
    pinchMid?: { x: number; y: number };
    moved: boolean;
  } | null>(null);
  const lastTap = useRef<{ time: number; x: number; y: number } | null>(null);

  const current = index !== null ? images[index] : null;
  const zoomed = view.scale > 1.01;

  /* ---------- geometry helpers ---------- */

  const clamp = useCallback((v: View): View => {
    const img = imgRef.current;
    const scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, v.scale));
    if (!img || scale <= 1) return { scale, x: 0, y: 0 };
    const w = img.clientWidth * scale;
    const h = img.clientHeight * scale;
    // Pan until the photo's edge meets the screen edge (with a little give).
    const limX =
      w > window.innerWidth ? (w - window.innerWidth) / 2 + 24 : (w - img.clientWidth) / 2;
    const limY =
      h > window.innerHeight ? (h - window.innerHeight) / 2 + 24 : (h - img.clientHeight) / 2;
    return {
      scale,
      x: Math.min(limX, Math.max(-limX, v.x)),
      y: Math.min(limY, Math.max(-limY, v.y)),
    };
  }, []);

  /** Zoom to `scale`, keeping the screen point (px, py) fixed under the cursor/fingers. */
  const zoomAt = useCallback(
    (from: View, scale: number, px: number, py: number): View => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const s = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale));
      const k = s / from.scale;
      return clamp({
        scale: s,
        x: px - cx - (px - cx - from.x) * k,
        y: py - cy - (py - cy - from.y) * k,
      });
    },
    [clamp],
  );

  /* ---------- open / close with FLIP animation ---------- */

  const flipFromOrigin = useCallback(
    (i: number, reverse: boolean) => {
      const el = flipRef.current;
      const img = imgRef.current;
      const origin = getOrigin?.(i);
      if (!el || !img) return false;
      const to = img.getBoundingClientRect();
      const from = origin?.getBoundingClientRect();
      if (
        !from ||
        !to.width ||
        from.width === 0 ||
        from.bottom < 0 ||
        from.top > window.innerHeight ||
        from.right < 0 ||
        from.left > window.innerWidth
      ) {
        return false;
      }
      const dx = from.left + from.width / 2 - (to.left + to.width / 2);
      const dy = from.top + from.height / 2 - (to.top + to.height / 2);
      const s = Math.max(from.width / to.width, from.height / to.height);
      const collapsed = `translate(${dx}px, ${dy}px) scale(${s})`;
      if (!reverse) {
        el.style.transition = "none";
        el.style.transform = collapsed;
        el.style.opacity = "0.6";
        void el.offsetWidth; // commit the start frame
        el.style.transition = `transform ${OPEN_MS}ms ${EASE}, opacity ${OPEN_MS / 2}ms ease`;
        el.style.transform = "none";
        el.style.opacity = "1";
      } else {
        el.style.transition = `transform ${OPEN_MS - 60}ms ${EASE}, opacity ${OPEN_MS - 60}ms ease`;
        el.style.transform = collapsed;
        el.style.opacity = "0.4";
      }
      return true;
    },
    [getOrigin],
  );

  // mount when opened
  useEffect(() => {
    if (open && !mounted) {
      setMounted(true);
      setClosing(false);
    }
  }, [open, mounted]);

  // run the opening animation once the first image has laid out
  const openedFor = useRef<number | null>(null);
  const runOpen = useCallback(async () => {
    if (index === null || openedFor.current !== null) return;
    openedFor.current = index;
    const el = flipRef.current;
    // Decode the full-size photo off the main thread before the first animated frame,
    // so the grow-out animation never stalls waiting for pixels.
    try {
      await imgRef.current?.decode();
    } catch {
      /* decode() can reject for cached/broken images; the animation still runs */
    }
    if (openedFor.current !== index) return;
    const flipped = flipFromOrigin(index, false);
    if (!flipped && el) {
      el.style.transition = "none";
      el.style.transform = "scale(0.92)";
      el.style.opacity = "0";
      void el.offsetWidth;
      el.style.transition = `transform ${OPEN_MS}ms ${EASE}, opacity ${OPEN_MS}ms ease`;
      el.style.transform = "none";
      el.style.opacity = "1";
    }
  }, [index, flipFromOrigin]);

  useLayoutEffect(() => {
    if (!mounted) return;
    // Keep the photo hidden until the opening animation takes over (no full-size flash).
    if (flipRef.current && openedFor.current === null) flipRef.current.style.opacity = "0";
    // Fade the backdrop in immediately so the tap feels instant.
    const raf = requestAnimationFrame(() => setVisible(true));
    if (imgRef.current?.complete) void runOpen();
    return () => cancelAnimationFrame(raf);
  }, [mounted, runOpen]);

  const close = useCallback(() => {
    if (closing || index === null) return;
    setClosing(true);
    setAnimating(true);
    setView(RESET);
    setSwipeX(0);
    setSwipeY(0);
    setVisible(false);
    const flipped = !zoomed && flipFromOrigin(index, true);
    if (!flipped && flipRef.current) {
      flipRef.current.style.transition = `transform 240ms ease, opacity 240ms ease`;
      flipRef.current.style.transform = "scale(0.94)";
      flipRef.current.style.opacity = "0";
    }
    window.setTimeout(
      () => {
        openedFor.current = null;
        setNavCount(0);
        setMounted(false);
        setClosing(false);
        onIndexChange(null);
      },
      flipped ? OPEN_MS - 60 : 240,
    );
  }, [closing, index, zoomed, flipFromOrigin, onIndexChange]);

  // external close (index set to null while mounted)
  useEffect(() => {
    if (!open && mounted && !closing) {
      openedFor.current = null;
      setMounted(false);
      setVisible(false);
    }
  }, [open, mounted, closing]);

  /* ---------- navigation ---------- */

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null || images.length < 2) return;
      setAnimating(true);
      setView(RESET);
      setSwipeX(0);
      setNavCount((n) => n + 1);
      onIndexChange((index + dir + images.length) % images.length);
    },
    [index, images.length, onIndexChange],
  );

  // keyboard + scroll lock
  useEffect(() => {
    if (!mounted) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "+" || e.key === "=")
        setView((v) => clamp({ ...v, scale: v.scale * 1.5 }));
      else if (e.key === "-") setView((v) => clamp({ ...v, scale: v.scale / 1.5 }));
    };
    const prevOverflow = document.body.style.overflow;
    const prevPadding = document.body.style.paddingRight;
    // Hide the page scrollbar without the page shifting sideways under the viewer.
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPadding;
      window.removeEventListener("keydown", onKey);
    };
  }, [mounted, close, go, clamp]);

  // wheel zoom (needs a non-passive listener to stop the page scrolling)
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      setAnimating(false);
      const factor = Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.0018));
      setView((v) => zoomAt(v, v.scale * factor, e.clientX, e.clientY));
    };
    stage.addEventListener("wheel", onWheel, { passive: false });
    return () => stage.removeEventListener("wheel", onWheel);
  }, [mounted, zoomAt]);

  /* ---------- pointer gestures: pan, pinch, swipe, double-tap ---------- */

  const onPointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest("button")) return;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    setAnimating(false);
    const pts = [...pointers.current.values()];
    if (pts.length === 2) {
      const [a, b] = pts;
      gesture.current = {
        startX: (a.x + b.x) / 2,
        startY: (a.y + b.y) / 2,
        startView: viewRef.current,
        pinchDist: Math.hypot(a.x - b.x, a.y - b.y),
        pinchMid: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 },
        moved: true,
      };
    } else if (pts.length === 1) {
      gesture.current = {
        startX: e.clientX,
        startY: e.clientY,
        startView: viewRef.current,
        moved: false,
      };
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!pointers.current.has(e.pointerId) || !gesture.current) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const g = gesture.current;
    const pts = [...pointers.current.values()];
    if (pts.length >= 2 && g.pinchDist && g.pinchMid) {
      const [a, b] = pts;
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
      const z = zoomAt(
        g.startView,
        g.startView.scale * (dist / g.pinchDist),
        g.pinchMid.x,
        g.pinchMid.y,
      );
      setView(clamp({ ...z, x: z.x + (mid.x - g.pinchMid.x), y: z.y + (mid.y - g.pinchMid.y) }));
      return;
    }
    const dx = e.clientX - g.startX;
    const dy = e.clientY - g.startY;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) g.moved = true;
    if (g.startView.scale > 1.01) {
      setView(clamp({ ...g.startView, x: g.startView.x + dx, y: g.startView.y + dy }));
    } else if (Math.abs(dx) > Math.abs(dy)) {
      setSwipeX(images.length > 1 ? dx : dx * 0.25);
      setSwipeY(0);
    } else if (dy > 0) {
      setSwipeY(dy);
      setSwipeX(0);
    }
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const g = gesture.current;
    pointers.current.delete(e.pointerId);
    if (pointers.current.size > 0) {
      // finished a pinch with one finger still down: continue as a pan from here
      const [p] = [...pointers.current.values()];
      gesture.current = { startX: p.x, startY: p.y, startView: viewRef.current, moved: true };
      return;
    }
    gesture.current = null;
    setAnimating(true);
    if (!g) return;
    const dx = e.clientX - g.startX;
    const dy = e.clientY - g.startY;

    if (!g.moved) {
      // tap: double-tap toggles zoom; single tap on backdrop closes
      const now = Date.now();
      const last = lastTap.current;
      if (
        last &&
        now - last.time < 300 &&
        Math.hypot(e.clientX - last.x, e.clientY - last.y) < 30
      ) {
        lastTap.current = null;
        setView((v) =>
          v.scale > 1.01 ? RESET : zoomAt(v, DOUBLE_TAP_SCALE, e.clientX, e.clientY),
        );
        return;
      }
      lastTap.current = { time: now, x: e.clientX, y: e.clientY };
      const onImage = (e.target as HTMLElement) === imgRef.current;
      if (!onImage && viewRef.current.scale <= 1.01) {
        window.setTimeout(() => {
          if (lastTap.current && lastTap.current.time === now) close();
        }, 300);
      }
      return;
    }

    if (g.startView.scale <= 1.01) {
      if (dy > 110 && Math.abs(dy) > Math.abs(dx)) return close();
      if (images.length > 1 && Math.abs(dx) > 70) return go(dx < 0 ? 1 : -1);
    }
    setSwipeX(0);
    setSwipeY(0);
  };

  if (!mounted || !current) return null;

  const backdropOpacity = visible ? Math.max(0.35, 1 - swipeY / 500) : 0;
  const transition = animating ? `transform 260ms ${EASE}` : "none";

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.caption ?? current.alt}
      className="fixed inset-0 z-[200] select-none"
    >
      <div
        className="absolute inset-0 bg-[#070d1f]/[0.93] transition-opacity duration-300 will-change-[opacity]"
        style={{ opacity: backdropOpacity }}
      />

      {/* Stage */}
      <div
        ref={stageRef}
        className={`absolute inset-0 flex items-center justify-center touch-none ${zoomed ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div ref={flipRef} className="will-change-transform">
          <div
            style={{
              transform: `translate3d(${view.x + swipeX}px, ${view.y + swipeY}px, 0) scale(${view.scale * (1 - Math.min(swipeY, 300) / 1500)})`,
              transition,
            }}
            className="will-change-transform"
          >
            <img
              key={current.src}
              ref={imgRef}
              src={current.src}
              alt={current.alt}
              draggable={false}
              onLoad={() => void runOpen()}
              decoding="async"
              className={`block max-w-[94vw] max-h-[78vh] md:max-w-[88vw] md:max-h-[82vh] object-contain rounded-lg shadow-2xl ${navCount > 0 ? "animate-in fade-in duration-200" : ""}`}
            />
          </div>
        </div>
      </div>

      {/* Chrome */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${visible && !zoomed ? "opacity-100" : visible ? "opacity-70" : "opacity-0"}`}
      >
        <div className="absolute top-0 inset-x-0 flex items-center justify-between gap-3 p-3 md:p-5 text-white">
          <div className="min-w-0 text-xs md:text-sm font-semibold tracking-wide text-white/85 truncate pl-1">
            {current.caption}
            {images.length > 1 && (
              <span className="ml-2 font-normal text-white/60">
                {index! + 1} / {images.length}
              </span>
            )}
          </div>
          <div className="pointer-events-auto flex items-center gap-2">
            <ChromeButton
              label={t("lightbox.zoomOut")}
              onClick={() => {
                setAnimating(true);
                setView((v) => clamp({ ...v, scale: v.scale / 1.6 }));
              }}
              disabled={!zoomed}
            >
              <Minus size={18} />
            </ChromeButton>
            <ChromeButton
              label={t("lightbox.zoomIn")}
              onClick={() => {
                setAnimating(true);
                setView((v) => clamp({ ...v, scale: v.scale * 1.6 }));
              }}
              disabled={view.scale >= MAX_SCALE}
            >
              <Plus size={18} />
            </ChromeButton>
            <ChromeButton label={t("hotels.close")} onClick={close}>
              <X size={20} />
            </ChromeButton>
          </div>
        </div>

        {images.length > 1 && (
          <>
            <ChromeButton
              label={t("hotels.prev")}
              onClick={() => go(-1)}
              className="pointer-events-auto absolute left-6 top-1/2 -translate-y-1/2 h-12 w-12 !hidden md:!inline-flex"
            >
              <ChevronLeft size={24} />
            </ChromeButton>
            <ChromeButton
              label={t("hotels.next")}
              onClick={() => go(1)}
              className="pointer-events-auto absolute right-6 top-1/2 -translate-y-1/2 h-12 w-12 !hidden md:!inline-flex"
            >
              <ChevronRight size={24} />
            </ChromeButton>
          </>
        )}

        <div className="absolute bottom-4 inset-x-0 px-4 text-center text-[11px] md:text-xs text-white/55">
          <span className="md:hidden">{t("lightbox.hintTouch")}</span>
          <span className="hidden md:inline">{t("lightbox.hint")}</span>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function ChromeButton({
  label,
  onClick,
  disabled,
  className = "h-10 w-10",
  children,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className={`pointer-events-auto inline-flex items-center justify-center rounded-full bg-white/15 text-white border border-white/15 hover:bg-white/25 disabled:opacity-35 disabled:hover:bg-white/15 transition ${className}`}
    >
      {children}
    </button>
  );
}
