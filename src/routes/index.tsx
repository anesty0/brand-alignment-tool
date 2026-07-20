import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { SpecialGuest } from "@/components/site/SpecialGuest";
import { Solden } from "@/components/site/Solden";
import { AlpsConnect } from "@/components/site/AlpsConnect";
import { Program } from "@/components/site/Program";
import { Hotels } from "@/components/site/Hotels";
import { Included } from "@/components/site/Included";
import { CtaBanners } from "@/components/site/CtaBanners";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    document.title = "Native Code - Ski Opening 2027 in Sölden, Austria";
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <AlpsConnect />
      <Program />
      <SpecialGuest />
      <Hotels />
      <Solden />
      <Included />
      <CtaBanners />
      <Footer />
    </main>
  );
}
