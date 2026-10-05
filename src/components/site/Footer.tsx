import { Instagram, Facebook, Send, MessageCircle, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useContacts } from "@/lib/contacts";

export function Footer() {
  const { t } = useI18n();
  const { whatsappUrl, telegramUrl, email, instagramUrl, facebookUrl } = useContacts();
  return (
    <footer className="bg-navy text-white/85">
      <div className="container-x py-10 md:py-14 lg:py-10 xl:py-12 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="font-extrabold tracking-tight text-lg">NATIVE CODE</div>
          <div className="text-xs font-semibold tracking-[0.18em] text-orange mt-1">{t("brand.line2")}</div>
          <p className="mt-4 text-sm text-white/70 max-w-xs">{t("footer.tagline")}</p>
          <div className="mt-5 flex items-center gap-3">
            <a href={instagramUrl} target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-orange transition"><Instagram size={16} /></a>
            <a href={facebookUrl} target="_blank" rel="noreferrer noopener" aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-orange transition"><Facebook size={16} /></a>
            <a href={telegramUrl} aria-label="Telegram" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-orange transition"><Send size={16} /></a>
            <a href={whatsappUrl} aria-label="WhatsApp" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-orange transition"><MessageCircle size={16} /></a>
            <a href={`mailto:${email}`} aria-label="Email" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-orange transition"><Mail size={16} /></a>
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
            <li><a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-orange transition">WhatsApp</a> / <a href={telegramUrl} target="_blank" rel="noreferrer" className="hover:text-orange transition">Telegram</a></li>
            <li><a href={`mailto:${email}`} className="hover:text-orange transition">{email}</a></li>
            <li>Sölden, Tyrol, Austria</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/60">
          <span>{t("footer.rights")}</span>
        </div>
      </div>
    </footer>
  );
}
