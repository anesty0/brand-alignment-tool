import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ru" | "en";

type Dict = Record<string, string>;

const ru: Dict = {
  // Nav
  "nav.about": "О СОБЫТИИ",
  "nav.program": "ПРОГРАММА",
  "nav.hotels": "ПРОЖИВАНИЕ",
  "nav.alps": "ALPS CONNECT",
  "nav.faq": "FAQ",
  "nav.cta": "ЗАБРОНИРОВАТЬ УЧАСТИЕ",
  "brand.line2": "КЛУБ ПРЕДПРИНИМАТЕЛЕЙ",

  // Hero
  "hero.dates": "1 — 6 ДЕКАБРЯ",
  "hero.place": "SÖLDEN • AUSTRIA",
  "hero.tagline": "Это пять дней в кругу людей, с которыми вы говорите на одном языке.",
  "hero.sub": "Встреча предпринимателей и инвесторов из разных стран",
  "hero.cta1": "ЗАБРОНИРОВАТЬ УЧАСТИЕ",
  "hero.cta2": "ПРОГРАММА",
  "hero.whatsapp": "Написать в WhatsApp",
  "hero.whatsappSub": "По вопросам и участию — подскажем в WhatsApp",

  // About
  "about.heading": "— это 5 дней в кругу людей, с которыми вы говорите на одном языке.",
  "about.body": "В Зёльдене, в обстановке off the record, соберутся предприниматели, строящие бизнес в новых условиях и говорящие на русском языке. Здесь не нужно объяснять базовые вещи — мы говорим, думаем и смеёмся на одном языке.",
  "about.f1.t": "ФОРМАТ",
  "about.f1.b": "Ski Opening — Альпы, вечерний Z(I)Abend и открытие сезона. Компания единомышленников: ритм, энергия, всё за одним столом.",
  "about.f2.t": "УЧАСТНИКИ",
  "about.f2.b": "Уже прошли через предпринимательство и перестройку моделей, работают с командами, капиталами и структурой бизнеса.",
  "about.f3.t": "ЧТО ДАЁТ",
  "about.f3.b": "Обмен реальным опытом: бизнес, капитал, ВЭД и структура. Возможность обсудить свои задачи с теми, кто в похожей ситуации.",
  "about.f4.t": "ДЕЛОВАЯ ЧАСТЬ",
  "about.f4.b": "Днём — горы, вечером — ужины, встречи и деловая программа. Внутри NATIVE CODE — отдельные бизнес-ужины с обсуждением проектов.",

  // Solden
  "solden.title": "SÖLDEN",
  "solden.sub": "один из лучших курортов Альп",
  "solden.p1": "Зёльден — два ледника и стабильный снег.",
  "solden.p2": "140+ км трасс и широкие склоны — здесь удобно кататься в любом ритме.",
  "solden.p3": "Термы Aqua Dome делают поездку комфортной даже вне склонов.",

  // AlpsConnect
  "alps.kicker": "КЛЮЧЕВОЙ ДЕНЬ NATIVE CODE",
  "alps.date": "3 декабря",
  "alps.title": "Говорим о бизнесе на одном языке",
  "alps.c1": "Проекты и решения",
  "alps.c2": "1950 метров над уровнем моря",
  "alps.c3": "Люди и новые связи",

  // Program
  "program.title": "ПРОГРАММА NATIVE CODE",
  "program.morning": "УТРО",
  "program.evening": "ВЕЧЕР",
  "program.d1.date": "1 ДЕКАБРЯ",
  "program.d1.title": "Прибытие и знакомство",
  "program.d1.morning": "Прибытие, заселение, знакомство с программой",
  "program.d1.evening": "Welcome Drink & Sky Bar — первый вечер знакомства",
  "program.d2.date": "2 ДЕКАБРЯ",
  "program.d2.title": "Открытие сезона",
  "program.d2.morning": "Ски сафари с инструкторами (три группы по уровню катания)",
  "program.d2.evening": "Открытие NATIVE CODE и гала-ужин в THE SECRET",
  "program.d3.date": "3 ДЕКАБРЯ",
  "program.d3.title": "Alps Connect",
  "program.d3.morning": "Ски сафари с инструкторами (три группы по уровню катания)",
  "program.d3.evening": "ALPS CONNECT: конференция, ужин и дискотека",
  "program.d4.date": "4 ДЕКАБРЯ",
  "program.d4.title": "Свой ритм",
  "program.d4.morning": "Катаем в своём ритме или поездка в Инсбрук",
  "program.d4.evening": "Прогулки по Зёльдену, шопинг и отдых в термах Aqua Dome",
  "program.d5.date": "5 ДЕКАБРЯ",
  "program.d5.title": "Финал",
  "program.d5.morning": "Катаем в своём ритме",
  "program.d5.evening": "Финальный ужин в австрийском стиле, награждение и дискотека",
  "program.d6.date": "6 ДЕКАБРЯ",
  "program.d6.title": "Отъезд",
  "program.d6.morning": "Выезд из отеля, премиальный трансфер Mercedes V-Class",
  "program.d6.evening": "Дорога домой и кадры, к которым ещё не раз вернёшься",

  // Hotels
  "hotels.title": "РАЗМЕЩЕНИЕ В ТРЁХ ОТЕЛЯХ НА ВЫБОР",
  "hotels.sub": "условия для участников NATIVE CODE",
  "hotels.perPerson": "на человека",
  "hotels.perPackage": "за пакет / 5 ночей",
  "hotels.more": "Подробнее об отеле",
  "hotels.choose": "Выбрать этот отель",
  "hotels.included": "включено участие в программе",
  "hotels.help": "Поможем выбрать отель и ответим на все вопросы",
  "hotels.bookOnline": "Забронировать и оплатить онлайн",
  "hotels.bookConsultant": "Забронировать с помощью консультанта",
  "hotels.close": "Закрыть",

  // Included
  "inc.title": "ЧТО ВКЛЮЧЕНО В УЧАСТИЕ",
  "inc.note": "Дополнительно оплачивается: перелёт, ски-пасс, аренда оборудования",
  "inc.1.t": "Проживание",
  "inc.1.b": "5 ночей в отеле с завтраками (отель на выбор)",
  "inc.2.t": "Общие мероприятия",
  "inc.2.b": "Welcome drink, гала-ужин открытия и финальный вечер",
  "inc.3.t": "ALPS CONNECT",
  "inc.3.b": "конференция, ужин и специальный вечер на высоте 1950 м",
  "inc.4.t": "Ски сафари",
  "inc.4.b": "катание с инструкторами с разделением по уровню",
  "inc.5.t": "Комьюнити",
  "inc.5.b": "окружение предпринимателей и разговоры off the record",

  // CTA
  "cta.partner.t": "ДЛЯ ПАРТНЁРОВ И СПОНСОРОВ",
  "cta.partner.b": "Станьте партнёром события и получите доступ к предпринимательской аудитории из разных стран",
  "cta.partner.btn": "Стать партнёром",
  "cta.speaker.t": "ДЛЯ СПИКЕРОВ И ПРОЕКТОВ",
  "cta.speaker.b": "Мы отбираем ограниченное количество проектов для выступления и участия в ALPS CONNECT",
  "cta.speaker.btn": "Подать заявку на выступление",
  "cta.creators": "Создатели проекта NATIVE CODE",
  "cta.about": "О ПРОЕКТЕ",

  // Footer
  "footer.tagline": "1—6 декабря, Sölden • Austria. Встреча предпринимателей и инвесторов из разных стран.",
  "footer.nav": "Навигация",
  "footer.contacts": "Контакты",
  "footer.rights": "© 2026 NATIVE CODE. All rights reserved.",
  "footer.made": "Made with care in the Alps",

  // FAQ
  "faq.title": "Часто задаваемые вопросы",
  "faq.empty": "Скоро здесь появятся ответы на самые частые вопросы.",
};

