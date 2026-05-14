import React from "react";
import { motion } from "framer-motion";
import { SKILL_GROUPS, SKILL_MARQUEE } from "../data/resume";

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="relative py-24"
    >
      {/* Marquee */}
      <div className="border-y border-white/10 py-8 mb-20" data-testid="skills-marquee">
        <div className="marquee">
          <div className="marquee-track">
            {[...SKILL_MARQUEE, ...SKILL_MARQUEE].map((s, i) => (
              <span
                key={i}
                className="font-serif italic text-3xl sm:text-4xl text-primary-ink/80"
              >
                {s} <span className="text-[var(--accent)]/70 not-italic font-mono text-base align-middle">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--accent)]">
            03 / Stack
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl mt-4 leading-[1]">
            What I <span className="italic">reach for</span>.
          </h2>
          <p className="mt-4 text-sm text-secondary-ink max-w-xs">
            Opinionated, but never dogmatic. I pick what makes the team faster — and the user happier.
          </p>
        </div>

        <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SKILL_GROUPS.map((g, idx) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass rounded-2xl p-6 hover-lift"
              data-testid={`skill-group-${g.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl">{g.title}</h3>
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-ink">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="font-mono text-[11px] text-primary-ink/85 border border-white/10 rounded-md px-2.5 py-1 hover:border-[var(--accent)]/50 hover:text-[var(--accent)] transition-colors"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;