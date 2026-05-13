import a1 from "@/assets/alps-1.jpg";
import a2 from "@/assets/alps-2.jpg";
import a3 from "@/assets/alps-3.jpg";

const items = [
  { img: a1, title: "Проекты и решения" },
  { img: a2, title: "Gurgl Carat — 1950 м над уровнем моря" },
  { img: a3, title: "Люди и новые связи" },
];

export function AlpsConnect() {
  return (
    <section id="alps" className="py-10 md:py-14">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy">ALPS CONNECT</h3>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            На высоте 1950 метров разговоры звучат иначе
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map((it) => (
            <div key={it.title} className="group">
              <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
                <img src={it.img} alt={it.title} loading="lazy" className="w-full h-56 md:h-64 object-cover group-hover:scale-[1.03] transition-transform duration-500" />
              </div>
              <p className="mt-4 text-center text-sm md:text-base font-medium text-navy leading-snug">{it.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
