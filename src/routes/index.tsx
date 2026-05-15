import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Solden } from "@/components/site/Solden";
import { AlpsConnect } from "@/components/site/AlpsConnect";
import { Program } from "@/components/site/Program";
import { Hotels } from "@/components/site/Hotels";
import { Included } from "@/components/site/Included";
import { CtaBanners } from "@/components/site/CtaBanners";
import { Footer } from "@/components/site/Footer";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Native Code — Ski Opening 2027 in Sölden, Austria" },
      { name: "description", content: "1—6 December 2027 • Sölden, Austria. Five days in the Alps for entrepreneurs and investors: skiing by day, deep conversations by night." },
    ],
  }),
});

function CreatorsStrip() {
  const { lang } = useI18n();
  return (
    <section className="py-8 md:py-10 border-t border-border/60">
      <div className="container-x flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <h4 className="text-sm md:text-base font-bold tracking-wide text-navy">
          {lang === "ru" ? "Создатели проекта & О проекте" : "Project creators & About the project"}
        </h4>
        <Link
          to="/about"
          className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-xs font-semibold tracking-[0.12em] text-navy hover:border-orange hover:text-orange transition"
        >
          {lang === "ru" ? "О ПРОЕКТЕ" : "ABOUT THE PROJECT"}
        </Link>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Solden />
      <AlpsConnect />
      <Program />
      <Hotels />
      <Included />
      <CtaBanners />
      <CreatorsStrip />
      <Footer />
    </main>
  );
}
