export function BlogPostHero() {
  return (
    <section className="relative bg-black text-white pt-32 pb-20 px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto text-left mb-16 relative z-10">
        <div className="flex items-center gap-3 text-sm font-bold text-zinc-400 mb-6">
          <span className="text-white uppercase">GUIDES</span>
          <span>—</span>
          <span>OCT 24, 2022</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          How to build stronger family relationships?
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
          purus sit amet lit luctus venenatis, lectus magna fringilla urna,
          rhoncus dolor purus.
        </p>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <img
          src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=1200"
          alt="Featured family"
          className="w-full h-auto rounded-[3rem] shadow-2xl"
        />
      </div>
    </section>
  );
}
