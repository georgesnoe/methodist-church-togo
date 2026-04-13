import { Button } from "./button";

export function BlogHero() {
  return (
    <section className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-accent-gold font-medium italic text-2xl mb-4">
          Blog
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 mb-6 leading-tight">
          Resources & News
        </h1>
        <p className="text-zinc-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam
          purus sit amet luctus venenatis lectus magna fringilla urna porttitor
          rhoncus purus non enim praesent.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 group cursor-pointer">
          <div className="h-[500px] rounded-[3rem] overflow-hidden mb-8">
            <img
              src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=1200"
              alt="Featured article"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex items-center gap-3 text-sm text-zinc-500 mb-4">
            <span className="font-bold text-black uppercase">Guides</span>
            <span>—</span>
            <span>OCT 24, 2025</span>
          </div>
          <h2 className="text-4xl font-bold mb-6 group-hover:text-zinc-700 transition-colors">
            How to build stronger family relationships?
          </h2>
          <Button>Read more</Button>
        </div>

        <div className="space-y-8">
          {[
            {
              cat: "BIBLE",
              date: "OCT 20, 2025",
              title: "Step-by-step-guide to study the bible",
            },
            {
              cat: "RESOURCES",
              date: "OCT 18, 2025",
              title: "7 surprising ways to improve your relationship",
            },
            {
              cat: "GUIDES",
              date: "OCT 16, 2025",
              title: "How to overcome my personal battles?",
            },
            {
              cat: "RESOURCES",
              date: "JAN 14, 2025",
              title: "How do I know if I'm hearing God's voice?",
            },
          ].map((post) => (
            <div
              key={post.cat}
              className="group cursor-pointer border-b border-zinc-100 pb-8 last:border-0"
            >
              <div className="flex items-center gap-3 text-xs text-zinc-500 mb-3">
                <span className="font-bold text-black uppercase">
                  {post.cat}
                </span>
                <span>—</span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-bold leading-tight group-hover:text-zinc-700 transition-colors">
                {post.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
