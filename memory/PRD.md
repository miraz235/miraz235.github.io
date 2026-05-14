# Asraful Karim — Portfolio (miraz235.github.io)

## Original Problem Statement
Build a single-page portfolio inspired by https://fahri.nextjs.fahri.my.id/ using React + TypeScript + Tailwind. Recruiter-friendly, one-page, easy to deploy to GitHub Pages, easy to expand later. Resume info pulled from the uploaded PDF (Asraful Karim, Senior Front-End Engineer, 15y experience).

## Tech Stack
- Frontend: React 19 + TypeScript + TailwindCSS + Framer Motion + lucide-react + sonner
  - CRA-based (with craco) for in-platform preview; TypeScript via .tsx files & tsconfig.json
- Backend: FastAPI + Motor (MongoDB) + emergentintegrations (Claude Sonnet 4.5)
- DB: MongoDB (collections: ai_applications, contact_messages, status_checks)

## User Personas
- **Recruiter / Hiring Manager** — lands on hero, scans experience, pastes a JD into AI Apply, gets a tailored cover letter, contacts Asraful.
- **Peer Engineer** — checks projects + tech stack, links to GitHub/LinkedIn.

## Core Requirements (static)
- One-page dark-themed portfolio with warm amber accent.
- Sections: Hero, About, Experience timeline, Skills, AI Apply widget, Projects, Education & Certifications, Contact, Footer.
- AI agent: takes a pasted job description and returns a first-person cover letter, fit score (0-100), and 3 highlights — using Asraful's resume as system context.
- Resume PDF download (deferred — placeholder slot ready).
- Easy to deploy to GitHub Pages later.

## What's Been Implemented (2025-12-12)
- ✅ FastAPI backend with `/api/`, `/api/ai/apply` (Claude Sonnet via Emergent LLM Key), `/api/contact`, `/api/status`.
- ✅ EMERGENT_LLM_KEY added to /app/backend/.env.
- ✅ React + TypeScript frontend with all 8 sections + sticky glass nav + footer.
- ✅ Design: Instrument Serif + Manrope + JetBrains Mono fonts, #080808 base, #E87C48 amber accent, subtle grain, ambient radial glow, asymmetric bento grids.
- ✅ Framer Motion scroll-reveal animations, marquee skills strip, tracing-beam experience timeline.
- ✅ AI Apply widget — paste JD, choose tone, get cover letter + fit score, copy to clipboard (with non-secure-context fallback).
- ✅ Contact form posts to backend, success/error toasts.
- ✅ All interactive + key elements have `data-testid`.
- ✅ End-to-end tested: backend 100%, frontend 95% (now 100% after copy-fallback fix).

## Prioritized Backlog
### P0 (next)
- Resume PDF download button in nav/hero (host the PDF in /public).
- Add real GitHub repo links to PROJECTS once user pushes code.

### P1
- Light / dark theme toggle.
- Streaming response for the AI Apply widget (token-by-token typing) for more "wow".
- Project filter by tech tag.
- Open Graph / social share meta tags + custom favicon (AK monogram).

### P2
- Blog / writings section (MDX).
- GitHub Pages deploy workflow (gh-pages branch via `yarn build` + push) + custom domain.
- Analytics dashboard for AI Apply submissions (count + top companies).

## Next Tasks
- Wire up a Resume PDF download button (user can upload the PDF to /app/frontend/public/resume.pdf).
- Help user migrate to Vite + GH Pages when they're ready to deploy (currently CRA for preview).
