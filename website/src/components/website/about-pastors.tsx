import { SectionHeading } from "./section-heading";

export function AboutPastors() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto text-center">
      <SectionHeading
        overline="Our Pastors"
        title="Meet John & Sophie, our beloved pastors"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae quae ab illo."
        center
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {[
          {
            name: "John Carter",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
          },
          {
            name: "Sophie Moore",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
          },
        ].map((pastor) => (
          <div
            key={pastor.name}
            className="relative h-[600px] rounded-[3rem] overflow-hidden group cursor-pointer"
          >
            <img
              src={pastor.img}
              alt={pastor.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-4xl font-bold">{pastor.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
