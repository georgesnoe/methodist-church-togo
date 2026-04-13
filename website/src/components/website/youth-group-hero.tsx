import { Button } from "./button";

export function YouthGroupHero() {
  return (
    <section className="relative bg-black text-white pt-32 pb-20 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-left relative z-10">
          <p className="text-accent-gold font-medium italic text-2xl mb-4">
            Ministries
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Youth Group
          </h1>
          <p className="text-zinc-400 text-lg mb-10 max-w-md leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque ipsa.
          </p>
          <Button variant="secondary">Get involved</Button>
        </div>
        <div className="relative z-10">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200"
            alt="Youth Group"
            className="w-full h-auto rounded-[3rem] shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
