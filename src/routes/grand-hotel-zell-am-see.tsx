import { useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Expand, Maximize2, MessageCircle, Users, Zap } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Lightbox, type LightboxImage } from "@/components/site/Lightbox";
import { useI18n } from "@/lib/i18n";
import { useContacts } from "@/lib/contacts";
import { useDocumentMeta } from "@/lib/useDocumentMeta";
import { ONLINE_BOOKING_ENABLED } from "@/lib/booking";
import heroImg from "@/assets/zell/hotel-01.webp";
import comfort1 from "@/assets/zell/rooms/comfort-1.webp";
import comfort2 from "@/assets/zell/rooms/comfort-2.webp";
import superior1 from "@/assets/zell/rooms/superior-1.webp";
import superior2 from "@/assets/zell/rooms/superior-2.webp";
import deluxe1 from "@/assets/zell/rooms/deluxe-1.webp";
import deluxe2 from "@/assets/zell/rooms/deluxe-2.webp";
import deluxeSauna1 from "@/assets/zell/rooms/deluxe-sauna-1.webp";
import deluxeSauna2 from "@/assets/zell/rooms/deluxe-sauna-2.webp";

export const Route = createFileRoute("/grand-hotel-zell-am-see")({
  component: GrandHotelPage,
});

type PriceTier = {
  guestsKey: string;
  price: number;
  /** Booking link for this tier. Empty until online booking opens (see lib/booking.ts). */
  bookUrl: string;
};

type Room = {
  name: string;
  nameEn?: string;
  size: string;
  descriptionRu: string;
  descriptionEn: string;
  images: [string, string];
  prices: PriceTier[];
};

const twoGuestPrices = (single: number, double: number): PriceTier[] => [
  { guestsKey: "grand.guests1", price: single, bookUrl: "" },
  { guestsKey: "grand.guests2", price: double, bookUrl: "" },
];

/** Order is final (client-confirmed). A help banner follows the first room and closes the list. */
const rooms: Room[] = [
  {
    name: "DOUBLE ROOM COMFORT",
    size: "22 м²",
    descriptionRu: "Уютный двухместный номер в классическом стиле.",
    descriptionEn: "A cosy classic-style double room.",
    images: [comfort1, comfort2],
    prices: twoGuestPrices(2300, 1900),
  },
  {
    name: "DOUBLE ROOM SUPERIOR",
    size: "30 м²",
    descriptionRu:
      "Номер в классическом стиле с двуспальной кроватью, зоной отдыха, балконом и видом на озеро.",
    descriptionEn:
      "A classic-style room with a double bed, a seating area, a balcony and lake views.",
    images: [superior1, superior2],
    prices: twoGuestPrices(2500, 2100),
  },
  {
    name: "DELUXE DOUBLE ROOM",
    size: "42 м²",
    descriptionRu:
      "Просторный номер с двуспальной кроватью, зоной отдыха и балконом с видом на озеро.",
    descriptionEn:
      "A spacious room with a double bed, a seating area and a balcony overlooking the lake.",
    images: [deluxe1, deluxe2],
    prices: twoGuestPrices(2900, 2500),
  },
  {
    name: "DELUXE DOUBLE ROOM С СОБСТВЕННОЙ САУНОЙ",
    nameEn: "DELUXE DOUBLE ROOM WITH PRIVATE SAUNA",
    size: "42 м²",
    descriptionRu:
      "Просторный номер с зоной отдыха, балконом с видом на озеро и собственной сауной.",
    descriptionEn:
      "A spacious room with a seating area, a balcony overlooking the lake and a private sauna.",
    images: [deluxeSauna1, deluxeSauna2],
    prices: twoGuestPrices(3200, 2800),
  },
];

