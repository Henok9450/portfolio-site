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

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  description: string[];
  technologies: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  badge?: string;
  highlight?: boolean;
}

export const PERSONAL_INFO = {
  name: "Henok Birhanu",
  fullName: "Henok Birhanu Tadesse",
  role: "Core Systems & Software Engineer",
  titleHeadline: "Core Systems & Software Engineer",
  specialization: "Core Banking • Enterprise Middleware • Full-Stack Development",
  location: "Addis Ababa, Ethiopia (Open to UAE & International Relocation | Remote)",
  phone: "+251 933 738 330",
  email: "henok9450@gmail.com",
  github: "https://github.com/Henok9450",
  linkedin: "https://www.linkedin.com/in/henok-birhanu",
  status: "Available for Full-Time Roles & Enterprise Engineering Projects",
  bio: "Application Support & Core Systems Engineer with 10+ years of IT experience supporting enterprise applications, core banking systems (Oracle FLEXCUBE), WebLogic/SOA middleware, REST APIs, and full-stack software development with React, Angular, and TypeScript. ITIL v4 certified.",
  yearsExperience: "10+",
  resumeUrl: "/resume.pdf",
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Amharic", level: "Native" }
  ]
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Principal Officer, Core Systems",
    company: "Zemen Bank S.C.",
    location: "Addis Ababa, Ethiopia",
    period: "Dec 2023 – Present",
    current: true,
    description: [
      "Provide L2/L3 production support for core banking and mission-critical enterprise applications, owning incidents and service restoration within strict SLA targets.",
      "Support Oracle FLEXCUBE and integrated banking services, performing in-depth root cause analysis (RCA) on application, transaction, and configuration issues.",
      "Administer and troubleshoot Oracle WebLogic and SOA middleware environments, including application deployments, JMS messaging, SSL/TLS, JKS keystores, and external connectivity.",
      "Troubleshoot REST/API and third-party integrations by correlating application logs, middleware metrics, Linux system evidence, and database traces.",
      "Execute complex Oracle SQL for transaction investigation, data validation, financial reconciliation, and defect resolution.",
      "Manage release deployments, patches, configuration changes, and UAT validation while coordinating seamlessly with development, infrastructure, security, and external vendors.",
      "Maintain operational documentation, standard operating procedures (SOPs), and build Python/Bash automation scripts for repetitive tasks."
    ],
    technologies: ["Oracle FLEXCUBE", "Oracle WebLogic", "Oracle SOA", "Oracle SQL / PL-SQL", "REST APIs", "JMS", "SSL/TLS", "Python", "Bash", "Linux", "SIEM"]
  },
  {
    role: "Section Head, Core Banking System Management & Support",
    company: "Berhan Bank S.C.",
    location: "Addis Ababa, Ethiopia",
    period: "Dec 2022 – Dec 2023",
    description: [
      "Led the core banking application support section, orchestrating the rapid resolution of high-priority production incidents, defects, and business service requests.",
      "Oversaw application configuration, testing cycles, release deployments, and post-implementation validation.",
      "Performed SQL-driven troubleshooting and structured log analysis for comprehensive root-cause analysis (RCA).",
      "Coordinated cross-functional teams and international vendors through complex incident resolution, providing mentorship to support engineers."
    ],
    technologies: ["Oracle FLEXCUBE", "Core Banking Management", "Oracle WebLogic", "SQL Troubleshooting", "UAT Testing", "Incident Management", "Vendor Coordination"]
  },
  {
    role: "Core Banking Application Support Engineer",
    company: "Berhan Bank S.C.",
    location: "Addis Ababa, Ethiopia",
    period: "Dec 2019 – Dec 2022",
    description: [
      "Delivered production L2/L3 support for enterprise core banking applications, resolving transaction anomalies, integration failures, and data discrepancies.",
      "Supported daily FLEXCUBE banking operations, system maintenance, UAT testing, application patches, and controlled change requests.",
      "Collaborated with developers, infrastructure engineers, and external vendors to maintain high system availability and minimize downtime."
    ],
    technologies: ["Oracle FLEXCUBE", "SQL / Database Tuning", "WebLogic", "JMS", "Application Support", "UAT Testing", "Release Management"]
  },
  {
    role: "IT / Application Support Specialist",
    company: "Berhan Bank S.C.",
    location: "Addis Ababa, Ethiopia",
    period: "Aug 2016 – Nov 2019",
    description: [
      "Provided first- and second-line technical support for enterprise applications, operating systems, user access administration, and network connectivity.",
      "Assisted with the installation, configuration, testing, maintenance, and user support of business systems across branch networks.",
      "Diagnosed and resolved hardware, software, and networking issues with structured escalation management."
    ],
    technologies: ["Enterprise IT Support", "Windows Server", "Linux", "Network Troubleshooting", "User Access Control", "System Configuration"]
  }
];

