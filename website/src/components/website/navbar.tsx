import { IconCross } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-8 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="text-2xl"><IconCross size={24} /></span> Église Méthodiste du Togo
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <Link to="/about" className="hover:text-black">
            About
          </Link>
          <Link to="/blog" className="hover:text-black">
            Blog
          </Link>
          <Link to="/ministries" className="hover:text-black">
            Ministries
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-6 text-sm font-medium text-zinc-600">
        <div className="hidden md:flex items-center gap-6">
          <Link to="/events" className="hover:text-black">
            Events
          </Link>
          <Link to="/youth-group" className="hover:text-black">
            Youth Group
          </Link>
          <Link to="/contact" className="hover:text-black">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
