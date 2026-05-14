import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, MapPin, Mail } from "lucide-react";
import { PROFILE } from "../data/resume";

const Hero: React.FC = () => {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-32 pb-24 px-6 lg:px-10"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
        {/* Left */}
        <div className="md:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 mb-8"
            data-testid="hero-status-pill"
          >
            <span className="dot-pulse" />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-secondary-ink">
              {PROFILE.availability}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-serif text-5xl sm:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tight"
            data-testid="hero-name"
          >
            {PROFILE.name.split(" ")[0]}{" "}
            <span className="italic text-[var(--accent-soft)]">
              {PROFILE.name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-2xl text-secondary-ink text-lg leading-relaxed"
            data-testid="hero-tagline"
          >
            <span className="font-serif italic text-primary-ink">Senior Front-End Engineer</span>{" "}
            with <span className="text-primary-ink">{PROFILE.yearsOfExperience} years</span> shipping
            intuitive, fast, human-centred interfaces — recently obsessed with AI-augmented workflows
            and agent-based automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              data-testid="hero-cta-primary"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--accent)] text-black px-5 py-3 text-sm font-medium hover:bg-[var(--accent-soft)] transition-colors"
            >
              Get in touch
              <ArrowDownRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"
              />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              data-testid="hero-cta-secondary"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-primary-ink hover:border-[var(--accent)]/60 hover:text-[var(--accent)] transition-colors"
            >
              <Mail size={14} />
              {PROFILE.email}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-[0.22em] text-muted-ink"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin size={12} /> {PROFILE.location}
            </span>
            <span>EST / Remote-friendly</span>
            <span className="hidden sm:inline">
              15Y · React · TS · AI
            </span>
          </motion.div>
        </div>

        {/* Right — sharp-edged photo card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-4 relative"
          data-testid="hero-photo-card"
        >
          <div className="relative aspect-[4/5] w-full max-w-sm ml-auto">
            <div
              className="absolute inset-0 -z-10 translate-x-3 translate-y-3 border border-[var(--accent)]/40"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)" }}
            />
            <div
              className="relative h-full w-full overflow-hidden border border-white/10 bg-white/[0.03]"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)" }}
            >
              <img
                src={PROFILE.photo}
                alt={PROFILE.name}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://api.dicebear.com/9.x/initials/svg?seed=Asraful%20Karim&backgroundColor=121212&textColor=E87C48";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-primary-ink">
                  <div className="text-secondary-ink">Currently</div>
                  <div className="text-[var(--accent-soft)] mt-0.5">
                    Exploring senior roles
                  </div>
                </div>
                <div className="font-serif italic text-2xl leading-none">{PROFILE.initials}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee strip below hero */}
      <div className="mx-auto max-w-7xl mt-20 border-t border-white/10 pt-6">
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.3em] text-muted-ink">
          <span>· 2008 — Present</span>
          <span>· Worked across Norway · Switzerland · Bangladesh · Canada</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;