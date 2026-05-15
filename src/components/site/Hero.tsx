import heroImg from "@/assets/hero-skiers.jpg";
import { MessageCircle, Send, Instagram, Mail, Calendar, Users, Mountain, Briefcase } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();
  const blocks = [
    { icon: Users, k: "about.f2.t" },
    { icon: Mountain, k: "about.f3.t" },
    { icon: Briefcase, k: "about.f4.t" },
    { icon: Calendar, k: "about.f1.t" },
  ];
  return (
    <section id="top" className="relative overflow-hidden">
      {/* background image with cinematic fade */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Skiers in Sölden Alps" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      <div className="relative container-x pt-8 md:pt-14 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-start">
          <div className="max-w-2xl">
            <h1 className="font-extrabold tracking-tight text-navy leading-[0.95] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              NATIVE CODE
            </h1>
            <h2 className="mt-2 text-orange font-extrabold tracking-tight leading-[0.95] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {t("brand.line2")}
            </h2>

            <p className="mt-5 text-base md:text-lg text-foreground/80 max-w-md leading-snug">
              {t("hero.tagline")}
            </p>

            <div className="mt-5 space-y-1">
              <div className="text-lg md:text-xl font-bold text-navy tracking-tight">{t("hero.dates")}</div>
              <div className="text-lg md:text-xl font-bold text-navy tracking-tight flex items-center gap-2">
                {t("hero.place")} <span aria-hidden>🇦🇹</span>
              </div>
            </div>

            <p className="mt-3 text-sm md:text-base text-foreground/75 max-w-md">
              {t("hero.sub")}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#hotels" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 text-xs font-semibold tracking-[0.12em] hover:brightness-110 transition shadow-[var(--shadow-soft)]">
                {t("hero.cta1")}
              </a>
              <a href="#program" className="inline-flex items-center justify-center rounded-md bg-background border border-border text-navy px-5 py-3 text-xs font-semibold tracking-[0.12em] hover:border-orange hover:text-orange transition">
                {t("hero.cta2")}
              </a>
            </div>
          </div>

          {/* Right side info column */}
          <aside className="space-y-3 lg:sticky lg:top-24">
            {/* Socials + WhatsApp */}
            <div className="bg-background/90 backdrop-blur rounded-xl px-4 py-3.5 shadow-[var(--shadow-card)] border border-border">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2.5">
                <a href="https://t.me/" target="_blank" rel="noreferrer" aria-label="Telegram" className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-info hover:text-orange transition"><Send size={14} /></a>
                <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-navy hover:text-orange transition"><Instagram size={14} /></a>
                <a href="mailto:hello@nativecode.events" aria-label="Email" className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-orange hover:text-navy transition"><Mail size={14} /></a>
              </div>
              <a href="https://wa.me/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-info">
                <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-emerald-500/15 text-emerald-600">
                  <MessageCircle size={16} />
                </span>
                {t("hero.whatsapp")}
              </a>
              <p className="mt-1.5 text-xs text-muted-foreground leading-snug">{t("hero.whatsappSub")}</p>
            </div>

            {/* 4 mini info blocks */}
            <div className="grid grid-cols-2 gap-2.5">
              {blocks.map((b) => (
                <div key={b.k} className="bg-background/85 backdrop-blur rounded-lg border border-border px-3 py-3 shadow-[var(--shadow-card)]">
                  <b.icon size={18} strokeWidth={1.6} className="text-orange" />
                  <div className="mt-1.5 text-[10px] font-bold tracking-[0.14em] text-navy">{t(b.k)}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
