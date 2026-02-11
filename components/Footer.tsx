import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-lg font-semibold">
            Builderly<span className="text-cyan">.tech</span>
          </p>
          <p className="text-sm text-white/60">
            We build websites, APIs, automations, and bespoke software for teams that move fast.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-white/70">
          <Link className="hover:text-white" href="/services">
            Services
          </Link>
          <Link className="hover:text-white" href="/playground">
            Playground
          </Link>
          <Link className="hover:text-white" href="/contact">
            Get a Quote
          </Link>
        </div>
      </div>
      <div className="container mt-8 flex flex-col gap-4 border-t border-white/5 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Builderly. All rights reserved.</p>
        <p>Built with precision, shipped with speed.</p>
      </div>
    </footer>
  );
}
