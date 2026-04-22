import { IconCalendar, IconClock, IconMapPin } from "@tabler/icons-react";

export function InfoBar() {
  return (
    <section className="py-12 px-8 border-b border-zinc-100 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: "Minister day", value: "FRIDAY", icon: <IconCalendar size={20} /> },
          { label: "Minister Hour", value: "7:00 PM", icon: <IconClock size={20} /> },
          {
            label: "Minister Location",
            value: "1000 S WESTGATE AVE LOS ANGELES, 90049",
            icon: <IconMapPin size={20} />,
          },
          {
            label: "Minister leader",
            value: "JOHN CARTER",
            icon: (
              <img
                src="https://i.pravatar.cc/150?u=john"
                alt="John Carter"
                className="w-6 h-6 rounded-full object-cover"
              />
            ),
            isLeader: true,
          },
        ].map((item) => (
          <div key={item.label} className="flex flex-col gap-2">
            <p className="text-zinc-500 text-xs uppercase tracking-widest font-medium">
              {item.label}
            </p>
            <div className="flex items-center gap-3 text-sm font-bold text-zinc-900">
              <span className="text-lg">{item.icon}</span>
              <span className="uppercase">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
