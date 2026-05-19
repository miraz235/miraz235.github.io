import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";
import { PROFILE } from "../data/resume";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative px-6 lg:px-10 py-28"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-6">
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--accent)]">
            07 / Let's talk
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-5xl sm:text-6xl mt-4 leading-[0.95]"
          >
            Building something <span className="italic text-[var(--accent-soft)]">good</span>?
            <br />
            Let's talk.
          </motion.h2>
          <p className="mt-6 max-w-md text-secondary-ink">
            Open to senior / staff front-end roles, technical lead positions, and selective
            consulting on AI-augmented product work.
          </p>

        </div>
        <div className="md:col-span-6">
          <div className="mt-10 space-y-4 text-sm">
            <a
              href={`mailto:${PROFILE.email}`}
              data-testid="contact-email"
              className="group flex items-center gap-3 text-primary-ink hover:text-[var(--accent)] transition-colors"
            >
              <Mail size={16} className="text-[var(--accent)]" /> {PROFILE.email}
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              data-testid="contact-linkedin"
              className="group flex items-center gap-3 text-primary-ink hover:text-[var(--accent)] transition-colors"
            >
              <Linkedin size={16} className="text-[var(--accent)]" /> linkedin.com/in/miraz235
            </a>
            {/* <a
              href={`tel:${PROFILE.phone.replace(/[^+\d]/g, "")}`}
              data-testid="contact-phone"
              className="group flex items-center gap-3 text-primary-ink hover:text-[var(--accent)] transition-colors"
            >
              <Phone size={16} className="text-[var(--accent)]" /> {PROFILE.phone}
            </a> */}
            <div className="flex items-center gap-3 text-secondary-ink">
              <MapPin size={16} className="text-[var(--accent)]" /> {PROFILE.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;