import obs from "@/assets/about-section.webp";
import { Calendar, Users, Mountain, Briefcase } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const features = [
  { icon: Calendar, k: "about.f1" },
  { icon: Users, k: "about.f2" },
  { icon: Mountain, k: "about.f3" },
  { icon: Briefcase, k: "about.f4" },
];

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="scroll-mt-32 md:scroll-mt-40 py-10 md:py-14 lg:py-10 xl:py-12">
      <div className="container-x grid lg:grid-cols-2 gap-10 xl:gap-14 items-stretch">
        <div className="about-tablet-image-frame rounded-2xl overflow-hidden shadow-[var(--shadow-card)] w-full h-full lg:min-h-[520px]">
          <img src={obs} alt="Alpine observation deck" loading="lazy" className="about-tablet-image w-full h-full object-cover aspect-[16/9] lg:aspect-auto" />
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-orange leading-snug">
            NATIVE CODE
          </h3>
          <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
            {t("about.subtitle")}
          </p>

          <div className="mt-5 text-sm font-bold tracking-[0.12em] text-orange">{t("about.event")}</div>
          <p className="mt-1.5 text-base md:text-lg font-bold text-navy leading-snug">
            {t("about.heading")}
          </p>

          <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
            {t("about.body")}
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-7">
            {features.map((f) => (
              <div key={f.k}>
                <div className="flex items-center gap-2.5">
                  <f.icon className="text-navy shrink-0" size={26} strokeWidth={1.5} />
                  <h4 className="text-sm font-bold tracking-[0.12em] text-orange">{t(`${f.k}.t`)}</h4>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(`${f.k}.b`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
