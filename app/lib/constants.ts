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
  role: "Frontend & Full-Stack Engineer",
  location: "Addis Ababa, Ethiopia (Open to Remote Globally)",
  email: "henok9450@gmail.com",
  github: "https://github.com/Henok9450",
  linkedin: "https://www.linkedin.com/in/henok-birhanu",
  status: "Available for Full-Time Roles & High-Impact Contracts",
  bio: "Frontend and full-stack engineer passionate about building high-performance, accessible, and user-centric web applications. Specializing in React, Next.js, Angular, TypeScript, and modern cloud architectures.",
  yearsExperience: "3+",
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
    title: "Dere & Tinsu Celebration Platform",
    subtitle: "Real-Time Interactive Wedding & Event Platform",
    category: "Frontend",
    featured: false,
    problem: "Traditional event invitation sites are static announcements that lack interactive guest engagement, responsive event schedules, and real-time social participation.",
    solution: "Engineered an elegant, animated event celebration platform featuring interactive RSVP management, real-time guestbook messaging, multimedia galleries, and responsive countdown timers.",
    architecture: [
      "Real-time guest interaction and message board powered by modern reactive database architecture",
      "Performant CSS animations, micro-interactions, and smooth viewport transitions",
      "Mobile-first responsive design tailored for wedding guests across smartphones and tablets",
      "Fast edge delivery on Vercel with optimized asset loading and minimal bundle footprint"
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Vercel", "Real-Time Sync", "Mobile-First"],
    liveUrl: "https://dere-and-tinsu-wedding.vercel.app/",
    githubUrl: "https://github.com/Henok9450/dere-and-tinsu",
    metrics: "Live interactive event platform with real-time guestbook",
    previewGradient: "from-rose-600/20 via-pink-600/20 to-amber-600/20",
    clientNote: "Live interactive event celebration platform."
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
    title: "Frontend Engineering",
    description: "Crafting fast, accessible, and pixel-perfect user interfaces with modern web standards.",
    skills: [
      { name: "React 19 & Next.js", level: "Advanced", description: "SSR, SSG, Server Components, App Router, Hooks & Performance", highlight: true },
      { name: "Angular", level: "Advanced", description: "Modular architecture, RxJS, Dependency Injection, Signals & Forms", highlight: true },
      { name: "TypeScript", level: "Advanced", description: "Strict typing, generics, interfaces, and scalable codebases", highlight: true },
      { name: "Tailwind CSS", level: "Advanced", description: "Utility-first design systems, modern CSS variables & responsive grids", highlight: true },
      { name: "HTML5 & Modern CSS", level: "Advanced", description: "Semantic markup, CSS Grid/Flexbox, animations & WCAG AA standards" },
      { name: "State Management", level: "Proficient", description: "Zustand, Context API, Redux Toolkit, RxJS Observables" }
    ]
  },
  {
    title: "Backend & Cloud Services",
    description: "Developing robust APIs, authentication pipelines, and scalable cloud data layers.",
    skills: [
      { name: "Node.js & Express", level: "Proficient", description: "RESTful API design, middleware, auth & error handling", highlight: true },
      { name: "Firebase Suite", level: "Advanced", description: "Firestore, Realtime DB, Auth, Cloud Functions & Security Rules", highlight: true },
      { name: "Python", level: "Proficient", description: "Backend scripting, automation, data handling & API services" },
      { name: "PostgreSQL & MongoDB", level: "Proficient", description: "Relational and document schema design, indexing & CRUD operations" },
      { name: "REST APIs & Integration", level: "Advanced", description: "Third-party payment gateways (Stripe), webhooks & API security" }
    ]
  },
  {
    title: "Architecture, Tools & Best Practices",
    description: "Disciplined engineering practices ensuring maintainability, speed, and reliability.",
    skills: [
      { name: "Git & GitHub", level: "Advanced", description: "Branching strategies, PR reviews, CI/CD workflows", highlight: true },
      { name: "Performance Optimization", level: "Advanced", description: "Core Web Vitals, code splitting, bundle minimization & asset optimization", highlight: true },
      { name: "Web Accessibility (A11y)", level: "Proficient", description: "WCAG 2.2 AA compliance, keyboard navigation, screen reader support" },
      { name: "UI/UX & Design Systems", level: "Advanced", description: "Component-driven design, responsive layouts, micro-interactions" },
      { name: "Deployment & Hosting", level: "Proficient", description: "Vercel, Render, Firebase Hosting, Cloudflare DNS" }
    ]
  }
];

export const ENGINEERING_PILLARS = [
  {
    title: "Performance by Default",
    description: "Optimizing for Core Web Vitals (LCP, INP, CLS) through code splitting, efficient state management, and minimal client-side runtime bloat."
  },
  {
    title: "Accessible & Universal",
    description: "Building inclusive experiences meeting WCAG 2.2 AA standards with semantic HTML, keyboard operability, and proper ARIA relationships."
  },
  {
    title: "Clean Architecture",
    description: "Writing maintainable, modular, and strongly-typed TypeScript code that teams can scale, refactor, and test with confidence."
  },
  {
    title: "Business & User Focused",
    description: "Bridging the gap between engineering execution and business objectives to ship products that delight users and drive real outcomes."
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