"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "../motion";
import { blogArticles } from "../../data/blogArticles";

const featuredIds = [
  "asset-tokenization-financing-problem-nobody-talks-about",
  "stablecoins-africa-business-use-cases-nigeria",
  "rgb-protocol-asset-tokenization-bitcoin",
];

const featured = featuredIds
  .map((slug) => blogArticles.find((a) => a.slug === slug))
  .filter(Boolean) as typeof blogArticles;

export function ResearchSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="research" className="relative overflow-hidden bg-[var(--bg-alt)] py-14 lg:py-20">
      <div className="absolute inset-0 tech-grid opacity-20" />
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="section-shell relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          {/* Left: header */}
          <div>
            <Reveal delay={0.05}>
              <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/50">
                Astan / Research
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
                We investigate technologies likely to reshape how businesses and financial systems operate.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-sm leading-relaxed text-white/45">
                This research is separate from our core commercial proposition. It demonstrates technical depth and forward thinking — not a pivot away from operational technology.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 space-y-2">
                {["Financial infrastructure", "Asset tokenization", "Bitcoin / distributed systems", "Enterprise blockchain", "SME infrastructure"].map((topic) => (
                  <div key={topic} className="flex items-center gap-3">
                    <span className="h-px w-4 bg-white/20" />
                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-white/35">{topic}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <a
                href="/blog"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
              >
                Explore Astan Research
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </Reveal>
          </div>

          {/* Right: featured articles */}
          <div className="space-y-3">
            {featured.map((article, index) => {
              const isExternal = article.href.startsWith("http");
              return (
                <motion.a
                  key={article.slug}
                  href={article.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                  className="group flex items-start gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.04]"
                >
                  {/* Index */}
                  <span className="mt-0.5 shrink-0 font-mono text-[0.6rem] text-white/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-[0.6rem] uppercase tracking-wider text-white/40">
                      {article.category}
                    </p>
                    <h3 className="mt-1.5 font-display text-base font-semibold leading-snug text-white/80 transition-colors duration-200 group-hover:text-white">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/50 line-clamp-2">
                      {article.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <svg
                    className="mt-1 h-4 w-4 shrink-0 text-white/20 transition-all duration-200 group-hover:translate-x-1 group-hover:text-white/70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={isExternal ? "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" : "M17 8l4 4m0 0l-4 4m4-4H3"} />
                  </svg>
                </motion.a>
              );
            })}

            {/* View all */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="pt-2 text-right"
            >
              <a
                href="/blog"
                className="font-mono text-[0.65rem] uppercase tracking-wider text-white/40 transition hover:text-white/75"
              >
                View all {blogArticles.length} articles →
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
