import { Users, ArrowRight } from "lucide-react";
import a1 from "@/assets/alps-1.webp";
import a2 from "@/assets/alps-2.webp";
import a3 from "@/assets/alps-3.webp";
import { useI18n } from "@/lib/i18n";

export function AlpsConnect() {
  const { t } = useI18n();
  const items = [
    { img: a1, k: "alps.c1", alt: "Guests talking at the Gurgl Carat conference centre" },
    { img: a2, k: "alps.c2", alt: "Conference hall at Gurgl Carat set up for a session" },
    { img: a3, k: "alps.c3", alt: "Participants meeting during a networking break" },
  ];
  return (
    <section id="alps" className="scroll-mt-32 md:scroll-mt-40 py-10 md:py-14 lg:py-10 xl:py-12">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[11px] md:text-xs font-bold tracking-[0.22em] text-orange">{t("alps.kicker")}</div>
          <h3 className="mt-3 text-2xl md:text-4xl font-extrabold tracking-tight text-navy">ALPS CONNECT</h3>
          <p className="mt-3 text-sm md:text-base font-semibold text-navy">{t("alps.date")}</p>
          <p className="mt-1 text-base md:text-lg text-foreground/80 whitespace-pre-line">{t("alps.title")}</p>
        </div>

        <div className="mt-10 flex flex-col">
          <div className="order-2 md:order-1 grid md:grid-cols-3 gap-5 md:gap-6">
            {items.map((it) => (
              <div key={it.k} className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] group">
                <img src={it.img} alt={it.alt} loading="lazy" className="w-full h-64 md:h-72 object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-white text-base md:text-lg font-light tracking-wide leading-snug">{t(it.k)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Program & speakers PDF — above pictures on mobile, centered below cards on desktop */}
          <div className="order-1 md:order-2 mb-6 md:mb-0 md:mt-10 flex justify-center">
            <a
              href="/alps-connect.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full md:w-auto items-center justify-center gap-3 rounded-md bg-navy text-white px-6 py-3.5 text-xs md:text-sm font-semibold tracking-[0.12em] uppercase hover:brightness-125 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
            >
              <Users size={18} strokeWidth={2} aria-hidden="true" className="text-orange" />
              <span>{t("alps.programBtn")}</span>
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" className="ml-auto md:ml-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
