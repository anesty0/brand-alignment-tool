import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const linkKeys = [
  { href: "/#about", k: "nav.about" },
  { href: "/#program", k: "nav.program" },
  { href: "/#hotels", k: "nav.hotels" },
  { href: "/#alps", k: "nav.alps" },
];

const faqs: { qRu: string; qEn: string; aRu: string; aEn: string }[] = [
  {
    qRu: "Что такое NATIVE CODE?",
    qEn: "What is NATIVE CODE?",
    aRu: "NATIVE CODE — это клуб предпринимателей, инвесторов и людей, которые строят жизнь и бизнес в новых странах, но продолжают говорить на одном языке — русском.\n\nЭто сообщество людей с похожим опытом, кругом общения и пониманием реальности последних лет.\n\nSKI OPENING — первая встреча клуба в Альпах.",
    aEn: "NATIVE CODE is a club of entrepreneurs, investors and people building life and business in new countries while still sharing one language — Russian.\n\nIt is a community of people with similar experience, social circles and understanding of the realities of recent years.\n\nSKI OPENING is the club's first gathering in the Alps.",
  },
  {
    qRu: "Что такое SKI OPENING?",
    qEn: "What is SKI OPENING?",
    aRu: "Это 5 дней в Зёльдене (Австрия), где соединяются:\n\n• катание в Альпах\n• отдых\n• знакомства\n• предпринимательская среда\n• живое общение без официоза\n\nБез сцены «успешного успеха».\nБез скучных конференций.\nБез жесткой программы.",
    aEn: "5 days in Sölden (Austria) bringing together:\n\n• skiing in the Alps\n• relaxation\n• new connections\n• an entrepreneurial environment\n• genuine conversations without formality\n\nNo “successful success” stage.\nNo boring conferences.\nNo rigid agenda.",
  },
  {
    qRu: "Для кого это мероприятие?",
    qEn: "Who is this event for?",
    aRu: "Для предпринимателей, инвесторов, founders, топ-менеджеров и людей, которые:\n\n• строят бизнес в Европе и за её пределами\n• работают между несколькими странами\n• создают новые проекты\n• ищут окружение своего уровня\n• ценят неформальное, но сильное комьюнити",
    aEn: "For entrepreneurs, investors, founders, top managers and people who:\n\n• build businesses in Europe and beyond\n• work across several countries\n• launch new projects\n• look for peers of their level\n• value an informal yet strong community",
  },
  {
    qRu: "Нужно ли хорошо кататься на лыжах?",
    qEn: "Do I need to be a good skier?",
    aRu: "Нет.\n\nНа мероприятие приезжают люди с абсолютно разным уровнем:\n\n• кто-то катается весь день\n• кто-то только начинает\n• кто-то приезжает ради атмосферы и общения",
    aEn: "No.\n\nGuests come with very different levels:\n\n• some ski all day long\n• some are just starting out\n• some come purely for the atmosphere and connections",
  },
  {
    qRu: "Можно приехать без пары или компании?",
    qEn: "Can I come alone, without a partner or group?",
    aRu: "Да.\n\nОчень многие участники приезжают одни.\n\nИменно поэтому здесь большое внимание уделяется атмосфере, знакомствам и лёгкому нетворкингу без «обязательных активностей».",
    aEn: "Yes.\n\nMany guests come on their own.\n\nThat is exactly why so much attention is paid to atmosphere, introductions and easy networking — without any “mandatory activities”.",
  },
  {
    qRu: "Что входит в участие?",
    qEn: "What is included?",
    aRu: "В зависимости от выбранного пакета:\n\n• проживание\n• завтраки\n• участие в программе NATIVE CODE\n• вечерние мероприятия\n• гала-ужины\n• networking activities\n• Alps Connect",
    aEn: "Depending on the selected package:\n\n• accommodation\n• breakfasts\n• participation in the NATIVE CODE programme\n• evening events\n• gala dinners\n• networking activities\n• Alps Connect",
  },
  {
    qRu: "Что такое Alps Connect?",
    qEn: "What is Alps Connect?",
    aRu: "Alps Connect — это отдельная часть программы, посвящённая знакомствам, проектам, идеям и деловым связям.\n\nНе классическая конференция.\n\nСкорее среда, где:\n\n• обсуждают реальные кейсы\n• знакомятся с людьми своего круга\n• находят партнёров\n• инвесторов\n• новые проекты и возможности",
    aEn: "Alps Connect is a dedicated part of the programme focused on introductions, projects, ideas and business connections.\n\nNot a classic conference.\n\nRather an environment where guests:\n\n• discuss real cases\n• meet peers of their level\n• find partners\n• meet investors\n• discover new projects and opportunities",
  },
  {
    qRu: "Будут ли выступления и спикеры?",
    qEn: "Will there be talks and speakers?",
    aRu: "Да.\n\nЗапланированы:\n\n• короткие выступления\n• живые обсуждения\n• кейсы участников\n• private talks\n• networking sessions\n\nНо главное здесь — не сцена, а люди вокруг.",
    aEn: "Yes.\n\nPlanned:\n\n• short talks\n• live discussions\n• guest case studies\n• private talks\n• networking sessions\n\nBut the main thing here isn't the stage — it's the people around you.",
  },
  {
    qRu: "Это бизнес-конференция?",
    qEn: "Is this a business conference?",
    aRu: "Нет.\n\nЭто lifestyle & business community event.\n\nГлавное здесь:\n\n• окружение\n• связи\n• атмосфера\n• люди\n• разговоры\n\nкоторые обычно происходят уже после официальной части.",
    aEn: "No.\n\nThis is a lifestyle & business community event.\n\nWhat matters most:\n\n• the people around you\n• connections\n• atmosphere\n• community\n• conversations\n\nthe kind that usually happen after the official part is over.",
  },
  {
    qRu: "На каком языке проходит мероприятие?",
    qEn: "What language is the event held in?",
    aRu: "Основной язык — русский.\n\nПри этом мероприятие международное: участники живут и работают в разных странах Европы и мира.",
    aEn: "The main language is Russian.\n\nThe event is international — guests live and work across Europe and around the world.",
  },
  {
    qRu: "Можно ли приехать с друзьями или семьёй?",
    qEn: "Can I bring friends or family?",
    aRu: "Да.\n\nМногие приезжают компаниями, парами или семьями.",
    aEn: "Yes.\n\nMany guests come with friends, partners or family.",
  },
  {
    qRu: "Где проходит мероприятие?",
    qEn: "Where does the event take place?",
    aRu: "Sölden — один из самых известных горнолыжных курортов Австрии и традиционное место открытия сезона в Альпах.",
    aEn: "Sölden — one of Austria's most famous ski resorts and the traditional season-opening destination in the Alps.",
  },
  {
    qRu: "Почему именно Зёльден?",
    qEn: "Why Sölden?",
    aRu: "Потому что это:\n\n• высокий сезон уже в начале декабря\n• качественное катание\n• красивая альпийская атмосфера\n• удобная инфраструктура\n• хорошие рестораны, SPA и après-ski\n• место, куда хочется возвращаться",
    aEn: "Because it offers:\n\n• peak season already in early December\n• excellent skiing\n• beautiful alpine atmosphere\n• convenient infrastructure\n• great restaurants, SPA and après-ski\n• a place you want to return to",
  },
  {
    qRu: "Как попасть на мероприятие?",
    qEn: "How do I join the event?",
    aRu: "Оставить заявку через сайт.\n\nПосле этого команда свяжется с вами и поможет подобрать формат участия и проживания.",
    aEn: "Submit a request through the website.\n\nThe team will then get in touch and help you choose the right participation and accommodation format.",
  },
  {
    qRu: "Это закрытое мероприятие?",
    qEn: "Is this a closed event?",
    aRu: "Да.\n\nКоличество участников ограничено.\n\nОрганизаторы оставляют за собой право подтверждения участия для сохранения атмосферы сообщества.",
    aEn: "Yes.\n\nThe number of guests is limited.\n\nThe organisers reserve the right to confirm participation in order to preserve the atmosphere of the community.",
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);
  const { lang, setLang, t } = useI18n();

  const LangSwitch = ({ className = "" }: { className?: string }) => (
    <div className={`inline-flex items-center text-[11px] font-semibold tracking-[0.14em] rounded-md border border-border overflow-hidden ${className}`}>
      <button
        onClick={() => setLang("ru")}
        className={`px-2.5 py-1.5 transition ${lang === "ru" ? "bg-navy text-white" : "text-foreground/70 hover:text-orange"}`}
        aria-pressed={lang === "ru"}
      >RU</button>
      <button
        onClick={() => setLang("en")}
        className={`px-2.5 py-1.5 transition ${lang === "en" ? "bg-navy text-white" : "text-foreground/70 hover:text-orange"}`}
        aria-pressed={lang === "en"}
      >EN</button>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/60">
      <div className="container-x flex items-center justify-between h-16 md:h-20 gap-3">
        <Link to="/" className="leading-tight shrink-0">
          <div className="font-extrabold tracking-tight text-base md:text-lg text-navy">NATIVE CODE</div>
          <div className="text-[10px] md:text-[11px] font-semibold tracking-[0.18em] text-orange">{t("brand.line2")}</div>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {linkKeys.map((l) => (
            <a key={l.href} href={l.href} className="text-xs font-semibold tracking-[0.12em] text-foreground/80 hover:text-orange transition-colors">
              {t(l.k)}
            </a>
          ))}
          <Link to="/" hash="" className="text-xs font-semibold tracking-[0.12em] text-foreground/80 hover:text-orange transition-colors" {...{ to: "/about" } as any}>
            {t("nav.project")}
          </Link>
          <button onClick={() => setFaqOpen(true)} className="text-xs font-semibold tracking-[0.12em] text-foreground/80 hover:text-orange transition-colors">
            {t("nav.faq")}
          </button>
        </nav>
        <div className="flex items-center gap-2 md:gap-3">
          <LangSwitch className="hidden sm:inline-flex" />
          <a href="/#hotels" className="hidden md:inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 lg:px-5 py-2.5 text-[11px] font-semibold tracking-[0.1em] hover:brightness-110 transition shadow-[var(--shadow-soft)]">
            {t("nav.cta")}
          </a>
          <button className="lg:hidden p-2 -mr-2 text-navy" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-x py-3 flex flex-col">
            {linkKeys.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-sm font-semibold tracking-wider text-foreground/85 border-b border-border">
                {t(l.k)}
              </a>
            ))}
            <button onClick={() => { setOpen(false); setFaqOpen(true); }} className="py-3 text-left text-sm font-semibold tracking-wider text-foreground/85 border-b border-border">
              {t("nav.faq")}
            </button>
            <div className="mt-3 flex items-center justify-between gap-3">
              <LangSwitch />
              <a href="/#hotels" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 text-[11px] font-semibold tracking-[0.1em]">
                {t("nav.cta")}
              </a>
            </div>
          </div>
        </div>
      )}

      <Dialog open={faqOpen} onOpenChange={setFaqOpen}>
        <DialogContent className="max-w-2xl max-h-[90dvh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-navy text-xl md:text-2xl font-extrabold tracking-tight">{t("faq.title")}</DialogTitle>
          </DialogHeader>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-sm md:text-base text-navy">
                  {lang === "ru" ? f.qRu : f.qEn}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                  {lang === "ru" ? f.aRu : f.aEn}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </DialogContent>
      </Dialog>
    </header>
  );
}
