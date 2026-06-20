"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, FileCheck2, PhoneCall } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const steps = [
  { icon: FileCheck2, title: "Submit Application", text: "Complete the online form in minutes." },
  { icon: CalendarDays, title: "Attend Counselling", text: "Personalised guidance from our experts." },
  { icon: PhoneCall, title: "Confirm Your Seat", text: "Secure admission and begin your journey." },
];

export function Admissions() {
  return (
    <section id="admissions" className="relative bg-white py-24">
      <div className="section">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary-900 via-primary to-primary-700 px-6 py-14 shadow-2xl sm:px-12 lg:px-16 lg:py-20">
            <div className="absolute inset-0 bg-hero-grid bg-grid opacity-30" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-secondary/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-primary-400/30 blur-3xl" />

            <div className="relative grid items-center gap-12 lg:grid-cols-2">
              <div className="text-white">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-secondary backdrop-blur-md">
                  Admissions 2026 Open
                </span>
                <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.75rem]">
                  Begin Your <span className="text-secondary">Integrated</span>{" "}
                  Journey Today
                </h2>
                <p className="mt-4 max-w-lg text-base text-white/75">
                  Seats for PU, degree and integrated UPSC programs are limited.
                  Apply early to secure your place and reserve hostel
                  accommodation for the 2026 batch.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="#contact" className="btn-secondary group">
                    Start Application
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a href="#contact" className="btn-ghost">
                    Download Brochure
                  </a>
                </div>
              </div>

              <div className="grid gap-4">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="glass flex items-center gap-4 rounded-2xl p-5"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                      <step.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="font-display text-base font-bold text-white">
                        {i + 1}. {step.title}
                      </p>
                      <p className="text-sm text-white/70">{step.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
