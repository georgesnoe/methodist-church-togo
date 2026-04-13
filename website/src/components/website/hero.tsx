import { Button } from "./button";

export function Hero() {
  return (
    <section className="pt-20 pb-32 px-8 text-center max-w-4xl mx-auto">
      <p className="text-accent-gold italic mb-4 text-6xl font-bold font-cursive -rotate-10">
        Welcome to our home
      </p>
      <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 mb-8 leading-tight">
        A safe place to explore your faith
      </h1>
      <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
        Augues nullam viverra bibendum viverra enim massa id eu nulla est
        tincidunt orci nec ante nibh nibh vel eget sed net adipiscing sit amet
        massa nulla at nos quis purus arcu rissi erat at rosi est enim flam
        commodo et bibendum odio eu semper.
      </p>
      <div className="flex items-center justify-center gap-4">
        <Button>Get involved</Button>
        <Button variant="secondary">About us</Button>
      </div>
    </section>
  );
}
