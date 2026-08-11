import { Cpu, BarChart3, Clock, MessageSquare, Flame, ShieldCheck, type LucideIcon } from "lucide-react";

export type ProjectDetailSection = {
  heading: string;
  body?: string;
  bullets?: string[];
};

export type Project = {
  id: string;
  icon: LucideIcon;
  label: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  tech: string[];
  color: string;
  featured?: boolean;
  link?: string;
  hasDetails?: boolean;
  // Detail page content
  longDescription?: string;
  images?: { src: string; alt: string; caption?: string }[];
  sections?: ProjectDetailSection[];
  highlights?: string[];
};

export const projects: Project[] = [
  {
    id: "edulink",
    icon: Cpu,
    label: "AI Student OS — Featured",
    title: "EduLink",
    tagline: "A complete AI-powered student operating system",
    description:
      "An end-to-end platform for students featuring AI-powered timetable generation, doubt-solving, streak tracking, and real-time collaboration with role-based access.",
    features: [
      "Genetic Algorithm timetable engine",
      "AI doubt-solving system",
      "Streak & gamification system",
      "Role-based architecture",
      "Real-time sync across devices",
    ],
    tech: ["React", "Supabase", "Python", "Genetic Algorithms", "LLM APIs"],
    color: "from-primary to-amber-300",
    featured: true,
    link: "https://edulink-connect.vercel.app/",
    hasDetails: true,
    longDescription:
      "EduLink is a unified student operating system that combines scheduling, learning, and collaboration into a single AI-powered platform. It replaces fragmented tools with one cohesive workspace built on a real-time database and role-based architecture.",
    highlights: ["AI-Driven", "Real-Time", "Role-Based", "Scalable"],
    sections: [
      {
        heading: "Core Features",
        bullets: [
          "Genetic Algorithm-based timetable generator with constraint solving",
          "AI doubt-solving combining LLM answers with community responses",
          "GitHub-style streak heatmap and gamified progress",
          "Faculty, student, and admin roles with granular permissions",
          "Real-time sync across devices powered by Supabase",
        ],
      },
      {
        heading: "How It Was Built",
        body:
          "EduLink uses React with a Supabase backend for realtime data and authentication. The timetable engine runs in Python using a genetic algorithm with mutation, crossover, and a fitness function tuned to institutional constraints. LLM APIs power the doubt system, with a quality scoring layer that ranks AI and community answers side-by-side.",
      },
      {
        heading: "Tech Stack",
        bullets: ["React + Vite", "Supabase (Postgres + Realtime + Auth)", "Python (Genetic Algorithms)", "LLM APIs", "Tailwind CSS"],
      },
    ],
  },
  {
    id: "vivaai",
    icon: ShieldCheck,
    label: "AI Viva Examination Platform — Featured",
    title: "VivaAI",
    tagline: "Secure, AI-powered viva examination platform",
    description:
      "A production-grade platform that automates oral examinations with AI question generation, real-time evaluation, and computer-vision proctoring — fair, scalable, and secure by design.",
    features: [
      "AI question generation (Easy / Medium / Hard)",
      "Unique shuffled test per student",
      "Real-time lobby with faculty approval",
      "Speech + text answering with auto-save",
      "AI evaluation with faculty override",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Groq LLM", "Python CV", "WebSockets"],
    color: "from-emerald-400 to-primary",
    featured: true,
    hasDetails: true,
    longDescription:
      "VivaAI replaces traditional oral examinations with a scalable, real-time, monitored system. It combines LLM-driven question generation and evaluation with computer-vision proctoring to ensure fairness, prevent cheating, and provide a seamless experience for both faculty and students.",
    highlights: ["AI-Driven", "Real-Time", "Secure by Design", "Scalable", "High Performance"],
    images: [
      { src: "/projects/vivaai/workflow.png", alt: "VivaAI end-to-end workflow", caption: "End-to-end workflow — from sign up to test completion & results" },
      { src: "/projects/vivaai/system-architecture.png", alt: "VivaAI system architecture", caption: "System architecture with proctoring & anti-cheating layers" },
      { src: "/projects/vivaai/tech-stack.png", alt: "VivaAI tech stack & architecture", caption: "Tech stack & system architecture overview" },
      { src: "/projects/vivaai/testui.png", alt: "Online Test UI", caption: "Online Test UI" },
      { src: "/projects/vivaai/online-proctoring.png", alt: "Online Proctoring", caption: "Online Proctoring from Faculty Dashboard" },
      { src: "/projects/vivaai/faculty-dashboard.png", alt: "Faculty", caption: "Faculty Portal" },
    ],
    sections: [
      {
        heading: "Core Features",
        bullets: [
          "AI Question Generation — descriptive viva questions from syllabus topics, categorized Easy / Medium / Hard, fully editable before publishing",
          "Unique Test System — every student gets a shuffled, balanced set with no repetition or sharing",
          "Real-Time Viva Workflow — lobby system with faculty approval, one student at a time",
          "Speech + Text Answering — speech-to-text with manual editing and auto-save",
          "AI-Based Evaluation — accuracy-based scoring with faculty override",
          "Result Management — 'Result Pending' until faculty publishes with mandatory remarks",
        ],
      },
      {
        heading: "Proctoring & Anti-Cheating",
        bullets: [
          "Continuous webcam monitoring with periodic snapshot streaming",
          "AI detection of mobile phone usage and multiple persons",
          "Fullscreen enforcement, tab switch detection, window blur tracking",
          "Copy-paste, right-click, and dev-tools restrictions",
          "Violation logging with precise timestamps for faculty review",
        ],
      },
      {
        heading: "Security Architecture",
        bullets: [
          "Zero Trust architecture with session validation on every request",
          "Single-device login enforcement",
          "Laptop-only access restriction",
          "OWASP Top 10 protection (XSS, SQLi, CSRF)",
          "Secure APIs with input validation and rate limiting",
          "Encrypted data transmission & storage",
        ],
      },
      {
        heading: "How It Was Built",
        body:
          "The frontend is a responsive React app talking to a Node.js API gateway with JWT-based auth and role-based access control. PostgreSQL stores users, tests, responses, marks, sessions, and audit logs. Groq's LLM APIs power both question generation and answer evaluation, while a Python computer-vision service handles webcam capture, activity detection, and snapshot streaming. WebSockets (via Supabase) deliver live lobby updates, faculty-student events, proctoring alerts, and result notifications in real time. The system is deployed on Render behind Cloudflare for CDN and security.",
      },
      {
        heading: "Tech Stack",
        bullets: [
          "Frontend — React.js",
          "Backend — Node.js (RESTful APIs)",
          "Database — PostgreSQL",
          "AI Services — Groq API (LLM)",
          "Proctoring — Python (Computer Vision / YOLO)",
          "Real-Time — WebSockets / Supabase",
          "Deployment — Render + Cloudflare",
        ],
      },
    ],
  },
  {
    id: "focusai",
    icon: BarChart3,
    label: "AI Dashboard",
    title: "FocusAI",
    tagline: "AI-powered insights dashboard for productivity",
    description:
      "A Stripe/Vercel-grade analytics dashboard that provides AI-driven insights, productivity metrics, and intelligent recommendations for students.",
    features: [
      "Real-time animated charts",
      "AI-generated insight cards",
      "Productivity scoring engine",
      "Expandable detail views",
      "Smart notifications",
    ],
    tech: ["React", "Chart.js", "Supabase", "AI/ML APIs"],
    color: "from-amber-400 to-yellow-300",
    hasDetails: true,
    longDescription:
      "FocusAI is a productivity analytics dashboard designed with the polish of Stripe and Vercel. It transforms raw study activity into AI-generated insights, scoring, and actionable recommendations.",
    highlights: ["Insightful", "Real-Time", "Polished", "AI-Powered"],
    sections: [
      {
        heading: "Core Features",
        bullets: [
          "Real-time animated charts for focus, productivity, and trends",
          "AI-generated insight cards that summarize behavior patterns",
          "Productivity scoring engine combining multiple signals",
          "Expandable detail views with drill-down analytics",
          "Smart notifications surfaced at the right moment",
        ],
      },
      {
        heading: "How It Was Built",
        body:
          "FocusAI uses React with Chart.js for fluid, animated visualizations, backed by Supabase for realtime data. AI/ML APIs analyze activity patterns to surface insights and recommendations, while a custom scoring engine ranks productivity across configurable dimensions.",
      },
      {
        heading: "Tech Stack",
        bullets: ["React + Vite", "Chart.js", "Supabase", "AI/ML APIs", "Tailwind CSS"],
      },
    ],
  },
  {
    id: "timetable",
    icon: Clock,
    label: "Algorithm Showcase",
    title: "AI Timetable Generator",
    tagline: "Genetic algorithm-powered intelligent scheduling",
    description:
      "Visualizes the evolution of scheduling solutions through genetic algorithm steps — mutation, crossover, and selection — to find optimal timetables.",
    features: [
      "Visual evolution steps",
      "Mutation & crossover animations",
      "Fitness function visualization",
      "Constraint satisfaction",
      "Optimal solution convergence",
    ],
    tech: ["Python", "Genetic Algorithms", "React", "D3.js"],
    color: "from-orange-500 to-amber-400",
  },
  {
    id: "doubt",
    icon: MessageSquare,
    label: "AI Chat System",
    title: "AI Doubt System",
    tagline: "AI vs community-powered doubt resolution",
    description:
      "A real-time doubt-solving system combining AI-generated answers with community responses, featuring intelligent routing and quality scoring.",
    features: [
      "AI-powered instant answers",
      "Community answer system",
      "Quality scoring algorithm",
      "Real-time chat interface",
      "Knowledge base building",
    ],
    tech: ["React", "Supabase", "LLM APIs", "WebSockets"],
    color: "from-yellow-500 to-primary",
  },
  {
    id: "streak",
    icon: Flame,
    label: "Gamification",
    title: "Streak System",
    tagline: "GitHub-style heatmap with gamification",
    description:
      "A motivation-driven streak tracking system with calendar heatmaps, achievement badges, and gamified learning progression.",
    features: [
      "Calendar heatmap visualization",
      "Animated streak counters",
      "Achievement badge system",
      "Daily challenge engine",
      "Leaderboard rankings",
    ],
    tech: ["React", "Supabase", "Framer Motion"],
    color: "from-red-500 to-orange-400",
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);
