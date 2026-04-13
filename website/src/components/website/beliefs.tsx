import { Button } from "./button";

export function Beliefs() {
  return (
    <section className="bg-black text-white py-32 px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="text-accent-gold italic mb-4 text-6xl font-bold font-cursive -rotate-10">
          What we believe in
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          In our church, we love and trust Jesus
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Augue nullam viverra bibendum viverra enim massa id ipsum eu nulla est
          tincidunt orci nec ante nibh vel eget sed at.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500"
            >
              <img
                src={`https://images.unsplash.com/photo-${i === 1 ? "1511671782779-c97d3d27a1d4" : i === 2 ? "1529070796766-3777ca99640a" : "1490730141103-6cac27aaab94"}?auto=format&fit=crop&q=80&w=800`}
                alt={`Belief ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <Button variant="secondary" className="mx-auto">
          Statement of Faith
        </Button>
      </div>
    </section>
  );
}
