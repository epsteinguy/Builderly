"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { label: "Avg. delivery", value: "21 days" },
  { label: "Projects shipped", value: "120+" },
  { label: "Client NPS", value: "9.6/10" }
];

export default function Hero() {
  return (
    <section className="section">
      <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="badge"
          >
            <span className="h-2 w-2 rounded-full bg-cyan" />
            Builderly is booking Q2 projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            We build bold digital products, fast. Websites, APIs, automations, and everything in between.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-lg text-white/70"
          >
            Builderly is a high-impact engineering studio. We help founders and teams ship high-performing software with
            world-class UI, crisp APIs, and infrastructure that scales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="gradient-border rounded-full px-6 py-3 text-sm font-semibold text-white hover:shadow-glow"
            >
              Get a quote
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
            >
              Explore services
            </Link>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl px-5 py-4">
                <p className="text-xl font-semibold text-white">{stat.value}</p>
                <p className="text-xs uppercase tracking-widest text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -left-12 top-8 h-32 w-32 rounded-full bg-cyan/20 blur-3xl" />
          <div className="absolute right-0 top-28 h-40 w-40 rounded-full bg-magenta/20 blur-3xl" />
          <div className="glass gradient-border relative rounded-3xl p-8 shadow-glow">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/60">Live build queue</p>
                <span className="rounded-full bg-lime/15 px-3 py-1 text-xs text-lime">Active</span>
              </div>
              <div className="space-y-4">
                {[
                  "Next.js marketing site",
                  "API suite + dashboards",
                  "Automation pipeline"
                ].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                    <p className="text-sm text-white">{item}</p>
                    <span className="text-xs text-white/50">In progress</span>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-widest text-white/40">Launch window</p>
                <p className="text-lg font-semibold text-white">April 2026</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
