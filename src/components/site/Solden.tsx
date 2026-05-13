import slope from "@/assets/solden-slope.jpg";

export function Solden() {
  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container-x grid lg:grid-cols-[0.9fr_1.4fr] gap-8 lg:gap-12 items-center">
        <div>
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy leading-tight">
            SÖLDEN —<br />
            <span className="text-foreground/85 font-bold text-2xl md:text-3xl">один из лучших курортов Альп</span>
          </h3>
          <div className="mt-5 space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
            <p>Зёльден — два ледника<br />и стабильный снег.</p>
            <p>140+ км трасс и широкие склоны —<br />здесь удобно кататься в любом ритме.</p>
            <p>Термы Aqua Dome делают поездку<br />комфортной даже вне склонов.</p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
          <img src={slope} alt="Sölden ski slope" loading="lazy" className="w-full h-full object-cover aspect-[16/9]" />
        </div>
      </div>
    </section>
  );
}
