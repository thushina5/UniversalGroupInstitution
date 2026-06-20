"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const go = (dir: number) =>
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);

  return (
    <section className="relative overflow-hidden bg-primary-50/40 py-24">
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
      <div className="section relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Our Achievers</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Stories of <span className="text-secondary-500">Success</span>
          </h2>
          <p className="mt-4 text-base text-primary-800/70 sm:text-lg">
            Hear from the students and alumni who pursued their degrees and
            civil-services dreams together at Universal.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="glass-card relative overflow-hidden p-8 sm:p-12">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-secondary/20" />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex gap-1">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <p className="mt-6 text-lg font-medium leading-relaxed text-primary-900 sm:text-xl">
                  &ldquo;{active.quote}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <img
                    src={active.avatar}
                    alt={active.name}
                    className="h-14 w-14 rounded-full border-2 border-secondary object-cover"
                  />
                  <div>
                    <p className="font-display text-base font-bold text-primary">
                      {active.name}
                    </p>
                    <p className="text-sm text-primary-700/70">{active.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-primary/15 bg-white text-primary shadow-md transition-colors hover:bg-primary hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-secondary" : "w-2.5 bg-primary/20"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-primary/15 bg-white text-primary shadow-md transition-colors hover:bg-primary hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