const en: Dict = {
  "nav.about": "ABOUT",
  "nav.program": "PROGRAM",
  "nav.hotels": "ACCOMMODATION",
  "nav.alps": "ALPS CONNECT",
  "nav.faq": "FAQ",
  "nav.cta": "BOOK PARTICIPATION",
  "brand.line2": "ENTREPRENEURS CLUB",

  "hero.dates": "1 — 6 DECEMBER",
  "hero.place": "SÖLDEN • AUSTRIA",
  "hero.tagline": "Five days surrounded by people who speak your language.",
  "hero.sub": "A meeting of entrepreneurs and investors from different countries",
  "hero.cta1": "BOOK PARTICIPATION",
  "hero.cta2": "PROGRAM",
  "hero.whatsapp": "Message us on WhatsApp",
  "hero.whatsappSub": "Questions and bookings — we'll help on WhatsApp",

  "about.heading": "— five days surrounded by people who speak your language.",
  "about.body": "In Sölden, off the record, entrepreneurs building businesses in new conditions come together. No need to explain the basics — we think, talk and laugh in the same language.",
  "about.f1.t": "FORMAT",
  "about.f1.b": "Ski Opening — the Alps, evening Z(I)Abend and the season's opening. Like-minded company: rhythm, energy, all at one table.",
  "about.f2.t": "PARTICIPANTS",
  "about.f2.b": "Already through entrepreneurship and reshaping models, working with teams, capital and business structure.",
  "about.f3.t": "WHAT YOU GET",
  "about.f3.b": "Real experience exchange: business, capital, foreign trade and structure. A space to discuss your tasks with peers.",
  "about.f4.t": "BUSINESS PART",
  "about.f4.b": "Mountains by day; dinners, meetings and a business program by night. Dedicated business dinners inside NATIVE CODE.",

  "solden.title": "SÖLDEN",
  "solden.sub": "one of the best resorts in the Alps",
  "solden.p1": "Sölden — two glaciers and reliable snow.",
  "solden.p2": "140+ km of slopes and wide pistes — comfortable for any pace.",
  "solden.p3": "Aqua Dome thermal baths make the trip pleasant off-piste too.",

  "alps.kicker": "THE KEY DAY OF NATIVE CODE",
  "alps.date": "December 3",
  "alps.title": "Talking business in one language",
  "alps.c1": "Projects and decisions",
  "alps.c2": "1950 metres above sea level",
  "alps.c3": "People and new connections",

  "program.title": "NATIVE CODE PROGRAM",
  "program.morning": "MORNING",
  "program.evening": "EVENING",
  "program.d1.date": "DEC 1",
  "program.d1.title": "Arrival & welcome",
  "program.d1.morning": "Arrival, check-in, program overview",
  "program.d1.evening": "Welcome Drink & Sky Bar — first evening together",
  "program.d2.date": "DEC 2",
  "program.d2.title": "Season opening",
  "program.d2.morning": "Ski safari with instructors (three groups by level)",
  "program.d2.evening": "NATIVE CODE opening and gala dinner at THE SECRET",
  "program.d3.date": "DEC 3",
  "program.d3.title": "Alps Connect",
  "program.d3.morning": "Ski safari with instructors (three groups by level)",
  "program.d3.evening": "ALPS CONNECT: conference, dinner and after-party",
  "program.d4.date": "DEC 4",
  "program.d4.title": "Your own pace",
  "program.d4.morning": "Ski at your own pace or trip to Innsbruck",
  "program.d4.evening": "Stroll Sölden, shopping and Aqua Dome thermal baths",
  "program.d5.date": "DEC 5",
  "program.d5.title": "Finale",
  "program.d5.morning": "Ski at your own pace",
  "program.d5.evening": "Final Austrian dinner, awards and after-party",
  "program.d6.date": "DEC 6",
  "program.d6.title": "Departure",
  "program.d6.morning": "Check-out, premium Mercedes V-Class transfer",
  "program.d6.evening": "Way home and shots you'll come back to",

  "hotels.title": "THREE HOTELS TO CHOOSE FROM",
  "hotels.sub": "conditions for NATIVE CODE participants",
  "hotels.perPerson": "per person",
  "hotels.perPackage": "per package / 5 nights",
  "hotels.more": "More about the hotel",
  "hotels.choose": "Choose this hotel",
  "hotels.included": "program participation included",
  "hotels.help": "We'll help you pick a hotel and answer any questions",
  "hotels.bookOnline": "Book and pay online",
  "hotels.bookConsultant": "Book with a consultant",
  "hotels.close": "Close",

  "inc.title": "WHAT'S INCLUDED",
  "inc.note": "Extra: flights, ski pass, equipment rental",
  "inc.1.t": "Accommodation",
  "inc.1.b": "5 nights with breakfast (hotel of choice)",
  "inc.2.t": "Group events",
  "inc.2.b": "Welcome drink, opening gala and final evening",
  "inc.3.t": "ALPS CONNECT",
  "inc.3.b": "conference, dinner and special evening at 1950 m",
  "inc.4.t": "Ski safari",
  "inc.4.b": "guided skiing in groups by level",
  "inc.5.t": "Community",
  "inc.5.b": "entrepreneur circle and off-the-record conversations",

  "cta.partner.t": "FOR PARTNERS & SPONSORS",
  "cta.partner.b": "Become a partner and get access to an entrepreneurial audience from different countries",
  "cta.partner.btn": "Become a partner",
  "cta.speaker.t": "FOR SPEAKERS & PROJECTS",
  "cta.speaker.b": "We curate a limited number of projects for ALPS CONNECT",
  "cta.speaker.btn": "Apply to speak",
  "cta.creators": "Creators of NATIVE CODE",
  "cta.about": "ABOUT THE PROJECT",

  "footer.tagline": "Dec 1—6, Sölden • Austria. Entrepreneurs and investors from different countries.",
  "footer.nav": "Navigation",
  "footer.contacts": "Contacts",
  "footer.rights": "© 2026 NATIVE CODE. All rights reserved.",
  "footer.made": "Made with care in the Alps",

  "faq.title": "Frequently asked questions",
  "faq.empty": "Answers to the most common questions will appear here soon.",
};

const dicts: Record<Lang, Dict> = { ru, en };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string };
const I18nContext = createContext<Ctx>({ lang: "ru", setLang: () => {}, t: (k) => k });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("lang") as Lang | null;
      if (saved === "ru" || saved === "en") setLangState(saved);
    }
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem("lang", l);
  };
  const t = (k: string) => dicts[lang][k] ?? dicts.ru[k] ?? k;
  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() { return useContext(I18nContext); }
