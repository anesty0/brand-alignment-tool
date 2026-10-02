import peopleImg from "@/assets/day-1.webp";
import skiImg from "@/assets/hero-skiers.webp";
import { useI18n } from "@/lib/i18n";
import { useContacts } from "@/lib/contacts";

export type VisitVariant = "people" | "ski";

/**
 * Hero for the /visit/people and /visit/ski landing pages.
 *
 * Shares the homepage hero's visual language — full-bleed photograph, left-to-right
 * background scrim, navy display type, orange primary CTA — but leads with the trip
 * heading as the page `h1` instead of the NATIVE CODE wordmark. The wordmark is kept
 * above it as a brand lockup. `Hero.tsx` is deliberately left untouched.
 */
const VARIANTS: Record<
  VisitVariant,
  {
    img: string;
    width: number;
    height: number;
    /** Focal point, chosen so the subject sits clear of the headline column. */
    objectPos: string;
    /** The two headings differ a lot in length, so each gets its own top step. */
    headingSize: string;
    altRu: string;
    altEn: string;
    key: string;
  }
> = {
  people: {
    img: peopleImg,
    width: 1200,
    height: 800,
    objectPos: "object-[72%_center] md:object-[64%_center]",
    headingSize: "text-3xl sm:text-4xl md:text-5xl",
    altRu: "Участники Native Code вместе на горе в Зёльдене",
    altEn: "Native Code guests together on the mountain in Sölden",
    key: "visit.people",
  },
  ski: {
    img: skiImg,
    width: 1920,
    height: 1280,
    objectPos: "object-[70%_center] md:object-center",
    headingSize: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
    altRu: "Лыжники на склоне в Зёльдене, Австрия",
    altEn: "Skiers on the slopes in Sölden, Austria",
    key: "visit.ski",
  },
};

export function VisitHero({ variant }: { variant: VisitVariant }) {
  const { t, lang } = useI18n();
  const { whatsappUrl } = useContacts();
  const v = VARIANTS[variant];

  return (
    <section id="top" className="relative overflow-hidden">
      {/* background image with the same subtle left-side fade as the homepage hero */}
      <div className="absolute inset-0">
        <img
          src={v.img}
          alt={lang === "ru" ? v.altRu : v.altEn}
          className={`w-full h-full object-cover ${v.objectPos}`}
          width={v.width}
          height={v.height}
        />
        {/* Stronger scrim below md, where the copy spans most of the width. */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40 md:from-background/90 md:via-background/55 md:to-background/10" />
      </div>

      <div className="relative container-x pt-8 md:pt-14 lg:pt-10 pb-16 md:pb-24 lg:pb-16 xl:pb-20">
        <div className="max-w-2xl">
          {/* Brand lockup — the wordmark stays, but it is no longer the page heading */}
          <div className="leading-tight">
            <div className="font-extrabold tracking-tight text-navy text-base md:text-lg">
              NATIVE CODE
            </div>
            <div className="mt-0.5 text-[10px] md:text-[11px] font-semibold tracking-[0.18em] text-orange">
              {t("brand.line2")}
            </div>
          </div>

          <h1
            className={`mt-5 font-extrabold tracking-tight text-navy leading-[1.05] ${v.headingSize}`}
          >
            {t(`${v.key}.h1`)}
          </h1>

          <p className="mt-5 text-base md:text-lg text-foreground/80 max-w-xl leading-snug">
            {t(`${v.key}.desc`)}
          </p>

          <div className="mt-6 space-y-1">
            <div className="text-lg md:text-xl font-bold text-navy tracking-tight">
              {t("visit.dates")}
            </div>
            <div className="text-base md:text-lg font-semibold text-navy/90 tracking-tight">
              {t("visit.price")}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#included"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 text-xs font-semibold tracking-[0.12em] hover:brightness-110 transition shadow-[var(--shadow-soft)]"
            >
              {t("visit.cta1")}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center rounded-md bg-background border border-border text-navy px-5 py-3 text-xs font-semibold tracking-[0.12em] hover:border-orange hover:text-orange transition"
            >
              {t("visit.cta2")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
