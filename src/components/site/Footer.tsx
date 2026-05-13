export function Footer() {
  return (
    <footer className="bg-navy text-white/85">
      <div className="container-x py-10 md:py-14 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="font-extrabold tracking-tight text-lg">NATIVE CODE</div>
          <div className="text-xs font-semibold tracking-[0.18em] text-orange mt-1">SKI OPENING 2027</div>
          <p className="mt-4 text-sm text-white/70 max-w-xs">
            1—6 декабря, Sölden • Austria. Встреча предпринимателей и инвесторов из разных стран.
          </p>
        </div>
        <div className="text-sm">
          <div className="font-semibold text-white mb-3">Навигация</div>
          <ul className="space-y-2 text-white/70">
            <li><a href="#about" className="hover:text-orange transition">О событии</a></li>
            <li><a href="#program" className="hover:text-orange transition">Программа</a></li>
            <li><a href="#hotels" className="hover:text-orange transition">Проживание</a></li>
            <li><a href="#alps" className="hover:text-orange transition">Alps Connect</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-semibold text-white mb-3">Контакты</div>
          <ul className="space-y-2 text-white/70">
            <li>WhatsApp / Telegram</li>
            <li>hello@nativecode.events</li>
            <li>Sölden, Tyrol, Austria</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/60">
          <span>© 2027 Native Code. All rights reserved.</span>
          <span>Made with care in the Alps</span>
        </div>
      </div>
    </footer>
  );
}
