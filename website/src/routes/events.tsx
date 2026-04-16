import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { EventLocations } from "@/components/website/event-locations";
import { EventMonth } from "@/components/website/event-month";
import { EventsHero } from "@/components/website/events-hero";
import { Footer } from "@/components/website/footer";
import { Navbar } from "@/components/website/navbar";

export const Route = createFileRoute("/events")({
  component: RouteComponent,
});

function RouteComponent() {
  const eventData = useRef([
    {
      month: "February, 2025",
      events: [
        {
          title: "Family restoration time",
          date: "FEB 24, 2025",
          time: "2:00 PM",
          img: "https://images.unsplash.com/photo-1511895426328-dc8719599ca4?auto=format&fit=crop&q=80&w=800",
          description:
            "Lorem ipsum dolor sit amet consectetur dolorol adipiscing elit sed do eiusmod tempor.",
        },
        {
          title: "Family restoration time",
          date: "FEB 24, 2025",
          time: "10:00 AM",
          img: "https://images.unsplash.com/photo-1529070796766-3777ca99640a?auto=format&fit=crop&q=80&w=800",
          description:
            "Lorem ipsum dolor sit amet consectetur dolorol adipiscing elit sed do eiusmod tempor.",
        },
        {
          title: "Vigil and Prayer",
          date: "FEB 18, 2025",
          time: "7:00 PM",
          img: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=800",
          description:
            "Lorem ipsum dolor sit amet consectetur dolorol adipiscing elit sed do eiusmod tempor.",
        },
        {
          title: "Youth Meeting",
          date: "FEB 16, 2025",
          time: "1:00 PM",
          img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
          description:
            "Lorem ipsum dolor sit amet consectetur dolorol adipiscing elit sed do eiusmod tempor.",
        },
      ],
    },
    {
      month: "March, 2025",
      events: [
        {
          title: "Womans Breakfast",
          date: "MAR 13, 2025",
          time: "10:00 AM",
          img: "https://images.unsplash.com/photo-1516589174184-974767181939?auto=format&fit=crop&q=80&w=800",
          description:
            "Lorem ipsum dolor sit amet consectetur dolorol adipiscing elit sed do eiusmod tempor.",
        },
        {
          title: "Spreading the word",
          date: "MAR 10, 2025",
          time: "6:00 PM",
          img: "https://images.unsplash.com/photo-1472162072942-f474f3771c70?auto=format&fit=crop&q=80&w=800",
          description:
            "Lorem ipsum dolor sit amet consectetur dolorol adipiscing elit sed do eiusmod tempor.",
        },
      ],
    },
  ]);
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <EventsHero />
        {eventData.current.map((group) => (
          <EventMonth key={group.month} month={group.month} events={group.events} />
        ))}
      </main>
      <EventLocations />
      <Footer />
    </div>
  );
}
