"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { faculty } from "@/lib/data";
import { Reveal, staggerContainer, fadeUpItem } from "@/components/motion/Reveal";

export function Faculty() {
  return (
    <section id="faculty" className="bg-white py-24">
      <div className="section">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Mentors &amp; Faculty</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Guided by <span className="text-secondary-500">Experts</span>
          </h2>
          <p className="mt-4 text-base text-primary-800/70 sm:text-lg">
            Experienced academic faculty and seasoned civil-services mentors work
            side by side to support every learner through board, degree and UPSC
            milestones.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {faculty.map((member) => (
            <motion.article
              key={member.name}
              variants={fadeUpItem}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-primary/10 bg-primary-50/30 shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/85 via-primary-900/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex gap-2">
                    <a
                      href="#"
                      aria-label={`${member.name} on LinkedIn`}
                      className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-primary transition-colors hover:bg-secondary"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      aria-label={`Email ${member.name}`}
                      className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-primary transition-colors hover:bg-secondary"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-primary">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-secondary-600">
                  {member.title}
                </p>
                <p className="mt-1 text-xs text-primary-700/60">
                  {member.department}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
