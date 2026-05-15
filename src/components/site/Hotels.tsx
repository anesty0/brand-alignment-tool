import { useState } from "react";

import ganzMain from "@/assets/ganz-main.jpeg";
import ganz1 from "@/assets/ganz-1.jpeg";
import ganz2 from "@/assets/ganz-2.jpeg";
import secretMain from "@/assets/secret-main.jpeg";
import secret1 from "@/assets/secret-1.webp";
import secret2 from "@/assets/secret-2.webp";
import parkMain from "@/assets/parkhotel-main.png";
import park1 from "@/assets/parkhotel-1.png";
import park2 from "@/assets/parkhotel-2.png";
import { MessageCircle, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useI18n } from "@/lib/i18n";

type Section = { titleRu: string; titleEn: string; itemsRu: string[]; itemsEn: string[] };

type Hotel = {
  tagRu: string; tagEn: string;
  name: string;
  price: string;
  img: string;
  introRu: string; introEn: string;
  sections: Section[];
  gallery: string[];
  bookUrl?: string;
};

const hotels: Hotel[] = [
  {
    tagRu: "В центре событий", tagEn: "In the heart of it",
    name: "GLANZ & GLORY 4★",
    price: "1800€",
    img: ganzMain,
    introRu:
      "Атмосферный отель в традиционном альпийском стиле, где сочетаются тирольское гостеприимство и комфорт зимнего отдыха в Зёльдене.",
    introEn:
      "An atmospheric hotel in classic alpine style, blending Tyrolean hospitality with the comfort of a winter stay in Sölden.",
    sections: [
      {
        titleRu: "ЧТО ВАЖНО", titleEn: "WHAT MATTERS",
        itemsRu: [
          "50 метров до подъёмника",
          "можно спуститься на лыжах к отелю",
          "wellness & sauna",
          "отличные завтраки",
          "ресторан и бар для уютных вечеров после катания",
        ],
        itemsEn: [
          "50 metres to the lift",
          "ski-in access to the hotel",
          "wellness & sauna",
          "excellent breakfasts",
          "restaurant and bar for cosy evenings after the slopes",
        ],
      },
      {
        titleRu: "В НОМЕРАХ", titleEn: "IN THE ROOMS",
        itemsRu: [
          "просторные комнаты",
          "тёплые интерьеры в альпийском стиле",
          "халаты, телевизор, фен и всё необходимое для комфортного отдыха",
        ],
        itemsEn: [
          "spacious rooms",
          "warm alpine-style interiors",
          "bathrobes, TV, hairdryer and everything you need for a comfortable stay",
        ],
      },
      {
        titleRu: "ВКЛЮЧЕНО", titleEn: "INCLUDED",
        itemsRu: ["5 ночей", "завтраки", "участие в программе NATIVE CODE"],
        itemsEn: ["5 nights", "breakfasts", "participation in the NATIVE CODE programme"],
      },
    ],
    gallery: [ganzMain, ganz1, ganz2],
  },
  {
    tagRu: "Премиальный выбор", tagEn: "Premium choice",
    name: "THE SECRET SÖLDEN 4★",
    price: "1800€",
    img: secretMain,
    introRu:
      "Современный дизайнерский отель в центре Зёльдена с атмосферой альпийского клуба, стильным SPA и просторными сьютами для комфортного отдыха в компании.",
    introEn:
      "A modern designer hotel in central Sölden with an alpine-club atmosphere, stylish SPA and spacious suites for a comfortable stay with friends.",
    sections: [
      {
        titleRu: "ЧТО ВАЖНО", titleEn: "WHAT MATTERS",
        itemsRu: [
          "центр Зёльдена",
          "рядом рестораны, бары и après-ski",
          "стильное SPA-пространство",
          "все номера — дизайнерские сьюты с 1, 2 или 3 спальнями",
        ],
        itemsEn: [
          "central Sölden",
          "restaurants, bars and après-ski nearby",
          "stylish SPA space",
          "all rooms are designer suites with 1, 2 or 3 bedrooms",
        ],
      },
      {
        titleRu: "В НОМЕРАХ", titleEn: "IN THE ROOMS",
        itemsRu: [
          "просторные сьюты от 50 до 155 м²",
          "отдельные гостиные и обеденные зоны",
          "кухни и большие террасы",
          "премиальные материалы и современный альпийский дизайн",
          "некоторые сьюты — с собственной инфракрасной кабиной",
        ],
        itemsEn: [
          "spacious suites from 50 to 155 m²",
          "separate living and dining areas",
          "kitchens and large terraces",
          "premium materials and modern alpine design",
          "some suites with their own infrared cabin",
        ],
      },
      {
        titleRu: "ВКЛЮЧЕНО", titleEn: "INCLUDED",
        itemsRu: ["5 ночей", "завтраки", "участие в программе NATIVE CODE"],
        itemsEn: ["5 nights", "breakfasts", "participation in the NATIVE CODE programme"],
      },
    ],
    gallery: [secretMain, secret1, secret2],
  },
  {
    tagRu: "Спокойный вариант", tagEn: "The quiet option",
    name: "PARK HOTEL SÖLDEN 3★",
    price: "1500€",
    img: parkMain,
    introRu:
      "Уютный отель в центре Зёльдена с расслабленной альпийской атмосферой, хорошей велнес-зоной с саунами и удобным расположением.",
    introEn:
      "A cosy hotel in central Sölden with a relaxed alpine atmosphere, a good wellness area with saunas and a convenient location.",
    sections: [
      {
        titleRu: "ЧТО ВАЖНО", titleEn: "WHAT MATTERS",
        itemsRu: [
          "5 минут до подъёмника",
          "отличные завтраки",
          "спокойная атмосфера",
          "центр Зёльдена и рестораны рядом",
        ],
        itemsEn: [
          "5 minutes to the lift",
          "excellent breakfasts",
          "calm atmosphere",
          "central Sölden and restaurants nearby",
        ],
      },
      {
        titleRu: "В НОМЕРАХ", titleEn: "IN THE ROOMS",
        itemsRu: [
          "светлые комнаты",
          "интерьеры в альпийском стиле",
          "всё необходимое для комфортного отдыха",
        ],
        itemsEn: [
          "bright rooms",
          "alpine-style interiors",
          "everything you need for a comfortable stay",
        ],
      },
      {
        titleRu: "ВКЛЮЧЕНО", titleEn: "INCLUDED",
        itemsRu: ["5 ночей", "завтраки", "участие в программе NATIVE CODE"],
        itemsEn: ["5 nights", "breakfasts", "participation in the NATIVE CODE programme"],
      },
    ],
    gallery: [parkMain, park1, park2],
  },
];

