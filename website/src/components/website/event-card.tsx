export function EventCard({ event }: { event: any }) {
  return (
    <div className="group cursor-pointer">
      <div className="h-64 rounded-3xl overflow-hidden mb-6">
        <img
          src={event.img}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center gap-4 text-sm font-bold text-zinc-500 mb-4">
        <span className="flex items-center gap-1">📅 {event.date}</span>
        <span>—</span>
        <span className="flex items-center gap-1">🕒 {event.time}</span>
      </div>
      <h3 className="text-2xl font-bold mb-3 group-hover:text-zinc-700 transition-colors">
        {event.title}
      </h3>
      <p className="text-zinc-600 mb-6 leading-relaxed line-clamp-2">
        {event.description}
      </p>
      <a
        href="."
        className="font-bold text-sm border-b-2 border-black pb-1 hover:text-zinc-600 hover:border-zinc-600 transition-all"
      >
        Register to event
      </a>
    </div>
  );
}
