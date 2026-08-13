import Head from "next/head";
import Navigation from "../../components/Navigation";
import { blogArticles } from "../../data/blogArticles";

export default function BlogIndexPage() {
  return (
    <>
      <Head>
        <title>Blog | Astan Technologies</title>
        <meta
          name="description"
          content="Articles from Astan Technologies on software development, blockchain, fintech, ERP integration, and building technology products in Nigeria."
        />
      </Head>

      <div className="min-h-screen bg-brand-paper text-slate-900">
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
                  Practical writing on software development, blockchain, fintech, ERP integration, and building technology products in Nigeria and Africa.
                </p>
              </div>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="bg-brand-paper py-16 sm:py-20">
            <div className="section-shell">
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {blogArticles.map((article) => {
                  const isExternal = article.href.startsWith("http");
                  return (
                    <article
                      key={article.href}
                      className="flex flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_28px_88px_rgba(15,23,42,0.1)] sm:p-7"
                    >
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                          {article.category}
                        </p>
                        {isExternal && (
                          <span className="rounded-full border border-slate-200 bg-brand-paper px-2 py-1 text-[0.65rem] font-medium text-slate-500">
                            Medium
                          </span>
                        )}
                      </div>
                      <h2 className="font-display text-xl font-semibold tracking-[-0.03em] text-slate-950 flex-1">
                        {article.title}
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {article.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <time className="text-xs text-slate-400">{article.date}</time>
                        <a
                          href={article.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noreferrer" : undefined}
                          className="inline-flex items-center text-sm font-semibold text-slate-900 transition hover:text-primary"
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
