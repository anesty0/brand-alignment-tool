import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "О СОБЫТИИ" },
  { href: "#program", label: "ПРОГРАММА" },
  { href: "#hotels", label: "ПРОЖИВАНИЕ" },
  { href: "#alps", label: "ALPS CONNECT" },
  { href: "#contact", label: "КОНТАКТЫ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/60">
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="leading-tight">
          <div className="font-extrabold tracking-tight text-base md:text-lg text-navy">NATIVE CODE</div>
          <div className="text-[10px] md:text-xs font-semibold tracking-[0.18em] text-orange">SKI OPENING 2027</div>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-xs font-semibold tracking-[0.12em] text-foreground/80 hover:text-orange transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#hotels" className="hidden sm:inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 md:px-5 py-2.5 md:py-3 text-xs font-semibold tracking-[0.1em] hover:brightness-110 transition shadow-[var(--shadow-soft)]">
            ЗАБРОНИРОВАТЬ УЧАСТИЕ
          </a>
          <button className="lg:hidden p-2 -mr-2 text-navy" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-x py-3 flex flex-col">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-sm font-semibold tracking-wider text-foreground/85 border-b border-border last:border-0">
                {l.label}
              </a>
            ))}
            <a href="#hotels" onClick={() => setOpen(false)} className="sm:hidden mt-3 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 text-xs font-semibold tracking-[0.1em]">
              ЗАБРОНИРОВАТЬ УЧАСТИЕ
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
