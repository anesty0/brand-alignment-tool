import { useState } from "react";
import h1 from "@/assets/hotel-1.jpg";
import h2 from "@/assets/hotel-2.jpg";
import h3 from "@/assets/hotel-3.jpg";
import { MessageCircle, MountainSnow, BedDouble, UtensilsCrossed, Flame, Wifi, Users, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useI18n } from "@/lib/i18n";

type Hotel = {
  tagRu: string; tagEn: string;
  name: string;
  price: string;
  img: string;
  descRu: string; descEn: string;
  features: { icon: React.ComponentType<{ size?: number; className?: string }>; ru: string; en: string }[];
  gallery: string[];
};

const hotels: Hotel[] = [
  {
    tagRu: "В центре событий", tagEn: "In the heart of it",
    name: "The SECRET 4*",
    price: "1800€",
    img: h1,
    descRu: "Бутик-отель премиального уровня в самом сердце Зёльдена. Идеален для участников, которые ценят атмосферу, приватность и сервис высочайшего класса.",
    descEn: "A premium boutique hotel in the heart of Sölden. Ideal for guests who value atmosphere, privacy and top-class service.",
    features: [
      { icon: MountainSnow, ru: "В центре курорта, рядом со всеми локациями события", en: "Resort centre, close to all event locations" },
      { icon: BedDouble, ru: "Просторные дизайнерские номера и сьюты", en: "Spacious designer rooms and suites" },
      { icon: UtensilsCrossed, ru: "Авторская кухня и винная карта", en: "Signature cuisine and wine list" },
      { icon: Flame, ru: "Wellness-зона: сауна, паровая, отдых", en: "Wellness: sauna, steam room, lounge" },
      { icon: Wifi, ru: "Wi-Fi на всей территории отеля", en: "Wi-Fi throughout the hotel" },
      { icon: Users, ru: "Идеально подходит для участников мероприятия", en: "Perfect for event participants" },
    ],
    gallery: [h1, h2, h3],
  },
  {
    tagRu: "Возле подъёмника", tagEn: "Next to the lift",
    name: "Hotel Stefan 4*",
    price: "1800€",
    img: h2,
    descRu: "Уютный и современный отель в самом сердце Зёльдена. Идеальное расположение рядом с подъёмниками и центром курорта.",
    descEn: "A cosy modern hotel in central Sölden. Steps away from the lifts and the resort centre.",
    features: [
      { icon: MountainSnow, ru: "3 минуты пешком до Giggijochbahn", en: "3 min walk to Giggijochbahn lift" },
      { icon: BedDouble, ru: "Комфортабельные номера в альпийском стиле", en: "Comfortable alpine-style rooms" },
      { icon: UtensilsCrossed, ru: "Австрийская и интернациональная кухня", en: "Austrian and international cuisine" },
      { icon: Flame, ru: "Wellness-зона: сауна, паровая, отдых", en: "Wellness: sauna, steam room, lounge" },
      { icon: Wifi, ru: "Wi-Fi на всей территории отеля", en: "Wi-Fi throughout the hotel" },
      { icon: Users, ru: "Идеально подходит для участников", en: "Perfect for participants" },
    ],
    gallery: [h2, h1, h3],
  },
  {
    tagRu: "Спокойный вариант", tagEn: "The quiet option",
    name: "Park Hotel 3*",
    price: "1500€",
    img: h3,
    descRu: "Спокойный и уютный отель для тех, кто хочет совместить активный отдых с тишиной и расслабленной атмосферой после насыщенного дня в горах.",
    descEn: "A calm and cosy hotel for those who want to combine active days with a relaxed atmosphere.",
    features: [
      { icon: MountainSnow, ru: "5–7 минут до подъёмников курорта", en: "5–7 min to the lifts" },
      { icon: BedDouble, ru: "Уютные номера с панорамным видом", en: "Cosy rooms with panoramic views" },
      { icon: UtensilsCrossed, ru: "Завтраки и ужины в ресторане отеля", en: "Breakfast and dinner at the hotel" },
      { icon: Flame, ru: "Сауна и зона отдыха для гостей", en: "Sauna and relaxation area" },
      { icon: Wifi, ru: "Бесплатный Wi-Fi во всех зонах", en: "Free Wi-Fi everywhere" },
      { icon: Users, ru: "Лучшее соотношение цена/качество", en: "Best value for money" },
    ],
    gallery: [h3, h2, h1],
  },
];

