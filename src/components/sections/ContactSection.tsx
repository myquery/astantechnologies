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
    <section id="contact" className="relative overflow-hidden bg-[var(--bg)] py-14 lg:py-20">
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
                Or reach out directly:
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/2349011802311?text=Hi%20Astan%2C%20I%27d%20like%20to%20discuss%20an%20operational%20bottleneck"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#20bd5a]"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
                <a
                  href="https://calendly.com/astantechnologies/discovery"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary/90"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book a discovery call
                </a>
              </div>
              <div className="mt-4 flex items-center justify-center gap-4 text-sm text-white/50">
                <a
                  href="https://x.com/astan_io"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-white/70 transition hover:text-white"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  @astan_io
                </a>
                <span className="text-white/30">·</span>
                <a
                  href="mailto:dev@astantechnologies.com?subject=Operational%20Problem%20-%20Astan%20Technologies"
                  className="font-medium text-white/70 transition hover:text-white"
                >
                  dev@astantechnologies.com
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