function GrandHotelPage() {
  const { t, lang } = useI18n();
  const isRu = lang === "ru";

  useDocumentMeta({
    title: t("grand.metaTitle"),
    description: t("grand.metaDesc"),
    canonical: "/grand-hotel-zell-am-see",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  // One gallery for every room photo, so the viewer can flip through them all.
  const gallery = useMemo<LightboxImage[]>(
    () =>
      rooms.flatMap((room) => {
        const name = !isRu && room.nameEn ? room.nameEn : room.name;
        return room.images.map((src, i) => ({ src, alt: `${name} — ${i + 1}`, caption: name }));
      }),
    [isRu],
  );
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const thumbs = useRef<(HTMLElement | null)[]>([]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero — text on navy; the photo sits below it on phones/tablets and fills the
          right-hand side on desktop, so the hotel itself is always in view. */}
      <section className="relative overflow-hidden bg-navy text-white lg:min-h-[560px] xl:min-h-[600px]">
        <div className="hidden lg:block absolute inset-y-0 right-0 left-[44%] xl:left-[42%]">
          <img
            src={heroImg}
            alt="Grand Hotel Zell am See on Lake Zell"
            className="w-full h-full object-cover object-[50%_72%]"
          />
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-navy to-transparent" />
        </div>

        <div className="relative container-x pt-6 md:pt-8">
          <a
            href="/#hotels"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide text-white/85 hover:text-orange transition"
          >
            <ArrowLeft size={16} /> {t("grand.back")}
          </a>
        </div>

        <div className="relative container-x pt-6 md:pt-10 pb-8 md:pb-10 lg:pb-20">
          <div className="max-w-xl lg:max-w-[min(36rem,38vw)]">
            <h1 className="font-extrabold tracking-tight leading-[0.95] text-4xl sm:text-5xl md:text-6xl xl:text-7xl uppercase">
              GRAND HOTEL
              <br />
              ZELL AM SEE
            </h1>
            <div className="mt-3 text-lg md:text-xl">{t("grand.stars")}</div>
            <div className="mt-2 text-lg md:text-xl font-bold tracking-tight">
              {t("grand.dates")}
            </div>
            <div className="mt-4 space-y-3 text-sm md:text-base text-white/85 leading-relaxed">
              <p>{t("grand.intro1")}</p>
              <p>{t("grand.intro2")}</p>
            </div>
          </div>
        </div>

        <div className="relative lg:hidden">
          <img
            src={heroImg}
            alt="Grand Hotel Zell am See on Lake Zell"
            className="w-full aspect-[4/3] sm:aspect-[16/9] object-cover object-[42%_78%]"
          />
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-navy to-transparent" />
        </div>
      </section>

      {/* Intro */}
      <section className="pt-10 md:pt-14">
        <div className="container-x max-w-3xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-navy">
            {t("grand.chooseTitle")}
          </h2>
          <p className="mt-3 text-center text-sm md:text-base text-muted-foreground">
            {t("grand.chooseSub")}
          </p>
          <ul className="mt-5 space-y-2 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-orange shrink-0" />
              <span>{t("grand.b1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-orange shrink-0" />
              <span>
                {t("grand.b2pre")}
                <strong className="font-bold text-navy">{t("grand.b2bold")}</strong>
                {t("grand.b2post")}
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-8 md:py-10 pb-12 md:pb-16">
        <div className="container-x space-y-5 md:space-y-6">
          {rooms.map((room, i) => (
            <div key={room.name} className="space-y-5 md:space-y-6">
              <RoomCard
                room={room}
                isRu={isRu}
                t={t}
                onOpen={(img) => setOpenIndex(i * 2 + img)}
                thumbRef={(img, el) => {
                  thumbs.current[i * 2 + img] = el;
                }}
              />
              {i === 0 && <HelpBanner t={t} />}
            </div>
          ))}
          <HelpBanner t={t} />
        </div>
      </section>

      <Footer />

      <Lightbox
        images={gallery}
        index={openIndex}
        onIndexChange={setOpenIndex}
        getOrigin={(i) => thumbs.current[i] ?? null}
      />
    </main>
  );
}

function HelpBanner({ t }: { t: (k: string) => string }) {
  const { whatsappUrl } = useContacts();
  return (
    <div className="rounded-2xl bg-navy text-white px-5 py-6 md:px-8 md:py-7 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center shadow-[var(--shadow-card)]">
      <div className="text-lg md:text-xl font-bold">{t("grand.help")}</div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex items-center gap-2.5 rounded-lg bg-white text-navy px-5 py-2.5 text-sm font-semibold hover:text-orange transition"
      >
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
          <MessageCircle size={14} />
        </span>
        {t("grand.helpBtn")}
        <ArrowRight size={16} />
      </a>
    </div>
  );
}

function RoomCard({
  room,
  isRu,
  t,
  onOpen,
  thumbRef,
}: {
  room: Room;
  isRu: boolean;
  t: (k: string) => string;
  onOpen: (imageIndex: number) => void;
  thumbRef: (imageIndex: number, el: HTMLElement | null) => void;
}) {
  const name = !isRu && room.nameEn ? room.nameEn : room.name;
  return (
    <article className="bg-card border border-border rounded-2xl shadow-[var(--shadow-card)] overflow-hidden">
      <div className="grid lg:grid-cols-[minmax(420px,40%)_1fr_300px] gap-0 lg:gap-6 xl:gap-8 lg:items-stretch lg:p-5">
        {/* Images — tap to open the zoomable viewer */}
        <div className="grid grid-cols-2 gap-2 lg:gap-3 p-3 lg:p-0">
          {room.images.map((img, i) => (
            <button
              key={i}
              type="button"
              ref={(el) => {
                thumbRef(i, el);
              }}
              onClick={() => onOpen(i)}
              aria-label={`${t("lightbox.open")}: ${name}`}
              className="group relative block overflow-hidden rounded-lg lg:rounded-xl cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
            >
              <img
                src={img}
                alt={name}
                loading="lazy"
                className="w-full h-32 sm:h-44 md:h-52 lg:h-full lg:min-h-[190px] lg:max-h-[230px] object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute right-2 bottom-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/55 text-white opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                <Expand size={15} />
              </span>
            </button>
          ))}
        </div>

        {/* Info */}
        <div className="px-4 py-4 lg:px-0 lg:py-2 flex flex-col justify-center">
          <h3 className="text-lg md:text-xl font-extrabold tracking-tight text-navy leading-tight">
            {name}
          </h3>
          <div className="mt-2 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Maximize2 size={15} className="text-orange" />
            <span>{room.size}</span>
          </div>
          <div className="mt-1.5 flex items-start gap-2 text-sm text-muted-foreground">
            <Users size={15} className="text-orange shrink-0 mt-[2px]" />
            <span>{t("grand.occupancy2")}</span>
          </div>
          <p className="mt-3 text-sm md:text-base text-foreground/75 leading-relaxed">
            {isRu ? room.descriptionRu : room.descriptionEn}
          </p>
        </div>

        {/* Prices */}
        <div className="px-4 py-4 lg:py-2 lg:pl-6 xl:pl-8 lg:pr-0 bg-secondary/30 lg:bg-transparent border-t lg:border-t-0 lg:border-l border-border/60 flex flex-col justify-center">
          <div className="text-[11px] font-semibold tracking-[0.14em] text-navy/70 uppercase">
            {t("grand.bookHeader")}
          </div>
          <div className="mt-3 space-y-2">
            {room.prices.map((p) => {
              const label = `${t(p.guestsKey)} — ${p.price}€ ${t("grand.perPerson")}`;
              const base =
                "w-full inline-flex items-center justify-center text-center text-sm font-semibold px-4 py-2.5 rounded-md bg-primary text-primary-foreground";
              return ONLINE_BOOKING_ENABLED && p.bookUrl ? (
                <a
                  key={p.guestsKey}
                  href={p.bookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`${base} hover:brightness-110 transition`}
                >
                  {label}
                </a>
              ) : (
                <div key={p.guestsKey} aria-disabled="true" className={`${base} cursor-default`}>
                  {label}
                </div>
              );
            })}
          </div>
          <div className="mt-3 inline-flex items-start gap-1.5 text-xs text-muted-foreground leading-snug">
            <Zap size={14} className="text-orange shrink-0" />
            <span>{t("grand.bookNote")}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
