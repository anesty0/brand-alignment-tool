import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { useI18n } from "@/lib/i18n";
import alps from "@/assets/alps-1.jpg";
import sail from "@/assets/alps-2.jpg";
import lounge from "@/assets/alps-3.jpg";
import fire from "@/assets/observation.jpg";
import { Users, Mountain, Compass, Briefcase, Instagram, Send, MessageCircle, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "О проекте — NATIVE CODE" },
      { name: "description", content: "Кто создаёт NATIVE CODE — предприниматели и компании, которые строят бизнес и новую жизнь между странами." },
    ],
  }),
});

const partners = [
  {
    name: "OPEN GREECE",
    bodyRu: [
      "Греческая девелоперская компания, работающая в сфере недвижимости и lifestyle-проектов в Греции.",
      "Компания развивает проекты у моря, закрытые жилые комплексы и направления, связанные с relocation и life investment в Европе.",
      "Также OPEN GREECE является организатором международной парусной регаты Open Greece Cup, которая объединяет русскоговорящее сообщество из разных стран мира.",
    ],
    bodyEn: [
      "A Greek development company working in real estate and lifestyle projects in Greece.",
      "Open Greece develops seaside projects, gated residential communities and directions linked to relocation and life investment in Europe.",
      "Open Greece is also the organiser of the international sailing regatta Open Greece Cup, uniting the Russian-speaking community from around the world.",
    ],
    img: sail,
    link: "open-greece.com",
  },
  {
    name: "Axiom Management Solutions GmbH",
    bodyRu: [
      "Австрийская компания, специализирующаяся на бизнес-иммиграции, сопровождении предпринимателей, корпоративных структурах, налоговой и юридической интеграции бизнеса в Европе.",
      "Команда много лет работает с предпринимателями, которые ведут деятельность между несколькими странами.",
    ],
    bodyEn: [
      "An Austrian company specialising in business immigration, entrepreneur support, corporate structures, and tax and legal integration of businesses in Europe.",
      "The team has spent years working with entrepreneurs operating across several countries.",
    ],
    img: lounge,
    link: "axiom-management.at",
  },
  {
    name: "SKI4U",
    bodyRu: [
      "Туристический и alpine lifestyle-партнёр проекта с многолетним опытом организации премиальных горнолыжных путешествий и инфраструктуры отдыха в Альпах.",
    ],
    bodyEn: [
      "Travel and alpine lifestyle partner of the project with many years of experience organising premium ski trips and leisure infrastructure in the Alps.",
    ],
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

      {/* Hero — split layout: text left, mountain image right with fade */}
      <section className="relative overflow-hidden">
        <div className="container-x grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 md:py-16 lg:py-20">
          <div className="relative z-10 max-w-xl">
            <div className="text-[11px] font-semibold tracking-[0.2em] text-orange">
              {isRu ? "О ПРОЕКТЕ" : "ABOUT"}
            </div>
            <h1 className="mt-4 font-extrabold tracking-tight text-navy leading-[1.05] text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase">
              {isRu ? "Кто создаёт" : "Who creates"}<br />NATIVE CODE
            </h1>
            <p className="mt-6 text-sm md:text-base text-foreground/75 leading-relaxed">
              {isRu
                ? "Проект создан предпринимателями и компаниями, которые сами живут между странами, строят бизнес и понимают ценность сильного окружения."
                : "The project is created by entrepreneurs and companies who live between countries themselves, build businesses and understand the value of a strong circle."}
            </p>
          </div>
          <div className="relative h-64 sm:h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
            <img src={alps} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent lg:from-background/80" />
          </div>
        </div>
      </section>

      {/* Intro paragraphs */}
      <section className="py-8 md:py-12">
        <div className="container-x max-w-3xl space-y-4 text-sm md:text-base text-foreground/80 leading-relaxed">
          <p>{isRu
            ? "NATIVE CODE появился не как очередной «бизнес-ивент»."
            : "NATIVE CODE didn't appear as just another \"business event\"."}</p>
          <p>{isRu
            ? "Он вырос из реального круга людей, которые последние годы строят бизнес, проекты и новую жизнь в других странах — с новыми правилами, банками, налогами, языками и системой."
            : "It grew out of a real circle of people who, in recent years, have been building businesses, projects and a new life in other countries — with new rules, banks, taxes, languages and systems."}</p>
          <p>{isRu
            ? "Проект создают предприниматели и компании, которые сами проходят этот путь."
            : "The project is created by entrepreneurs and companies walking this path themselves."}</p>
        </div>
      </section>

      {/* Team / Partners */}
      <section className="py-10 md:py-14">
        <div className="container-x">
          <div className="text-[11px] font-semibold tracking-[0.2em] text-orange">
            {isRu ? "КОМАНДА ПРОЕКТА" : "PROJECT TEAM"}
          </div>
          <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-navy leading-tight max-w-2xl">
            {isRu
              ? "Коллаборация опыта, людей и общей философии"
              : "A collaboration of experience, people and a shared philosophy"}
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {partners.map((p) => (
              <article key={p.name} className="flex flex-col">
                <h3 className="text-lg md:text-xl font-bold text-navy leading-snug">{p.name}</h3>
                <div className="mt-4 space-y-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  {(isRu ? p.bodyRu : p.bodyEn).map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                <a
                  href={`https://${p.link}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-md border border-border px-4 py-2 text-[11px] font-semibold tracking-[0.14em] text-navy hover:border-orange hover:text-orange transition uppercase"
                >
                  {p.link} ↗
                </a>
                <div className="mt-5 rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
                  <img src={p.img} alt={p.name} loading="lazy" className="w-full h-44 md:h-52 object-cover" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing dark band */}
      <section className="bg-navy text-white">
        <div className="container-x py-14 md:py-20">
          <p className="text-xl md:text-2xl lg:text-3xl font-light leading-snug max-w-3xl">
            {isRu
              ? "NATIVE CODE — это больше, чем событие. Это среда людей со схожим опытом, скоростью жизни и уровнем задач."
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
                <div>1—6 DECEMBER 2026</div>
                <div className="text-white/60">SÖLDEN, AUSTRIA</div>
              </div>
            </div>
            <a href="mailto:info@nativecode.eu" className="flex items-center gap-2 text-white/80 hover:text-orange transition">
              <Mail size={14} className="text-orange shrink-0" />
              info@nativecode.eu
            </a>
            <div className="flex items-center justify-start md:justify-end gap-4 text-white/80">
              <a href="#" aria-label="Instagram" className="hover:text-orange transition"><Instagram size={18} /></a>
              <a href="#" aria-label="Telegram" className="hover:text-orange transition"><Send size={18} /></a>
              <a href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-orange transition"><MessageCircle size={18} /></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

void Calendar;
