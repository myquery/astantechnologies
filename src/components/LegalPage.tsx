import Head from "next/head";

import Navigation from "./Navigation";

export type LegalSection = {
  id: string;
  title: string;
  body: string[];
  list?: string[];
};

type LegalPageProps = {
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
};

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms of Service", href: "/terms-of-service/" },
  { label: "User Data Deletion", href: "/user-data-deletion/" },
];

export default function LegalPage({
  title,
  description,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <>
      <Head>
        <title>{title} | Astan Technologies</title>
        <meta name="description" content={description} />
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
                href="/"
                className="inline-flex items-center text-sm font-semibold text-slate-300 transition hover:text-white"
              >
                <span className="mr-2" aria-hidden="true">
                  ←
                </span>
                Back to Astan
              </a>

              <div className="mt-10 max-w-3xl">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-brand-sky">
                  Legal
                </p>
                <h1 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  {title}
                </h1>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  {description}
                </p>
                <p className="mt-6 text-sm font-medium text-slate-400">
                  Last updated: {lastUpdated}
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white py-16 sm:py-20">
            <div className="section-shell grid gap-12 lg:grid-cols-[15rem_1fr] lg:items-start">
              <aside className="lg:sticky lg:top-32">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Policies
                </p>
                <nav className="mt-4 grid gap-2" aria-label="Legal pages">
                  {legalLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary/30 hover:text-primary"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </aside>

              <article className="max-w-4xl">
                <div className="space-y-12">
                  {sections.map((section) => (
                    <section
                      key={section.id}
                      id={section.id}
                      className="scroll-mt-28 border-b border-slate-200 pb-10 last:border-b-0 last:pb-0"
                    >
                      <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-3xl">
                        {section.title}
                      </h2>

                      <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
                        {section.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>

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
                    </section>
                  ))}
                </div>
              </article>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
