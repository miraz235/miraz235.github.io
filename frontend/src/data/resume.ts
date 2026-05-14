export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
  tech: string[];
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
  repo?: string;
  status?: "Live" | "In Progress" | "Concept";
};

export type Certification = {
  title: string;
  issuer: string;
  details?: string;
};

export const PROFILE = {
  name: "Asraful Karim",
  shortName: "Asraful",
  initials: "AK",
  title: "Senior Front-End Engineer",
  tagline: "I build intuitive, fast, human-centred interfaces — with a soft spot for AI-augmented workflows.",
  location: "Burnaby, BC · Canada",
  email: "miraz235.work@gmail.com",
  phone: "+1 (257) 999-0535",
  linkedin: "https://linkedin.com/in/miraz235",
  github: "https://github.com/miraz235",
  photo:
    "https://media.licdn.com/dms/image/v2/D5603AQEewPCTjws9MA/profile-displayphoto-scale_400_400/B56Zf6aLM8HYAk-/0/1752252857258?e=1779926400&v=beta&t=Dcovu74YCILVYkBCek6yK31Mtz4TRgIypk-p_fjZV2M",
  yearsOfExperience: 15,
  availability: "Available for senior / staff roles",
};

export const ABOUT = `Fifteen years in, I still get a quiet thrill from shipping a button that finally feels right.
I'm a Senior Front-End Engineer who's spent the last decade and a half leading architecture, mentoring teams, and turning fuzzy product ideas into interfaces people actually enjoy using — from Norway-based SaaS for petroleum production, to Swiss e-governance, to enterprise booking and media systems.
Lately I've been blending classic UI craft with AI-driven workflows — agent-based automation, MCP servers, and a lot of prompt-engineering — because the best interfaces in the next decade will be the ones that quietly think with the user.`;

export const SKILL_GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Redux", "Angular", "Tailwind CSS", "SASS", "HTML5", "CSS3"],
  },
  {
    title: "Backend & Data",
    items: ["Node.js", "NestJS", "MongoDB", "PostgreSQL", "MySQL", "REST APIs", "Event-driven", "PHP"],
  },
  {
    title: "Testing & QA",
    items: ["Jest", "React Testing Library", "Cypress", "Code Reviews", "Performance Analysis"],
  },
  {
    title: "Methods",
    items: ["Agile (Scrum/Kanban)", "Domain-Driven Design", "Microservices", "Documentation"],
  },
  {
    title: "AI & Automation",
    items: ["AI Concepts", "Agent Automation", "MCP Servers", "Prompt Engineering"],
  },
];

