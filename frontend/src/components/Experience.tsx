import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../data/resume";

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="relative px-6 lg:px-10 py-24"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--accent)]">
            02 / Experience
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl mt-4 leading-[1]">
            A <span className="italic">15-year</span> trail.
          </h2>
          <p className="mt-4 text-sm text-secondary-ink max-w-xs">
            From PHP CMS to AI-augmented React — the through-line has always been:
            <span className="text-primary-ink"> calmer, faster interfaces for real people</span>.
          </p>
        </div>

        <div className="md:col-span-9 relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--accent)]/60 via-white/15 to-transparent" />
          <ol className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <motion.li
                key={exp.role + idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: Math.min(idx * 0.04, 0.3) }}
                className="relative pl-10"
                data-testid={`experience-item-${idx}`}
              >
                <span className="absolute left-[6px] top-2 inline-block h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_0_4px_rgba(232,124,72,0.18)]" />
                <div className="flex flex-col gap-1">
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-secondary-ink">
                    {exp.period}
                    {exp.location ? <span className="text-muted-ink"> · {exp.location}</span> : null}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl leading-tight">
                    {exp.role}{" "}
                    <span className="italic text-[var(--accent-soft)]">@ {exp.company}</span>
                  </h3>
                </div>
                <ul className="mt-4 space-y-2 text-primary-ink/85 text-[15px] leading-relaxed list-disc list-outside marker:text-[var(--accent)]/80 pl-5">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] tracking-[0.15em] uppercase text-secondary-ink border border-white/10 rounded-full px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;