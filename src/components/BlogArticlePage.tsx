import Head from "next/head";

import Navigation from "./Navigation";
import type { BlogArticle } from "../data/blogArticles";
import { blogArticles, PILLARS } from "../data/blogArticles";

type BlogArticlePageProps = {
  article: BlogArticle;
};

export default function BlogArticlePage({ article }: BlogArticlePageProps) {
  return (
    <>
      <Head>
        <title>{article.title} | Astan Technologies</title>
        <meta name="description" content={article.description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: article.title,
              description: article.description,
              datePublished: article.date,
              author: {
                '@type': 'Organization',
                name: 'Astan Technologies',
                url: 'https://www.astantechnologies.com',
              },
              publisher: {
                '@type': 'Organization',
                name: 'Astan Technologies',
                url: 'https://www.astantechnologies.com',
              },
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `https://www.astantechnologies.com${article.href}`,
              },
              url: `https://www.astantechnologies.com${article.href}`,
              articleSection: article.category,
              keywords: `${article.category}, operational technology, business automation, Astan Technologies`,
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-brand-paper text-slate-900">
        <Navigation />

        <main id="top" className="pt-32">
          <section className="relative overflow-hidden bg-brand-ink py-16 text-white sm:py-20">
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:72px_72px]" />
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-brand-sky/[0.18] blur-3xl" />
            <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

            <div className="section-shell relative">
              <a
                href="/blog"
                className="inline-flex items-center text-sm font-semibold text-slate-300 transition hover:text-white"
              >
                <span className="mr-2" aria-hidden="true">
                  &lt;-
                </span>
                Back to blog
              </a>

              <div className="mt-10 max-w-4xl">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-brand-sky">
                  {article.category}
                </p>
                <h1 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  {article.title}
                </h1>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  {article.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-slate-400">
                  <span>Astan Technologies</span>
                  <span aria-hidden="true">/</span>
                  <time>{article.date}</time>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-16 sm:py-20">
            <div className="section-shell grid gap-12 lg:grid-cols-[15rem_1fr] lg:items-start">
              <aside className="lg:sticky lg:top-32">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Sections
                </p>
                <nav className="mt-4 grid gap-2" aria-label="Article sections">
                  {article.sections.map((section) => (
                    <a
                      key={section.heading}
                      href={`#${section.heading
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/(^-|-$)/g, "")}`}
                      className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary/30 hover:text-primary"
                    >
                      {section.heading}
                    </a>
                  ))}
                </nav>
              </aside>

              <article className="max-w-4xl">
                <div className="space-y-12">
                  {article.sections.map((section) => {
                    const sectionId = section.heading
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/(^-|-$)/g, "");

                    return (
                      <section
                        key={section.heading}
                        id={sectionId}
                        className="scroll-mt-28 border-b border-slate-200 pb-10 last:border-b-0 last:pb-0"
                      >
                        <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-3xl">
                          {section.heading}
                        </h2>

                        {section.paragraphs ? (
                          <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
                            {section.paragraphs.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        ) : null}

                        {section.list ? (
                          <ul className="mt-5 space-y-3 text-base leading-8 text-slate-600">
                            {section.list.map((item) => (
                              <li key={item} className="flex gap-3">
                                <span
                                  className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-primary"
                                  aria-hidden="true"
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}

                        {section.orderedList ? (
                          <ol className="mt-5 list-decimal space-y-3 pl-5 text-base leading-8 text-slate-600">
                            {section.orderedList.map((item) => (
                              <li key={item} className="pl-2">
                                {item}
                              </li>
                            ))}
                          </ol>
                        ) : null}
                      </section>
                    );
                  })}
                </div>
              </article>
            </div>
          </section>

          {/* Related articles */}
          {(() => {
            const related = blogArticles.filter(
              (a) => a.pillar === article.pillar && a.slug !== article.slug
            ).slice(0, 3);
            if (!related.length) return null;
            return (
              <section className="bg-brand-paper py-16 sm:py-20">
                <div className="section-shell">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                    {PILLARS[article.pillar].label}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                    Related articles
                  </h2>
                  <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {related.map((rel) => {
                      const isExternal = rel.href.startsWith("http");
                      return (
                        <a
                          key={rel.slug}
                          href={rel.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noreferrer" : undefined}
                          className="flex flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-slate-300"
                        >
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                            {rel.category}
                          </p>
                          <h3 className="mt-3 font-display text-lg font-semibold tracking-[-0.03em] text-slate-950 flex-1">
                            {rel.title}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-slate-600 line-clamp-2">
                            {rel.description}
                          </p>
                          <p className="mt-4 text-sm font-semibold text-slate-900">
                            Read {isExternal ? "↗" : "->"}
                          </p>
                        </a>
                      );
                    })}
                  </div>
                  <div className="mt-8">
                    <a
                      href={PILLARS[article.pillar].href}
                      className="inline-flex items-center text-sm font-semibold text-primary transition hover:underline"
                    >
                      All {PILLARS[article.pillar].label} articles →
                    </a>
                  </div>
                </div>
              </section>
            );
          })()}
        </main>
      </div>
    </>
  );
}
