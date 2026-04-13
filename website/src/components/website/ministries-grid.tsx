import { MinistryCard } from "./ministry-card";

export function MinistriesGrid() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 leading-tight">
          We have the perfect <br />
          ministry for you
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "Women Group Reunion",
            day: "MONDAY",
            time: "1:00 PM",
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
          },
          {
            title: "Men Group Reunion",
            day: "TUESDAY",
            time: "8:00 PM",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
          },
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
        ].map((m) => (
          <MinistryCard key={m.title} ministry={m} />
        ))}
      </div>
    </section>
  );
}
