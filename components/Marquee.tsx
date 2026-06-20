"use client";

import { motion } from "framer-motion";
import { recruiters } from "@/lib/data";

export function Marquee() {
  const items = [...recruiters, ...recruiters];

  return (
    <section className="border-y border-primary/5 bg-white py-10">
      <div className="section">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-primary-700/60">
          Preparing students for India&apos;s most respected careers
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <motion.div
            className="flex w-max gap-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          >
            {items.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-display text-xl font-bold text-primary/40 transition-colors hover:text-primary sm:text-2xl"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
