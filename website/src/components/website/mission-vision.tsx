import { Button } from "./button";
import { Link } from "@tanstack/react-router";

export function MissionVision() {
  return (
    <section className="bg-black text-white py-32 px-8 space-y-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[500px] rounded-[3rem] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800"
            alt="Mission"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div>
          <p className="text-accent-gold font-medium italic text-xl mb-4">
            Notre mission
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Nous nous appuyons sur la force de Dieu
          </h2>
          <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
            Notre mission est de proclamer l'Évangile de Jésus-Christ, de transformer 
            les vies par la Parole de Dieu et d'apporter l'espoir et la guérison 
            spirituelle à tous ceux qui cherchent la vérité.
          </p>
          <Link to="/contact">
            <Button variant="secondary">Nous rejoindre</Button>
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-accent-gold font-medium italic text-xl mb-4">
            Notre vision
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Nous répandons l'Évangile de Jésus
          </h2>
          <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
            Nous aspirons à être un phare de lumière et d'amour dans notre communauté, 
            en formant des disciples engagés et en bâtissant un royaume où 
            la justice et la paix de Dieu règnent.
          </p>
          <Link to="/contact">
            <Button variant="secondary">S'impliquer</Button>
          </Link>
        </div>
        <div className="relative h-[500px] rounded-[3rem] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=800"
            alt="Vision"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>
    </section>
  );
}
