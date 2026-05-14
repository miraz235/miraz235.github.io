import React from "react";
import { ArrowUp } from "lucide-react";
import { PROFILE } from "../data/resume";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="site-footer"
      className="relative px-6 lg:px-10 py-10 border-t border-white/10 mt-8"
    >
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-ink">
          © {year} {PROFILE.name} · Built with React, TypeScript & a little AI
        </div>
        <div className="flex items-center gap-6 font-mono text-[10px] tracking-[0.25em] uppercase">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-secondary-ink hover:text-[var(--accent)]"
            data-testid="footer-linkedin"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="text-secondary-ink hover:text-[var(--accent)]"
            data-testid="footer-email"
          >
            Email
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-secondary-ink hover:text-[var(--accent)]"
            data-testid="footer-back-to-top"
          >
            <ArrowUp size={12} /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;