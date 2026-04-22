import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

export function AboutLocations() {
  return (
    <section className="bg-black text-white py-32 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-left mb-16">
            <p className="text-accent-gold font-medium italic text-xl mb-4">
              Our locations
            </p>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Come visit us !
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu
              dolorol egestas morbi sem vulputate etiam facilisis pellentesque
              ut quis.
            </p>
          </div>
          <div className="space-y-8 text-left">
            <div>
              <p className="text-zinc-500 text-sm mb-1">Phone</p>
              <p className="text-xl font-bold">(310) 747-1374</p>
            </div>
            <div>
              <p className="text-zinc-500 text-sm mb-1">Address</p>
              <p className="text-xl font-bold leading-tight">
                1000 S Westgate Ave
                <br />
                Los Angeles 90049
              </p>
            </div>
            <div>
              <p className="text-zinc-500 text-sm mb-1">Mail</p>
              <p className="text-xl font-bold">losangeles@worshipx.com</p>
            </div>
            <div>
              <p className="text-zinc-500 text-sm mb-1">Our schedule</p>
              <p className="text-xl font-bold">
                Mon - Fri | 07:00 AM - 08:00 PM
              </p>
              <p className="text-xl font-bold">
                Sat - Sun | 08:00 AM - 06:00 PM
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
            alt="Los Angeles"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute bottom-10 left-10 right-10">
            <div className="flex items-center gap-4">
              <div className="h-px bg-white flex-1"></div>
              <h3 className="text-4xl font-bold">Los Angeles, CA</h3>
              <div className="h-px bg-white flex-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
