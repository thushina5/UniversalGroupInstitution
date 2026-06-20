"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { courses, institution } from "@/lib/data";

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: institution.address,
  },
  { icon: Phone, label: "Call Us", value: institution.phones.join("  ·  ") },
  { icon: Mail, label: "Email Us", value: institution.email },
];

type Status = "idle" | "loading" | "success";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Record<string, string> = {};

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();

    if (name.length < 2) newErrors.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email address.";
    if (!/^[0-9+\-\s]{8,15}$/.test(phone))
      newErrors.phone = "Enter a valid phone number.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus("loading");
    // Simulated submission — wire to your API route / CRM here.
    setTimeout(() => {
      setStatus("success");
      form.reset();
    }, 1400);
  };

  return (
    <section id="contact" className="bg-white py-24">
      <div className="section">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Info panel */}
          <Reveal direction="right" className="lg:col-span-2">
            <span className="section-eyebrow">Get In Touch</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              Begin Your <span className="text-secondary-500">Journey</span>
            </h2>
            <p className="mt-4 text-base text-primary-800/70">
              Have questions about programs, scholarships or campus life? Our
              admissions team responds within 24 hours.
            </p>

            <div className="mt-8 space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-4 rounded-2xl border border-primary/10 bg-primary-50/40 p-4"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-secondary">
                    <info.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary-700/60">
                      {info.label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-primary-900">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal direction="left" className="lg:col-span-3">
            <div className="glass-card p-7 sm:p-10">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle2 className="h-16 w-16 text-secondary" />
                  <h3 className="mt-5 font-display text-2xl font-bold text-primary">
                    Application Received!
                  </h3>
                  <p className="mt-2 max-w-sm text-primary-800/70">
                    Thank you for reaching out. Our admissions team will contact
                    you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="btn-primary mt-6"
                  >
                    Submit Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Full Name"
                      name="name"
                      placeholder="Jane Doe"
                      error={errors.name}
                    />
                    <Field
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="jane@email.com"
                      error={errors.email}
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      error={errors.phone}
                    />
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-primary">
                        Program of Interest
                      </label>
                      <select
                        name="program"
                        defaultValue=""
                        className="w-full rounded-xl border border-primary/15 bg-white px-4 py-3 text-sm text-primary-900 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/30"
                      >
                        <option value="" disabled>
                          Select a program
                        </option>
                        {courses.map((c) => (
                          <option key={c.title} value={c.title}>
                            {c.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-primary">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us how we can help..."
                      className="w-full resize-none rounded-xl border border-primary/15 bg-white px-4 py-3 text-sm text-primary-900 outline-none transition placeholder:text-primary-400 focus:border-secondary focus:ring-2 focus:ring-secondary/30"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Enquiry
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
};

function Field({ label, name, type = "text", placeholder, error }: FieldProps) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-primary">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        aria-invalid={!!error}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-primary-900 outline-none transition placeholder:text-primary-400 focus:ring-2 ${
          error
            ? "border-red-400 focus:ring-red-200"
            : "border-primary/15 focus:border-secondary focus:ring-secondary/30"
        }`}
      />
      {error && <p className="mt-1 text-xs font-medium text-red-500">{error}</p>}
    </div>
  );
}
