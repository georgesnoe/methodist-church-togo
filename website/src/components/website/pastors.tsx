import { Button } from "./button";
import { SectionHeading } from "./section-heading";

export function Pastors() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <SectionHeading
          overline="Our pastors"
          title="Meet John & Sophie, our beloved pastors"
          description="Enim ullamcorper lobortis erat nec blandit sagittis consequat id potenti elementum morbi in turpis sed consectetur dolor porttitor cursus purus consequat tellus duis enim aliquam congue pellentesque integer."
        />
        <div className="flex flex-wrap gap-8 mb-12">
          {[
            {
              name: "John Carter",
              role: "Founding pastor",
              img: "https://i.pravatar.cc/150?u=john",
            },
            {
              name: "Sophie Moore",
              role: "Founding pastor",
              img: "https://i.pravatar.cc/150?u=sophie",
            },
          ].map((pastor) => (
            <div key={pastor.name} className="flex items-center gap-4">
              <img
                src={pastor.img}
                alt={pastor.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-bold">{pastor.name}</p>
                <p className="text-sm text-zinc-500">{pastor.role}</p>
              </div>
            </div>
          ))}
        </div>
        <Button>Meet our pastors</Button>
      </div>
      <div className="relative h-150 rounded-[3rem] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516589174184-974767181939?auto=format&fit=crop&q=80&w=800"
          alt="Pastors John and Sophie"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
