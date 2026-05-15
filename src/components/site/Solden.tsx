import slope from "@/assets/solden-slope.jpg";
import { useI18n } from "@/lib/i18n";

export function Solden() {
  const { t } = useI18n();
  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container-x">
        <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-8 lg:gap-12 items-start">
          <div>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-navy leading-[0.95]">
              {t("solden.title")}
            </h3>
            <p className="mt-3 text-foreground/80 font-semibold text-lg md:text-xl">
              {t("solden.sub")}
            </p>
            <div className="mt-6 space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>{t("solden.p1")}</p>
              <p>{t("solden.p2")}</p>
              <p>{t("solden.p3")}</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
            <img src={slope} alt="Sölden ski slope" loading="lazy" className="w-full h-full object-cover aspect-[16/10]" />
          </div>
        </div>
      </div>
    </section>
  );
}
