import React from "react";
import { motion } from "framer-motion";
import { ABOUT, PROFILE } from "../data/resume";

const stats = [
  { value: "10+", label: "Years shipping UI" },
  { value: "30+", label: "Enterprise releases" },
  { value: "40%", label: "Faster load (avg.)" },
  { value: "3+", label: "Industries served" },
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative px-6 lg:px-10 py-24"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--accent)]">
            01 / About
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl mt-4 leading-[1]">
            A bit <span className="italic">about</span> me.
          </h2>
        </div>

        <div className="md:col-span-9">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-lg leading-relaxed text-primary-ink/90 max-w-3xl whitespace-pre-line"
            data-testid="about-text"
          >
            {ABOUT}
          </motion.div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-base p-6"
                data-testid={`about-stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="font-serif text-4xl text-[var(--accent-soft)]">{s.value}</div>
                <div className="mt-2 font-mono text-[10px] tracking-[0.22em] uppercase text-secondary-ink">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-xs font-mono uppercase tracking-[0.22em] text-secondary-ink">
            <span>Based in {PROFILE.location}</span>
            <span>·</span>
            <span>Worked with Norway · Switzerland · Canada · BD</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;