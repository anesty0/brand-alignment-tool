import obs from "@/assets/about-section.jpg";
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
    <section id="about" className="py-10 md:py-14 lg:py-10 xl:py-12">
      <div className="container-x grid lg:grid-cols-2 gap-10 xl:gap-14 items-start">
        <div className="about-tablet-image-frame rounded-2xl overflow-hidden shadow-[var(--shadow-card)] w-full">
          <img src={obs} alt="Alpine observation deck" loading="lazy" className="about-tablet-image w-full h-full object-cover aspect-[16/9] lg:aspect-[4/5]" />
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-navy leading-snug">
            <span className="text-orange">NATIVE CODE</span> {t("about.heading")}
          </h3>
          <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed">
            {t("about.body")}
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-7">
            {features.map((f) => (
              <div key={f.k}>
                <f.icon className="text-navy" size={26} strokeWidth={1.5} />
                <h4 className="mt-3 text-sm font-bold tracking-[0.12em] text-orange">{t(`${f.k}.t`)}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(`${f.k}.b`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
