import d1 from "@/assets/day-1.jpg";
import d2 from "@/assets/day-2.jpg";
import d3 from "@/assets/day-3.jpg";
import d4 from "@/assets/day-4.jpg";
import d5 from "@/assets/day-5.jpg";
import d6 from "@/assets/day-6.jpg";

const days = [
  { d: "1 ДЕКАБРЯ", img: d1, morning: "Прибытие, заселение, знакомство с программой", evening: "Welcome Drink & Sky Bar — первый вечер знакомства" },
  { d: "2 ДЕКАБРЯ", img: d2, morning: "Ски сафари с инструкторами (три группы по уровню катания)", evening: "Открытие NATIVE CODE и гала-ужин в THE SECRET — вечер, с которого всё начинается" },
  { d: "3 ДЕКАБРЯ", img: d3, morning: "Ски сафари с инструкторами (три группы по уровню катания)", evening: "ALPS CONNECT: конференция, ужин и дискотека" },
  { d: "4 ДЕКАБРЯ", img: d4, morning: "Катаем в своём ритме или поездка в Инсбрук", evening: "Прогулки по Зёльдену, шопинг и отдых в термах Aqua Dome" },
  { d: "5 ДЕКАБРЯ", img: d5, morning: "Катаем в своём ритме", evening: "Финальный ужин в австрийском стиле, вручение призов и дискотека" },
  { d: "6 ДЕКАБРЯ", img: d6, morning: "Выезд из отеля, трансфер и дорога домой", evening: "Дорога домой и те самые кадры, к которым ещё не раз вернёшься" },
];

export function Program() {
  return (
    <section id="program" className="py-8 md:py-12 bg-secondary/40">
      <div className="container-x">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-5">
          {days.map((day) => (
            <article key={day.d} className="bg-card rounded-xl overflow-hidden border border-border shadow-[var(--shadow-card)] hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-card px-4 pt-4 pb-3 text-center">
                <div className="text-[11px] font-bold tracking-[0.18em] text-orange">{day.d}</div>
              </div>
              <img src={day.img} alt={day.d} loading="lazy" className="w-full h-36 object-cover" />
              <div className="p-4 text-xs leading-relaxed">
                <div className="font-bold text-navy tracking-wider">УТРО:</div>
                <p className="mt-1 text-muted-foreground">{day.morning}</p>
                <div className="mt-3 font-bold text-navy tracking-wider">ВЕЧЕР:</div>
                <p className="mt-1 text-muted-foreground">{day.evening}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
