import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/website/footer";
import { Navbar } from "@/components/website/navbar";
import { NotFoundHero } from "@/components/website/not-found-hero";
import { NotFoundLocationsFooter } from "@/components/website/not-found-locations-footer";

export const Route = createFileRoute("/not-found")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-black font-sans">
      <Navbar />
      <main>
        <NotFoundHero />
      </main>
      <NotFoundLocationsFooter />
      <Footer />
    </div>
  );
}
