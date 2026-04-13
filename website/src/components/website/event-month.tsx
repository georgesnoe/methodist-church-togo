import { EventCard } from "./event-card";

export function EventMonth({
  month,
  events,
}: {
  month: string;
  events: any[];
}) {
  return (
    <div className="py-20 max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-3">
          <h2 className="text-4xl font-bold text-zinc-900 sticky top-32">
            {month}
          </h2>
        </div>
        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {events.map((event) => (
            <EventCard key={event.date} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
