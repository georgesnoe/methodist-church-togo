import { Button } from "./button";
import { SectionHeading } from "./section-heading";

export function Ministries() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <SectionHeading
          overline="Our ministries"
          title="We have the perfect ministry for you"
        />
        <div className="flex gap-3 mb-12">
          <button
            type="button"
            className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-zinc-800 transition-colors"
          >
            ←
          </button>
          <button
            type="button"
            className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-zinc-800 transition-colors"
          >
            →
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {[
          {
            title: "Young Kids Group Reunion",
            day: "SUNDAY",
            time: "4:00 PM",
            img: "https://images.unsplash.com/photo-1472162072942-f474f3771c70?auto=format&fit=crop&q=80&w=800",
          },
          {
            title: "Youth Group Reunion",
            day: "FRIDAY",
            time: "7:00 PM",
            img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
          },
        ].map((ministry) => (
          <div
            key={ministry.title}
            className="group relative h-100 rounded-[2rem] overflow-hidden cursor-pointer"
          >
            <img
              src={ministry.img}
              alt={ministry.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end text-white">
              <h3 className="text-3xl font-bold mb-4">{ministry.title}</h3>
              <div className="flex items-center gap-4 text-sm opacity-90">
                <span className="flex items-center gap-1">
                  📅 {ministry.day}
                </span>
                <span>—</span>
                <span className="flex items-center gap-1">
                  🕒 {ministry.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4">
        <Button>Get involved</Button>
        <Button variant="secondary">Browse all ministers</Button>
      </div>
    </section>
  );
}
