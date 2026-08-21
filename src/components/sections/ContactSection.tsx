"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "../motion";

const prompts = [
  "We're reconciling payments manually every week...",
  "Our inventory system doesn't talk to our orders platform...",
  "We can't see what's happening in our operations in real time...",
  "Our team is doing the same data entry across three systems...",
  "We've outgrown our current setup but don't know what to replace it with...",
];

export function ContactSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="relative overflow-hidden bg-brand-ink py-14 lg:py-20">
      <div className="absolute inset-0 tech-grid opacity-20" />
      {/* Accent glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-[140px]" />

      <div className="section-shell relative">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <Reveal delay={0.05}>
              <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/50">
                Start a conversation
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-white">
                What is slowing your{" "}
                <span className="headline-gradient">operation down?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70">
                Describe the bottleneck. You don't need to know the technology solution — that's what the diagnosis is for.
              </p>
            </Reveal>
          </div>

          {/* Example prompts */}
          <Reveal delay={0.2}>
            <div className="mb-8 space-y-2">
              <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-wider text-white/25">
                Common starting points
              </p>
              {prompts.map((prompt, i) => (
                <motion.a
                  key={i}
                  href={`mailto:dev@astantechnologies.com?subject=Operational%20Problem&body=${encodeURIComponent(prompt)}`}
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-3.5 transition-all duration-200 hover:border-primary/30 hover:bg-primary/[0.04]"
                >
                  <span className="font-mono text-[0.6rem] text-white/20">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1 text-sm text-white/70 transition-colors duration-200 group-hover:text-white/70">
                    {prompt}
                  </span>
                  <svg
                    className="h-3.5 w-3.5 shrink-0 text-white/20 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-primary/60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </Reveal>

          {/* Primary CTA */}
          <Reveal delay={0.3}>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
              <p className="mb-4 text-sm text-white/70">
                Or describe your situation directly:
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:dev@astantechnologies.com?subject=Operational%20Problem%20-%20Astan%20Technologies"
                  className="primary-button flex-1 justify-center"
                >
                  dev@astantechnologies.com
                </a>
                <a
                  href="#how-we-work"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white/75 transition hover:border-white/[0.15] hover:text-white/80"
                >
                  See how we work
                </a>
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-xl border border-white/[0.04] bg-white/[0.02] p-4">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-sky/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-xs leading-relaxed text-white/35">
                  Whether the answer is custom software, an integration, AI automation, an existing platform, or a combination — Astan will diagnose the problem, design the solution, and lead the delivery.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
