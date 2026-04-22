import { Button } from "./button";
import { Link } from "@tanstack/react-router";

export function Beliefs() {
  return (
    <section className="bg-black text-white py-32 px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="text-accent-gold italic mb-4 text-6xl font-bold font-cursive -rotate-10">
          Ce en quoi nous croyons
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Au cœur de notre foi, l'amour et la confiance en Jésus-Christ
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Nous croyons en un Dieu d'amour, de grâce et de rédemption. Notre mission 
          est de guider chaque âme vers la lumière du Christ et de vivre selon 
          Ses enseignements de paix et de justice.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500"
            >
              <img
                src={`https://images.unsplash.com/photo-${i === 1 ? "1511671782779-c97d3d27a1d4" : i === 2 ? "1529070796766-3777ca99640a" : "1490730141103-6cac27aaab94"}?auto=format&fit=crop&q=80&w=800`}
                alt={`Croyance ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <Link to="/about">
          <Button variant="secondary" className="mx-auto">
            Notre Confession de Foi
          </Button>
        </Link>
      </div>
    </section>
  );
}
