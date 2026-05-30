import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Coffee, Users, Maximize2, Zap, MessageCircle, X } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useI18n } from "@/lib/i18n";
import secretMain from "@/assets/secret-main.webp";
import studioDesign1 from "@/assets/secret/studio-design-1.webp";
import studioDesign2 from "@/assets/secret/studio-design-2.webp";
import suiteAlpine1 from "@/assets/secret/suite-alpine-1.webp";
import suiteAlpine2 from "@/assets/secret/suite-alpine-2.webp";
import comfortDesign1 from "@/assets/secret/comfort-design-1.webp";
import comfortDesign2 from "@/assets/secret/comfort-design-2.webp";
import comfortAlpine1 from "@/assets/secret/comfort-alpine-1.webp";
import comfortAlpine2 from "@/assets/secret/comfort-alpine-2.webp";
import superiorAlpine1 from "@/assets/secret/superior-alpine-1.webp";
import superiorFamily1 from "@/assets/secret/superior-family-1.webp";
import superiorFamily2 from "@/assets/secret/superior-family-2.webp";
import deluxeAlpine1 from "@/assets/secret/deluxe-alpine-1.webp";
import deluxeAlpine2 from "@/assets/secret/deluxe-alpine-2.webp";
import deluxeFamily1 from "@/assets/secret/deluxe-family-1.webp";
import deluxeFamily2 from "@/assets/secret/deluxe-family-2.webp";
import premium1 from "@/assets/secret/premium-1.webp";
import premium2 from "@/assets/secret/premium-2.webp";

export const Route = createFileRoute("/secret-solden")({
  component: SecretSoldenPage,
});

type PriceTier = {
  guestsKey: string;
  price: number;
  perPerson: boolean;
  bookUrl: string;
};

type Suite = {
  name: string;
  size: string;
  occupancyRu: string;
  occupancyEn: string;
  descriptionRu: string;
  descriptionEn: string;
  images: [string, string];
  prices: PriceTier[];
};

