import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/website/footer";
import { MinistriesGrid } from "@/components/website/ministries-grid";
import { MinistriesHero } from "@/components/website/ministries-hero";
import { MinistriesLocations } from "@/components/website/ministries-locations";
import { Navbar } from "@/components/website/navbar";

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
