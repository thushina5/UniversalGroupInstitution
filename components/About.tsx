"use client";

import { motion } from "framer-motion";
import { GraduationCap, Landmark, Clock4, CheckCircle2 } from "lucide-react";
import { Reveal, staggerContainer, fadeUpItem } from "@/components/motion/Reveal";

const pillars = [
  {
    icon: Clock4,
    title: "No Years Lost",
    text: "UPSC preparation begins alongside PU and degree classes, so aspirants gain a head start instead of waiting until graduation.",
  },
  {
    icon: GraduationCap,
    title: "One Campus, Two Goals",
    text: "Board, university and civil-services coaching run together under a single, structured timetable.",
  },
  {
    icon: Landmark,
    title: "Mentor-Led Discipline",
    text: "Daily answer writing, current affairs and mind maps build the habits that crack prelims, mains and the interview.",
  },
];

export function About() {
  return (
    <section id="about" className="relative bg-white py-24">
      <div className="section grid items-center gap-14 lg:grid-cols-2">
        <Reveal direction="right">
          <span className="section-eyebrow">Why Integrated Education</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Degree Today, <span className="text-secondary-500">Service</span>{" "}
            Tomorrow
          </h2>
          <p className="mt-5 text-base leading-relaxed text-primary-800/70">
            Most students discover the civil-services dream only after their
            degree — and then spend years catching up. Universal Group of
            Institutions was built to remove that gap. Our integrated model
            weaves IAS / IPS (UPSC &amp; PSC) training into Pre-University and
            degree education from the very first day.
          </p>
          <p className="mt-4 text-base leading-relaxed text-primary-800/70">
            Through <strong>Universal School of Administration</strong> and the{" "}
            <strong>Universal Coaching Centre</strong>, learners earn a
            recognised qualification while steadily building the knowledge,
            writing practice and temperament that public service demands.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Pre-University, Degree and UPSC under one roof",
              "Bangalore University affiliated programs",
              "25+ years of coaching experience",
            ].map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-sm font-medium text-primary-900"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary-500" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUpItem}
              className="flex items-start gap-4 rounded-2xl border border-primary/10 bg-primary-50/40 p-6 shadow-sm"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-secondary">
                <p.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-primary">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-primary-800/70">
                  {p.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
