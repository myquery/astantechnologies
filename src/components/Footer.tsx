import { blogArticles } from "../data/blogArticles";

const navLinks = [
  { label: "How we work", href: "/#how-we-work" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Work", href: "/#work" },
  { label: "Research", href: "/#research" },
  { label: "Blog", href: "/blog" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "User Data Deletion", href: "/user-data-deletion" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[var(--bg-alt)]">
      <div className="section-shell py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-3" aria-label="Astan Technologies">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                <img src="/brand/astan-iconmark-white.svg" alt="" className="h-5 w-5" />
              </span>
              <img src="/brand/astan-wordmark-white.svg" alt="Astan Technologies" className="h-6 w-auto" />
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Astan identifies operational bottlenecks and delivers the technology solution to remove them — software, AI, automation, integrations, or a combination.
            </p>
            <a
              href="mailto:dev@astantechnologies.com"
              className="mt-4 inline-block font-mono text-[0.7rem] text-white/35 transition hover:text-white/75"
            >
              dev@astantechnologies.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/25">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition hover:text-white/70"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Research */}
          <div>
            <p className="mb-4 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/25">
              Recent research
            </p>
            <ul className="space-y-3">
              {blogArticles.slice(0, 4).map((article) => {
                const isExternal = article.href.startsWith("http");
                return (
                  <li key={article.slug}>
                    <a
                      href={article.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className="text-sm leading-snug text-white/50 transition hover:text-white/70 line-clamp-2"
                    >
                      {article.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.04] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.6rem] text-white/20">
            © {new Date().getFullYear()} Astan Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-[0.6rem] text-white/25 transition hover:text-white/70"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