export function Hotels() {
  const [active, setActive] = useState<Hotel | null>(null);
  const [galleryIdx, setGalleryIdx] = useState(0);
  const { t, lang } = useI18n();

  const openHotel = (h: Hotel) => { setActive(h); setGalleryIdx(0); };

  return (
    <section id="hotels" className="py-10 md:py-14 lg:py-10 xl:py-12">
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

          <div className="bg-card rounded-2xl border border-border shadow-[var(--shadow-card)] p-5 flex flex-col justify-center gap-3 self-center lg:max-w-[240px] lg:w-fit">
            <a href="https://wa.me/79255895239" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 text-info font-semibold whitespace-nowrap text-sm">
              <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-emerald-500/15 text-emerald-600 shrink-0">
                <MessageCircle size={16} />
              </span>
              {t("hero.whatsapp")}
            </a>
            <p className="text-xs font-semibold text-navy leading-snug">{t("hotels.help")}</p>
          </div>
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-6xl h-auto max-h-[90dvh] p-0 overflow-y-auto md:overflow-hidden bg-card sm:rounded-2xl">
          {active && (
            <div className="grid h-full min-h-0 md:grid-cols-[1fr_1.1fr] gap-0">
              {/* Left: details */}
              <div className="order-2 md:order-1 flex min-h-0 flex-col md:overflow-hidden">
                <div className="shrink-0 px-6 md:px-8 pt-6 md:pt-8">
                  <h4 className="text-2xl md:text-3xl font-extrabold text-navy">{active.name}</h4>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-orange font-extrabold text-2xl">{active.price}</span>
                    <span className="text-xs font-normal text-muted-foreground/80">{t("hotels.perPerson")}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">{t("hotels.perPackage")}</div>
                </div>

                <div className="hotel-scroll mt-5 min-h-0 flex-1 md:max-h-[360px] md:overflow-y-auto px-6 pr-4 md:px-8 md:pr-5">
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {lang === "ru" ? active.introRu : active.introEn}
                  </p>
                  {active.sections.map((s, si) => (
                    <div key={si} className="mt-6">
                      <div className="text-[11px] font-semibold tracking-[0.18em] text-orange">
                        {lang === "ru" ? s.titleRu : s.titleEn}
                      </div>
                      <ul className="mt-3 space-y-2">
                        {(lang === "ru" ? s.itemsRu : s.itemsEn).map((it, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-navy leading-snug">
                            <span className="mt-2 h-1 w-1 rounded-full bg-orange shrink-0" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="h-2" />
                </div>

                <div className="shrink-0 px-6 md:px-8 py-5 md:py-6 border-t border-border/60 bg-card flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 text-xs font-semibold tracking-wide px-5 py-3.5 rounded-md bg-primary text-primary-foreground hover:brightness-110 transition">
                    {t("hotels.bookOnline")}
                  </button>
                  <a href="https://wa.me/79255895239" target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-wide px-5 py-3.5 rounded-md bg-navy text-white hover:brightness-125 transition">
                    <MessageCircle size={14} /> {t("hotels.bookConsultant")}
                  </a>
                </div>
              </div>

              {/* Right: gallery */}
              <div className="relative order-1 md:order-2 min-h-0 overflow-hidden bg-secondary/40">
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
