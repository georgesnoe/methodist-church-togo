import { Button } from "./button";

export function MoreMinistries() {
  return (
    <section className="bg-black text-white py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold">More ministries</h2>
          <Button variant="secondary">Get involved</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Young Kids Group Reunion",
              day: "SUNDAY",
              time: "4:00 PM",
              img: "https://images.unsplash.com/photo-1472162072942-f474f3771c70?auto=format&fit=crop&q=80&w=800",
            },
            {
              title: "Women Group Reunion",
              day: "MONDAY",
              time: "1:00 PM",
              img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
            },
          ].map((m) => (
            <div
              key={m.title}
              className="group relative h-[400px] rounded-[2.5rem] overflow-hidden cursor-pointer"
            >
              <img
                src={m.img}
                alt={m.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-10 flex flex-col justify-end text-white">
                <h3 className="text-3xl font-bold mb-4">{m.title}</h3>
                <div className="flex items-center gap-4 text-sm font-medium opacity-90">
                  <span className="flex items-center gap-1">📅 {m.day}</span>
                  <span>—</span>
                  <span className="flex items-center gap-1">🕒 {m.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
