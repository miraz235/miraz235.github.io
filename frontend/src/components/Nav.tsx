import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PROFILE } from "../data/resume";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-black/55 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          data-testid="nav-logo"
          className="flex items-center gap-3 group"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/15 font-mono text-[11px] tracking-[0.18em] text-primary-ink group-hover:border-[var(--accent)] transition-colors">
            {PROFILE.initials}
          </span>
          <span className="font-serif text-lg leading-none">{PROFILE.shortName}</span>
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-secondary-ink hidden sm:inline">
            / Senior FE Engineer
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(" ", "-")}`}
              className="font-mono text-[11px] tracking-[0.22em] uppercase text-secondary-ink hover:text-primary-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            data-testid="nav-cta"
            className="ml-2 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/50 px-4 py-1.5 text-[11px] font-mono tracking-[0.22em] uppercase text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black transition-colors"
          >
            <span className="dot-pulse" />
            Hire me
          </a>
        </nav>

        <button
          aria-label="Open menu"
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-primary-ink"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-xl"
            data-testid="nav-mobile-menu"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  data-testid={`nav-mobile-link-${l.label.toLowerCase().replace(" ", "-")}`}
                  className="font-mono text-[11px] tracking-[0.22em] uppercase text-primary-ink"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--accent)]/60 px-4 py-1.5 text-[11px] font-mono tracking-[0.22em] uppercase text-[var(--accent)]"
              >
                <span className="dot-pulse" /> Hire me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;