export const SKILL_MARQUEE: string[] = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Angular",
  "MongoDB",
  "NestJS",
  "Cypress",
  "AI Agents",
  "MCP",
  "Prompt Engineering",
  "PostgreSQL",
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Staff Software Engineer",
    company: "Cefalo Bangladesh Ltd.",
    period: "May 2025 — Nov 2025",
    location: "Norway-based clientele",
    bullets: [
      "Mentored juniors and improved team delivery through clear technical documentation and structured reviews.",
      "Spearheaded adoption of modern frameworks and rigorous code-review practices — post-release bugs ↓ 30%.",
      "Developed & maintained a SaaS platform for petroleum production with a scalable, maintainable UI architecture.",
    ],
    tech: ["React 18", "TypeScript", "Material UI", "Highcharts"],
  },
  {
    role: "Senior Software Engineer",
    company: "Cefalo Bangladesh Ltd.",
    period: "Jul 2016 — May 2025",
    bullets: [
      "Architected enterprise applications and accelerated load times by 40%.",
      "Engineered booking management dashboards supporting hospitality operations and complex workflows.",
      "Built a media asset management system that lifted content-delivery speed by 30%.",
      "~20% increase in user retention through performance & UX optimisation across 5+ enterprise clients.",
    ],
    tech: ["Angular", "NestJS", "TypeScript", "React", "Redux Saga", "SignalR", "Node.js", "PostgreSQL"],
  },
  {
    role: "Senior UX Developer",
    company: "SELISE Digital Platforms",
    period: "Jul 2014 — Jul 2016",
    location: "Switzerland-based clientele",
    bullets: [
      "Led UX/UI design and implementation across mobile, desktop, and web — 10+ major feature rollouts.",
      "Improved reusable UI components in an AngularJS platform, cutting UI dev time for new clients by 30%.",
    ],
    tech: ["AngularJS", "JavaScript", "CSS3", "SASS"],
  },
  {
    role: "UX Developer",
    company: "SELISE Digital Platforms",
    period: "Nov 2011 — Jun 2014",
    bullets: [
      "Delivered UI for interactive web, desktop, and iOS apps — measurable user-satisfaction lift.",
      "Led front-end on a Swiss e-governance platform improving usability of public services.",
    ],
    tech: ["JavaScript", "CSS", "HTML5"],
  },
  {
    role: "Software Engineer",
    company: "SELISE Digital Platforms",
    period: "Jan 2011 — Oct 2011",
    bullets: [
      "Delivered full-stack solutions on PHP CMS platforms across 20+ small-to-mid client projects.",
    ],
    tech: ["Joomla", "WordPress", "Drupal", "CodeIgniter"],
  },
  {
    role: "Web Developer (Freelance)",
    company: "Marketplaces",
    period: "Apr 2010 — Dec 2010",
    bullets: ["Full-stack PHP/CMS work — launched 10+ client websites."],
    tech: ["PHP", "WordPress", "Joomla"],
  },
  {
    role: "Web Developer",
    company: "ITIW",
    period: "Jul 2008 — Mar 2010",
    bullets: ["Built and launched ~30 e-commerce websites on PHP-based CMS platforms."],
    tech: ["PHP", "MySQL", "CMS"],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Petroleum SaaS Dashboard",
    description:
      "A SaaS platform for petroleum production analytics/forcasting — high-density Highcharts visualisations, fast filters, and a UI built to stay calm under information overload.",
    tech: ["React 18", "TypeScript", "Material UI", "MUI X", "Highcharts", "React Redux"],
    image:
      "https://images.pexels.com/photos/29703885/pexels-photo-29703885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    status: "Live",
  },
  {
    title: "Booking Operations Dashboard",
    description:
      "Hospitality booking workflow tool: real-time updates over SignalR, drag-and-drop scheduling, and an audit-friendly event log.",
    tech: ["Angular", "NestJS", "MongoDb", "SignalR"],
    image:
      "https://images.unsplash.com/photo-1762279389042-9439bfb6c155?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwyfHxkYXJrJTIwYWJzdHJhY3QlMjB0ZWNobm9sb2d5JTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3Nzg2MjkwODF8MA&ixlib=rb-4.1.0&q=85",
    status: "Live",
  },
  {
    title: "Media Asset Management",
    description:
      "MAM platform that lifted content-delivery speed 30% — chunked uploads, smart previews, and a UI that scales to enterprise asset libraries.",
    tech: ["React", "Redux Saga", "SignalR", "Node.js", "PostgreSQL"],
    image:
      "https://images.pexels.com/photos/12707786/pexels-photo-12707786.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    status: "Live",
  },
];

export const EDUCATION = {
  institution: "Northern University Bangladesh",
  degree: "B.Sc. in Computer Science & Engineering",
  period: "2004 — 2007",
  gpa: "3.58 / 4.0",
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "AI for Engineers Workshop",
    issuer: "Outskill",
    details: "Core AI concepts, agent-based engineering automation, MCP servers, prompt engineering.",
  },
  {
    title: "Generative AI Mastermind",
    issuer: "Outskill (GrowthSchool)",
    details: "Hands-on track on building with modern generative AI tooling and workflows.",
  },
];