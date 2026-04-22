import { Button } from "./button";
import { IconMail, IconPhone } from "@tabler/icons-react";


export function ContactHero() {
  return (
    <section className="pt-32 pb-20 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <div>
        <p className="text-accent-gold font-medium italic text-xl mb-4">
          Rejoignez notre communauté
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 mb-8 leading-tight">
          Contactez-nous
        </h1>
        <p className="text-zinc-600 text-lg mb-12 leading-relaxed max-w-md">
          Que vous ayez des questions sur la foi, besoin de prières ou souhaitiez 
          simplement nous rendre visite, nous sommes là pour vous écouter 
          et vous accompagner.
        </p>
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center text-white text-xl">
              <IconMail size={24} />
            </div>
            <div>
              <p className="text-zinc-500 text-sm mb-1">Envoyez-nous un email</p>
              <p className="font-bold text-lg">contact@emtogo.org</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center text-white text-xl">
              <IconPhone size={24} />
            </div>
            <div>
              <p className="text-zinc-500 text-sm mb-1">Appelez-nous</p>
              <p className="font-bold text-lg">+228 22 20 00 00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-zinc-100">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-bold text-zinc-900">
              Nom
            </label>
            <input
              id="name"
              type="text"
              placeholder="Votre nom"
              className="py-2 bg-transparent border-b border-zinc-200 focus:border-black outline-none transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-bold text-zinc-900">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="exemple@email.com"
              className="py-2 bg-transparent border-b border-zinc-200 focus:border-black outline-none transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone-number"
              className="text-sm font-bold text-zinc-900"
            >
              Téléphone
            </label>
            <input
              id="phone-number"
              type="tel"
              placeholder="+228 XX XX XX XX"
              className="py-2 bg-transparent border-b border-zinc-200 focus:border-black outline-none transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="ministries"
              className="text-sm font-bold text-zinc-900"
            >
              Sujet
            </label>
            <input
              id="ministries"
              type="text"
              placeholder="Sujet de votre message"
              className="py-2 bg-transparent border-b border-zinc-200 focus:border-black outline-none transition-colors"
            />
          </div>
          <div className="md:col-span-2 flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-bold text-zinc-900"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Laissez-nous un message"
              className="py-2 bg-transparent border-b border-zinc-200 focus:border-black outline-none transition-colors resize-none"
            />
          </div>
          <div className="md:col-span-2 flex justify-start">
            <Button>Envoyer le message</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
