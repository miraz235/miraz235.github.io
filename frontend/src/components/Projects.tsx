import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data/resume";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="relative px-6 lg:px-10 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--accent)]">
              05 / Selected work
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl mt-4 leading-[1]">
              Work I'm <span className="italic">proud of</span>.
            </h2>
          </div>
          <div className="md:col-span-7 flex md:items-end">
            <p className="text-secondary-ink max-w-xl">
              A short, honest sample. Some are public, some are under NDA, some I'm still polishing
              before I push them to GitHub.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {PROJECTS.map((p, idx) => {
            const span = idx % 3 === 0 ? "md:col-span-7" : idx % 3 === 1 ? "md:col-span-5" : "md:col-span-12 lg:col-span-6";
            return (
              <motion.a
                key={p.title}
                href={p.link || "#projects"}
                onClick={(e) => {
                  if (!p.link) e.preventDefault();
                }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: Math.min(idx * 0.05, 0.3) }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-surface hover-lift ${span}`}
                data-testid={`project-card-${idx}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-primary-ink">
                    {p.status && (
                      <span className="rounded-full border border-white/15 bg-black/50 backdrop-blur px-2.5 py-1">
                        {p.status}
                      </span>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/50 border border-white/10 text-primary-ink group-hover:bg-[var(--accent)] group-hover:text-black transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl sm:text-3xl leading-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-secondary-ink leading-relaxed">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] tracking-[0.18em] uppercase text-secondary-ink border border-white/10 rounded-full px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <div className="mt-10 text-center font-mono text-[10px] tracking-[0.22em] uppercase text-muted-ink">
          More case studies landing soon · pushed from{" "}
          <a
            href="https://github.com/miraz235"
            className="text-[var(--accent)] hover:underline"
            target="_blank"
            rel="noreferrer"
            data-testid="projects-github-link"
          >
            github.com/miraz235
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;