import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";

/**
 * Subtle, premium reveal-on-scroll. Auto-tags sections and article cards with
 * `.reveal` and toggles `.is-visible` when they enter the viewport. Stagger is
 * applied to direct article siblings inside the same parent for grouped grids.
 */
export function RevealObserver() {
  const router = useRouter();
  const pathname = router.state.location.pathname;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("section, article")
    );

    targets.forEach((el) => {
      el.classList.add("reveal");
      // Stagger article siblings inside the same parent (cards in grids)
      if (el.tagName === "ARTICLE" && el.parentElement) {
        const idx = Array.from(el.parentElement.children)
          .filter((c) => c.tagName === "ARTICLE")
          .indexOf(el);
        if (idx > 0) {
          el.style.transitionDelay = `${Math.min(idx, 5) * 70}ms`;
        }
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => {
      // Reveal immediately if already in viewport on mount (no flash)
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95) {
        el.classList.add("is-visible");
      } else {
        io.observe(el);
      }
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