const suites: Suite[] = [
  {
    name: "STUDIO DESIGN · Open Space",
    size: "35–40 м²",
    occupancyRu: "Максимальное размещение: 1 или 2 гостя",
    occupancyEn: "Maximum occupancy: 1 or 2 guests",
    descriptionRu:
      "Open-space сьют с объединенной зоной спальни и гостиной, кухней и обеденной зоной.",
    descriptionEn:
      "An open-space suite with a combined bedroom and living area, kitchen and dining area.",
    images: [studioDesign1, studioDesign2],
    prices: [
      { guestsKey: "secret.guests1", price: 3100, perPerson: true, bookUrl: "https://ski4u.com/special-offers/2026_nc_178" },
      { guestsKey: "secret.guests2", price: 2200, perPerson: true, bookUrl: "https://ski4u.com/special-offers/2026_nc_180" },
    ],
  },
  {
    name: "SUITE ALPINE · 1 Bedroom",
    size: "40–45 м²",
    occupancyRu: "Максимальное размещение: до 3 гостей",
    occupancyEn: "Maximum occupancy: up to 3 guests",
    descriptionRu:
      "Сьют с 1 спальней, отдельной гостиной зоной, кухней и видом на горы.",
    descriptionEn:
      "A suite with 1 bedroom, a separate living area, kitchen and mountain views.",
    images: [suiteAlpine1, suiteAlpine2],
    prices: [
      { guestsKey: "secret.guests1", price: 3100, perPerson: true, bookUrl: "https://ski4u.com/special-offers/2026_nc_183" },
      { guestsKey: "secret.guests2", price: 2200, perPerson: true, bookUrl: "https://ski4u.com/special-offers/2026_nc_184" },
      { guestsKey: "secret.guests3", price: 1800, perPerson: true, bookUrl: "https://ski4u.com/special-offers/2026_nc_185" },
    ],
  },
  {
    name: "COMFORT SUITE DESIGN · 2 Bedrooms",
    size: "64–68 м²",
    occupancyRu: "Максимальное размещение: до 4 гостей",
    occupancyEn: "Maximum occupancy: up to 4 guests",
    descriptionRu:
      "Сьют с 2 спальнями, гостиной зоной, кухней, обеденной зоной и 2 санузлами. Интерьер в современном дизайнерском стиле.",
    descriptionEn:
      "A suite with 2 bedrooms, a living area, kitchen, dining area and 2 bathrooms. Modern designer interior.",
    images: [comfortDesign1, comfortDesign2],
    prices: [
      { guestsKey: "secret.guests2", price: 2600, perPerson: true, bookUrl: "https://ski4u.com/special-offers/2026_nc_186" },
      { guestsKey: "secret.guests3", price: 2200, perPerson: true, bookUrl: "https://ski4u.com/special-offers/2026_nc_187" },
      { guestsKey: "secret.guests4", price: 1900, perPerson: true, bookUrl: "https://ski4u.com/special-offers/2026_nc_182" },
    ],
  },
  {
    name: "COMFORT SUITE ALPINE · 2 Bedrooms",
    size: "64–68 м²",
    occupancyRu: "Максимальное размещение: до 4 гостей",
    occupancyEn: "Maximum occupancy: up to 4 guests",
    descriptionRu:
      "Сьют с 2 спальнями, гостиной зоной, кухней, обеденной зоной и 2 санузлами. Интерьер в альпийском стиле.",
    descriptionEn:
      "A suite with 2 bedrooms, a living area, kitchen, dining area and 2 bathrooms. Alpine-style interior.",
    images: [comfortAlpine1, comfortAlpine2],
    prices: [
      { guestsKey: "secret.guests2", price: 2600, perPerson: true, bookUrl: "https://ski4u.com/special-offers/2026_nc_188" },
      { guestsKey: "secret.guests3", price: 2200, perPerson: true, bookUrl: "https://ski4u.com/special-offers/2026_nc_189" },
      { guestsKey: "secret.guests4", price: 1900, perPerson: true, bookUrl: "https://ski4u.com/special-offers/2026_nc_190" },
    ],
  },
  {
    name: "SUPERIOR SUITE ALPINE · 2 Bedrooms",
    size: "90 м²",
    occupancyRu: "Максимальное размещение: до 6 гостей",
    occupancyEn: "Maximum occupancy: up to 6 guests",
    descriptionRu:
      "Просторный сьют с 2 спальнями, большой гостиной зоной, кухней, обеденной зоной, 2 санузлами и террасой.",
    descriptionEn:
      "A spacious suite with 2 bedrooms, a large living area, kitchen, dining area, 2 bathrooms and a terrace.",
    images: [superiorAlpine1, superiorAlpine1],
    prices: [
      { guestsKey: "secret.guests2", price: 2700, perPerson: true, bookUrl: "https://ski4u.com/special-offers/2026_nc_191" },
      { guestsKey: "secret.guests3", price: 2300, perPerson: true, bookUrl: "https://ski4u.com/special-offers/2026_nc_192" },
      { guestsKey: "secret.guests4", price: 2000, perPerson: true, bookUrl: "https://ski4u.com/special-offers/2026_nc_193" },
    ],
  },
  {
    name: "SUPERIOR FAMILY SUITE ALPINE · 3 Bedrooms",
    size: "100 м²",
    occupancyRu: "Максимальное размещение: до 8 гостей",
    occupancyEn: "Maximum occupancy: up to 8 guests",
    descriptionRu:
      "Просторный семейный сьют с 3 спальнями, включая детскую комнату с двухъярусной кроватью, гостиной, 2 санузлами, кухней, обеденной зоной и террасой или балконом.",
    descriptionEn:
      "A spacious family suite with 3 bedrooms, including a children's room with a bunk bed, living area, 2 bathrooms, kitchen, dining area and a terrace or balcony.",
    images: [superiorFamily1, superiorFamily2],
    prices: [
      { guestsKey: "secret.guests3", price: 2400, perPerson: true, bookUrl: "https://ski4u.com/special-offers/2026_nc_194" },
      { guestsKey: "secret.guests4", price: 2000, perPerson: true, bookUrl: "https://ski4u.com/special-offers/2026_nc_195" },
      { guestsKey: "secret.guests6", price: 1800, perPerson: true, bookUrl: "https://ski4u.com/special-offers/2026_nc_196" },
    ],
  },
  {
    name: "DELUXE SUITE ALPINE · 3 Bedrooms",
    size: "90 м²",
    occupancyRu: "Максимальное размещение: до 8 гостей",
    occupancyEn: "Maximum occupancy: up to 8 guests",
    descriptionRu:
      "Дизайнерский сьют с 3 спальнями, гостиной, 2 санузлами, кухней и балконом или террасой.",
    descriptionEn:
      "A designer suite with 3 bedrooms, a living area, 2 bathrooms, kitchen and a balcony or terrace.",
    images: [deluxeAlpine1, deluxeAlpine2],
    prices: [
      { guestsKey: "secret.guests3", price: 2800, perPerson: true, bookUrl: "https://ski4u.com/special-offers/2026_nc_197" },
      { guestsKey: "secret.guests4", price: 2400, perPerson: true, bookUrl: "https://ski4u.com/special-offers/2026_nc_198" },
      { guestsKey: "secret.guests6", price: 2000, perPerson: true, bookUrl: "https://ski4u.com/special-offers/2026_nc_199" },
    ],
  },
  {
    name: "DELUXE FAMILY SUITE ALPINE · 4 Bedrooms",
    size: "120 м²",
    occupancyRu: "Максимальное размещение: до 8 гостей",
    occupancyEn: "Maximum occupancy: up to 8 guests",
    descriptionRu:
      "Большой семейный сьют с 4 спальнями, 3 санузлами, просторной гостиной, кухней, обеденной зоной и террасой. Одна из спален оборудована двухъярусной кроватью.",
    descriptionEn:
      "A large family suite with 4 bedrooms, 3 bathrooms, a spacious living area, kitchen, dining area and a terrace. One bedroom features a bunk bed.",
    images: [deluxeFamily1, deluxeFamily2],
    prices: [
      { guestsKey: "secret.guests4", price: 2600, perPerson: true, bookUrl: "https://ski4u.com/special-offers/2026_nc_200" },
      { guestsKey: "secret.guests6", price: 2100, perPerson: true, bookUrl: "https://ski4u.com/special-offers/2026_nc_201" },
      { guestsKey: "secret.guests8", price: 1800, perPerson: true, bookUrl: "https://ski4u.com/special-offers/2026_nc_202" },
    ],
  },
  {
    name: "PREMIUM SUITE ALPINE · 3 Bedrooms",
    size: "155 м²",
    occupancyRu: "Максимальное размещение: до 8 гостей",
    occupancyEn: "Maximum occupancy: up to 8 guests",
    descriptionRu:
      "Самый большой сьют курорта с 3 спальнями, просторной гостиной, 3 санузлами, полноценной кухней, ванной, инфракрасной кабиной для двух человек и балконом или террасой с видом на горы.",
    descriptionEn:
      "The resort's largest suite, with 3 bedrooms, a spacious living area, 3 bathrooms, a full kitchen, bathroom, an infrared cabin for two and a balcony or terrace with mountain views.",
    images: [premium1, premium2],
    prices: [
      { guestsKey: "secret.guests2", price: 4500, perPerson: true, bookUrl: "https://ski4u.com/special-offers/2026_nc_203" },
      { guestsKey: "secret.guests3", price: 3500, perPerson: true, bookUrl: "https://ski4u.com/special-offers/2026_nc_204" },
      { guestsKey: "secret.guests6", price: 2400, perPerson: true, bookUrl: "https://ski4u.com/special-offers/2026_nc_205" },
    ],
  },
];

