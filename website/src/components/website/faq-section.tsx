import { useRef, useState } from "react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = useRef([
    {
      q: "How to get involved with Worship?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci nexus et egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
    },
    {
      q: "What are the requirements to be a Church leader?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci nexus et egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
    },
    {
      q: "What is the Church schedule?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci nexus et egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
    },
    {
      q: "I have a prayer petition, can you please help me?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci nexus et egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
    },
  ]);

  return (
    <section className="py-32 px-8 max-w-4xl mx-auto">
      <div className="text-center mb-20">
        <p className="text-accent-gold font-medium italic text-xl mb-4">
          FAQ's
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 leading-tight">
          Frequently Asked Questions
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
              <span className="text-2xl">{openIndex === i ? "✕" : "＋"}</span>
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
