import { Button } from "./button";

export function AboutHero() {
  return (
    <section className="pt-20 pb-32 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="text-left">
        <p className="text-accent-gold font-medium italic text-xl mb-4">
          About us
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 mb-8 leading-tight">
          We trust in God's Love
        </h1>
        <p className="text-zinc-600 text-lg mb-10 leading-relaxed max-w-xl">
          Pellentesque eu rhoncus a habitasse. a sem nibh phasellus at diam duis
          interdum. Est vel sed habitant diam tortor fringilla. Nunc sapien
          vitae porttitor blandit sed dignissim lorem vitae pulvinar. Cras risus
          dolor.
        </p>
        <div className="flex items-center gap-4">
          <Button>Get involved</Button>
          <Button variant="secondary">What we believe</Button>
        </div>
      </div>
      <div className="relative h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1510915361894-db8b60fb0676?auto=format&fit=crop&q=80&w=800"
          alt="Faith"
          className="absolute top-0 right-0 w-2/3 h-3/4 object-cover rounded-3xl shadow-2xl z-10"
        />
        <img
          src="https://images.unsplash.com/photo-1529070796766-3777ca99640a?auto=format&fit=crop&q=80&w=800"
          alt="Community"
          className="absolute bottom-0 left-0 w-1/2 h-1/2 object-cover rounded-3xl shadow-2xl z-20 border-8 border-white"
        />
      </div>
    </section>
  );
}