export function Hotels() {
  const [active, setActive] = useState<Hotel | null>(null);
  const [galleryIdx, setGalleryIdx] = useState(0);
  const { t, lang } = useI18n();

  const openHotel = (h: Hotel) => { setActive(h); setGalleryIdx(0); };

  return (
    <section id="hotels" className="py-10 md:py-14">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy">{t("hotels.title")}</h3>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">{t("hotels.sub")}</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-[1fr_1fr_1fr_auto] gap-6">
          {hotels.map((h) => (
            <article key={h.name} className="bg-card rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-shadow flex flex-col">
              <div className="relative">
                <img src={h.img} alt={h.name} loading="lazy" className="w-full h-44 md:h-52 object-cover" />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-md">
                  {lang === "ru" ? h.tagRu : h.tagEn}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h4 className="text-lg font-bold text-navy">{h.name}</h4>
                <div className="mt-1 flex items-baseline gap-1.5">
                  <span className="text-orange font-bold text-base">{h.price}</span>
                  <span className="text-[11px] font-normal text-muted-foreground/80">{t("hotels.perPerson")}</span>
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">{t("hotels.perPackage")}</div>
                <div className="mt-5 flex flex-wrap gap-2 mt-auto pt-4">
                  <button
                    onClick={() => openHotel(h)}
                    className="text-xs font-semibold tracking-wide px-4 py-2.5 rounded-md border border-border text-navy hover:border-orange hover:text-orange transition"
                  >
                    {t("hotels.more")}
                  </button>
                  <button className="text-xs font-semibold tracking-wide px-4 py-2.5 rounded-md bg-primary text-primary-foreground hover:brightness-110 transition">
                    {t("hotels.choose")}
                  </button>
                </div>
                <p className="mt-4 text-xs text-orange/90">{t("hotels.included")}</p>
              </div>
            </article>
          ))}

          <div className="bg-card rounded-2xl border border-border shadow-[var(--shadow-card)] px-5 py-4 flex flex-col justify-center gap-2 self-center lg:max-w-[230px] lg:w-fit">
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-info font-semibold whitespace-nowrap text-sm">
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-emerald-500/15 text-emerald-600 shrink-0">
                <MessageCircle size={16} />
              </span>
              {t("hero.whatsapp")}
            </a>
            <p className="text-xs font-semibold text-navy leading-snug">{t("hotels.help")}</p>
          </div>
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-6xl p-0 overflow-hidden bg-card sm:rounded-2xl">
          {active && (
            <div className="grid md:grid-cols-[1fr_1.1fr] gap-0 max-h-[90vh] overflow-y-auto">
              {/* Left: details */}
              <div className="p-6 md:p-8 order-2 md:order-1">
                <h4 className="text-2xl md:text-3xl font-extrabold text-navy">{active.name}</h4>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-orange font-extrabold text-2xl">{active.price}</span>
                  <span className="text-xs font-normal text-muted-foreground/80">{t("hotels.perPerson")}</span>
                </div>
                <div className="text-xs text-muted-foreground">{t("hotels.perPackage")}</div>

                <p className="mt-5 text-sm text-foreground/80 leading-relaxed">
                  {lang === "ru" ? active.descRu : active.descEn}
                </p>

                <ul className="mt-6 space-y-3.5">
                  {active.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-orange shrink-0 mt-0.5"><f.icon size={18} /></span>
                      <span className="text-sm text-navy leading-snug">{lang === "ru" ? f.ru : f.en}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 text-xs font-semibold tracking-wide px-5 py-3.5 rounded-md bg-primary text-primary-foreground hover:brightness-110 transition">
                    {t("hotels.bookOnline")}
                  </button>
                  <a href="https://wa.me/" target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-wide px-5 py-3.5 rounded-md bg-navy text-white hover:brightness-125 transition">
                    <MessageCircle size={14} /> {t("hotels.bookConsultant")}
                  </a>
                </div>
              </div>

              {/* Right: gallery */}
              <div className="relative order-1 md:order-2 bg-secondary/40">
                <button
                  onClick={() => setActive(null)}
                  aria-label={t("hotels.close")}
                  className="absolute top-4 right-4 z-10 inline-flex items-center justify-center h-9 w-9 rounded-full bg-background/85 backdrop-blur border border-border text-navy hover:text-orange transition"
                >
                  <X size={16} />
                </button>
                <img src={active.gallery[galleryIdx]} alt={active.name} className="w-full h-72 md:h-[460px] object-cover" />
                <div className="p-4 md:p-5 grid grid-cols-3 gap-3">
                  {active.gallery.map((g, i) => (
                    <button
                      key={i}
                      onClick={() => setGalleryIdx(i)}
                      className={`overflow-hidden rounded-lg border-2 transition ${i === galleryIdx ? "border-orange" : "border-transparent hover:border-border"}`}
                    >
                      <img src={g} alt="" className="w-full h-20 md:h-24 object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
