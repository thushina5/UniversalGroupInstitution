"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  PlayCircle,
  Sparkles,
  Users,
  BookOpen,
} from "lucide-react";
import { staggerContainer, fadeUpItem } from "@/components/motion/Reveal";

const floatingCards = [
  {
    icon: Award,
    label: "Bangalore University Affiliated",
    className: "left-2 top-24 sm:left-6",
    delay: 0,
  },
  {
    icon: Users,
    label: "5,000+ Alumni Mentored",
    className: "right-2 top-40 sm:right-4",
    delay: 1.2,
  },
  {
    icon: BookOpen,
    label: "Integrated UPSC from Day 1",
    className: "bottom-10 left-6 sm:left-16",
    delay: 0.6,
  },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-primary pt-28 text-white"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary to-primary-700" />
      <div className="absolute inset-0 bg-hero-grid bg-grid opacity-40" />
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-primary-400/30 blur-3xl" />

      {/* Floating glass cards */}
      {floatingCards.map((card) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + card.delay * 0.2, duration: 0.6 }}
          className={`absolute z-10 hidden lg:block ${card.className}`}
        >
          <div
            className="glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-2xl animate-float"
            style={{ animationDelay: `${card.delay}s` }}
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-secondary text-primary">
              <card.icon className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold text-white">
              {card.label}
            </span>
          </div>
        </motion.div>
      ))}

      <div className="section relative z-20 grid items-center gap-12 pb-20 lg:grid-cols-2">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUpItem}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-secondary backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              Admissions 2026 Now Open
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUpItem}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Where PU &amp; Degree Education Meets{" "}
            <span className="relative whitespace-nowrap text-secondary">
              Civil Services
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
              >
                <motion.path
                  d="M2 9C40 3 160 3 198 9"
                  stroke="#FDB913"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                />
              </svg>
            </span>{" "}
            Success
          </motion.h1>

          <motion.p
            variants={fadeUpItem}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Universal Group of Institutions is a Bangalore-based PU and degree
            college with integrated IAS / IPS (UPSC &amp; PSC) training — so
            students prepare for their board, university and civil-services goals
            under one roof.
          </motion.p>

          <motion.div
            variants={fadeUpItem}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a href="#admissions" className="btn-secondary group">
              Apply for Admission
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#courses" className="btn-ghost group">
              <PlayCircle className="h-5 w-5 text-secondary" />
              Explore Programs
            </a>
          </motion.div>

          <motion.div
            variants={fadeUpItem}
            className="mt-12 flex flex-wrap items-center gap-8"
          >
            {[
              { value: "25+", label: "Years of Experience" },
              { value: "50+", label: "Rank Holders" },
              { value: "5,000+", label: "Alumni" },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-display text-2xl font-bold text-secondary">
                  {item.value}
                </p>
                <p className="text-sm text-white/60">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] border border-white/20 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
              alt="Universal Group of Institutions students"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-transparent to-transparent" />
          </div>

          {/* Glass stat overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="glass-card absolute -bottom-6 -left-6 w-60 p-5 text-primary"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                <Award className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-xl font-extrabold">Since 1999</p>
                <p className="text-xs text-primary-700/70">
                  Integrated UPSC pioneers
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
          className="h-12 w-full sm:h-16"
        >
          <path d="M0 80V40C240 0 480 0 720 30C960 60 1200 60 1440 30V80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
