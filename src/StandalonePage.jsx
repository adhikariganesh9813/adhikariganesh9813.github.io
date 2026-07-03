import { useState } from "react";

const GITHUB_PROFILE = "https://github.com/adhikariganesh9813";

export const GitHubIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.165 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.867-.013-1.702-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

export const LinkedInIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "MyApps", href: "/myapps.html" },
  { label: "Blogs", href: "/blogs.html" },
  { label: "Certifications", href: "/certifications.html" },
  { label: "Research", href: "/#research" },
  { label: "Contact", href: "/#contact" },
];

export function StandalonePage({ activeLabel, eyebrow, title, description, emptyLabel, emptyDescription, heroAside, heroContent, children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <div
        className="pointer-events-none fixed -top-80 right-[-300px] h-[700px] w-[700px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(8,145,178,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none fixed -bottom-80 left-[-300px] h-[700px] w-[700px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)" }}
      />

      <header
        className="sticky top-0 z-30 backdrop-blur-xl"
        style={{ background: "rgba(255,255,255,0.86)", borderBottom: "1px solid rgba(148,163,184,0.22)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="font-display text-2xl font-extrabold md:text-3xl">
            <span className="gradient-text">Ganesh</span>
            <span className="text-ink"> Adhikari</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = item.label === activeLabel;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-200 hover:text-teal ${
                    isActive ? "text-teal" : "text-ink/80"
                  }`}
                  style={isActive ? { background: "rgba(8,145,178,0.08)" } : undefined}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(8,145,178,0.08)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = isActive ? "rgba(8,145,178,0.08)" : "transparent"; }}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noreferrer"
              className="ml-3 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-ink/80 transition-all duration-200 hover:text-teal"
              style={{ border: "1px solid rgba(148,163,184,0.28)", background: "rgba(255,255,255,0.7)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(8,145,178,0.35)"; e.currentTarget.style.background = "rgba(8,145,178,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(148,163,184,0.28)"; e.currentTarget.style.background = "rgba(255,255,255,0.7)"; }}
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          </nav>

          <button
            className="rounded-lg px-3 py-2 text-sm font-semibold text-slate transition-colors duration-200 hover:text-teal lg:hidden"
            style={{ border: "1px solid rgba(148,163,184,0.28)", background: "rgba(255,255,255,0.7)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {menuOpen && (
          <nav
            className="px-6 py-4 lg:hidden animate-fade-in"
            style={{ borderTop: "1px solid rgba(148,163,184,0.22)", background: "rgba(255,255,255,0.96)" }}
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm font-semibold hover:text-teal ${
                    item.label === activeLabel ? "text-teal" : "text-ink/80"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-24 px-6 pb-20 pt-4 md:pt-8">
        <section className="panel rounded-[36px] p-8 md:p-12" aria-label={title}>
          <div className={`grid gap-8 ${heroAside ? "md:grid-cols-[1fr_0.8fr] md:items-center" : ""}`}>
            <div className={heroAside ? "max-w-2xl" : "max-w-5xl"}>
              <p className="section-label">{eyebrow}</p>
              <h1 className="section-title mt-4">{title}</h1>
              <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base">{description}</p>
              {heroContent}
            </div>
            {(heroAside || emptyLabel || emptyDescription) && (
              <div className="panel-inset rounded-[24px] p-7">
                {heroAside ?? (
                  <>
                    <p className="meta-label lowercase text-teal/80">// coming soon</p>
                    <div className="mt-5 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-6 text-center">
                      <p className="font-display text-lg font-semibold text-ink">{emptyLabel}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate">{emptyDescription}</p>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </section>
        {children}
      </main>

      <footer style={{ borderTop: "1px solid rgba(148,163,184,0.22)", background: "rgba(255,255,255,0.82)" }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate md:flex-row">
          <p>© 2026 Ganesh Adhikari. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-teal"
              href="https://www.linkedin.com/in/ganesh-adhikari-148918101"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-teal"
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
