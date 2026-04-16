import { createFileRoute } from "@tanstack/react-router";
import { ArticleContent } from "@/components/website/article-content";
import { BlogPostHero } from "@/components/website/blog-post-hero";
import { BlogPostLocationsFooter } from "@/components/website/blog-post-locations-footer";
import { Footer } from "@/components/website/footer";
import { LatestPosts } from "@/components/website/latest-posts";
import { Navbar } from "@/components/website/navbar";

export const Route = createFileRoute("/blog-post")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <BlogPostHero />
        <ArticleContent />
        <LatestPosts />
      </main>
      <BlogPostLocationsFooter />
      <Footer />
    </div>
  );
}