function SecretSoldenPage() {
  const { t, lang } = useI18n();
  const isRu = lang === "ru";
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    document.title = isRu
      ? "THE SECRET SÖLDEN - Native Code"
      : "THE SECRET SÖLDEN - Native Code";
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [isRu]);

  useEffect(() => {
    if (!lightboxImg) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImg(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxImg]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <img src={secretMain} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/30" />
        </div>

        <div className="relative container-x pt-6 md:pt-8">
          <a
            href="/#hotels"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide text-white/85 hover:text-orange transition"
          >
            <ArrowLeft size={16} /> {t("secret.back")}
          </a>
        </div>

        <div className="relative container-x pt-8 md:pt-12 pb-10 md:pb-14">
          <div className="max-w-2xl">
            <h1 className="font-extrabold tracking-tight leading-[0.95] text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase">
              THE SECRET<br />SÖLDEN
            </h1>
            <div className="mt-5 text-lg md:text-xl font-bold tracking-tight">
              {t("secret.dates")}
            </div>
            <p className="mt-5 text-sm md:text-base text-white/80 max-w-lg leading-relaxed">
              {t("secret.heroIntro")}
            </p>
          </div>
        </div>

        {/* Pills band */}
        <div className="relative container-x pb-8 md:pb-10">
          <div className="rounded-2xl bg-navy/85 backdrop-blur border border-white/10 p-4 md:p-5 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <PillItem icon={<Calendar size={20} className="text-orange" />} label={t("secret.pill1")} />
            <PillItem icon={<Coffee size={20} className="text-orange" />} label={t("secret.pill2")} />
            <PillItem icon={<Users size={20} className="text-orange" />} label={t("secret.pill3")} />
          </div>
        </div>
      </section>

      {/* Section title */}
      <section className="pt-10 md:pt-14">
        <div className="container-x text-center max-w-3xl mx-auto">
          <h2 className="text-base md:text-lg lg:text-xl font-bold tracking-tight text-navy leading-snug">
            {t("secret.sectionTitle")}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {t("secret.sectionSub")}
          </p>
        </div>
      </section>

      {/* Suite cards */}
      <section className="py-8 md:py-10">
        <div className="container-x space-y-5 md:space-y-6 lg:space-y-12">
          {suites.map((s) => (
            <SuiteCard
              key={s.name}
              suite={s}
              isRu={isRu}
              t={t}
              onImageClick={setLightboxImg}
            />
          ))}
        </div>
      </section>

      {/* Bottom CTA band */}
      <section className="pb-12 md:pb-16">
        <div className="container-x grid md:grid-cols-2 gap-4 md:gap-5">
          <div className="bg-card border border-border rounded-2xl p-5 md:p-6 flex items-start gap-4 shadow-[var(--shadow-card)]">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-soft text-orange shrink-0">
              <Calendar size={20} />
            </span>
            <div className="min-w-0">
              <div className="text-sm md:text-base font-bold text-navy leading-tight">
                {t("secret.guarantee.t")}
              </div>
              <p className="mt-1 text-xs md:text-sm text-muted-foreground">
                {t("secret.guarantee.b")}
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/306972801776"
            target="_blank"
            rel="noreferrer"
            className="bg-navy text-white rounded-2xl p-5 md:p-6 flex items-start gap-4 hover:brightness-110 transition shadow-[var(--shadow-card)]"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white shrink-0">
              <MessageCircle size={20} />
            </span>
            <div className="min-w-0">
              <div className="text-sm md:text-base font-bold leading-tight">
                {t("secret.consultant.t")}
              </div>
              <p className="mt-1 text-xs md:text-sm text-white/75">
                {t("secret.consultant.b")}
              </p>
            </div>
          </a>
        </div>
      </section>

      <Footer />

      {lightboxImg && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t("hotels.close")}
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-150"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxImg(null);
            }}
            aria-label={t("hotels.close")}
            className="absolute top-4 right-4 md:top-6 md:right-6 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <X size={20} />
          </button>
          <img
            src={lightboxImg}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[95vw] md:max-w-[90vw] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </main>
  );
}

function PillItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 text-white">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/8 border border-white/10 shrink-0">
        {icon}
      </span>
      <span className="text-sm md:text-[15px] font-semibold tracking-tight">{label}</span>
    </div>
  );
}

function SuiteCard({
  suite,
  isRu,
  t,
  onImageClick,
}: {
  suite: Suite;
  isRu: boolean;
  t: (k: string) => string;
  onImageClick: (src: string) => void;
}) {
  return (
    <article className="bg-card border border-border rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-shadow overflow-hidden lg:bg-transparent lg:border-0 lg:rounded-none lg:shadow-none lg:hover:shadow-none lg:overflow-visible">
      <div className="grid lg:grid-cols-[minmax(440px,42%)_1fr_300px] gap-0 lg:gap-6 xl:gap-8 lg:items-stretch">
        {/* Images */}
        <div className="grid grid-cols-2 gap-2 lg:gap-3 p-3 lg:p-0">
          {suite.images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onImageClick(img)}
              aria-label={suite.name}
              className="block w-full h-full p-0 m-0 border-0 bg-transparent cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded-lg lg:rounded-xl overflow-hidden"
            >
              <img
                src={img}
                alt={suite.name}
                loading="lazy"
                className="w-full h-32 sm:h-40 lg:h-full lg:min-h-[210px] object-cover rounded-lg lg:rounded-xl transition-transform duration-500 hover:scale-[1.02]"
              />
            </button>
          ))}
        </div>

        {/* Info */}
        <div className="px-4 py-4 lg:px-0 lg:py-2 flex flex-col justify-center border-t lg:border-t-0 border-border/60">
          <h3 className="text-base md:text-lg font-extrabold tracking-tight text-navy leading-tight">
            {suite.name}
          </h3>
          <div className="mt-2 inline-flex items-center gap-1.5 text-xs md:text-[13px] text-muted-foreground">
            <Maximize2 size={14} className="text-orange" />
            <span className="font-semibold">{suite.size}</span>
          </div>
          <div className="mt-1.5 flex items-start gap-1.5 text-xs md:text-[13px] text-muted-foreground">
            <Users size={14} className="text-orange shrink-0 mt-[2px]" />
            <span>{isRu ? suite.occupancyRu : suite.occupancyEn}</span>
          </div>
          <p className="mt-3 text-sm text-foreground/75 leading-relaxed">
            {isRu ? suite.descriptionRu : suite.descriptionEn}
          </p>
        </div>

        {/* Prices — subtle vertical separator on desktop only */}
        <div className="px-4 py-4 lg:py-2 lg:pl-6 xl:pl-8 lg:pr-0 bg-secondary/30 lg:bg-transparent border-t lg:border-t-0 lg:border-l border-border/60 lg:border-border/50 flex flex-col justify-center">
          <div className="text-[11px] font-semibold tracking-[0.14em] text-navy/70 uppercase">
            {t("secret.bookHeader")}
          </div>
          <div className="mt-3 space-y-2">
            {suite.prices.map((p, i) => (
              <a
                key={i}
                href={p.bookUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center text-center text-xs md:text-[13px] font-semibold tracking-wide px-4 py-2.5 rounded-md bg-primary text-primary-foreground hover:brightness-110 transition"
              >
                {t(p.guestsKey)} — {p.price}€{p.perPerson ? ` ${t("secret.perPerson")}` : ""}
              </a>
            ))}
          </div>
          <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-muted-foreground leading-snug">
            <Zap size={12} className="text-orange shrink-0" />
            <span>
              {suite.prices.length > 1
                ? t("secret.bookNote")
                : t("secret.bookNoteShort")}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
