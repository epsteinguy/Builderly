import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  bullets: string[];
};

export default function ServiceCard({ title, description, bullets }: ServiceCardProps) {
  return (
    <div className="glass gradient-border rounded-3xl p-6">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm text-white/60">{description}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            {bullet}
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="mt-6 inline-flex items-center text-sm font-semibold text-cyan hover:text-white"
      >
        Request a quote
      </Link>
    </div>
  );
}
