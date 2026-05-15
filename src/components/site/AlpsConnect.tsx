import a1 from "@/assets/alps-1.jpg";
import a2 from "@/assets/alps-2.jpg";
import a3 from "@/assets/alps-3.jpg";
import { useI18n } from "@/lib/i18n";

export function AlpsConnect() {
  const { t } = useI18n();
  const items = [
    { img: a1, k: "alps.c1" },
    { img: a2, k: "alps.c2" },
    { img: a3, k: "alps.c3" },
  ];
  return (
    <section id="alps" className="py-10 md:py-14 lg:py-10 xl:py-12">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[11px] md:text-xs font-bold tracking-[0.22em] text-orange">{t("alps.kicker")}</div>
          <h3 className="mt-3 text-2xl md:text-4xl font-extrabold tracking-tight text-navy">ALPS CONNECT</h3>
          <p className="mt-3 text-sm md:text-base font-semibold text-navy">{t("alps.date")}</p>
          <p className="mt-1 text-base md:text-lg text-foreground/80">{t("alps.title")}</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-5 md:gap-6">
          {items.map((it) => (
            <div key={it.k} className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] group">
              <img src={it.img} alt={t(it.k)} loading="lazy" className="w-full h-64 md:h-72 object-cover group-hover:scale-[1.04] transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-white text-base md:text-lg font-light tracking-wide leading-snug">{t(it.k)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
