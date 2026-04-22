import { IconCross } from "@tabler/icons-react";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-8 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 font-bold text-xl">
          <span className="text-2xl"><IconCross size={24} /></span> Worship
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600">
          <a href="." className="hover:text-black">
            Home
          </a>
          <a href="/about" className="hover:text-black">
            About
          </a>
          <a href="/blog" className="hover:text-black">
            Blog
          </a>
          <a href="/pages" className="hover:text-black">
            Pages
          </a>
        </div>
      </div>
      <div className="flex items-center gap-6 text-sm font-medium text-zinc-600">
        <div className="hidden md:flex items-center gap-6">
          <a href="/events" className="hover:text-black">
            Events
          </a>
          <a href="/schedule" className="hover:text-black">
            Schedule
          </a>
          <a href="/contact" className="hover:text-black">
            Contact
          </a>
        </div>
        <a href="/cart" className="hover:text-black">
          Cart(3)
        </a>
      </div>
    </nav>
  );
}
