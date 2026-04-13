import { Button } from "./button";

export function NotFoundHero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-black text-white px-8 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]" />

      {/* Giant 404 Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20rem] md:text-[30rem] font-black text-zinc-800 opacity-40 leading-none">
          404
        </span>
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <p className="text-accent-gold font-medium italic text-2xl mb-4">
          Not found
        </p>
        <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
          Oops! Page not found.
        </h1>
        <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore.
        </p>
        <div className="flex items-center justify-center gap-6">
          <a href="/">
            <Button variant="secondary" className="px-10">
              Go back Home
            </Button>
          </a>
          <Button variant="outline" className="px-10">
            Get Involved
          </Button>
        </div>
      </div>
    </section>
  );
}
