import { Button } from "./button";
import { MinistryCard } from "./ministry-card";

export function MinistriesHero() {
  return (
    <section className="relative bg-black text-white pt-32 pb-20 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-left relative z-10">
          <p className="text-accent-gold font-medium italic text-2xl mb-4">
            Schedule
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Explore our <br />
            Ministries
          </h1>
          <p className="text-zinc-400 text-lg mb-10 max-w-md leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa.
          </p>
          <Button variant="secondary">Get involved</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
          <MinistryCard
            ministry={{
              title: "Family Group Reunion",
              day: "SUNDAY",
              time: "8:00 PM",
              img: "https://images.unsplash.com/photo-1511895426328-dc8719599ca4?auto=format&fit=crop&q=80&w=800",
            }}
            className="h-[450px]"
          />
          <MinistryCard
            ministry={{
              title: "Youth Group Reunion",
              day: "FRIDAY",
              time: "7:00 PM",
              img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
            }}
            className="h-[450px] mt-12"
          />
        </div>
      </div>
    </section>
  );
}
