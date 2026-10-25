import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Lightbox } from "@/components/site/Lightbox";

import hotel01 from "@/assets/zell/hotel-01.webp";
import hotel02 from "@/assets/zell/about-grand-hotel.webp";
import hotel03 from "@/assets/zell/alps-connect-1.webp";
import hotel04 from "@/assets/zell/hotel-04.webp";
import hotel05 from "@/assets/zell/program-day2.webp";
import hotel06 from "@/assets/zell/hotel-06.webp";
import hotel07 from "@/assets/zell/hotel-07.webp";
import hotel08 from "@/assets/zell/hotel-08.webp";
import hotel09 from "@/assets/zell/hotel-09.webp";
import hotel10 from "@/assets/zell/hotel-10.webp";
import { useI18n } from "@/lib/i18n";
import { useContacts } from "@/lib/contacts";

/** Lowest per-person price across the Grand Hotel room options. */
const PRICE_FROM = "1900 €";

/** Carousel order as supplied by the client. */
const gallery = [
  hotel01,
  hotel02,
  hotel03,
  hotel04,
  hotel05,
  hotel06,
  hotel07,
  hotel08,
  hotel09,
  hotel10,
];

export function Hotels() {
  const { t } = useI18n();
  const { whatsappUrl } = useContacts();

  return (
    <section id="hotels" className="py-10 md:py-14 lg:py-10 xl:py-12 scroll-mt-32 md:scroll-mt-40">
      <div className="container-x">
        <h3 className="text-center text-2xl md:text-3xl font-extrabold tracking-tight text-navy">
          {t("hotels.title")}
        </h3>

        <article className="mt-8 md:mt-10 max-w-6xl mx-auto bg-card rounded-2xl border border-border shadow-[var(--shadow-card)] p-5 md:p-7 lg:p-8 grid lg:grid-cols-[1.15fr_1fr] gap-6 lg:gap-10 items-center">
          {/* Text — first on mobile, right column on desktop */}
          <div className="order-1 lg:order-2">
            <h4 className="text-[22px] sm:text-2xl md:text-3xl font-extrabold tracking-tight text-navy leading-tight">
              GRAND HOTEL ZELL AM SEE
            </h4>
            <p className="mt-1 text-lg md:text-xl text-navy">{t("hotels.stars")}</p>
            <p className="mt-4 text-base md:text-lg font-bold text-navy leading-snug">
              {t("hotels.lead")}
            </p>
            <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
              {t("hotels.body")}
            </p>

            <div className="hidden lg:block">
              <PriceAndActions whatsappUrl={whatsappUrl} t={t} />
            </div>
          </div>

          {/* Carousel — after the text on mobile, left column on desktop */}
          <div className="order-2 lg:order-1 min-w-0">
            <HotelCarousel images={gallery} t={t} />
          </div>

          <div className="order-3 lg:hidden">
            <PriceAndActions whatsappUrl={whatsappUrl} t={t} />
          </div>
        </article>
      </div>
    </section>
  );
}

function PriceAndActions({ whatsappUrl, t }: { whatsappUrl: string; t: (k: string) => string }) {
  return (
    <div className="lg:mt-6">
      <div className="flex items-baseline gap-2">
        <span className="text-orange font-extrabold text-3xl md:text-4xl tracking-tight">
          {PRICE_FROM}
        </span>
        <span className="text-sm text-muted-foreground">{t("hotels.perPerson")}</span>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <Link
          to="/grand-hotel-zell-am-see"
          className="w-full inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-5 py-3.5 text-sm font-semibold hover:brightness-110 transition shadow-[var(--shadow-soft)]"
        >
          {t("hotels.rooms")}
        </Link>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="w-full inline-flex items-center justify-center rounded-lg border-2 border-navy bg-background text-navy px-5 py-3 text-sm font-semibold hover:border-orange hover:text-orange transition"
        >
          {t("hotels.ask")}
        </a>
      </div>
    </div>
  );
}

function HotelCarousel({ images, t }: { images: string[]; t: (k: string) => string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const slides = useRef<(HTMLElement | null)[]>([]);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const arrow =
    "absolute top-1/2 -translate-y-1/2 z-10 inline-flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-white/95 text-navy shadow-md hover:text-orange transition";

  return (
    <div>
      <div className="relative">
        <div className="overflow-hidden rounded-xl" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {images.map((src, i) => (
              <div key={i} className="min-w-0 shrink-0 grow-0 basis-full">
                <button
                  type="button"
                  ref={(el) => {
                    slides.current[i] = el;
                  }}
                  onClick={() => {
                    setOpenIndex(i);
                  }}
                  aria-label={`${t("lightbox.open")} ${i + 1}`}
                  className="group relative block w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-orange"
                >
                  <img
                    src={src}
                    alt={`Grand Hotel Zell am See — ${t("hotels.photo")} ${i + 1}`}
                    loading={i === 0 ? "eager" : "lazy"}
                    draggable={false}
                    className="w-full aspect-[16/10] object-cover select-none"
                  />
                  <span className="absolute right-3 bottom-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                    <Expand size={16} />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          aria-label={t("hotels.prev")}
          className={`${arrow} left-3`}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          aria-label={t("hotels.next")}
          className={`${arrow} right-3`}
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="mt-3 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`${t("hotels.photo")} ${i + 1}`}
            aria-current={i === selected}
            className={`h-2.5 w-2.5 rounded-full transition ${i === selected ? "bg-orange" : "bg-border hover:bg-muted-foreground/40"}`}
          />
        ))}
      </div>

      <Lightbox
        images={images.map((src, i) => ({
          src,
          alt: `Grand Hotel Zell am See — ${t("hotels.photo")} ${i + 1}`,
          caption: "Grand Hotel Zell am See",
        }))}
        index={openIndex}
        onIndexChange={(i) => {
          setOpenIndex(i);
          // keep the carousel on the photo being viewed, so closing lands back on it
          if (i !== null) emblaApi?.scrollTo(i, true);
        }}
        getOrigin={(i) => slides.current[i] ?? null}
      />
    </div>
  );
}
