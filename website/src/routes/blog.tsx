import { createFileRoute } from "@tanstack/react-router";
import { ArticlesGrid } from "@/components/website/articles-grid";
import { BlogHero } from "@/components/website/blog-hero";
import { LocationsFooter } from "@/components/website/blog-locations-footer";
import { Footer } from "@/components/website/footer";
import { Navbar } from "@/components/website/navbar";
import { Newsletter } from "@/components/website/newsletter";

export const Route = createFileRoute("/blog")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <BlogHero />
        <Newsletter />
        <ArticlesGrid />
      </main>
      <LocationsFooter />
      <Footer />
    </div>
  );
}
