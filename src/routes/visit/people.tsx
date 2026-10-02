import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { VisitHero } from "@/components/site/VisitHero";
import { About } from "@/components/site/About";
import { Program } from "@/components/site/Program";
import { Included } from "@/components/site/Included";
import { Hotels } from "@/components/site/Hotels";
import { SpecialGuest } from "@/components/site/SpecialGuest";
import { AlpsConnect } from "@/components/site/AlpsConnect";
import { Solden } from "@/components/site/Solden";
import { CtaBanners } from "@/components/site/CtaBanners";
import { Footer } from "@/components/site/Footer";
import { ContactsContext, VISIT_CONTACTS } from "@/lib/contacts";
import { useI18n } from "@/lib/i18n";
import { useDocumentMeta } from "@/lib/useDocumentMeta";

export const Route = createFileRoute("/visit/people")({
  component: VisitPeoplePage,
});

/**
 * Community-led presentation of the trip. Shares every section component with the
 * homepage — only the hero and the section order differ.
 */
function VisitPeoplePage() {
  const { t } = useI18n();

  useDocumentMeta({
    title: t("visit.people.metaTitle"),
    description: t("visit.people.metaDesc"),
    canonical: "/visit/people",
  });

  return (
    <ContactsContext.Provider value={VISIT_CONTACTS}>
      <main className="min-h-screen bg-background text-foreground">
        <Navbar inPageLinks />
        <VisitHero variant="people" />
        <About />
        <Program />
        {/* Anchor for the hero's primary CTA. Added here rather than inside
            Included.tsx so the homepage markup is untouched. */}
        <div id="included" className="scroll-mt-32 md:scroll-mt-40">
          <Included />
        </div>
        <Hotels />
        <SpecialGuest />
        <AlpsConnect />
        <Solden />
        <CtaBanners />
        <Footer />
      </main>
    </ContactsContext.Provider>
  );
}
