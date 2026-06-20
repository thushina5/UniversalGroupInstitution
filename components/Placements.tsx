"use client";

import { motion } from "framer-motion";
import { TrendingUp, Building2, Trophy, Globe2 } from "lucide-react";
import { stats } from "@/lib/data";
import { Counter } from "@/components/motion/Counter";
import { Reveal, staggerContainer, fadeUpItem } from "@/components/motion/Reveal";

const icons = [TrendingUp, Building2, Trophy, Globe2];

export function Placements() {
  return (
    <section
      id="placements"
      className="relative overflow-hidden bg-primary py-24 text-white"
    >
      <div className="absolute inset-0 bg-hero-grid bg-grid opacity-30" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-primary-400/30 blur-3xl" />

      <div className="section relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-secondary backdrop-blur-md">
            Our Track Record
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            A Quarter Century of <span className="text-secondary">Guidance</span>
          </h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            For over two decades, our integrated approach has helped students
            earn their degrees while building the foundation for IAS, IPS, KAS
            and other civil-services careers.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={stat.label}
                variants={fadeUpItem}
                className="glass rounded-3xl p-8 text-center shadow-2xl"
              >
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-primary shadow-lg">
                  <Icon className="h-7 w-7" />
                </span>
                <p className="mt-6 font-display text-4xl font-extrabold text-white sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-white/70">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
