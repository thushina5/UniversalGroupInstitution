"use client";

import { motion } from "framer-motion";
import { gallery } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";

export function Gallery() {
  return (
    <section id="gallery" className="bg-primary-50/40 py-24">
      <div className="section">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Campus Life</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Life at <span className="text-secondary-500">Universal</span>
          </h2>
          <p className="mt-4 text-base text-primary-800/70 sm:text-lg">
            A focused, disciplined campus in Bengaluru — classrooms, libraries
            and labs designed for students balancing academics with serious exam
            preparation.
          </p>
        </Reveal>

        <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((item, i) => (
            <motion.figure
              key={item.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-3xl shadow-md ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="absolute bottom-4 left-4 translate-y-2 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
