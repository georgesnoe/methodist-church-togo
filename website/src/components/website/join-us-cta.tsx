import { Button } from "./button";

export function JoinUsCTA() {
  return (
    <section className="bg-zinc-900 py-32 px-8 text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-accent-gold italic mb-4 text-6xl font-bold font-cursive -rotate-10">
          Join us
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
          Join to the great commission of Christ
        </h2>
        <div className="flex items-center justify-center gap-4">
          <Button variant="secondary">Get involved</Button>
          <Button variant="outline">Browse locations</Button>
        </div>
      </div>
    </section>
  );
}
