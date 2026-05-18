import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { useI18n } from "@/lib/i18n";
import alps from "@/assets/about-hero-mountains.jpg";
import sail from "@/assets/alps-2.jpg";
import lounge from "@/assets/alps-3.jpg";
import fire from "@/assets/observation.jpg";
import { Users, Mountain, Compass, Briefcase, Instagram, Send, MessageCircle, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "О проекте - NATIVE CODE" },
      { name: "description", content: "Кто создаёт NATIVE CODE - предприниматели и компании, которые строят бизнес и новую жизнь между странами." },
    ],
  }),
});

const partners = [
  {
    name: "OPEN GREECE",
    descriptionRu: "Греческая девелоперская компания в сфере недвижимости и lifestyle-проектов у моря. OPEN GREECE также развивает международную регату Open Greece Cup, объединяющую русскоговорящее сообщество по всему миру.",
    descriptionEn: "A Greek development company working with seaside real estate and lifestyle projects. OPEN GREECE also develops the international Open Greece Cup regatta, connecting the Russian-speaking community worldwide.",
    img: sail,
    link: "opengreece.gr",
  },
  {
    name: "Axiom Management Solutions GmbH",
    descriptionRu: "Австрийская компания, сопровождающая предпринимателей в бизнес-иммиграции, корпоративных структурах, налоговой и юридической интеграции бизнеса в Европе.",
    descriptionEn: "An Austrian company supporting entrepreneurs with business immigration, corporate structures, and tax and legal integration of businesses in Europe.",
    img: lounge,
    link: "axiom-management.at",
  },
  {
    name: "SKI4U",
    descriptionRu: "Туристический и alpine lifestyle-партнёр проекта с многолетним опытом организации премиальных горнолыжных путешествий и отдыха в Альпах.",
    descriptionEn: "Travel and alpine lifestyle partner of the project, with years of experience organising premium ski journeys and leisure in the Alps.",
    img: fire,
    link: "ski4u.com",
  },
];

const valueIcons = [Users, Mountain, Briefcase, Compass];

