import { Button } from "./button";

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
            Our mission
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            We trust in the strength of God
          </h2>
          <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia.
          </p>
          <Button variant="secondary">Get involved</Button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-accent-gold font-medium italic text-xl mb-4">
            Our vision
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            We spread the gospel of Jesus
          </h2>
          <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia.
          </p>
          <Button variant="secondary">Get involved</Button>
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
