import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Website Development",
    description: "From launch-ready landing pages to multi-page marketing sites with rich motion and SEO baked in.",
    bullets: ["Next.js, Astro, React", "Design + build", "Performance tuning"]
  },
  {
    title: "API Engineering",
    description: "REST and GraphQL APIs designed for reliability, scale, and smooth third-party integrations.",
    bullets: ["Auth + permissions", "Payments + integrations", "Realtime + webhooks"]
  },
  {
    title: "Automation & Scripts",
    description: "Background workers, scripts, and pipelines that make your business move faster.",
    bullets: ["Cron jobs", "Data processing", "Workflow automation"]
  },
  {
    title: "Product Build Sprints",
    description: "Ship MVPs and internal tools in focused sprints with strategy, design, and full-stack delivery.",
    bullets: ["Discovery + roadmap", "Rapid prototyping", "Launch support"]
  }
];

export default function ServicesPage() {
  return (
    <main>
      <section className="section">
        <div className="container space-y-8">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">Services</p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">End-to-end software delivery</h1>
            <p className="max-w-2xl text-base text-white/65">
              Builderly blends engineering, automation, and design to help you ship with confidence. Each engagement is
              custom-scoped to your goals.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
