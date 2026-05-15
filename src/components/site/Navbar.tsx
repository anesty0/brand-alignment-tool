import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const linkKeys = [
  { href: "#about", k: "nav.about" },
  { href: "#program", k: "nav.program" },
  { href: "#hotels", k: "nav.hotels" },
  { href: "#alps", k: "nav.alps" },
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
        <a href="#top" className="leading-tight shrink-0">
          <div className="font-extrabold tracking-tight text-base md:text-lg text-navy">NATIVE CODE</div>
          <div className="text-[10px] md:text-[11px] font-semibold tracking-[0.18em] text-orange">{t("brand.line2")}</div>
        </a>
        <nav className="hidden lg:flex items-center gap-7">
          {linkKeys.map((l) => (
            <a key={l.href} href={l.href} className="text-xs font-semibold tracking-[0.12em] text-foreground/80 hover:text-orange transition-colors">
              {t(l.k)}
            </a>
          ))}
          <button onClick={() => setFaqOpen(true)} className="text-xs font-semibold tracking-[0.12em] text-foreground/80 hover:text-orange transition-colors">
            {t("nav.faq")}
          </button>
        </nav>
        <div className="flex items-center gap-2 md:gap-3">
          <LangSwitch className="hidden sm:inline-flex" />
          <a href="#hotels" className="hidden md:inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 lg:px-5 py-2.5 text-[11px] font-semibold tracking-[0.1em] hover:brightness-110 transition shadow-[var(--shadow-soft)]">
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
              <a href="#hotels" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 text-[11px] font-semibold tracking-[0.1em]">
                {t("nav.cta")}
              </a>
            </div>
          </div>
        </div>
      )}

      <Dialog open={faqOpen} onOpenChange={setFaqOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-navy text-xl md:text-2xl font-extrabold tracking-tight">{t("faq.title")}</DialogTitle>
          </DialogHeader>
          <Accordion type="single" collapsible className="w-full">
            {[1, 2, 3, 4].map((i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-sm md:text-base text-navy">
                  {lang === "ru" ? `Вопрос ${i}` : `Question ${i}`}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{t("faq.empty")}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </DialogContent>
      </Dialog>
    </header>
  );
}
