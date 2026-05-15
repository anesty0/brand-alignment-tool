import d1 from "@/assets/day-1.jpg";
import d2 from "@/assets/day-2.jpg";
import d3 from "@/assets/day-3.jpg";
import d4 from "@/assets/day-4.jpg";
import d5 from "@/assets/day-5.jpg";
import d6 from "@/assets/day-6.jpg";
import { useI18n } from "@/lib/i18n";

const days = [
  { img: d1, k: "program.d1" },
  { img: d2, k: "program.d2" },
  { img: d3, k: "program.d3" },
  { img: d4, k: "program.d4" },
  { img: d5, k: "program.d5" },
  { img: d6, k: "program.d6" },
];

export function Program() {
  const { t } = useI18n();
  return (
    <section id="program" className="scroll-mt-24 md:scroll-mt-28 py-8 md:py-12 lg:py-8 xl:py-10 bg-secondary/40">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy">{t("program.title")}</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 md:gap-4">
          {days.map((day) => (
            <article key={day.k} className="bg-card rounded-xl overflow-hidden border border-border shadow-[var(--shadow-card)] hover:-translate-y-1 transition-transform duration-300 flex flex-col">
              <img src={day.img} alt={t(`${day.k}.title`)} loading="lazy" className="w-full h-28 object-cover" />
              <div className="p-3 text-[11px] leading-relaxed flex-1 flex flex-col">
                <div className="text-[10px] font-bold tracking-[0.18em] text-orange">{t(`${day.k}.date`)}</div>
                <h4 className="mt-1 text-sm font-bold text-navy leading-tight">{t(`${day.k}.title`)}</h4>
                <div className="mt-2.5">
                  <div className="font-bold text-navy tracking-wider text-[10px]">{t("program.morning")}</div>
                  <p className="mt-0.5 text-muted-foreground">{t(`${day.k}.morning`)}</p>
                </div>
                <div className="mt-2">
                  <div className="font-bold text-navy tracking-wider text-[10px]">{t("program.evening")}</div>
                  <p className="mt-0.5 text-muted-foreground">{t(`${day.k}.evening`)}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
