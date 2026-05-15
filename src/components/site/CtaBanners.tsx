import { Handshake, Mic, MessageCircle, Send, Mail, Instagram } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

const WA = "https://wa.me/";

export function CtaBanners() {
  const { t } = useI18n();
  return (
    <section id="contact" className="py-8 md:py-12 bg-background">
      <div className="container-x grid lg:grid-cols-[1fr_1fr_0.8fr] gap-6">
        <div className="rounded-2xl bg-orange-soft p-6 md:p-8 flex gap-5 items-center">
          <Handshake className="text-orange shrink-0" size={48} strokeWidth={1.5} />
          <div className="flex-1">
            <h4 className="text-base md:text-lg font-extrabold tracking-wide text-navy">{t("cta.partner.t")}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{t("cta.partner.b")}</p>
            <a href={WA} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-5 py-2.5 text-xs font-semibold tracking-wider hover:brightness-110 transition">
              <MessageCircle size={14} /> {t("cta.partner.btn")}
            </a>
          </div>
        </div>

        <div className="rounded-2xl bg-secondary p-6 md:p-8 flex gap-5 items-center">
          <Mic className="text-navy shrink-0" size={48} strokeWidth={1.5} />
          <div className="flex-1">
            <h4 className="text-base md:text-lg font-extrabold tracking-wide text-navy">{t("cta.speaker.t")}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{t("cta.speaker.b")}</p>
            <a href={WA} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-md bg-navy text-white px-5 py-2.5 text-xs font-semibold tracking-wider hover:brightness-125 transition">
              <MessageCircle size={14} /> {t("cta.speaker.btn")}
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-border p-6 md:p-8 flex flex-col justify-center text-center">
          <h4 className="text-sm md:text-base font-bold text-navy">{t("cta.creators")}</h4>
          <button className="mt-4 mx-auto inline-flex rounded-md border border-border px-6 py-2.5 text-xs font-semibold tracking-wider text-navy hover:border-orange hover:text-orange transition">
            {t("cta.about")}
          </button>
          <div className="mt-5 flex justify-center gap-4 text-muted-foreground">
            <a href={WA} aria-label="WhatsApp" className="hover:text-emerald-600 transition"><MessageCircle size={16} /></a>
            <a href="https://t.me/" aria-label="Telegram" className="hover:text-info transition"><Send size={16} /></a>
            <a href="https://instagram.com/" aria-label="Instagram" className="hover:text-orange transition"><Instagram size={16} /></a>
            <a href="mailto:hello@nativecode.events" aria-label="Email" className="hover:text-orange transition"><Mail size={16} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
