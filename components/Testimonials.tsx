"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Builderly shipped our full marketing site and API in three weeks. The polish was unreal.",
    name: "Maya Chen",
    title: "CEO, Orbit Labs"
  },
  {
    quote: "They integrated with our team like in-house engineers. Fast, reliable, and always proactive.",
    name: "Dylan Ward",
    title: "VP Engineering, Meshlight"
  },
  {
    quote: "Our automation stack went from chaos to clean in one sprint. We save hours every day.",
    name: "Lena Ortiz",
    title: "Operations Lead, SlatePay"
  }
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container space-y-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">Testimonials</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Teams that move fast, ship with us</h2>
          </div>
          <div className="hidden md:flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-white/60">
            Trusted by 40+ founders
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass gradient-border rounded-3xl p-6"
            >
              <p className="text-sm text-white/75">“{item.quote}”</p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="text-xs text-white/50">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
