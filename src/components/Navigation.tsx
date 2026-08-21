import { useState, useEffect } from "react";

const navigationItems = [
  { label: "How We Work", href: "/#how-we-work" },
  { label: "Work", href: "/#work" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Research", href: "/#research" },
  { label: "Blog", href: "/blog" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-4">
        <nav
          className="rounded-[1.75rem] border px-4 py-3 shadow-[0_24px_90px_rgba(2,6,23,0.12)] backdrop-blur-xl sm:px-5"
          style={{ background: "var(--nav-bg)", borderColor: "var(--nav-border)" }}
        >
          <div className="flex items-center justify-between gap-4">
            <a
              href="/#top"
              className="flex items-center gap-3"
              aria-label="Astan Technologies home"
              onClick={closeMenu}
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-2xl border"
                style={{ borderColor: "var(--nav-border)", background: "var(--nav-item-bg)" }}
              >
                <img
                  src="/brand/astan-iconmark-white.svg"
                  alt=""
                  className="h-6 w-6"
                />
              </span>
              <span className="font-display text-2xl font-semibold tracking-[-0.04em]" style={{ color: "var(--fg)" }}>
                Astan
              </span>
            </a>

            <div className="hidden items-center gap-6 lg:flex">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium transition"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href="mailto:dev@astantechnologies.com?subject=Operational%20Problem%20-%20Astan%20Technologies"
                className="text-sm font-medium transition"
                style={{ color: "var(--fg-muted)" }}
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

            {/* <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border text-base transition"
                style={{ borderColor: "var(--nav-border)", background: "var(--nav-item-bg)", color: "var(--fg)" }}
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition md:hidden"
                style={{ borderColor: "var(--nav-border)", background: "var(--nav-item-bg)", color: "var(--fg)" }}
                aria-expanded={menuOpen}
                aria-label="Toggle menu"
                onClick={() => setMenuOpen((current) => !current)}
              >
                {menuOpen ? "Close" : "Menu"}
              </button>
            </div> */}
          </div>

          {menuOpen ? (
            <div
              className="mt-4 grid gap-3 border-t pt-4 md:hidden"
              style={{ borderColor: "var(--nav-border)" }}
            >
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl border px-4 py-3 text-sm font-medium transition"
                  style={{ borderColor: "var(--card-border)", background: "var(--nav-item-bg)", color: "var(--fg)" }}
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
