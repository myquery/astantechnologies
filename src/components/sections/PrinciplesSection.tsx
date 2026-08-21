"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "../motion";

const principles = [
  {
    number: "01",
    title: "Problem before product",
    description:
      "We diagnose the operational problem before recommending any technology. The right solution depends on the problem, not on what we prefer to build.",
    detail: "This means we may recommend buying an existing platform, automating what you have, or integrating disconnected systems — rather than building custom software.",
  },
  {
    number: "02",
    title: "Architecture before acceleration",
    description:
      "We design the system for fit, scalability, and operational reality so the solution keeps working after launch — not just on demo day.",
    detail: "Rushing to build without a clear architecture creates technical debt that compounds. We invest in design so delivery is faster and the result is durable.",
  },
  {
    number: "03",
    title: "One accountable delivery layer",
    description:
      "Whether we build, buy, automate, integrate, or source — Astan remains responsible for the architecture and the outcome. You deal with one team.",
    detail: "This means we coordinate external vendors, manage integrations, and own the technical delivery end-to-end. You don't manage a fragmented supplier chain.",
  },
];

export function PrinciplesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="why-astan" className="relative overflow-hidden bg-brand-ink py-14 lg:py-20">
      <div className="absolute inset-0 tech-grid-dense opacity-20" />
      {/* Subtle accent */}
      <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="section-shell relative">
        {/* Header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <Reveal delay={0.05}>
              <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/50">
                Why Astan
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
                We diagnose{" "}
                <span className="headline-gradient">before we prescribe.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="text-base leading-relaxed text-white/70">
              Astan remains responsible for the solution whether that involves custom software, commercial platforms, integrations, automation, AI, specialist vendors, or external technology providers.
            </p>
          </Reveal>
        </div>

        {/* Principles */}
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] lg:grid-cols-3">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="group relative bg-white/[0.02] p-8 transition-colors duration-300 hover:bg-white/[0.04]"
            >
              {/* Number */}
              <div className="mb-6 flex items-center gap-3">
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/20">
                  {principle.number}
                </span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold leading-snug text-white">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {principle.description}
              </p>

              {/* Detail — appears on hover */}
              <p className="mt-3 text-sm leading-relaxed text-white/40 transition-colors duration-300 group-hover:text-white/45">
                {principle.detail}
              </p>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <Reveal delay={0.3}>
          <div className="mt-12 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center">
            <p className="font-display text-lg font-semibold text-white/70">
              The result should feel like{" "}
              <span className="text-white">an operational technology company</span>
              {" "}+{" "}
              <span className="text-white">a systems architecture consultancy</span>
              {" "}+{" "}
              <span className="text-white">a product engineering organization.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
