import h1 from "@/assets/hotel-1.jpg";
import h2 from "@/assets/hotel-2.jpg";
import h3 from "@/assets/hotel-3.jpg";
import { MessageCircle } from "lucide-react";

const hotels = [
  { tag: "В центре событий", name: "The SECRET 4*", price: "по запросу", img: h1 },
  { tag: "Возле подъёмника", name: "Hotel Stefan 4*", price: "1800€", img: h2 },
  { tag: "Спокойный вариант", name: "Park Hotel 3*", price: "1500€", img: h3 },
];

export function Hotels() {
  return (
    <section id="hotels" className="py-16 md:py-24">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy">РАЗМЕЩЕНИЕ В ТРЁХ ОТЕЛЯХ НА ВЫБОР</h3>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">условия для участников NATIVE CODE</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-[1fr_1fr_1fr_0.7fr] gap-6">
          {hotels.map((h) => (
            <article key={h.name} className="bg-card rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-shadow">
              <div className="relative">
                <img src={h.img} alt={h.name} loading="lazy" className="w-full h-44 md:h-52 object-cover" />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-md">
                  {h.tag}
                </span>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-navy">{h.name}</h4>
                <div className="mt-1 text-orange font-bold text-base">{h.price}</div>
                <div className="text-xs text-muted-foreground mt-0.5">за пакет / 5 ночей</div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <button className="text-xs font-semibold tracking-wide px-4 py-2.5 rounded-md border border-border text-navy hover:border-orange hover:text-orange transition">
                    Подробнее об отеле
                  </button>
                  <button className="text-xs font-semibold tracking-wide px-4 py-2.5 rounded-md bg-primary text-primary-foreground hover:brightness-110 transition">
                    Выбрать этот отель
                  </button>
                </div>
                <p className="mt-4 text-xs text-orange/90">включено участие в программе</p>
              </div>
            </article>
          ))}

          <div className="bg-card rounded-2xl border border-border shadow-[var(--shadow-card)] p-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-info font-semibold">
              <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-emerald-500/15 text-emerald-600">
                <MessageCircle size={18} />
              </span>
              Написать в WhatsApp
            </div>
            <p className="mt-3 text-sm font-semibold text-navy leading-snug">Поможем выбрать отель и ответим на все вопросы</p>
          </div>
        </div>
      </div>
    </section>
  );
}
