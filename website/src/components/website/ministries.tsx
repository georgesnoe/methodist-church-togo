import { IconArrowLeft, IconArrowRight, IconCalendar, IconClock } from "@tabler/icons-react";

import { Button } from "./button";
import { SectionHeading } from "./section-heading";
import { Link } from "@tanstack/react-router";

export function Ministries() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <SectionHeading
          overline="Nos ministères"
          title="Un ministère adapté à chacun pour servir le Seigneur"
        />
        <div className="flex gap-3 mb-12">
          <button
            type=\"button\"
            className=\"w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-zinc-800 transition-colors\"
          >
            <IconArrowLeft size={24} />
          </button>
          <button
            type=\"button\"
            className=\"w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-zinc-800 transition-colors\"
          >
            <IconArrowRight size={24} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {[
          {
            title: "Ministère des Enfants",
            day: "DIMANCHE",
            time: "16:00",
            img: "https://images.unsplash.com/photo-1472162072942-f474f3771c70?auto=format&fit=crop&q=80&w=800",
          },
          {
            title: "Ministère de la Jeunesse",
            day: "VENDREDI",
            time: "19:00",
            img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
          },
        ].map((ministry) => (
          <Link 
            to={ministry.title === "Ministère de la Jeunesse" ? "/youth-group" : "/ministries"}
            key={ministry.title}
            className="group relative h-100 rounded-[2rem] overflow-hidden cursor-pointer"
          >
            <img
              src={ministry.img}
              alt={ministry.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end text-white">
              <h3 className="text-3xl font-bold mb-4">{ministry.title}</h3>
              <div className="flex items-center gap-4 text-sm opacity-90">
                <span className="flex items-center gap-1">
                  <IconCalendar size={16} /> {ministry.day}
                </span>
                <span>—</span>
                <span className="flex items-center gap-1">
                  <IconClock size={16} /> {ministry.time}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4">
        <Link to="/contact">
          <Button>Nous rejoindre</Button>
        </Link>
        <Link to="/about">
          <Button variant="secondary">Découvrir nos responsables</Button>
        </Link>
      </div>
    </section>
  );
}
