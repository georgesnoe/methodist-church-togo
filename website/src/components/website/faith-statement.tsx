import { SectionHeading } from "./section-heading";

export function FaithStatement() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <SectionHeading
          overline="What we believe"
          title="Our statement of Faith"
        />
        <div className="flex gap-3 mb-12">
          <button
            type="button"
            className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-zinc-800 transition-colors"
          >
            ←
          </button>
          <button
            type="button"
            className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-zinc-800 transition-colors"
          >
            →
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "The Holy Bible",
            icon: "📖",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.",
            ref: "John 3:16 | Thessalonians 2:13",
          },
          {
            title: "The Saviour",
            icon: "†",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.",
            ref: "John 3:16 | Thessalonians 2:13",
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
