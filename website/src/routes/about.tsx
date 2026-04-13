import { createFileRoute } from "@tanstack/react-router";
import { AboutHero } from "@/components/website/about-hero";
import { AboutLocations } from "@/components/website/about-locations";
import { AboutPastors } from "@/components/website/about-pastors";
import { FaithStatement } from "@/components/website/faith-statement";
import { Footer } from "@/components/website/footer";
import { MissionVision } from "@/components/website/mission-vision";
import { Navbar } from "@/components/website/navbar";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <AboutHero />
        <MissionVision />
        <AboutPastors />
        <FaithStatement />
        <AboutLocations />
      </main>
      <Footer />
    </div>
  );
}
