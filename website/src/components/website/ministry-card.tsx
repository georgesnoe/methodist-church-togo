import { IconCalendar, IconClock } from "@tabler/icons-react";

export function MinistryCard({
  ministry,
  className = "",
}: {
  ministry: any;
  className?: string;
}) {
  return (
    <div
      className={`group relative h-[400px] rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl ${className}`}
    >
      <img
        src={ministry.img}
        alt={ministry.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end text-white">
        <h3 className="text-3xl font-bold mb-4 leading-tight">
          {ministry.title}
        </h3>
        <div className="flex items-center gap-4 text-sm font-medium opacity-90">
          <span className="flex items-center gap-1"><IconCalendar size={16} /> {ministry.day}</span>
          <span>—</span>
          <span className="flex items-center gap-1"><IconClock size={16} /> {ministry.time}</span>
        </div>
      </div>
    </div>
  );
}
