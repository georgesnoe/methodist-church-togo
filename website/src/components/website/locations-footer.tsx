import { IconMapPin, IconPhone } from "@tabler/icons-react";

export function LocationsFooter() {
  return (
    <section className="bg-black text-white py-20 px-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          {
            city: "Lomé, Maritime",
            addr: "Avenue de la Foi, Lomé, Togo",
            phone: "+228 22 20 00 00",
          },
          {
            city: "Atakpamé, Plateaux",
            addr: "Rue du Temple, Atakpamé, Togo",
            phone: "+228 22 30 00 00",
          },
          {
            city: "Kara, Kara",
            addr: "Boulevard de l'Espoir, Kara, Togo",
            phone: "+228 22 40 00 00",
          },
        ].map((loc) => (
          <div key={loc.city} className="flex gap-4">
            <div className="w-12 h-12 bg-accent-gold rounded-full flex-shrink-0 flex items-center justify-center text-white">
              <IconMapPin size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{loc.city}</h3>
              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                {loc.addr}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium">
                <IconPhone size={16} /> {loc.phone}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
