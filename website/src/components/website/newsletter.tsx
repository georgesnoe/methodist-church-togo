import { Button } from "./button";

export function Newsletter() {
  return (
    <section className="bg-black text-white py-32 px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]" />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p className="text-accent-gold font-medium italic text-2xl mb-4">
          Subscribe
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          Subscribe to our newsletter
        </h2>
        <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam
          purus sit amet luctus venenatis lectus magna fringilla urna rhoncus.
        </p>
        <form className="flex flex-col md:flex-row items-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full py-4 bg-transparent border-b border-zinc-700 focus:border-white outline-none transition-colors text-white placeholder:text-zinc-500"
          />
          <Button
            variant="secondary"
            className="w-full md:w-auto whitespace-nowrap"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
