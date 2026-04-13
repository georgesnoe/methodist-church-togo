export function LocationsFooter() {
  return (
    <section className="bg-black text-white py-20 px-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          {
            city: "Los Angeles, CA",
            addr: "1000 S Westgate Ave Saint Los Angeles, 90049",
            phone: "(310) 747 - 1374",
          },
          {
            city: "San Francisco, CA",
            addr: "5482 Adobe Falls Rd #15 San Francisco, 94102",
            phone: "(414) 321 - 7956",
          },
          {
            city: "New York, NY",
            addr: "10087 Thorne St, Saint Av New York, NY 10029",
            phone: "(518) 394 - 3856",
          },
        ].map((loc) => (
          <div key={loc.city} className="flex gap-4">
            <div className="w-12 h-12 bg-accent-gold rounded-full flex-shrink-0 flex items-center justify-center text-white">
              📍
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{loc.city}</h3>
              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                {loc.addr}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium">
                <span>📞</span> {loc.phone}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
