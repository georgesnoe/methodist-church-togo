import { Button } from "./button";
import { IconCalendar, IconClock } from "@tabler/icons-react";


export function EventsHero() {
  return (
    <section className="relative bg-black text-white pt-32 pb-20 px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <p className="text-accent-gold font-medium italic text-2xl mb-4">
          Events
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Upcoming Events
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa
          dolore.
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1523580494863-6f30c65ul-6_3_1_2?auto=format&fit=crop&q=80&w=1200"
          alt="Women's Breakfast"
          className="w-full h-full object-cover rounded-[3rem]"
        />
        <div className="absolute bottom-10 left-10 max-w-md bg-white text-black p-10 rounded-3xl shadow-2xl z-20">
          <div className="flex items-center gap-4 text-sm font-bold text-zinc-500 mb-4">
            <span className="flex items-center gap-1"><IconCalendar size={16} /> MAR 13, 2025</span>
            <span>—</span>
            <span className="flex items-center gap-1"><IconClock size={16} /> 10:00 PM</span>
          </div>
          <h3 className="text-3xl font-bold mb-4">Womans Breakfast</h3>
          <p className="text-zinc-600 mb-8 leading-relaxed">
            Lacus nibh habitant consequat odio nunc hendrerit quis eget
            hendrerit purus faucibus id eget fusce sed netus.
          </p>
          <Button className="w-full">Register to event</Button>
        </div>
      </div>
    </section>
  );
}
