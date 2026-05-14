import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Loader2, Copy, Check, FileText } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL as string;
const API = `${BACKEND_URL}/api`;

type ApplyResponse = {
  id: string;
  cover_letter: string;
  fit_score: number;
  highlights: string[];
  created_at: string;
};

const AiApply: React.FC = () => {
  const [jd, setJd] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [tone, setTone] = useState<"professional" | "confident" | "casual">("professional");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ApplyResponse | null>(null);
  const [copied, setCopied] = useState(false);

  const onGenerate = async () => {
    if (jd.trim().length < 30) {
      toast.error("Paste a longer job description (at least 30 characters).");
      return;
    }
    setLoading(true);
    setResult(null);
    try {
      const res = await axios.post<ApplyResponse>(`${API}/ai/apply`, {
        job_description: jd,
        company: company || undefined,
        role: role || undefined,
        tone,
      });
      setResult(res.data);
      toast.success("Cover letter generated.");
    } catch (e: any) {
      const msg = e?.response?.data?.detail || e?.message || "Something went wrong.";
      toast.error(typeof msg === "string" ? msg : "Failed to generate.");
    } finally {
      setLoading(false);
    }
  };

  const onCopy = async () => {
    if (!result?.cover_letter) return;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(result.cover_letter);
      } else {
        // Fallback for non-secure / older contexts
        const ta = document.createElement("textarea");
        ta.value = result.cover_letter;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      toast.success("Copied to clipboard.");
      setTimeout(() => setCopied(false), 1800);
    } catch (err) {
      toast.error("Copy isn't allowed in this context. Select & copy manually.");
    }
  };

  return (
    <section
      id="ai-apply"
      data-testid="ai-apply-section"
      className="relative px-6 lg:px-10 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">
          <div className="md:col-span-5">
            <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--accent)]">
              04 / AI Apply
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl mt-4 leading-[1]">
              Paste a JD. <span className="italic">I'll write back.</span>
            </h2>
          </div>
          <div className="md:col-span-7 flex md:items-end">
            <p className="text-secondary-ink max-w-xl">
              An AI agent — powered by Claude Sonnet — reads my resume as context and writes a
              tailored, first-person cover letter for the role you paste. Think of it as a 30-second
              "why me" pitch, on demand.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 sm:p-10 shadow-2xl shadow-black/40"
          data-testid="ai-apply-widget"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LEFT — Input */}
            <div className="space-y-5">
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase text-muted-ink">
                <FileText size={12} /> Job description
              </div>
              <textarea
                value={jd}
                onChange={(e) => setJd(e.target.value)}
                placeholder="Paste the full job description here. Include responsibilities, stack, and team context for the best fit."
                rows={11}
                data-testid="ai-apply-jd-input"
                className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-sm leading-relaxed text-primary-ink placeholder:text-muted-ink focus:outline-none focus:border-[var(--accent)]/60 transition-colors resize-y"
              />

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company (optional)"
                  data-testid="ai-apply-company-input"
                  className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-primary-ink placeholder:text-muted-ink focus:outline-none focus:border-[var(--accent)]/60 transition-colors"
                />
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="Role title (optional)"
                  data-testid="ai-apply-role-input"
                  className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-primary-ink placeholder:text-muted-ink focus:outline-none focus:border-[var(--accent)]/60 transition-colors"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-ink mr-1">
                  Tone
                </span>
                {(["professional", "confident", "casual"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTone(t)}
                    data-testid={`ai-apply-tone-${t}`}
                    className={`font-mono text-[10px] tracking-[0.2em] uppercase rounded-full px-3 py-1.5 border transition-colors ${
                      tone === t
                        ? "border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/10"
                        : "border-white/10 text-secondary-ink hover:text-primary-ink"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <button
                onClick={onGenerate}
                disabled={loading}
                data-testid="ai-apply-generate-btn"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--accent)] text-black px-6 py-3 text-sm font-medium disabled:opacity-60 disabled:cursor-not-allowed hover:bg-[var(--accent-soft)] transition-colors"
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
                {loading ? "Generating…" : "Generate cover letter"}
              </button>

              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-ink">
                Powered by Claude Sonnet · runs in seconds
              </div>
            </div>

            {/* RIGHT — Output */}
            <div className="relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[var(--accent)]/25 via-transparent to-transparent pointer-events-none opacity-50" />
              <div className="relative rounded-2xl border border-white/10 bg-black/40 p-5 sm:p-6 min-h-[420px]">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-ink">
                    Tailored response
                  </div>
                  {result && (
                    <div className="flex items-center gap-3">
                      <div
                        className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--accent)]"
                        data-testid="ai-apply-fit-score"
                      >
                        Fit · {result.fit_score}%
                      </div>
                      <button
                        onClick={onCopy}
                        data-testid="ai-apply-copy-btn"
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-secondary-ink hover:text-primary-ink hover:border-white/30 transition-colors"
                      >
                        {copied ? <Check size={12} /> : <Copy size={12} />}
                        {copied ? "Copied" : "Copy"}
                      </button>
                    </div>
                  )}
                </div>

                {!result && !loading && (
                  <div className="h-full grid place-items-center text-center py-16">
                    <div className="max-w-sm">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-secondary-ink">
                        <Sparkles size={12} /> Ready
                      </div>
                      <p className="mt-4 font-serif text-2xl text-primary-ink leading-snug">
                        Paste a job description on the left.
                      </p>
                      <p className="mt-2 text-sm text-secondary-ink">
                        I'll come back with a first-person cover letter and a fit score within seconds.
                      </p>
                    </div>
                  </div>
                )}

                {loading && (
                  <div className="space-y-3 animate-pulse">
                    <div className="h-3 rounded bg-white/10 w-1/2" />
                    <div className="h-3 rounded bg-white/10 w-11/12" />
                    <div className="h-3 rounded bg-white/10 w-10/12" />
                    <div className="h-3 rounded bg-white/10 w-9/12" />
                    <div className="h-3 rounded bg-white/10 w-11/12" />
                    <div className="h-3 rounded bg-white/10 w-8/12" />
                    <div className="h-3 rounded bg-white/10 w-10/12" />
                  </div>
                )}

                {result && (
                  <div className="space-y-5" data-testid="ai-apply-result">
                    {result.highlights?.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {result.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--accent-soft)] border border-[var(--accent)]/30 rounded-full px-2.5 py-1"
                          >
                            ★ {h}
                          </span>
                        ))}
                      </div>
                    )}
                    <pre
                      className="whitespace-pre-wrap font-sans text-[15px] leading-relaxed text-primary-ink/90"
                      data-testid="ai-apply-cover-letter"
                    >
                      {result.cover_letter}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AiApply;