function AboutPage() {
  const { lang } = useI18n();
  const isRu = lang === "ru";

  const valuesRu = [
    "Мы сами живём между странами",
    "Мы строим бизнес и инвестируем",
    "Мы ценим окружение и реальные связи",
    "Мы создаём пространство, куда хочется возвращаться",
  ];
  const valuesEn = [
    "We live between countries ourselves",
    "We build businesses and invest",
    "We value our circle and real connections",
    "We create a space worth coming back to",
  ];
  const values = isRu ? valuesRu : valuesEn;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero - text left, mountain image bleeds to right edge with fade */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[62%]">
          <img src={alps} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/85 lg:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0.55)_22%,transparent_45%)]" />
        </div>
        <div className="container-x relative z-10 py-16 md:py-20 lg:py-20">
          <div className="max-w-xl">
            <div className="text-[11px] font-semibold tracking-[0.2em] text-orange">
              {isRu ? "О ПРОЕКТЕ" : "ABOUT"}
            </div>
            <h1 className="mt-5 font-extrabold tracking-tight text-navy leading-[1.05] text-4xl sm:text-5xl md:text-6xl uppercase">
              {isRu ? "Кто создаёт" : "Who creates"}<br />NATIVE CODE
            </h1>
            <p className="mt-6 max-w-md text-sm md:text-base text-foreground/75 leading-relaxed whitespace-pre-line">
              {isRu
                ? "NATIVE CODE появился не как очередной «бизнес-ивент».\n\nОн вырос из реального круга людей, которые последние годы строят бизнес, проекты и новую жизнь в других странах - с новыми правилами, банками, налогами, языками и системой.\n\nПроект создают предприниматели и компании, которые сами проходят этот путь."
                : "NATIVE CODE didn't appear as just another “business event”.\n\nIt grew out of a real circle of people who, over the past years, have been building businesses, projects and a new life in other countries - with new rules, banks, taxes, languages and systems.\n\nThe project is created by entrepreneurs and companies who are walking this path themselves."}
            </p>
          </div>
        </div>
      </section>

      {/* Team / Partners - editorial brand showcase */}
      <section className="py-[3rem] md:py-14 lg:py-16">
        <div className="container-x">
          <div className="text-[11px] font-semibold tracking-[0.2em] text-orange">
            {isRu ? "КОМАНДА ПРОЕКТА" : "PROJECT TEAM"}
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy leading-[1.08] max-w-3xl">
            {isRu
              ? "Коллаборация опыта, людей и общей философии"
              : "A collaboration of experience, people and a shared philosophy"}
          </h2>

          <div className="mt-8 md:mt-10 lg:mt-12 grid md:grid-cols-3 gap-11 md:gap-0 md:border-y md:border-border/45">
            {partners.map((p, idx) => (
              <article
                key={p.name}
                className={`grid md:grid-rows-[64px_minmax(180px,auto)_40px_auto] lg:grid-rows-[70px_minmax(170px,auto)_40px_auto] md:py-10 lg:py-12 ${idx > 0 ? "md:pl-7 lg:pl-10 md:border-l md:border-border/60" : "md:pr-7 lg:pr-10"} ${idx === 1 ? "md:pr-7 lg:pr-10" : ""}`}
              >
                <h3 className="max-w-[15rem] text-base md:text-[17px] font-bold tracking-tight text-navy leading-[1.18] uppercase">
                  {p.name}
                </h3>
                <p className="max-w-[21rem] text-[13px] md:text-sm text-muted-foreground leading-[1.58] md:pr-2">
                  {isRu ? p.descriptionRu : p.descriptionEn}
                </p>
                <a
                  href={`https://${p.link}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 md:mt-0 inline-flex h-10 w-fit items-center gap-2 rounded-md border border-border px-5 text-[11px] font-semibold tracking-[0.14em] text-navy hover:border-orange hover:text-orange transition uppercase"
                >
                  {p.link} ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing dark band */}
      <section className="bg-navy text-white">
        <div className="container-x py-12 md:py-14 lg:py-16">
          <p className="text-xl md:text-2xl lg:text-3xl font-light leading-snug max-w-3xl">
            {isRu
              ? "NATIVE CODE - это больше, чем событие. Это среда людей со схожим опытом, скоростью жизни и уровнем задач."
              : "NATIVE CODE is more than an event. It's a community of people with similar experience, pace of life and scale of tasks."}
          </p>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {values.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <div key={i}>
                  <Icon className="text-orange" size={28} strokeWidth={1.5} />
                  <p className="mt-3 text-sm text-white/85 leading-snug">{v}</p>
                </div>
              );
            })}
          </div>

          {/* Footer-style info row */}
          <div className="mt-14 pt-6 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-xs md:text-sm">
            <div className="leading-tight">
              <div className="font-extrabold tracking-tight text-white">NATIVE CODE</div>
              <div className="text-[10px] font-semibold tracking-[0.18em] text-orange mt-1">SKI OPENING 2026</div>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <MapPin size={14} className="text-orange shrink-0" />
              <div>
                <div>1-6 DECEMBER 2026</div>
                <div className="text-white/60">SÖLDEN, AUSTRIA</div>
              </div>
            </div>
            <a href="mailto:irina.krasilnikova1982@gmail.com" className="flex items-center gap-2 text-white/80 hover:text-orange transition">
              <Mail size={14} className="text-orange shrink-0" />
              irina.krasilnikova1982@gmail.com
            </a>
            <div className="flex items-center justify-start md:justify-end gap-4 text-white/80">
              <a href="#" aria-label="Instagram" className="hover:text-orange transition"><Instagram size={18} /></a>
              <a href="#" aria-label="Telegram" className="hover:text-orange transition"><Send size={18} /></a>
              <a href="https://wa.me/306972801776" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-orange transition"><MessageCircle size={18} /></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

