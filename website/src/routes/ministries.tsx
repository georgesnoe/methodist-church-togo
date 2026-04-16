import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "src/components/website/footer";
import { MinistriesGrid } from "src/components/website/ministries-grid";
import { MinistriesHero } from "src/components/website/ministries-hero";
import { MinistriesLocations } from "src/components/website/ministries-locations";
import { Navbar } from "src/components/website/navbar";

export const Route = createFileRoute("/ministries")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <MinistriesHero />
        <MinistriesGrid />
      </main>
      <MinistriesLocations />
      <Footer />
    </div>
  );
}
