import { Button } from "./button";

export function ContactHero() {
  return (
    <section className="pt-32 pb-20 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <div>
        <p className="text-accent-gold font-medium italic text-xl mb-4">
          Join our community
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 mb-8 leading-tight">
          Contact us
        </h1>
        <p className="text-zinc-600 text-lg mb-12 leading-relaxed max-w-md">
          Et vulputate mi maecenas id consequat quis tempus maecenas
          pellentesque adipiscing lorem in ornare nulla proin est vitae duis
          arcu orci ut nibh dolor ac.
        </p>
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center text-white text-xl">
              ✉️
            </div>
            <div>
              <p className="text-zinc-500 text-sm mb-1">Send us an email</p>
              <p className="font-bold text-lg">contact@worship.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center text-white text-xl">
              📞
            </div>
            <div>
              <p className="text-zinc-500 text-sm mb-1">Give us a call</p>
              <p className="font-bold text-lg">(310) 747-1374</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-zinc-100">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-bold text-zinc-900">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Carter"
              className="py-2 bg-transparent border-b border-zinc-200 focus:border-black outline-none transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-bold text-zinc-900">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@email.com"
              className="py-2 bg-transparent border-b border-zinc-200 focus:border-black outline-none transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone-number"
              className="text-sm font-bold text-zinc-900"
            >
              Phone
            </label>
            <input
              id="phone-number"
              type="tel"
              placeholder="(123) 456 - 7890"
              className="py-2 bg-transparent border-b border-zinc-200 focus:border-black outline-none transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="ministries"
              className="text-sm font-bold text-zinc-900"
            >
              Subject
            </label>
            <input
              id="ministries"
              type="text"
              placeholder="Ministries"
              className="py-2 bg-transparent border-b border-zinc-200 focus:border-black outline-none transition-colors"
            />
          </div>
          <div className="md:col-span-2 flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-bold text-zinc-900"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Leave us a message"
              className="py-2 bg-transparent border-b border-zinc-200 focus:border-black outline-none transition-colors resize-none"
            />
          </div>
          <div className="md:col-span-2 flex justify-start">
            <Button>Send message</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
