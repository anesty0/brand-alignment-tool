import heroImg from "@/assets/hero-skiers.jpg";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative overflow-hidden">
      {/* background image with very subtle fade */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Skiers in Sölden Alps" className="w-full h-full object-cover object-[70%_center] md:object-center" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/10 to-transparent" />
      </div>

      <div className="relative container-x pt-8 md:pt-14 lg:pt-10 pb-16 md:pb-24 lg:pb-16 xl:pb-20">
        <div className="max-w-2xl">
          <h1 className="font-extrabold tracking-tight text-navy leading-[0.95] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            NATIVE CODE
          </h1>
          <h2 className="mt-2 text-orange font-extrabold tracking-tight leading-[0.95] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {t("brand.line2")}
          </h2>

          <p className="mt-5 text-base md:text-lg text-foreground/80 max-w-md leading-snug">
            {t("hero.tagline")}
          </p>

          <div className="mt-5 space-y-1">
            <div className="text-lg md:text-xl font-bold text-navy tracking-tight">{t("hero.dates")}</div>
            <div className="text-lg md:text-xl font-bold text-navy tracking-tight flex items-center gap-2">
              {t("hero.place")} <span aria-hidden>🇦🇹</span>
            </div>
          </div>

          <p className="mt-3 text-sm md:text-base text-foreground/75 max-w-md">
            {t("hero.sub")}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://wa.me/79255895239" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 text-xs font-semibold tracking-[0.12em] hover:brightness-110 transition shadow-[var(--shadow-soft)]">
              {t("hero.cta1")}
            </a>
            <a href="/#program" className="inline-flex items-center justify-center rounded-md bg-background border border-border text-navy px-5 py-3 text-xs font-semibold tracking-[0.12em] hover:border-orange hover:text-orange transition">
              {t("hero.cta2")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
