import { createFileRoute } from "@tanstack/react-router";
import { AboutContent } from "@/components/website/about-content";
import { Footer } from "@/components/website/footer";
import { InfoBar } from "@/components/website/info-bar";
import { MoreMinistries } from "@/components/website/more-ministries";
import { Navbar } from "@/components/website/navbar";
import { YouthGroupHero } from "@/components/website/youth-group-hero";
import { Locations } from "@/components/website/youth-group-locations";

export const Route = createFileRoute("/youth-group")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <YouthGroupHero />
        <InfoBar />
        <AboutContent />
        <MoreMinistries />
      </main>
      <Locations />
      <Footer />
    </div>
  );
}
