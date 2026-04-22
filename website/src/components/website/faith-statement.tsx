import { SectionHeading } from "./section-heading";
import { IconArrowLeft, IconArrowRight, IconBook, IconCross } from "@tabler/icons-react";


export function FaithStatement() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <SectionHeading
          overline="Ce que nous croyons"
          title="Notre confession de foi"
        />
        <div className="flex gap-3 mb-12">
          <button
            type="button"
            className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-zinc-800 transition-colors"
          >
            <IconArrowLeft size={24} />
          </button>
          <button
            type="button"
            className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-zinc-800 transition-colors"
          >
            <IconArrowRight size={24} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "La Sainte Bible",
            icon: <IconBook size={24} />,
            text: "Nous croyons que la Sainte Bible est la Parole inspirée de Dieu, notre autorité finale pour la foi et la vie chrétienne. Elle nous guide dans la vérité et nous enseigne la volonté du Père.",
            ref: "2 Timothée 3:16 | Psaume 119:105",
          },
          {
            title: "Le Sauveur",
            icon: <IconCross size={24} />,
            text: "Nous croyons en Jésus-Christ, le Fils unique de Dieu, né de la vierge Marie, mort pour nos péchés, ressuscité le troisième jour et monté au ciel pour intercéder pour nous.",
            ref: "Jean 3:16 | Romains 5:8",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white border border-zinc-100 rounded-3xl p-10 shadow-sm"
          >
            <div className="w-12 h-12 bg-accent-gold/20 text-accent-gold rounded-xl flex items-center justify-center text-2xl mb-6">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-zinc-500 leading-relaxed mb-8">{item.text}</p>
            <div className="text-sm font-bold text-zinc-900">{item.ref}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
