"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const palette = ["#7c3aed", "#22d3ee", "#fb7185", "#a3e635", "#f97316"];

const codeLines = [
  "// Builderly Playground",
  "const ship = async (idea) => {",
  "  const prototype = await build(idea);",
  "  const feedback = await test(prototype);",
  "  return launch(feedback);",
  "};"
];

export default function PlaygroundPage() {
  const [activeColor, setActiveColor] = useState(palette[0]);

  return (
    <main>
      <section className="section">
        <div className="container space-y-10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">Playground</p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">A little bit of Builderly magic</h1>
            <p className="max-w-2xl text-base text-white/65">
              We love building interactions that feel alive. Drag, tap, and play with the bits below.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              className="glass gradient-border relative overflow-hidden rounded-3xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                drag
                dragConstraints={{ left: -120, right: 120, top: -60, bottom: 120 }}
                className="absolute left-10 top-10 h-16 w-16 rounded-2xl"
                style={{ background: activeColor, boxShadow: `0 0 30px ${activeColor}` }}
                whileTap={{ scale: 0.9 }}
              />
              <motion.div
                drag
                dragConstraints={{ left: -80, right: 160, top: -40, bottom: 120 }}
                className="absolute right-10 top-24 h-20 w-20 rounded-full bg-white/10"
                whileTap={{ scale: 0.9 }}
              />
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-widest text-white/40">Drag the shapes</p>
                <h2 className="text-2xl font-semibold text-white">Motion that feels tactile</h2>
                <p className="text-sm text-white/60">
                  Drag the blocks around. The color updates using the palette on the right.
                </p>
              </div>
            </motion.div>

            <div className="space-y-6">
              <div className="glass gradient-border rounded-3xl p-6">
                <p className="text-sm uppercase tracking-widest text-white/40">Palette</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {palette.map((color) => (
                    <button
                      key={color}
                      onClick={() => setActiveColor(color)}
                      className={`h-10 w-10 rounded-2xl border ${
                        activeColor === color ? "border-white" : "border-transparent"
                      }`}
                      style={{ background: color }}
                      aria-label={`Select color ${color}`}
                    />
                  ))}
                </div>
              </div>

              <div className="glass gradient-border rounded-3xl p-6">
                <p className="text-sm uppercase tracking-widest text-white/40">Live snippet</p>
                <div className="mt-4 space-y-2 rounded-2xl bg-white/5 px-4 py-3 font-mono text-xs text-white/80">
                  {codeLines.map((line, index) => (
                    <motion.div
                      key={line}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {line}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
