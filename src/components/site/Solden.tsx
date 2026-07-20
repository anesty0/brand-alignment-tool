import slope from "@/assets/solden-slope.webp";
import { useI18n } from "@/lib/i18n";

export function Solden() {
  const { t } = useI18n();
  return (
    <section className="py-8 md:py-12 lg:py-10 xl:py-12 bg-background">
      <div className="container-x">
        {/* Mobile: stacked layout */}
        <div className="md:hidden">
          <div>
            <h3 className="text-balance text-3xl font-extrabold tracking-tight text-navy leading-[0.95]">
              {t("solden.title")}
            </h3>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>{t("solden.body")}</p>
            </div>
          </div>
          <div className="mt-6 rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
            <img src={slope} alt="Sölden ski slope" loading="lazy" className="w-full h-full object-cover aspect-[16/10] rounded-2xl" />
          </div>
        </div>

        {/* Tablet / laptop / desktop: centered editorial composition */}
        <div className="hidden md:flex flex-col items-center text-center">
          <h3 className="text-balance max-w-4xl text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-navy leading-[0.95]">
            {t("solden.title")}
          </h3>
          <div className="mt-6 max-w-3xl space-y-2 text-base text-muted-foreground leading-relaxed">
            <p>{t("solden.body")}</p>
          </div>
          <div className="mt-6 w-full max-w-5xl rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
            <img src={slope} alt="Sölden ski slope" loading="lazy" className="w-full h-full object-cover aspect-[16/9] rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
