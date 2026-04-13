import { Button } from "./button";
import { SectionHeading } from "./section-heading";

export function News() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <SectionHeading
          overline="Our news"
          title="Read our lastest news and articles"
          description="Enim ullamcorper lobortis erat nec blandit sagittis consequat elementum morbi in turpis sed consectetur dolor purus cursu."
        />
        <Button variant="secondary" className="mb-12">
          Browse all ministers
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="group cursor-pointer">
            <div className="h-[450px] rounded-3xl overflow-hidden mb-8">
              <img
                src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=1200"
                alt="Featured news"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-500 mb-4">
              <span className="font-bold text-black uppercase">Guides</span>
              <span>—</span>
              <span>OCT 24, 2025</span>
            </div>
            <h3 className="text-4xl font-bold mb-6 group-hover:text-zinc-700 transition-colors">
              How to build stronger family relationships?
            </h3>
            <Button>Read more</Button>
          </div>
        </div>
        <div className="space-y-12">
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
          ].map((item) => (
            <div key={item.cat} className="group cursor-pointer">
              <div className="flex items-center gap-3 text-xs text-zinc-500 mb-3">
                <span className="font-bold text-black uppercase">
                  {item.cat}
                </span>
                <span>—</span>
                <span>{item.date}</span>
              </div>
              <h4 className="text-xl font-bold leading-tight group-hover:text-zinc-700 transition-colors">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
