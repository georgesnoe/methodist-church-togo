import { IconCross } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <div>
          <div className="flex items-center gap-2 font-bold text-2xl mb-6">
            <span><IconCross size={24} /></span> Église Méthodiste du Togo
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-sm">
            L'Église Méthodiste du Togo est engagée à propager l'Évangile de Jésus-Christ, 
            à former des disciples et à servir la communauté avec amour et compassion.
          </p>
          <div className="flex gap-4">
            {["facebook", "twitter", "instagram", "youtube"].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
              >
                <span className="sr-only">{social}</span>
                <div className="w-5 h-5 bg-white/20 rounded-sm" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-zinc-500">
            Pages
          </h4>
          <ul className="space-y-4 text-sm font-medium">
            <li>
              <Link to="/" className="hover:text-accent-gold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-accent-gold">
                About
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-accent-gold">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/ministries" className="hover:text-accent-gold">
                Ministries
              </Link>
            </li>
            <li>
              <Link to="/youth-group" className="hover:text-accent-gold">
                Youth Group
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-accent-gold">
                Events
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent-gold">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-zinc-500">
            Legal & Support
          </h4>
          <ul className="space-y-4 text-sm font-medium">
            <li>
              <Link to="/not-found" className="hover:text-accent-gold">
                404 Not found
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent-gold">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-zinc-800 pt-8 text-center text-xs text-zinc-500">
        Copyright © Église Méthodiste du Togo | All rights reserved.
      </div>
    </footer>
  );
}
