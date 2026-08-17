import { useState } from "react";

const navigationItems = [
  { label: "How We Work", href: "/#how-we-work" },
  { label: "Work", href: "/#work" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Research", href: "/#research" },
  { label: "Blog", href: "/blog" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-4">
        <nav className="rounded-[1.75rem] border border-white/10 bg-brand-ink/75 px-4 py-3 shadow-[0_24px_90px_rgba(2,6,23,0.38)] backdrop-blur-xl sm:px-5">
          <div className="flex items-center justify-between gap-4">
            <a
              href="/#top"
              className="flex items-center gap-3"
              aria-label="Astan Technologies home"
              onClick={closeMenu}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                <img
                  src="/brand/astan-iconmark-white.svg"
                  alt=""
                  className="h-6 w-6"
                />
              </span>
              <span className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                Astan
              </span>
            </a>

            <div className="hidden items-center gap-6 lg:flex">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href="mailto:dev@astantechnologies.com?subject=Operational%20Problem%20-%20Astan%20Technologies"
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                dev@astantechnologies.com
              </a>
              <a
                href="/#contact"
                className="primary-button px-5 py-2.5 text-sm"
              >
                Discuss a problem
              </a>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15 md:hidden"
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((current) => !current)}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>

          {menuOpen ? (
            <div className="mt-4 grid gap-3 border-t border-white/10 pt-4 md:hidden">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl border border-white/[0.08] bg-white/5 px-4 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}

              <a
                href="/#contact"
                className="primary-button mt-2 w-full"
                onClick={closeMenu}
              >
                Discuss a problem
              </a>
            </div>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
