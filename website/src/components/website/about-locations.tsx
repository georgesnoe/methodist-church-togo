import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

export function AboutLocations() {
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
          <div className="space-y-8 text-left">
            <div>
              <p className="text-zinc-500 text-sm mb-1">Téléphone</p>
              <p className="text-xl font-bold">+228 22 20 00 00</p>
            </div>
            <div>
              <p className="text-zinc-500 text-sm mb-1">Adresse</p>
              <p className="text-xl font-bold leading-tight">
                Avenue de la Foi\n                <br />\n                Lomé, Togo
              </p>
            </div>
            <div>
              <p className="text-zinc-500 text-sm mb-1">Email</p>
              <p className="text-xl font-bold">contact@emtogo.org</p>
            </div>
            <div>
              <p className="text-zinc-500 text-sm mb-1">Nos horaires</p>
              <p className="text-xl font-bold">
                Lun - Ven | 07:00 - 19:00
              </p>
              <p className="text-xl font-bold">
                Sam - Dim | 08:00 - 18:00
              </p>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors"
              >
                <IconArrowLeft size={24} />
              </button>
              <button
                type="button"
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors"
              >
                <IconArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
        <div className="relative h-[600px] rounded-[3rem] overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1200"
            alt="Lomé"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute bottom-10 left-10 right-10">
            <div className="flex items-center gap-4">
              <div className="h-px bg-white flex-1"></div>
              <h3 className="text-4xl font-bold">Lomé, Togo</h3>
              <div className="h-px bg-white flex-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
