"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
    >
      <nav
        className={`section flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "border border-white/40 bg-white/70 shadow-lg shadow-primary/5 backdrop-blur-xl"
            : "border border-white/10 bg-white/5 backdrop-blur-md"
        }`}
      >
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-secondary shadow-lg shadow-primary/30">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-base font-extrabold tracking-tight transition-colors ${
                scrolled ? "text-primary" : "text-primary"
              }`}
            >
              Universal
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-secondary-500">
              Institutions
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-primary-800/80 transition-colors hover:bg-primary/5 hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contact" className="text-sm font-semibold text-primary">
            +91 80 4567 8900
          </a>
          <a href="#admissions" className="btn-secondary px-5 py-2.5 text-sm">
            Apply Now
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="section mt-2 overflow-hidden rounded-2xl border border-white/40 bg-white/80 p-4 shadow-xl backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-primary-800 transition-colors hover:bg-primary/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#admissions"
              onClick={() => setOpen(false)}
              className="btn-secondary mt-3 w-full"
            >
              Apply Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
