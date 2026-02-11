"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/playground", label: "Playground" },
  { href: "/contact", label: "Get a Quote" }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-night/80 backdrop-blur">
      <div className="container flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          <span className="text-white">Builderly</span>
          <span className="text-cyan">.tech</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition ${isActive ? "text-white" : "hover:text-white"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <Link
            href="/contact"
            className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-white/90 transition hover:border-white/30 hover:text-white"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>
    </header>
  );
}
