"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroSystemDiagram } from "../system";
import { Reveal } from "../motion";

const processSteps = ["Diagnose", "Architect", "Compose", "Deliver"];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-ink text-white">
      {/* Background layers */}
      <div className="absolute inset-0 tech-grid opacity-60" />

      {/* Subtle gradient accents */}
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-brand-sky/8 blur-[100px]" />

      {/* Content — full bleed, no max-width container */}
      <div className="relative w-full px-4 pt-32 pb-10 sm:px-6 sm:pt-36 lg:px-12 lg:pt-40 lg:pb-14 xl:px-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left: Copy */}
          <div>
            <Reveal delay={0.1}>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/75">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-sky opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-sky" />
                </span>
                Operational Technology Solutions
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
                Technology should remove bottlenecks,
                <span className="headline-gradient block">
                  not create more of them.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
                Astan identifies costly operational friction in growing businesses
                and designs the right technology solution to remove it — combining
                software, AI, automation, integrations, and existing platforms
                where required.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="#contact" className="primary-button">
                  Discuss an operational bottleneck
                </a>
                <a
                  href="#how-we-work"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/75 transition hover:text-white"
                >
                  See how Astan works
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </Reveal>

            {/* Process steps */}
            <Reveal delay={0.5}>
              <div className="mt-12 border-t border-white/[0.06] pt-8">
                <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/50">
                  How we work
                </p>
                <div className="flex flex-wrap items-center gap-1">
                  {processSteps.map((step, index) => (
                    <div key={step} className="flex items-center">
                      <div className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded bg-white/[0.06] font-mono text-[0.6rem] font-semibold text-white/70">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm font-medium text-white/70">
                          {step}
                        </span>
                      </div>
                      {index < processSteps.length - 1 && (
                        <svg
                          className="mx-1 h-4 w-4 text-white/20"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: System Diagram */}
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative w-full"
            >
              {/* Diagram container */}
              <div className="relative w-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm">
                {/* Header */}
                <div className="mb-4 flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    </div>
                    <span className="font-mono text-[0.6rem] uppercase tracking-wider text-white/40">
                      system.view
                    </span>
                  </div>
                  <span className="rounded border border-white/[0.08] bg-white/[0.04] px-2 py-1 font-mono text-[0.55rem] uppercase tracking-wider text-white/50">
                    Live
                  </span>
                </div>

                {/* Diagram */}
                <HeroSystemDiagram />
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border border-white/[0.04]" />
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full border border-white/[0.03]" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-ink to-transparent" />
    </section>
  );
}
