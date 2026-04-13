import { SectionHeading } from "./section-heading";

export function Testimonials() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
        <div className="lg:col-span-1">
          <SectionHeading
            overline="Testimonials"
            title="Hear what our community says"
            description="Enim ullamcorper lobortis erat nec blandit sagittis consequat id potenti elementum morbi in turpis sed consectetur dolor porttitor cursus purus consequat tellus duis enim aliquam congue pellentesque integer."
          />
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "“Lovely community”",
              author: "Johnson's Family",
              location: "Los Angeles, CA",
              img: "https://images.unsplash.com/photo-1511895426328-dc8719599ca4?auto=format&fit=crop&q=80&w=400",
            },
            {
              title: "“We love our church”",
              author: "Millers's Family",
              location: "San Francisco, CA",
              img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=400",
            },
            {
              title: "“Family atmosphere”",
              author: "Moore's Family",
              location: "New York, CA",
              img: "https://images.unsplash.com/photo-1542037104857-ffbb0b9757bb?auto=format&fit=crop&q=80&w=400",
            },
          ].map((t) => (
            <div
              key={t.author}
              className="bg-white border border-zinc-100 rounded-3xl p-8 shadow-sm"
            >
              <img
                src={t.img}
                alt={t.author}
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              <h3 className="text-xl font-bold mb-4">{t.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                Enim ullamcorper lobortis erat nec erecep blandit sagittis
                consequat id potenti elementum morbi in turpi.
              </p>
              <div>
                <p className="font-bold text-sm">{t.author}</p>
                <p className="text-xs text-zinc-400">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
