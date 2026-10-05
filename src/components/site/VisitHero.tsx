import heroImg from "@/assets/hero-skiers.webp";
import { useI18n } from "@/lib/i18n";
import { useContacts } from "@/lib/contacts";

export type VisitVariant = "people" | "ski";

/**
 * Hero for the /visit/people and /visit/ski landing pages.
 *
 * Uses the homepage hero's background image and its exact image treatment — same
 * source file, same object-position ramp, same overlay gradient — so all three
 * heroes are visually identical behind the copy. It leads with the trip heading as
 * the page `h1` instead of the NATIVE CODE wordmark; the wordmark is kept above it
 * as a brand lockup. `Hero.tsx` owns the homepage hero and is not imported here.
 *
 * Only the heading copy and its top size step vary by variant: the people heading is
 * substantially longer than the ski one, so it stops a step lower.
 */
const VARIANTS: Record<VisitVariant, { headingSize: string; key: string }> = {
  people: {
    headingSize: "text-3xl sm:text-4xl md:text-5xl",
    key: "visit.people",
  },
  ski: {
    headingSize: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
    key: "visit.ski",
  },
};

export function VisitHero({ variant }: { variant: VisitVariant }) {
  const { t } = useI18n();
  const { whatsappUrl } = useContacts();
  const v = VARIANTS[variant];

  return (
    <section id="top" className="relative overflow-hidden">
      {/* background image with very subtle fade — identical treatment to Hero.tsx */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Skiers in Sölden Alps"
          className="w-full h-full object-cover object-[70%_center] md:object-center"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/25 to-transparent" />
      </div>

      <div className="relative container-x pt-8 md:pt-14 lg:pt-10 pb-16 md:pb-24 lg:pb-16 xl:pb-20">
        <div className="max-w-2xl">
          {/* Brand lockup — the wordmark stays, but it is no longer the page heading */}
          <div className="font-extrabold tracking-tight text-navy text-base md:text-lg leading-tight">
            NATIVE CODE
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
              href="#hotels"
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
