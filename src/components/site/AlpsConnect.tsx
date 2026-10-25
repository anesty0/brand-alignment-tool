import a1 from "@/assets/zell/alps-connect-1.webp";
import a2 from "@/assets/zell/alps-connect-2.webp";
import a3 from "@/assets/alps-3.webp";
import { useI18n } from "@/lib/i18n";
import { pdfButtonClass } from "./pdfButtonStyles";

export function AlpsConnect() {
  const { t } = useI18n();
  const items = [
    { img: a1, k: "alps.c1", alt: "Wine glasses by the window overlooking Lake Zell and the Alps" },
    { img: a2, k: "alps.c2", alt: "Event hall at the Grand Hotel Zell am See set up with round tables" },
    { img: a3, k: "alps.c3", alt: "Participants meeting during a networking break" },
  ];
  return (
    <section id="alps" className="scroll-mt-32 md:scroll-mt-40 py-10 md:py-14 lg:py-10 xl:py-12">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[11px] md:text-xs font-bold tracking-[0.22em] text-orange">{t("alps.kicker")}</div>
          <h3 className="mt-3 text-2xl md:text-4xl font-extrabold tracking-tight text-navy">ALPS CONNECT</h3>
          <p className="mt-3 text-base md:text-lg font-bold text-navy">{t("alps.sub")}</p>
          <p className="mt-4 text-sm md:text-base font-semibold text-navy">{t("alps.date")}</p>
          <div className="mt-3 space-y-3 text-sm md:text-base text-foreground/75 leading-relaxed">
            <p>{t("alps.body1")}</p>
            <p>{t("alps.body2")}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col">
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
              className={pdfButtonClass}
            >
              {t("alps.programBtn")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
