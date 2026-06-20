"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, GraduationCap, Users2 } from "lucide-react";
import { courses } from "@/lib/data";
import { Reveal, staggerContainer, fadeUpItem } from "@/components/motion/Reveal";

export function Courses() {
  return (
    <section id="courses" className="relative bg-white py-24">
      <div className="section">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Academic Programs</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Pre-University &amp; <span className="text-secondary-500">Degree</span>{" "}
            Programs
          </h2>
          <p className="mt-4 text-base text-primary-800/70 sm:text-lg">
            Science, Commerce and Arts streams at PU level, Bangalore University
            affiliated degrees, and a flagship integrated IAS / IPS track — every
            program carries built-in civil-services preparation.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {courses.map((course) => (
            <motion.article
              key={course.title}
              variants={fadeUpItem}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-primary/10 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-secondary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />

              <div className="flex items-center justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-secondary shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-110">
                  <course.icon className="h-7 w-7" />
                </span>
                <span className="rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold text-secondary-600">
                  {course.category}
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl font-bold text-primary">
                {course.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-primary-800/70">
                {course.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {course.highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary-700"
                  >
                    {h}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4 border-t border-primary/5 pt-5 text-xs font-medium text-primary-800/70">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-secondary-500" />
                  {course.duration}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4 text-secondary-500" />
                  {course.level}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Users2 className="h-4 w-4 text-secondary-500" />
                  {course.seats} seats
                </span>
              </div>

              <a
                href="#admissions"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-secondary-600"
              >
                View Curriculum
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
