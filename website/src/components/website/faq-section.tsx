import { useRef, useState } from "react";
import { IconPlus, IconX } from "@tabler/icons-react";


export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = useRef([
    {
      q: "Comment s'impliquer dans l'Église Méthodiste du Togo ?",
      a: "C'est très simple ! Vous pouvez nous rendre visite lors de nos cultes dominicaux, participer à l'un de nos ministères ou nous contacter via le formulaire sur notre page Contact pour savoir comment contribuer.",
    },
    {
      q: "Quelles sont les conditions pour devenir un leader dans l'Église ?",
      a: "L'engagement dans le leadership nécessite une foi solide en Jésus-Christ, un cœur pour le service et une formation appropriée. Nous encourageons tout membre désireux à en discuter avec son pasteur local.",
    },
    {
      q: "Quel est le programme de l'Église ?",
      a: "Nos cultes principaux ont lieu tous les dimanches. Nous avons également des réunions de prière en semaine et des activités spécifiques pour la jeunesse le vendredi soir. Consultez notre page Événements pour plus de détails.",
    },
    {
      q: "J'ai une demande de prière, pouvez-vous m'aider ?",
      a: "Bien sûr. Nous croyons fermement au pouvoir de la prière. Vous pouvez nous envoyer votre demande par email ou nous en parler directement lors de vos visites à l'église.",
    },
  ]);

  return (
    <section className="py-32 px-8 max-w-4xl mx-auto">
      <div className="text-center mb-20">
        <p className="text-accent-gold font-medium italic text-xl mb-4">
          FAQ
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 leading-tight">
          Questions Fréquemment Posées
        </h2>
      </div>
      <div className="space-y-0">
        {faqs.current.map((faq, i) => (
          <div key={faq.q} className="border-b border-zinc-200">
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              className="w-full py-8 flex justify-between items-center text-left group"
            >
              <span className="text-xl md:text-2xl font-bold group-hover:text-zinc-600 transition-colors">
                {faq.q}
              </span>
              <span className="text-2xl">{openIndex === i ? <IconX size={24} /> : <IconPlus size={24} />}</span>
            </button>
            {openIndex === i && (
              <div className="pb-8 animate-in fade-in slide-in-from-top-2 duration-300">
                <p className="text-zinc-600 leading-relaxed max-w-3xl">
                  {faq.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
