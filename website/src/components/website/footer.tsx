import { IconCross } from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <div>
          <div className="flex items-center gap-2 font-bold text-2xl mb-6">
            <span><IconCross size={24} /></span> Worship
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-sm">
            Enim ullamcorper lobortis erat nec blandit sagittis consequat id
            potenti elementum morbi in turpis et consectetur dolor porttitor
            cursus purus consequat tellus duis enim aliquam congue pellentesque
            integer.
          </p>
          <div className="flex gap-4">
            {["facebook", "twitter", "instagram", "youtube"].map((social) => (
              <a
                key={social}
                href="."
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
              <a href="." className="hover:text-accent-gold">
                Home V1
              </a>
            </li>
            <li>
              <a href="." className="hover:text-accent-gold">
                Home V2
              </a>
            </li>
            <li>
              <a href="." className="hover:text-accent-gold">
                Home V3
              </a>
            </li>
            <li>
              <a href="." className="hover:text-accent-gold">
                About
              </a>
            </li>
            <li>
              <a href="." className="hover:text-accent-gold">
                Blog V1
              </a>
            </li>
            <li>
              <a href="." className="hover:text-accent-gold">
                Blog V2
              </a>
            </li>
            <li>
              <a href="." className="hover:text-accent-gold">
                Blog V3
              </a>
            </li>
            <li>
              <a href="." className="hover:text-accent-gold">
                Blog Post
              </a>
            </li>
            <li>
              <a href="." className="hover:text-accent-gold">
                Shop
              </a>
            </li>
            <li>
              <a href="." className="hover:text-accent-gold">
                Single Product
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-zinc-500">
            Utility Pages
          </h4>
          <ul className="space-y-4 text-sm font-medium">
            <li>
              <a href="." className="hover:text-accent-gold">
                Start Here
              </a>
            </li>
            <li>
              <a href="." className="hover:text-accent-gold">
                Styleguide
              </a>
            </li>
            <li>
              <a href="." className="hover:text-accent-gold">
                404 Not found
              </a>
            </li>
            <li>
              <a href="." className="hover:text-accent-gold">
                Password Protected
              </a>
            </li>
            <li>
              <a href="." className="hover:text-accent-gold">
                Licenses
              </a>
            </li>
            <li>
              <a href="." className="hover:text-accent-gold">
                Changelog
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-zinc-800 pt-8 text-center text-xs text-zinc-500">
        Copyright © Worship X | Designed by BRIX Templates - Powered by Webflow
      </div>
    </footer>
  );
}
