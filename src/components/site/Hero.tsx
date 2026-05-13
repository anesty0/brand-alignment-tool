import heroImg from "@/assets/hero-skiers.jpg";
import { MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Skiers in Sölden Alps" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="relative container-x pt-12 md:pt-20 pb-24 md:pb-40">
        <div className="max-w-2xl">
          <h1 className="font-extrabold tracking-tight text-navy leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            NATIVE CODE
          </h1>
          <h2 className="mt-2 text-orange font-extrabold tracking-tight leading-[0.95] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            SKI OPENING 2027
          </h2>

          <p className="mt-6 text-base md:text-lg text-foreground/80 max-w-md">
            5 дней в Альпах: днём горы, вечером — разговоры
          </p>

          <div className="mt-6 space-y-1">
            <div className="text-xl md:text-2xl font-bold text-navy tracking-tight">1 — 6 DECEMBER</div>
            <div className="text-xl md:text-2xl font-bold text-navy tracking-tight flex items-center gap-2">
              SÖLDEN • AUSTRIA <span aria-hidden>🇦🇹</span>
            </div>
          </div>

          <p className="mt-4 text-sm md:text-base text-foreground/75 max-w-md">
            Встреча предпринимателей<br />и инвесторов из разных стран
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#hotels" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3.5 text-xs font-semibold tracking-[0.12em] hover:brightness-110 transition shadow-[var(--shadow-soft)]">
              ЗАБРОНИРОВАТЬ УЧАСТИЕ
            </a>
            <a href="#program" className="inline-flex items-center justify-center rounded-md bg-background border border-border text-navy px-6 py-3.5 text-xs font-semibold tracking-[0.12em] hover:border-orange hover:text-orange transition">
              ПРОГРАММА
            </a>
          </div>
        </div>

        {/* Floating WhatsApp card */}
        <div className="hidden md:block absolute right-6 lg:right-10 top-6 lg:top-10 bg-background/90 backdrop-blur rounded-xl px-4 py-3 shadow-[var(--shadow-card)] border border-border max-w-[280px]">
          <div className="flex items-center gap-2 text-sm font-semibold text-info">
            <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-emerald-500/15 text-emerald-600">
              <MessageCircle size={16} />
            </span>
            Написать в WhatsApp
          </div>
          <p className="mt-1.5 text-xs text-muted-foreground leading-snug">
            По вопросам и участию —<br />подскажем в WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}
