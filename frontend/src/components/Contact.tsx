import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { PROFILE } from "../data/resume";
import { sendEmail } from "../lib/api";

const Contact: React.FC = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInfo.name.trim() || !contactInfo.email.trim() || !contactInfo.message.trim()) {
      toast.error("Please fill all fields.");
      return;
    }
    setLoading(true);
    try {
      await sendEmail(contactInfo);
      toast.success("Message sent — I'll reply soon.");
      setContactInfo({ name: "", email: "", message: "" });
    } catch (err: any) {
      toast.error(err?.response?.data?.detail || "Couldn't send. Try email instead.");
    } finally {
      setLoading(false);
    }
  };

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
            <a
              href={`tel:${PROFILE.phone.replace(/[^+\d]/g, "")}`}
              data-testid="contact-phone"
              className="group flex items-center gap-3 text-primary-ink hover:text-[var(--accent)] transition-colors"
            >
              <Phone size={16} className="text-[var(--accent)]" /> {PROFILE.phone}
            </a>
            <div className="flex items-center gap-3 text-secondary-ink">
              <MapPin size={16} className="text-[var(--accent)]" /> {PROFILE.location}
            </div>
          </div>
        </div>

        <div className="md:col-span-6">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 sm:p-8 space-y-4"
            data-testid="contact-form"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                value={contactInfo.name}
                onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                placeholder="Your name"
                data-testid="contact-name-input"
                className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-primary-ink placeholder:text-muted-ink focus:outline-none focus:border-[var(--accent)]/60 transition-colors"
              />
              <input
                type="email"
                value={contactInfo.email}
                onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                placeholder="Your email"
                data-testid="contact-email-input"
                className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-primary-ink placeholder:text-muted-ink focus:outline-none focus:border-[var(--accent)]/60 transition-colors"
              />
            </div>
            <textarea
              value={contactInfo.message}
              onChange={(e) => setContactInfo({ ...contactInfo, message: e.target.value })}
              rows={6}
              placeholder="What are you building? A few lines is enough."
              data-testid="contact-message-input"
              className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-sm leading-relaxed text-primary-ink placeholder:text-muted-ink focus:outline-none focus:border-[var(--accent)]/60 transition-colors resize-y"
            />
            <button
              type="submit"
              disabled={loading}
              data-testid="contact-submit-btn"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] text-black px-5 py-3 text-sm font-medium hover:bg-[var(--accent-soft)] disabled:opacity-60 transition-colors"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              {loading ? "Sending…" : "Send message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;