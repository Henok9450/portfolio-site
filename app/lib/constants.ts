export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'Frontend' | 'Cloud & Systems';
  featured: boolean;
  problem: string;
  solution: string;
  architecture: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics?: string;
  previewGradient: string;
  clientNote?: string;
}

export const PERSONAL_INFO = {
  name: "Henok Birhanu",
  role: "Core Systems & Software Engineer",
  titleHeadline: "Core Systems & Software Engineer",
  specialization: "Core Banking • Enterprise Middleware • Full-Stack Development",
  location: "Addis Ababa, Ethiopia (Open to Remote Globally)",
  email: "henok9450@gmail.com",
  github: "https://github.com/Henok9450",
  linkedin: "https://www.linkedin.com/in/henok-birhanu",
  status: "Available for Full-Time Roles & Enterprise Engineering Projects",
  bio: "Core Systems and Software Engineer specializing in enterprise banking systems, Oracle, WebLogic, FLEXCUBE, APIs, React, Angular, and cloud technologies with 10+ years of software engineering and enterprise IT experience.",
  yearsExperience: "10+",
  resumeUrl: "/resume.pdf"
};

export const PROJECTS: Project[] = [
  {
    id: "selah-cms",
    title: "SelahCMS",
    subtitle: "Enterprise Cell & Member Management System (API-First Integration)",
    category: "Full-Stack",
    featured: true,
    problem: "Churches and community organizations often operate with fragmented, legacy member databases, making cell group assignment and real-time attendance coordination cumbersome without unified data synchronization.",
    solution: "Architected a responsive, cloud-powered management platform featuring an API-first integration layer that ingests and synchronizes member records from existing organizational databases, streamlines cell onboarding, and delivers real-time attendance analytics.",
    architecture: [
      "API-first integration pipeline ingesting and synchronizing member records from existing upstream databases",
      "Role-based authentication & hierarchical access control with Firebase Auth",
      "Real-time reactive state synchronization using Angular & RxJS observables",
      "Cloud Firestore NoSQL data modeling for high-speed querying, filtering & offline synchronization",
      "Responsive, accessible design system tailored for administrative desktop and mobile leader workflows"
    ],
    tags: ["Angular", "TypeScript", "REST APIs", "API-First Integration", "Firebase Auth", "Cloud Firestore", "RxJS", "Tailwind CSS"],
    liveUrl: "https://selah-cms.vercel.app/login?returnUrl=%2Fhome",
    githubUrl: "https://github.com/Henok9450/SelahCMS",
    metrics: "Production platform with external database sync & real-time analytics",
    previewGradient: "from-blue-600/20 via-indigo-600/20 to-purple-600/20",
    clientNote: "Active client production deployment (authentication protected for organizational staff)."
  },
  {
    id: "goodnews-catering",
    title: "GoodNews Cake & Catering",
    subtitle: "Commercial Catering & Bakery Web Platform (With Order Tracking)",
    category: "Full-Stack",
    featured: true,
    problem: "Catering and bakery businesses frequently struggle with disjointed product displays, lack of order status visibility for customers, and friction in managing custom bakery requests.",
    solution: "Engineered and deployed a responsive commercial web platform featuring interactive menu catalogs, customer order tracking, specialized event catering workflows, and smooth mobile ordering experiences.",
    architecture: [
      "Modular React component architecture optimized for fast page loads and smooth navigation",
      "Dynamic catalog showcasing custom cakes, catering packages, and seasonal menus",
      "Real-time order tracking pipeline providing customers with transparent fulfillment updates",
      "Seamless customer inquiry dispatch system tailored for mobile and desktop clients",
      "Edge-deployed on Vercel with automated CI/CD and mobile-first asset optimization"
    ],
    tags: ["React", "JavaScript", "Order Tracking", "CSS3 / Styling", "Vercel", "UI/UX Design", "Commercial Platform"],
    liveUrl: "https://goodnews-cake-and-catering.vercel.app/",
    githubUrl: "https://github.com/Henok9450/goodnews-cake-and-catering",
    metrics: "Live commercial platform featuring real-time order tracking & custom bookings",
    previewGradient: "from-amber-600/20 via-orange-600/20 to-rose-600/20",
    clientNote: "Live commercial production platform for GoodNews Cake & Catering."
  },
  {
    id: "celebration-platform",
    title: "Interactive Celebration & Event Platform",
    subtitle: "Real-Time Wedding & Event Platform with Digital Wish Signboard",
    category: "Frontend",
    featured: false,
    problem: "Traditional event invitation sites are static announcements that lack interactive guest engagement, leaving invited guests unable to share live congratulations or celebrate remotely.",
    solution: "Engineered an elegant, real-time celebration platform featuring an interactive Digital Wish Signboard where invited guests can write, sign, and broadcast personal wishes and blessings live, accompanied by RSVP management and responsive countdown timers.",
    architecture: [
      "Real-time collaborative Digital Wish Signboard allowing invited guests to post and display live wishes",
      "Interactive RSVP tracking and event schedule synchronization",
      "Performant CSS animations, micro-interactions, and smooth viewport transitions",
      "Mobile-first responsive design tailored for guests across smartphones and tablets",
      "Fast edge delivery on Vercel with optimized asset loading and sub-second first paint"
    ],
    tags: ["React", "TypeScript", "Digital Wish Signboard", "Real-Time Sync", "Tailwind CSS", "Vercel", "Mobile-First"],
    liveUrl: "https://dere-and-tinsu-wedding.vercel.app/",
    githubUrl: "https://github.com/Henok9450/dere-and-tinsu",
    metrics: "Live interactive event platform with real-time digital wish signboard",
    previewGradient: "from-rose-600/20 via-pink-600/20 to-amber-600/20",
    clientNote: "Live interactive wedding and event celebration platform."
  }
];

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    description: string;
    highlight?: boolean;
  }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Enterprise & Core Systems",
    description: "Core banking platforms, enterprise middleware, database administration, and mission-critical high availability.",
    skills: [
      { name: "Oracle FLEXCUBE", level: "Advanced", description: "Core banking workflows, transaction processing, accounting modules & banking integrations", highlight: true },
      { name: "Oracle WebLogic & SOA", level: "Advanced", description: "Enterprise middleware deployment, JMS messaging, clustering & server management", highlight: true },
      { name: "Oracle Database & PL/SQL", level: "Advanced", description: "Complex schemas, stored procedures, query optimization & high-availability tuning", highlight: true },
      { name: "Enterprise Application Support", level: "Advanced", description: "Incident management, 24/7 mission-critical operations, system health & performance monitoring", highlight: true },
      { name: "API & Middleware Integration", level: "Advanced", description: "RESTful Web Services, financial switch protocols, ISO interfaces & secure webhooks", highlight: true },
      { name: "Linux & System Administration", level: "Proficient", description: "Oracle Linux, shell automation, security hardening & enterprise infrastructure" }
    ]
  },
  {
    title: "Frontend Engineering",
    description: "Crafting fast, accessible, and responsive user interfaces with modern web standards.",
    skills: [
      { name: "React 19 & Next.js", level: "Advanced", description: "SSR, SSG, Server Components, App Router, Hooks & Core Web Vitals optimization", highlight: true },
      { name: "Angular", level: "Advanced", description: "Modular enterprise architecture, RxJS observables, Signals & Reactive Forms", highlight: true },
      { name: "TypeScript", level: "Advanced", description: "Strict type safety, generics, modular design systems & scalable codebases", highlight: true },
      { name: "Tailwind CSS", level: "Advanced", description: "Utility-first design tokens, dark/light theme systems & responsive grids", highlight: true },
      { name: "HTML5, CSS3 & WCAG AA", level: "Advanced", description: "Semantic markup, CSS Grid/Flexbox, keyboard accessibility & WCAG 2.2 AA standards" },
      { name: "State Management", level: "Proficient", description: "Zustand, Context API, Redux Toolkit & RxJS Reactive Streams" }
    ]
  },
  {
    title: "Backend, Cloud & DevOps",
    description: "Developing resilient backend services, cloud architectures, and CI/CD pipelines.",
    skills: [
      { name: "Node.js & Express", level: "Proficient", description: "REST API architectures, middleware design, JWT authentication & error handling", highlight: true },
      { name: "Firebase Suite", level: "Advanced", description: "Firestore, Realtime DB, Cloud Auth, Cloud Functions & Security Rules", highlight: true },
      { name: "Python", level: "Proficient", description: "Backend scripting, automation, data handling & API services" },
      { name: "PostgreSQL & MongoDB", level: "Proficient", description: "Relational and document database design, indexing & CRUD operations" },
      { name: "Git & CI/CD Deployment", level: "Advanced", description: "Git workflows, automated testing, Vercel, Render & cloud hosting", highlight: true }
    ]
  }
];

export const ENGINEERING_PILLARS = [
  {
    title: "Mission-Critical High Availability",
    description: "Engineering fault-tolerant enterprise architectures, robust middleware configurations, and proactive monitoring to guarantee continuous uptime."
  },
  {
    title: "Performance by Default",
    description: "Optimizing for Core Web Vitals (LCP, INP, CLS) through code splitting, efficient database indexing, and minimal runtime overhead."
  },
  {
    title: "Accessible & Universal Design",
    description: "Building inclusive experiences meeting WCAG 2.2 AA standards with semantic HTML, keyboard operability, and proper ARIA relationships."
  },
  {
    title: "Secure Enterprise Integration",
    description: "Connecting core banking backends, middleware, and client applications via secure, strongly typed REST APIs and robust data contracts."
  }
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/Henok9450",
    username: "@Henok9450"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/henok-birhanu",
    username: "henok-birhanu"
  },
  {
    name: "Email",
    url: "mailto:henok9450@gmail.com",
    username: "henok9450@gmail.com"
  }
];