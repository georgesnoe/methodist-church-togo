import { Button } from "./button";

export function Sermons() {
  return (
    <section className="bg-black text-white py-32 px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="text-accent-gold italic mb-4 text-6xl font-bold font-cursive -rotate-10">
          Our streams
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mb-12">
          Watch and experience our latest sermons
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          <div className="lg:col-span-2 relative h-112.5 rounded-3xl overflow-hidden group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1510915361894-db8b60fb0676?auto=format&fit=crop&q=80&w=1200"
              alt="Featured sermon"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent p-10 flex flex-col justify-end text-left">
              <div className="flex items-center gap-2 text-sm mb-4 opacity-80">
                <span>📅 OCT 24, 2023</span>
              </div>
              <h3 className="text-4xl font-bold mb-6">
                Family primary Group reunion
              </h3>
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-transform">
                ▶
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative h-26.25 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={`https://images.unsplash.com/photo-1510915361894-db8b60fb0676?auto=format&fit=crop&q=80&w=400&sig=${i}`}
                  alt={`Sermon ${i}`}
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center text-sm">
                    ▶
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Button variant="secondary">Get involved</Button>
          <Button variant="outline">Subscribe to YouTube</Button>
        </div>
      </div>
    </section>
  );
}
