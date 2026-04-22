import { IconMail, IconPhone, IconPlus, IconX } from "@tabler/icons-react";

import { useRef, useState } from "react";

export function LocationsAccordion() {
  const [active, setActive] = useState(0);
  const locations = useRef([
    {
      city: "Lomé, Maritime",
      desc: "Notre église principale située au cœur de la capitale, accueillant une communauté diversifiée pour le culte et l'entraide.",
      email: "lome@emtogo.org",
      phone: "+228 22 20 00 00",
    },
    {
      city: "Atakpamé, Plateaux",
      desc: "Un centre spirituel dynamique servant la région des Plateaux avec dévouement et amour chrétien.",
      email: "atakpame@emtogo.org",
      phone: "+228 22 30 00 00",
    },
    {
      city: "Kara, Kara",
      desc: "Une communauté engagée dans la croissance spirituelle et le soutien social dans le nord du pays.",
      email: "kara@emtogo.org",
      phone: "+228 22 40 00 00",
    },
  ]);

  return (
    <section className="bg-black text-white py-32 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-left mb-16">
            <p className="text-accent-gold font-medium italic text-xl mb-4">
              Nos localisations
            </p>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Venez nous rendre visite !
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Nous sommes présents dans plusieurs régions du Togo pour vous accueillir 
              et partager ensemble la joie de l'Évangile. Nos portes sont toujours 
              ouvertes pour tous.
            </p>
          </div>
          <div className="space-y-4">
            {locations.current.map((loc, i) => (
              <div key={loc.city} className="border-b border-zinc-800">
                <button
                  type="button"
                  onClick={() => setActive(active === i ? -1 : i)}
                  className="w-full py-6 flex justify-between items-center text-left group"
                >
                  <span className="text-2xl md:text-3xl font-bold group-hover:text-accent-gold transition-colors">
                    {loc.city}
                  </span>
                  <span className="text-2xl">{active === i ? <IconX size={24} /> : <IconPlus size={24} />}</span>
                </button>
                {active === i && (
                  <div className="pb-8 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-zinc-400 leading-relaxed">{loc.desc}</p>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center text-white">
                        <IconMail size={20} />
                      </div>
                      <div>
                        <p className="text-zinc-500 text-xs uppercase font-bold">
                          Envoyez-nous un email
                        </p>
                        <p className="font-bold">{loc.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center text-white">
                        <IconPhone size={20} />
                      </div>
                      <div>
                        <p className="text-zinc-500 text-xs uppercase font-bold">
                          Appelez-nous
                        </p>
                        <p className="font-bold">{loc.phone}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[600px] rounded-[3rem] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1200"
            alt="Paysage Togo"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>
    </section>
  );
}