export const EDUCATION_AND_CERTIFICATIONS = {
  education: [
    {
      degree: "BSc in Computer Science",
      institution: "Madda Walabu University",
      period: "Graduated 2016",
      details: "Comprehensive foundation in computer systems, data structures, algorithms, databases, software engineering, and networking."
    }
  ],
  certifications: [
    {
      title: "ITIL® 4 Foundation / Certified",
      issuer: "AXELOS / PeopleCert",
      highlight: true
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      highlight: true
    },
    {
      title: "Oracle Database & WebLogic Administration",
      issuer: "Oracle University / Certified Training",
      highlight: true
    },
    {
      title: "Oracle SOA Administration",
      issuer: "Oracle Enterprise Architecture",
      highlight: true
    },
    {
      title: "Oracle Java SE 11 Developer",
      issuer: "Oracle Corporation",
      highlight: false
    },
    {
      title: "CCNA (Cisco Certified Network Associate)",
      issuer: "Cisco Systems",
      highlight: false
    },
    {
      title: "API Integration & Data Science",
      issuer: "Professional Specialization",
      highlight: false
    }
  ]
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
    title: "Enterprise Core Banking & Middleware",
    description: "Mission-critical core banking, enterprise middleware configuration, service bus integration, and 24/7 high availability.",
    skills: [
      { name: "Oracle FLEXCUBE", level: "Expert", description: "Core banking workflows, transaction processing, accounting modules, and system parameters", highlight: true },
      { name: "Oracle WebLogic & SOA", level: "Expert", description: "Enterprise application server administration, JMS messaging, clustering, SSL/TLS & JKS keystores", highlight: true },
      { name: "Oracle Database & PL/SQL", level: "Advanced", description: "Transaction investigation, SQL tracing, query optimization, indexing & reconciliation", highlight: true },
      { name: "Enterprise Application Support", level: "Expert", description: "L2/L3 incident resolution, root-cause analysis (RCA), UAT testing & SLA management", highlight: true },
      { name: "API & Middleware Integration", level: "Advanced", description: "REST/SOAP Web Services, Postman, ESB, JNDI, banking interfaces & secure webhooks", highlight: true },
      { name: "Linux & System Administration", level: "Advanced", description: "Oracle Linux, shell automation (Bash/Python), security hardening & system diagnostics", highlight: true }
    ]
  },
  {
    title: "Modern Web & Software Engineering",
    description: "Architecting responsive, accessible, and high-performance applications with modern web standards.",
    skills: [
      { name: "React 19 & Next.js", level: "Advanced", description: "SSR, SSG, Server Components, App Router, Hooks & Core Web Vitals optimization", highlight: true },
      { name: "Angular", level: "Advanced", description: "Modular enterprise architecture, RxJS observables, Signals & Reactive Forms", highlight: true },
      { name: "TypeScript & JavaScript", level: "Advanced", description: "Strict type safety, generics, modular design systems & scalable codebases", highlight: true },
      { name: "Tailwind CSS", level: "Advanced", description: "Utility-first design tokens, dark/light theme systems & responsive layouts", highlight: true },
      { name: "HTML5, CSS3 & WCAG AA", level: "Advanced", description: "Semantic markup, CSS Grid/Flexbox, keyboard accessibility & WCAG 2.2 AA standards" },
      { name: "State Management", level: "Proficient", description: "Zustand, Context API, Redux Toolkit & RxJS Reactive Streams" }
    ]
  },
  {
    title: "Backend, Cloud, Monitoring & ITSM",
    description: "Scalable backend architectures, cloud infrastructure, operational monitoring, and ITIL service management.",
    skills: [
      { name: "Python & Automation", level: "Proficient", description: "Operational scripting, log parsing, automated checks & backend API services", highlight: true },
      { name: "Node.js & Express", level: "Proficient", description: "REST API architectures, middleware design, JWT authentication & error handling" },
      { name: "Firebase & Cloud Services", level: "Advanced", description: "Firestore, Realtime DB, Cloud Auth, Cloud Functions & AWS fundamentals", highlight: true },
      { name: "Monitoring & Diagnostics", level: "Advanced", description: "SIEM log extraction, Grafana, Zabbix, OPatch, WLST & log analysis", highlight: true },
      { name: "ITIL v4 & Service Management", level: "Certified", description: "Incident, Problem, Change & Release Management, post-deployment validation", highlight: true }
    ]
  }
];

export const ENGINEERING_PILLARS = [
  {
    title: "Mission-Critical High Availability",
    description: "Engineering fault-tolerant enterprise architectures, robust middleware configurations, and proactive monitoring to guarantee continuous uptime."
  },
  {
    title: "Root-Cause Analysis & Rapid Resolution",
    description: "Diagnosing complex incidents across application, middleware, Linux, and database layers using structured log correlation and SQL tracing."
  },
  {
    title: "Performance by Default",
    description: "Optimizing for Core Web Vitals (LCP, INP, CLS) and database transaction throughput through clean indexing, efficient caching, and minimal runtime overhead."
  },
  {
    title: "Disciplined ITIL & Project Delivery",
    description: "Applying certified ITIL v4 service management methodologies for controlled releases, rigorous UAT, and seamless vendor coordination."
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
  },
  {
    name: "Phone",
    url: "tel:+251933738330",
    username: "+251 933 738 330"
  }
];