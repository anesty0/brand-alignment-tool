import grandHotel from "@/assets/zell/about-grand-hotel.webp";
import { useI18n } from "@/lib/i18n";

const features = ["about.f1", "about.f2", "about.f3", "about.f4"];

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="scroll-mt-32 md:scroll-mt-40 py-10 md:py-14 lg:py-10 xl:py-12">
      <div className="container-x grid lg:grid-cols-2 gap-10 xl:gap-14 items-stretch">
        <div className="about-tablet-image-frame rounded-2xl overflow-hidden shadow-[var(--shadow-card)] w-full h-full lg:min-h-[520px]">
          <img src={grandHotel} alt="Grand Hotel Zell am See on Lake Zell in winter" loading="lazy" className="about-tablet-image w-full h-full object-cover object-center lg:object-[14%_center] aspect-[16/9] lg:aspect-auto" />
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-orange leading-snug">
            NATIVE CODE
          </h3>
          <p className="mt-2 text-base md:text-lg font-bold text-navy leading-snug">
            {t("about.heading")}
          </p>

          <div className="mt-4 space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            <p>
              {t("about.p1pre")}
              <span className="font-semibold text-navy">{t("about.p1hotel")}</span>
              {t("about.p1post")}
            </p>
            <p>{t("about.p2")}</p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-8">
            {features.map((f) => (
              <div key={f}>
                <div className="text-xs font-bold tracking-[0.16em] text-orange uppercase">{t(`${f}.t`)}</div>
                <h4 className="mt-2 text-xl md:text-2xl font-extrabold tracking-tight text-navy leading-[1.1]">{t(`${f}.h`)}</h4>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t(`${f}.b`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
