import { Button } from "./button";
import { Link } from "@tanstack/react-router";

export function AboutHero() {
  return (
    <section className="pt-20 pb-32 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="text-left">
        <p className="text-accent-gold font-medium italic text-xl mb-4">
          À propos de nous
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 mb-8 leading-tight">
          Nous avons confiance en l'Amour de Dieu
        </h1>
        <p className="text-zinc-600 text-lg mb-10 leading-relaxed max-w-xl">
          L'Église Méthodiste du Togo est une communauté vibrante où chaque individu 
          est accueilli et encouragé dans son cheminement spirituel. Notre histoire 
          est marquée par la foi, le service et un dévouement profond envers le prochain.
        </p>
        <div className="flex items-center gap-4">
          <Link to="/contact">
            <Button>Nous rejoindre</Button>
          </Link>
          <Link to="/about">
            <Button variant="secondary">Ce que nous croyons</Button>
          </Link>
        </div>
      </div>
      <div className="relative h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1510915361894-db8b60fb0676?auto=format&fit=crop&q=80&w=800"
          alt="Foi"
          className="absolute top-0 right-0 w-2/3 h-3/4 object-cover rounded-3xl shadow-2xl z-10"
        />
        <img
          src="https://images.unsplash.com/photo-1529070796766-3777ca99640a?auto=format&fit=crop&q=80&w=800"
          alt="Communauté"
          className="absolute bottom-0 left-0 w-1/2 h-1/2 object-cover rounded-3xl shadow-2xl z-20 border-8 border-white"
        />
      </div>
    </section>
  );
}
