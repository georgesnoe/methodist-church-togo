import { useRef, useState } from "react";
import { Button } from "./button";

export function ArticlesGrid() {
  const categories = useRef(["ALL", "BIBLE", "GUIDE", "RESOURCES"]);
  const [filter, setFilter] = useState("ALL");
  const articles = useRef([
    {
      title: "How to build stronger family relationships?",
      cat: "GUIDES",
      date: "OCT 24, 2025",
      img: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=800",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna...",
    },
    {
      title: "Step-by-step-guide to study the bible",
      cat: "BIBLE",
      date: "OCT 20, 2022",
      img: "https://images.unsplash.com/photo-1507434965726-677659497ed7?auto=format&fit=crop&q=80&w=800",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna...",
    },
    {
      title: "7 surprising ways to improve your relationship",
      cat: "RESOURCES",
      date: "OCT 18, 2022",
      img: "https://images.unsplash.com/photo-1521791136064-7//auto=format&fit=crop&q=80&w=800",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna...",
    },
    {
      title: "How to overcome my personal battles?",
      cat: "GUIDES",
      date: "OCT 16, 2022",
      img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna...",
    },
    {
      title: "How do I know if I'm hearing God's voice?",
      cat: "RESOURCES",
      date: "OCT 14, 2022",
      img: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=800",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna...",
    },
    {
      title: "20 inspiring bible verses about God's love",
      cat: "BIBLE",
      date: "OCT 10, 2022",
      img: "https://images.unsplash.com/photo-1544716278-e877598be7ec?auto=format&fit=crop&q=80&w=800",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna...",
    },
  ]);

  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-10">
          Latest Articles
        </h2>
        <div className="flex items-center justify-center gap-8 text-sm font-bold uppercase tracking-widest text-zinc-500">
          {categories.current.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`relative pb-2 transition-colors ${filter === cat ? "text-black" : "hover:text-zinc-700"}`}
            >
              {cat}
              {filter === cat && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-black" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
        {articles.current.map((article) => (
          <div key={article.title} className="group cursor-pointer">
            <div className="h-[350px] rounded-[2.5rem] overflow-hidden mb-6">
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center gap-3 text-xs text-zinc-500 mb-4">
              <span className="font-bold text-black uppercase">
                {article.cat}
              </span>
              <span>—</span>
              <span>{article.date}</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 group-hover:text-zinc-700 transition-colors">
              {article.title}
            </h3>
            <p className="text-zinc-600 leading-relaxed line-clamp-2">
              {article.excerpt}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-24">
        <Button variant="secondary">Previous</Button>
        <span className="font-bold text-zinc-900">1/5</span>
        <Button>Next</Button>
      </div>
    </section>
  );
}
