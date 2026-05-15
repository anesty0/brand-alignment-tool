import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Native Code - Ski Opening 2027 in Sölden, Austria" },
      { name: "description", content: "1-6 December 2027 • Sölden, Austria. Five days in the Alps for entrepreneurs and investors: skiing by day, deep conversations by night." },
    ],
  }),
});


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
      <Footer />
    </main>
  );
}
