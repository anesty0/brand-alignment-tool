import slope from "@/assets/solden-slope.jpg";
import { useI18n } from "@/lib/i18n";

export function Solden() {
  const { t } = useI18n();
  return (
    <section className="py-8 md:py-12 lg:py-10 xl:py-12 bg-background">
      <div className="container-x">
        {/* Mobile: original layout, text untouched */}
        <div className="md:hidden">
          <div>
            <h3 className="text-3xl font-extrabold tracking-tight text-navy leading-[0.95]">
              {t("solden.title")}
            </h3>
            <p className="mt-3 text-foreground/80 font-semibold text-lg">
              {t("solden.sub")}
            </p>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>{t("solden.p1")}</p>
              <p>{t("solden.p2")}</p>
              <p>{t("solden.p3")}</p>
            </div>
          </div>
          <div className="mt-6 rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
            <img src={slope} alt="Sölden ski slope" loading="lazy" className="w-full h-full object-cover aspect-[16/10] rounded-2xl" />
          </div>
        </div>

        {/* Tablet / laptop / desktop: centered editorial composition */}
        <div className="hidden md:flex flex-col items-center text-center">
          <h3 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-navy leading-[0.95]">
            {t("solden.title")}
          </h3>
          <p className="mt-2 text-foreground/80 font-semibold text-xl">
            {t("solden.sub")}
          </p>
          <div className="mt-4 max-w-2xl space-y-2 text-base text-muted-foreground leading-snug">
            <p>{t("solden.p1")}</p>
            <p>{t("solden.p2")}</p>
            <p>{t("solden.p3")}</p>
          </div>
          <div className="mt-6 w-full max-w-5xl rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
            <img src={slope} alt="Sölden ski slope" loading="lazy" className="w-full h-full object-cover aspect-[16/9] rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
