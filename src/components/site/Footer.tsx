import { Instagram, Send, MessageCircle, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-navy text-white/85">
      <div className="container-x py-10 md:py-14 lg:py-10 xl:py-12 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="font-extrabold tracking-tight text-lg">NATIVE CODE</div>
          <div className="text-xs font-semibold tracking-[0.18em] text-orange mt-1">{t("brand.line2")}</div>
          <p className="mt-4 text-sm text-white/70 max-w-xs">{t("footer.tagline")}</p>
          <div className="mt-5 flex items-center gap-3">
            <a href="https://instagram.com/" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-orange transition"><Instagram size={16} /></a>
            <a href="https://t.me/Irina_krasil" aria-label="Telegram" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-orange transition"><Send size={16} /></a>
            <a href="https://wa.me/306972801776" aria-label="WhatsApp" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-orange transition"><MessageCircle size={16} /></a>
            <a href="mailto:irina.krasilnikova1982@gmail.com" aria-label="Email" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-orange transition"><Mail size={16} /></a>
          </div>
        </div>
        <div className="text-sm">
          <div className="font-semibold text-white mb-3">{t("footer.nav")}</div>
          <ul className="space-y-2 text-white/70">
            <li><a href="#about" className="hover:text-orange transition">{t("nav.about")}</a></li>
            <li><a href="#program" className="hover:text-orange transition">{t("nav.program")}</a></li>
            <li><a href="#hotels" className="hover:text-orange transition">{t("nav.hotels")}</a></li>
            <li><a href="#alps" className="hover:text-orange transition">{t("nav.alps")}</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-semibold text-white mb-3">{t("footer.contacts")}</div>
          <ul className="space-y-2 text-white/70">
            <li>WhatsApp / Telegram</li>
            <li><a href="mailto:irina.krasilnikova1982@gmail.com" className="hover:text-orange transition">irina.krasilnikova1982@gmail.com</a></li>
            <li>Sölden, Tyrol, Austria</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/60">
          <span>{t("footer.rights")}</span>
          <span>{t("footer.made")}</span>
        </div>
      </div>
    </footer>
  );
}
