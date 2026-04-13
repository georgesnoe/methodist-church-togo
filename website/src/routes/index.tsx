import { createFileRoute } from "@tanstack/react-router";
import { Beliefs } from "@/components/website/beliefs";
import { Footer } from "@/components/website/footer";
import { Hero } from "@/components/website/hero";
import { JoinUsCTA } from "@/components/website/join-us-cta";
import { Locations } from "@/components/website/locations";
import { Ministries } from "@/components/website/ministries";
import { Navbar } from "@/components/website/navbar";
import { News } from "@/components/website/news";
import { Pastors } from "@/components/website/pastors";
import { Quote } from "@/components/website/quote";
import { Sermons } from "@/components/website/sermons";
import { Testimonials } from "@/components/website/testimonials";
import { WorshipImage } from "@/components/website/worship-image";

export const Route = createFileRoute("/")({ component: RouteComponent });

function RouteComponent() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <WorshipImage />
        <Beliefs />
        <Pastors />
        <JoinUsCTA />
        <Ministries />
        <Sermons />
        <Testimonials />
        <News />
        <Quote />
        <Locations />
      </main>
      <Footer />
    </div>
  );
}
