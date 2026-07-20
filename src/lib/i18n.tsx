import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ru" | "en";

type Dict = Record<string, string>;

const ru: Dict = {
  // Nav
  "nav.about": "О СОБЫТИИ",
  "nav.program": "ПРОГРАММА",
  "nav.hotels": "ПРОЖИВАНИЕ",
  "nav.alps": "ALPS CONNECT",
  "nav.project": "О СОЗДАТЕЛЯХ",
  "nav.faq": "FAQ",
  "nav.cta": "ЗАБРОНИРОВАТЬ УЧАСТИЕ",
  "brand.line2": "КЛУБ ПРЕДПРИНИМАТЕЛЕЙ",
  "brand.hero": "SKI OPENING 2026/27",

  // Hero
  "hero.dates": "1 - 6 DECEMBER 2026",
  "hero.place": "SÖLDEN · AUSTRIA",
  "hero.tagline": "5 дней в Альпах: днём горы,\nвечером - разговоры",
  "hero.sub": "Встреча предпринимателей и\nинвесторов из разных стран",
  "hero.cta1": "ЗАБРОНИРОВАТЬ УЧАСТИЕ",
  "hero.cta2": "ПРОГРАММА",
  "hero.whatsapp": "Написать в WhatsApp",
  "hero.whatsappSub": "Ответим в течение дня и поможем выбрать формат участия",

  // About
  "about.subtitle": "Клуб русскоязычных предпринимателей Европы.",
  "about.event": "SKI OPENING",
  "about.heading": "Зимняя встреча клуба в Альпах.",
  "about.body": "В Зёльдене, на одном из лучших горнолыжных курортов Альп, в обстановке off the record соберутся русскоязычные предприниматели из разных стран.\n\nПять дней в кругу людей, с которыми совпадает ваш код. Не нужно объяснять базовые вещи — мы говорим, думаем и смеёмся на одном языке.",
  "about.f1.t": "ФОРМАТ",
  "about.f1.b": "Ski Opening - это Альпы, вельвет Зёльдена и открытие сезона. Приезжайте в компании: днём - каждый в своём ритме, вечером - все за одним столом.",
  "about.f2.t": "УЧАСТНИКИ",
  "about.f2.b": "Уже прошли через ограничения и перестройку моделей, работают с командами, капиталом и структурой бизнеса, рассматривают новые проекты и партнёрства.",
  "about.f3.t": "ЧТО ДАЁТ",
  "about.f3.b": "Обмен реальным опытом: банки, налоги, ВНЖ и структура бизнеса. Возможность обсудить свои задачи с теми, кто в похожей ситуации. Среда, в которой за ужином или на подъёмнике возникают новые проекты.",
  "about.f4.t": "ДЕЛОВАЯ ЧАСТЬ",
  "about.f4.b": "Днём - горы, вечером - ужины, встречи и деловая программа. В рамках NATIVE CODE будет отдельный бизнес-вечер с обсуждением проектов и возможностью представить свои идеи.",

  // Solden
  "solden.title": "SÖLDEN",
  "solden.sub": "Один из лучших горнолыжных курортов Альп",
  "solden.body": "Два ледника, стабильный снег и более 140 км трасс делают Зёльден одним из лучших мест для катания в Альпах. Но Зёльден живет не только лыжами. Рестораны, бары, термы Aqua Dome, прогулки, каток и насыщенная вечерняя жизнь делают поездку интересной даже для тех, кто не планирует выходить на склон.",

  // Special guest
  "guest.kicker": "СПЕЦИАЛЬНЫЙ ГОСТЬ",
  "guest.name": "МАША СЛОНИМ",
  "guest.desc1": "Журналист, много лет работала на BBC в Москве и Лондоне.",
  "guest.desc2pre": "Автор книги ",
  "guest.book": "«Возвращения. Несерьезный мемуар»",
  "guest.desc2post": " — мемуара о жизни на два, три, четыре дома, написанного без пафоса, с тонкой самоиронией и удивительной честностью.",
  "guest.topicLabel": "ТЕМА ВСТРЕЧИ",
  "guest.topicTitle": "Внутренний код",
  "guest.topic1": "Что остается с человеком, когда меняются страны, язык, профессия и привычная жизнь?",
  "guest.topic2": "Разговор о выборе, свободе, людях, которых мы встречаем на своем пути, и о том, что невозможно потерять, даже начиная всё заново.",

  // AlpsConnect
  "alps.kicker": "ALPS CONNECT",
  "alps.date": "Ключевой вечер программы • 3 декабря",
  "alps.title": "GURGL CARAT — самый высокогорный конференц-центр Европы.\n\nЗдесь пройдет бизнес-конференция Native Code.",
  "alps.c1": "ВСЕ УСЛОВИЯ ДЛЯ ОБЩЕНИЯ",
  "alps.c2": "ПРОСТРАНСТВО ДЛЯ ВСТРЕЧ И ДИСКУССИЙ",
  "alps.c3": "НОВЫЕ ЗНАКОМСТВА И СВЯЗИ",
  "alps.programBtn": "Программа и спикеры",

  // Program
  "program.title": "ПРОГРАММА NATIVE CODE",
  "program.morning": "УТРО",
  "program.evening": "ВЕЧЕР",
  "program.schedule": "Подробное расписание",
  "program.d1.date": "1 ДЕКАБРЯ",
  "program.d1.title": "Прибытие и знакомство",
  "program.d1.morning": "Прибытие, заселение, получение оборудования",
  "program.d1.evening": "Welcome Drink в Sky Bar - первый вечер знакомства",
  "program.d2.date": "2 ДЕКАБРЯ",
  "program.d2.title": "Открытие сезона",
  "program.d2.morning": "Ски сафари с инструктором (три группы по уровню катания)",
  "program.d2.evening": "Открытие NATIVE CODE и гала-ужин в THE SECRET - вечер, с которого всё начинается",
  "program.d3.date": "3 ДЕКАБРЯ",
  "program.d3.kicker": "КЛЮЧЕВОЙ ДЕНЬ ПРОГРАММЫ",
  "program.d3.title": "ALPS CONNECT DAY",
  "program.d3.morning": "Ски сафари с инструктором (три группы по уровню катания)",
  "program.d3.evening": "ALPS CONNECT: конференция, ужин и дискотека",
  "program.d4.date": "4 ДЕКАБРЯ",
  "program.d4.title": "Свой ритм",
  "program.d4.morning": "Катание в своём ритме, поездка в Инсбрук или отдых в термах Aqua Dome",
  "program.d4.evening": "Expert Tables — обсуждение своих кейсов и проектов со спикерами и экспертами в небольших группах",
  "program.d5.date": "5 ДЕКАБРЯ",
  "program.d5.title": "Финал",
  "program.d5.morning": "Катание в своём ритме",
  "program.d5.evening": "Финальный ужин в австрийском стиле, вручение призов и дискотека",
  "program.d6.date": "6 ДЕКАБРЯ",
  "program.d6.title": "Отъезд",
  "program.d6.morning": "Выезд из отеля, трансфер и дорога домой",
  "program.d6.evening": "Дорога домой и те самые кадры, к которым ещё не раз вернёмся",

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
  "hotels.bookSingle": "Забронировать одноместное проживание онлайн",
  "hotels.bookDouble": "Забронировать двухместное проживание онлайн",
  "hotels.chooseSuite": "Выбрать сьют и забронировать онлайн",
  "hotels.close": "Закрыть",

  // Secret Sölden detail page
  "secret.back": "Назад к отелям",
  "secret.dates": "1.12. – 06.12.2026",
  "secret.heroIntro": "Премиальный дизайн-отель в самом сердце Зёльдена. Просторные сьюты, SPA-пространство и сервис высшего уровня для комфортного отдыха в горах.",
  "secret.pill1": "5 ночей проживания",
  "secret.pill2": "Завтраки включены",
  "secret.pill3": "Участие в программе NATIVE CODE",
  "secret.sectionTitle": "Все варианты включают 5 ночей проживания, завтраки и участие в программе NATIVE CODE.",
  "secret.sectionSub": "Стоимость участия указана за человека в зависимости от количества гостей.",
  "secret.bookHeader": "Онлайн-бронирование и оплата",
  "secret.bookNote": "Мгновенное подтверждение бронирования после оплаты.",
  "secret.bookNoteShort": "Мгновенное подтверждение",
  "secret.guarantee.t": "Гарантируйте своё участие",
  "secret.guarantee.b": "Количество сьютов ограничено.",
  "secret.consultant.t": "Забронировать с помощью консультанта",
  "secret.consultant.b": "Мы ответим на все вопросы и поможем с выбором.",
  "secret.perPerson": "/ чел",
  "secret.guests1": "1 человек",
  "secret.guests2": "2 человека",
  "secret.guests3": "3 человека",
  "secret.guests4": "4 человека",
  "secret.guests6": "6 человек",
  "secret.guests8": "8 человек",

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
  "cta.partner.btn": "Спонсорские пакеты",
  "cta.speaker.t": "БИЗНЕС-ПРОГРАММА\nALPS CONNECT",
  "cta.speaker.b": "Подробное расписание двух бизнес-дней: выступления, дискуссии, разборы кейсов и новые возможности для бизнеса в новых странах.",
  "cta.speaker.btn": "Программа ALPS CONNECT",
  "cta.creators": "Создатели проекта NATIVE CODE",
  "cta.about": "О ПРОЕКТЕ",

  // Footer
  "footer.tagline": "1-6 декабря, Sölden • Austria. Встреча предпринимателей и инвесторов из разных стран.",
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
  "nav.project": "ABOUT THE PROJECT",
  "nav.faq": "FAQ",
  "nav.cta": "BOOK PARTICIPATION",
  "brand.line2": "ENTREPRENEURS CLUB",
  "brand.hero": "SKI OPENING 2026/27",

  "hero.dates": "1 - 6 DECEMBER 2026",
  "hero.place": "SÖLDEN • AUSTRIA",
  "hero.tagline": "Five days surrounded by people who speak your language.",
  "hero.sub": "A meeting of entrepreneurs and investors from different countries",
  "hero.cta1": "BOOK PARTICIPATION",
  "hero.cta2": "PROGRAM",
  "hero.whatsapp": "Message us on WhatsApp",
  "hero.whatsappSub": "Questions and bookings - we'll help on WhatsApp",

  "about.subtitle": "A club of Russian-speaking entrepreneurs in Europe.",
  "about.event": "SKI OPENING",
  "about.heading": "The club's winter gathering in the Alps.",
  "about.body": "In Sölden, at one of the best ski resorts in the Alps, Russian-speaking entrepreneurs from different countries come together off the record.\n\nFive days surrounded by people whose code matches yours. No need to explain the basics — we speak, think and laugh in the same language.",
  "about.f1.t": "FORMAT",
  "about.f1.b": "Ski Opening - the Alps, evening Z(I)Abend and the season's opening. Like-minded company: rhythm, energy, all at one table.",
  "about.f2.t": "PARTICIPANTS",
  "about.f2.b": "Already through entrepreneurship and reshaping models, working with teams, capital and business structure.",
  "about.f3.t": "WHAT YOU GET",
  "about.f3.b": "Real experience exchange: business, capital, foreign trade and structure. A space to discuss your tasks with peers.",
  "about.f4.t": "BUSINESS PART",
  "about.f4.b": "Mountains by day; dinners, meetings and a business program by night. Dedicated business dinners inside NATIVE CODE.",

  "solden.title": "SÖLDEN",
  "solden.sub": "One of the best ski resorts in the Alps",
  "solden.body": "Two glaciers, reliable snow and more than 140 km of slopes make Sölden one of the best places to ski in the Alps. But Sölden is about more than skiing. Restaurants, bars, the Aqua Dome thermal baths, walks, an ice rink and a lively evening scene make the trip worthwhile even for those who never plan to hit the slopes.",

  // Special guest
  "guest.kicker": "SPECIAL GUEST",
  "guest.name": "MASHA SLONIM",
  "guest.desc1": "A journalist who worked for the BBC in Moscow and London for many years.",
  "guest.desc2pre": "Author of the book ",
  "guest.book": "«Returns. An Unserious Memoir»",
  "guest.desc2post": " — a memoir about living across two, three, four homes, written without pathos, with subtle self-irony and remarkable honesty.",
  "guest.topicLabel": "TOPIC OF THE MEETING",
  "guest.topicTitle": "Inner Code",
  "guest.topic1": "What stays with a person when countries, language, profession and familiar life all change?",
  "guest.topic2": "A conversation about choice, freedom, the people we meet along the way, and what cannot be lost — even when starting all over again.",

  "alps.kicker": "THE KEY DAY OF NATIVE CODE",
  "alps.date": "The key evening of the program • December 3",
  "alps.title": "GURGL CARAT — the highest-altitude conference centre in Europe.\n\nThis is where the Native Code business conference takes place.",
  "alps.c1": "EVERYTHING YOU NEED TO CONNECT",
  "alps.c2": "A SPACE FOR MEETINGS AND DISCUSSIONS",
  "alps.c3": "NEW ACQUAINTANCES AND CONNECTIONS",
  "alps.programBtn": "Program and speakers",

  "program.title": "NATIVE CODE PROGRAM",
  "program.morning": "MORNING",
  "program.evening": "EVENING",
  "program.schedule": "Full schedule",
  "program.d1.date": "DEC 1",
  "program.d1.title": "Arrival & welcome",
  "program.d1.morning": "Arrival, check-in, program overview",
  "program.d1.evening": "Welcome Drink & Sky Bar - first evening together",
  "program.d2.date": "DEC 2",
  "program.d2.title": "Season opening",
  "program.d2.morning": "Ski safari with instructors (three groups by level)",
  "program.d2.evening": "NATIVE CODE opening and gala dinner at THE SECRET",
  "program.d3.date": "DEC 3",
  "program.d3.kicker": "KEY DAY OF THE PROGRAM",
  "program.d3.title": "ALPS CONNECT DAY",
  "program.d3.morning": "Ski safari with instructors (three groups by level)",
  "program.d3.evening": "ALPS CONNECT: conference, dinner and after-party",
  "program.d4.date": "DEC 4",
  "program.d4.title": "Your own pace",
  "program.d4.morning": "Ski at your own pace, a trip to Innsbruck or the Aqua Dome thermal baths",
  "program.d4.evening": "Expert Tables — discuss your own cases and projects with speakers and experts in small groups",
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
  "hotels.bookSingle": "Book single occupancy online",
  "hotels.bookDouble": "Book double occupancy online",
  "hotels.chooseSuite": "Choose a suite and book online",
  "hotels.close": "Close",

  // Secret Sölden detail page
  "secret.back": "Back to hotels",
  "secret.dates": "1.12 – 06.12.2026",
  "secret.heroIntro": "A premium design hotel in the heart of Sölden. Spacious suites, a SPA area and top-tier service for a comfortable mountain stay.",
  "secret.pill1": "5 nights stay",
  "secret.pill2": "Breakfast included",
  "secret.pill3": "Native Code programme participation",
  "secret.sectionTitle": "All options include 5 nights, breakfast and participation in the NATIVE CODE programme.",
  "secret.sectionSub": "Price is per person based on the number of guests.",
  "secret.bookHeader": "Online booking and payment",
  "secret.bookNote": "Instant booking confirmation after payment.",
  "secret.bookNoteShort": "Instant confirmation",
  "secret.guarantee.t": "Secure your spot",
  "secret.guarantee.b": "Suite availability is limited.",
  "secret.consultant.t": "Book with a consultant",
  "secret.consultant.b": "We'll answer your questions and help you choose.",
  "secret.perPerson": "/ person",
  "secret.guests1": "1 person",
  "secret.guests2": "2 people",
  "secret.guests3": "3 people",
  "secret.guests4": "4 people",
  "secret.guests6": "6 people",
  "secret.guests8": "8 people",

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
  "cta.partner.btn": "Sponsorship packages",
  "cta.speaker.t": "BUSINESS PROGRAM\nALPS CONNECT",
  "cta.speaker.b": "A detailed schedule of two business days: talks, discussions, case studies and new business opportunities in new countries.",
  "cta.speaker.btn": "ALPS CONNECT program",
  "cta.creators": "Creators of NATIVE CODE",
  "cta.about": "ABOUT THE PROJECT",

  "footer.tagline": "Dec 1-6, Sölden • Austria. Entrepreneurs and investors from different countries.",
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
