export function WorshipImage() {
  return (
    <section className="relative w-full h-150 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1510915361894-db8b60fb0676?auto=format&fit=crop&q=80&w=2070"
        alt="Worship service"
        className="w-full h-full object-cover grayscale"
      />
      <div className="absolute top-10 right-10 w-24 h-24 rounded-full border-4 border-white text-white flex items-center justify-center text-center text-[10px] font-bold uppercase tracking-tighter rotate-12 bg-black/20 backdrop-blur-sm">
        <span className="rotate-0">Donate to us • Donate to us •</span>
      </div>
    </section>
  );
}
