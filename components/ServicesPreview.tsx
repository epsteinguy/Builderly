"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Websites & Frontend",
    description: "Conversion-ready marketing sites, product UIs, and interactive experiences built for speed."
  },
  {
    title: "APIs & Integrations",
    description: "REST + GraphQL APIs, third-party integrations, and backend systems that scale with your business."
  },
  {
    title: "Automations & Scripts",
    description: "Background jobs, data pipelines, and automations that eliminate manual work."
  }
];

export default function ServicesPreview() {
  return (
    <section className="section">
      <div className="container space-y-10">
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">Services</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            A full-stack partner for ambitious teams
          </h2>
          <p className="max-w-2xl text-base text-white/65">
            We plug into your team and ship quickly. Each engagement is tailored to your goals, with strategy, design, and
            engineering moving in lockstep.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass gradient-border rounded-3xl p-6"
            >
              <div className="mb-4 h-10 w-10 rounded-2xl bg-white/5" />
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm text-white/60">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
