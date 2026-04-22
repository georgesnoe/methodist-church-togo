import { Button } from "./button";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section className="pt-20 pb-32 px-8 text-center max-w-4xl mx-auto">
      <p className="text-accent-gold italic mb-4 text-6xl font-bold font-cursive -rotate-10">
        Bienvenue chez nous
      </p>
      <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 mb-8 leading-tight">
        Un refuge pour nourrir votre foi et grandir en Christ
      </h1>
      <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
        L'Église Méthodiste du Togo vous accueille les bras ouverts. Rejoignez-nous pour 
        découvrir la Parole de Dieu, partager la communion fraternelle et servir 
        ensemble notre communauté dans l'amour et la vérité.
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link to="/contact">
          <Button>Nous rejoindre</Button>
        </Link>
        <Link to="/about">
          <Button variant="secondary">En savoir plus</Button>
        </Link>
      </div>
    </section>
  );
}
