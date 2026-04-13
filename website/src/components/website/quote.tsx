export function Quote() {
  return (
    <section className="bg-zinc-900 py-32 px-8 text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-accent-gold italic mb-4 text-6xl font-bold font-cursive -rotate-10">
          Matthew 19:26
        </p>
        <h2 className="text-4xl md:text-6xl font-bold italic leading-tight">
          “With God all things are possible”
        </h2>
      </div>
    </section>
  );
}
