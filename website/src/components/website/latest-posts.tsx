import { Button } from "./button";

export function LatestPosts() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto border-t border-zinc-100">
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-zinc-900">
          Latest posts
        </h2>
        <Button variant="secondary">Browse all post</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {[
          {
            title: "How do I know if I'm hearing God's voice?",
            cat: "RESOURCES",
            date: "OCT 14, 2022",
            img: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=800",
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
        ].map((post, i) => (
          <div key={post.title} className="group cursor-pointer">
            <div className="h-[300px] rounded-[2.5rem] overflow-hidden mb-6">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center gap-3 text-xs text-zinc-500 mb-4">
              <span className="font-bold text-black uppercase">{post.cat}</span>
              <span>—</span>
              <span>{post.date}</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 group-hover:text-zinc-700 transition-colors">
              {post.title}
            </h3>
            <p className="text-zinc-600 leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
