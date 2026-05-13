import { useState } from "react";
import h1 from "@/assets/hotel-1.jpg";
import h2 from "@/assets/hotel-2.jpg";
import h3 from "@/assets/hotel-3.jpg";
import { MessageCircle, MountainSnow, BedDouble, UtensilsCrossed, Flame, Wifi, Users } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type Hotel = {
  tag: string;
  name: string;
  price: string;
  img: string;
  description: string;
  features: { icon: React.ComponentType<{ size?: number; className?: string }>; text: string }[];
  gallery: string[];
};

const hotels: Hotel[] = [
  {
    tag: "В центре событий",
    name: "The SECRET 4*",
    price: "по запросу",
    img: h1,
    description:
      "Бутик-отель премиального уровня в самом сердце Зёльдена. Идеален для участников, которые ценят атмосферу, приватность и сервис высочайшего класса.",
    features: [
      { icon: MountainSnow, text: "В центре курорта, рядом со всеми локациями события" },
      { icon: BedDouble, text: "Просторные дизайнерские номера и сьюты" },
      { icon: UtensilsCrossed, text: "Авторская кухня и винная карта" },
      { icon: Flame, text: "Wellness-зона: сауна, паровая баня, зона отдыха" },
      { icon: Wifi, text: "Wi-Fi на всей территории отеля" },
      { icon: Users, text: "Идеально подходит для участников мероприятия" },
    ],
    gallery: [h1, h2, h3],
  },
  {
    tag: "Возле подъёмника",
    name: "Hotel Stefan 4*",
    price: "1800€",
    img: h2,
    description:
      "Уютный и современный отель в самом сердце Зёльдена. Идеальное расположение рядом с подъёмниками и центром курорта позволяет легко добраться до склонов и всех ключевых локаций события.",
    features: [
      { icon: MountainSnow, text: "3 минуты пешком до подъёмника Giggijochbahn" },
      { icon: BedDouble, text: "Комфортабельные номера в альпийском стиле" },
      { icon: UtensilsCrossed, text: "Ресторан с австрийской и интернациональной кухней" },
      { icon: Flame, text: "Wellness-зона: сауна, паровая баня, зона отдыха" },
      { icon: Wifi, text: "Wi-Fi на всей территории отеля" },
      { icon: Users, text: "Идеально подходит для участников мероприятия" },
    ],
    gallery: [h2, h1, h3],
  },
  {
    tag: "Спокойный вариант",
    name: "Park Hotel 3*",
    price: "1500€",
    img: h3,
    description:
      "Спокойный и уютный отель для тех, кто хочет совместить активный отдых с тишиной и расслабленной атмосферой после насыщенного дня в горах.",
    features: [
      { icon: MountainSnow, text: "5–7 минут до подъёмников курорта" },
      { icon: BedDouble, text: "Уютные номера с панорамным видом" },
      { icon: UtensilsCrossed, text: "Завтраки и ужины в ресторане отеля" },
      { icon: Flame, text: "Сауна и зона отдыха для гостей" },
      { icon: Wifi, text: "Бесплатный Wi-Fi во всех зонах" },
      { icon: Users, text: "Отличный вариант по соотношению цена/качество" },
    ],
    gallery: [h3, h2, h1],
  },
];

export function Hotels() {
  const [active, setActive] = useState<Hotel | null>(null);

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
                  <button
                    onClick={() => setActive(h)}
                    className="text-xs font-semibold tracking-wide px-4 py-2.5 rounded-md border border-border text-navy hover:border-orange hover:text-orange transition"
                  >
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

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-card sm:rounded-2xl">
          {active && (
            <div className="grid md:grid-cols-2 gap-0 max-h-[85vh] overflow-y-auto">
              {/* Left: details */}
              <div className="p-6 md:p-8">
                <h4 className="text-2xl md:text-3xl font-extrabold text-navy">{active.name}</h4>
                <div className="mt-2 text-orange font-extrabold text-2xl">{active.price}</div>
                <div className="text-xs text-muted-foreground">за пакет / за 5 ночей</div>

                <p className="mt-5 text-sm text-foreground/80 leading-relaxed">{active.description}</p>

                <ul className="mt-6 space-y-4">
                  {active.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-orange shrink-0 mt-0.5">
                        <f.icon size={20} />
                      </span>
                      <span className="text-sm text-navy leading-snug">{f.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: gallery + actions */}
              <div className="p-6 md:p-8 md:pl-0 flex flex-col">
                <img src={active.gallery[0]} alt={active.name} className="w-full h-64 md:h-80 object-cover rounded-xl" />
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {active.gallery.slice(0, 3).map((g, i) => (
                    <img key={i} src={g} alt="" className="w-full h-20 md:h-24 object-cover rounded-lg" />
                  ))}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-end">
                  <button
                    onClick={() => setActive(null)}
                    className="text-xs font-semibold tracking-wide px-6 py-3 rounded-md border border-border text-navy hover:border-orange hover:text-orange transition"
                  >
                    ЗАКРЫТЬ
                  </button>
                  <button className="text-xs font-semibold tracking-wide px-6 py-3 rounded-md bg-primary text-primary-foreground hover:brightness-110 transition">
                    ЗАБРОНИРОВАТЬ ВЫБРАННЫЙ ОТЕЛЬ
                  </button>
                </div>
                <p className="mt-2 text-[11px] text-muted-foreground text-right">
                  Вы будете перенаправлены на платформу бронирования
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
