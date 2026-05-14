import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { EDUCATION, CERTIFICATIONS } from "../data/resume";

const Education: React.FC = () => {
  return (
    <section
      id="education"
      data-testid="education-section"
      className="relative px-6 lg:px-10 py-24"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--accent)]">
            06 / Learning
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl mt-4 leading-[1]">
            Education &{" "}
            <span className="italic">certifications</span>.
          </h2>
        </div>

        <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-12 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 glass rounded-2xl p-6 hover-lift"
            data-testid="education-card"
          >
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-md border border-white/10 grid place-items-center text-[var(--accent)]">
                <GraduationCap size={18} />
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-ink">
                  {EDUCATION.period} · GPA {EDUCATION.gpa}
                </div>
                <h3 className="font-serif text-2xl mt-1">{EDUCATION.degree}</h3>
                <p className="text-secondary-ink mt-1">{EDUCATION.institution}</p>
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-5 grid grid-cols-1 gap-5">
            {CERTIFICATIONS.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass rounded-2xl p-6 hover-lift"
                data-testid={`certification-card-${i}`}
              >
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-md border border-white/10 grid place-items-center text-[var(--accent)]">
                    <Award size={18} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl leading-tight">{c.title}</h3>
                    <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-ink mt-1">
                      {c.issuer}
                    </p>
                    {c.details && (
                      <p className="text-sm text-secondary-ink mt-2 leading-relaxed">{c.details}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;