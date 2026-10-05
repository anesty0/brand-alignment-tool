import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { VisitHero } from "@/components/site/VisitHero";
import { Solden } from "@/components/site/Solden";
import { Program } from "@/components/site/Program";
import { Included } from "@/components/site/Included";
import { Hotels } from "@/components/site/Hotels";
import { About } from "@/components/site/About";
import { AlpsConnect } from "@/components/site/AlpsConnect";
import { SpecialGuest } from "@/components/site/SpecialGuest";
import { CtaBanners } from "@/components/site/CtaBanners";
import { Footer } from "@/components/site/Footer";
import { ContactsContext, VISIT_CONTACTS } from "@/lib/contacts";
import { useI18n } from "@/lib/i18n";
import { useDocumentMeta } from "@/lib/useDocumentMeta";

export const Route = createFileRoute("/visit/ski")({
  component: VisitSkiPage,
});

/**
 * Skiing-led presentation of the same trip. Shares every section component with the
 * homepage — only the hero and the section order differ.
 */
function VisitSkiPage() {
  const { t } = useI18n();

  useDocumentMeta({
    title: t("visit.ski.metaTitle"),
    description: t("visit.ski.metaDesc"),
    canonical: "/visit/ski",
  });

  return (
    <ContactsContext.Provider value={VISIT_CONTACTS}>
      <main className="min-h-screen bg-background text-foreground">
        <Navbar inPageLinks />
        <VisitHero variant="ski" />
        <Solden />
        <Program />
        {/* Anchor for the hero's primary CTA. Added here rather than inside
            Included.tsx so the homepage markup is untouched. */}
        <div id="included" className="scroll-mt-32 md:scroll-mt-40">
          <Included />
        </div>
        <Hotels />
        <About />
        <AlpsConnect />
        <SpecialGuest />
        <CtaBanners />
        <Footer />
      </main>
    </ContactsContext.Provider>
  );
}
