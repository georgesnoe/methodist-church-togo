import { IconMapPin, IconPhone } from "@tabler/icons-react";

export function Locations() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          city: "Los Angeles, CA",
          addr: "1000 S Westgate Ave Saint Los Angeles, 90049",
          phone: "(310) 747 - 1374",
        },
        {
          city: "San Francisco, CA",
          addr: "5482 Anson Falls Rd #15 San Francisco, 94102",
          phone: "(414) 321 - 7956",
        },
        {
          city: "New York, NY",
          addr: "10087 Thorne St, Saint Av New York, NY 10029",
          phone: "(518) 394 - 3856",
        },
      ].map((loc) => (
        <div
          key={loc.city}
          className="p-10 rounded-3xl border border-zinc-100 bg-white shadow-sm"
        >
          <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center text-white mb-6">
            <IconMapPin size={24} />
          </div>
          <h3 className="text-xl font-bold mb-4">{loc.city}</h3>
          <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
            {loc.addr}
          </p>
          <div className="flex items-center gap-3 text-sm font-medium">
            <IconPhone size={16} /> {loc.phone}
          </div>
        </div>
      ))}
    </section>
  );
}
