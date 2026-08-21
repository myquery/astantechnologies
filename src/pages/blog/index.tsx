"use client";
import Head from "next/head";
import { useState } from "react";
import Navigation from "../../components/Navigation";
import { blogArticles, PILLARS, type Pillar } from "../../data/blogArticles";

const ALL = "all" as const;
type Filter = Pillar | typeof ALL;

export default function BlogIndexPage() {
  const [active, setActive] = useState<Filter>(ALL);

  const filtered =
    active === ALL ? blogArticles : blogArticles.filter((a) => a.pillar === active);

  return (
    <>
      <Head>
        <title>Blog | Astan Technologies</title>
        <meta
          name="description"
          content="Research and field notes from Astan Technologies on operational technology solutions, business process automation, integration, AI, and building technology products."
        />
      </Head>

      <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
        <Navigation />

        <main id="top" className="pt-32">
          {/* Header */}
          <section className="relative overflow-hidden bg-brand-ink py-16 text-white sm:py-20">
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:72px_72px]" />
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-brand-sky/[0.18] blur-3xl" />
            <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="section-shell relative">
              <a
                href="/"
                className="inline-flex items-center text-sm font-semibold text-slate-300 transition hover:text-white"
              >
                <span className="mr-2" aria-hidden="true">&lt;-</span>
                Back to home
              </a>
              <div className="mt-10 max-w-3xl">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-brand-sky">
                  Astan field notes
                </p>
                <h1 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                  Blog
                </h1>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Research and writing from Astan&apos;s work in operational technology, integration, automation, and building technology products.
                </p>
              </div>

              {/* Pillar topic cards */}
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {(Object.entries(PILLARS) as [Pillar, typeof PILLARS[Pillar]][]).map(([key, pillar]) => (
                  <a
                    key={key}
                    href={pillar.href}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                  >
                    <p className="text-sm font-semibold text-white">{pillar.label}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">{pillar.description}</p>
                    <p className="mt-3 text-xs font-semibold text-brand-sky">
                      {blogArticles.filter((a) => a.pillar === key).length} articles →
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Filter tabs + grid */}
          <section className="py-16 sm:py-20" style={{ background: 'var(--bg-surface)' }}>
            <div className="section-shell">
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-10">
                {([ALL, ...Object.keys(PILLARS)] as Filter[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActive(key)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                      active === key
                        ? "border-primary bg-primary text-white"
                        : "border-white/10 bg-white/5 text-slate-300 hover:border-primary/40 hover:text-white"
                    }`}
                  >
                    {key === ALL ? "All articles" : PILLARS[key as Pillar].label}
                  </button>
                ))}
              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {filtered.map((article) => {
                  const isExternal = article.href.startsWith("http");
                  return (
                    <article
                      key={article.href}
                      className="flex flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] sm:p-7"
                    >
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-sky">
                          {article.category}
                        </p>
                        {isExternal && (
                          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[0.65rem] font-medium text-slate-400">
                            Medium
                          </span>
                        )}
                      </div>
                      <h2 className="font-display text-xl font-semibold tracking-[-0.03em] text-white flex-1">
                        {article.title}
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {article.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <time className="text-xs text-slate-500">{article.date}</time>
                        <a
                          href={article.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noreferrer" : undefined}
                          className="inline-flex items-center text-sm font-semibold text-white transition hover:text-brand-sky"
                        >
                          Read article
                          <span className="ml-2" aria-hidden="true">
                            {isExternal ? "↗" : "->"}
                          </span>
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
