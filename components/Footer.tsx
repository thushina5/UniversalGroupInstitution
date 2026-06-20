"use client";

import {
  GraduationCap,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  ArrowUp,
} from "lucide-react";
import { navLinks, institution } from "@/lib/data";

const programs = [
  "PU Science",
  "PU Commerce",
  "PU Arts",
  "B.Com / BBA",
  "BSc Environmental Science",
  "Integrated IAS / IPS",
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-900 text-white">
      <div className="absolute inset-0 bg-hero-grid bg-grid opacity-20" />
      <div className="section relative pt-16 pb-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-base font-extrabold">
                  Universal
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-secondary">
                  Institutions
                </span>
              </span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              A Bengaluru PU &amp; degree college with integrated IAS / IPS
              (UPSC &amp; PSC) training, guiding students since {institution.since}.
            </p>
            <div className="mt-5 space-y-2">
              {institution.subBrands.map((b) => (
                <p key={b.abbr} className="text-xs leading-snug text-white/60">
                  <span className="font-semibold text-secondary">{b.abbr}</span>{" "}
                  — {b.name}
                </p>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition-colors hover:bg-secondary hover:text-primary"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-secondary">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-secondary">
              Programs
            </h4>
            <ul className="mt-5 space-y-3">
              {programs.map((p) => (
                <li key={p}>
                  <a
                    href="#courses"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-secondary">
              Newsletter
            </h4>
            <p className="mt-5 text-sm text-white/60">
              Subscribe for admission updates, events and scholarships.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex overflow-hidden rounded-full border border-white/15 bg-white/5"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="w-full bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/40"
              />
              <button
                type="submit"
                className="shrink-0 bg-secondary px-5 text-sm font-semibold text-primary transition-colors hover:bg-secondary-300"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Universal Institutions. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/50 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/50 hover:text-white">
              Terms of Service
            </a>
            <a
              href="#home"
              aria-label="Back to top"
              className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-primary transition-transform hover:-translate-y-1"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
