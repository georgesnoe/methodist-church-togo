import { createFileRoute } from "@tanstack/react-router";
import { ContactHero } from "@/components/website/contact-hero";
import { FAQSection } from "@/components/website/faq-section";
import { Footer } from "@/components/website/footer";
import { LocationsAccordion } from "@/components/website/locations-accordion";
import { LocationsFooter } from "@/components/website/locations-footer";
import { Navbar } from "@/components/website/navbar";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <ContactHero />
        <LocationsAccordion />
        <FAQSection />
      </main>
      <LocationsFooter />
      <Footer />
    </div>
  );
}
