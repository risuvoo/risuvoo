export interface PersonalInfo {
  name: string;
  title: string;
  subTitle: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  whatsapp: string;
  avatarUrl: string;
  bio: string;
  availableForHire: boolean;
  yoe: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  duration?: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'All' | 'SaaS & Web App' | 'E-Commerce' | 'LMS & EdTech' | 'Browser Extension';
  description: string;
  whatIDid: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  location: string;
}

export const personalInfo: PersonalInfo = {
  name: "Rafiqul Islam Suvo",
  title: "Senior Software Engineer",
  subTitle: "Specializing in High-Performance Frontend Architectures, Microfrontends & AI-Augmented Engineering",
  location: "Dhaka, Bangladesh",
  email: "rafiqulislamsuvobd@gmail.com",
  github: "https://github.com/risuvoo",
  linkedin: "https://www.linkedin.com/in/risuvoo/",
  whatsapp: "@risuvoo",
  avatarUrl: "/profile_image.jpg",
  bio: "Lead Engineer and Senior Software Engineer with 6+ years of experience leading cross-functional product development. Expert in building scalable single-page applications, micro-frontend architectures, and UI design systems across modern frontend technologies. Proficient in Node.js backend development, high-performance API architectures, and leveraging state-of-the-art AI tooling.",
  availableForHire: true,
  yoe: "6+ YOE"
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Renaissance Group",
    role: "Senior Executive, Software Engineer",
    period: "June 2026 – Present",
    location: "Dhaka, Bangladesh",
    description: [
      "Develop and maintain full-stack enterprise applications leveraging Node.js backend services and modern frontend frameworks for scalable performance.",
      "Design and optimize SQL database queries, delivering critical business intelligence metrics with low latency.",
      "Integrate scalable backend APIs into software dashboards, connecting server workflows with intuitive data visualizations.",
      "Collaborate seamlessly across cross-functional teams (Product, Design, DBAs) to deliver end-to-end software solutions.",
      "Maintain rigorous code quality, continuous integration, and database query optimization standardizations."
    ],
    technologies: ["Node.js", "SQL", "PostgreSQL", "React", "TypeScript", "Data Visualization", "REST API"]
  },
  {
    id: "exp-2",
    company: "Quomodosoft",
    role: "Lead Engineer",
    period: "July 2021 – June 2026",
    duration: "6+ YOE",
    location: "Dhaka, Bangladesh",
    description: [
      "Led cross-functional product engineering teams (Frontend, Backend, Flutter, UI/UX Design) to deliver multi-vendor platforms and SaaS templates.",
      "Architected scalable frontend solutions, micro-frontend systems, SSR workflows, and reusable UI design systems in React and Next.js.",
      "Bridged design and engineering by translating complex Figma mockups into pixel-perfect, accessible, and high-performance interfaces.",
      "Mentored junior and mid-level engineers, established code review standards, and optimized developer tooling workflows.",
      "Solved critical performance bottlenecks, state management complexity, and SEO challenges across high-traffic digital products."
    ],
    technologies: ["Next.js (SSR)", "React.js", "TypeScript", "Redux", "RTK Query", "Microfrontends", "TailwindCSS", "Node.js"]
  },
  {
    id: "exp-3",
    company: "KODEEO",
    role: "Frontend Developer",
    period: "Sep 2020 – July 2021",
    duration: "1+ YOE",
    location: "Dhaka, Bangladesh",
    description: [
      "Developed and maintained highly responsive, performance-driven web applications using Vue.js and Nuxt.js (SSR).",
      "Built pixel-perfect, utility-first user interfaces with Tailwind CSS, reducing CSS bundle size and standardizing styling tokenization.",
      "Wrote clean, modular JavaScript (ES6+) for complex state management, custom hooks, and dynamic API consumption.",
      "Optimized web vital performance metrics, asset lazy loading, and component rendering cycles for enhanced SEO."
    ],
    technologies: ["Vue.js", "Nuxt.js (SSR)", "TailwindCSS", "JavaScript (ES6+)", "REST API", "SEO Optimization"]
  },
  {
    id: "exp-4",
    company: "Patuakhali Polytechnic Institute",
    role: "Junior Instructor",
    period: "July 2019 – Aug 2020",
    location: "Patuakhali, Bangladesh",
    description: [
      "Delivered comprehensive technical lectures on core computer science subjects, simplifying complex algorithms and software principles.",
      "Conducted practical hands-on laboratory sessions, guiding students through real-world programming assignments and software development workflows."
    ],
    technologies: ["Computer Science Fundamentals", "Data Structures", "Algorithms", "C/C++", "Technical Instruction"]
  }
];

export const education: Education[] = [
  {
    id: "edu-1",
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "Bangladesh University",
    location: "Dhaka, Bangladesh",
    period: "Graduated Jan 2025",
    gpa: "3.55 / 4.0"
  },
  {
    id: "edu-2",
    degree: "Diploma in Computer Technology",
    institution: "Patuakhali Polytechnic Institute",
    location: "Patuakhali, Bangladesh",
    period: "Graduated Jun 2019",
    gpa: "3.45 / 4.0"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3 / SASS", "PHP (Basic)", "Golang (Basic)"]
  },
  {
    title: "Frontend Frameworks & Architecture",
    skills: ["Next.js (App Router & SSR)", "React.js", "Vite", "Microfrontends", "Vue.js / Nuxt.js", "Redux Toolkit", "RTK Query", "React Query", "TailwindCSS", "Shadcn UI", "Ant Design", "Material UI", "Styled Components"]
  },
  {
    title: "Backend & Databases",
    skills: ["Node.js", "Express.js", "Prisma ORM", "Mongoose", "MySQL", "PostgreSQL", "MongoDB", "REST APIs", "WebSockets"]
  },
  {
    title: "AI Tools & AI-Augmented Engineering",
    skills: ["Claude Code", "Cursor IDE", "GitHub Copilot", "Codex", "AI Prompt Engineering", "Automated Workflows"]
  },
  {
    title: "DevOps, Cloud & Infrastructure",
    skills: ["Docker", "Linux (Ubuntu/Debian)", "Vercel", "DigitalOcean", "Hostinger", "Nginx", "Apache", "CI/CD Pipelines", "Cloudflare"]
  },
  {
    title: "Engineering Methodologies & Other",
    skills: ["Microfrontend Systems", "Agile / Scrum", "TDD & Unit Testing", "Clean Code & Architecture", "Refactoring", "Git & GitHub Workflow", "Team Leadership"]
  }
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Softland",
    category: "SaaS & Web App",
    description: "App, SaaS Software Landing Page",
    whatIDid: "Designed <strong>responsive SaaS software landing page architecture</strong>, built interactive hero sections, <strong>dynamic pricing breakdown matrices</strong>, and implemented <strong>fluid GSAP and jQuery micro-animations</strong>.",
    techStack: ["TailwindCSS", "GSAP", "jQuery", "HTML5/CSS3"],
    liveUrl: "https://quomodothemes.website/html/softland/index.html",
    githubUrl: "https://github.com/risuvoo",
    featured: true
  },
  {
    id: "proj-2",
    title: "Ticketing (Event Management)",
    category: "SaaS & Web App",
    description: "Event Management & Booking System",
    whatIDid: "Developed frontend interfaces for <strong>event listings</strong>, <strong>ticket selection</strong>, and <strong>booking workflows</strong>, including a <strong>custom auditorium layout builder</strong> to dynamically organize and manage seating arrangements.",
    techStack: ["TailwindCSS", "Ant Design", "Next.js", "Redux", "RTK Query"],
    githubUrl: "https://github.com/risuvoo",
    featured: true
  },
  {
    id: "proj-3",
    title: "Quland",
    category: "SaaS & Web App",
    description: "Multipurpose Template",
    whatIDid: "Built <strong>modular React component templates</strong> with <strong>interactive micro-animations</strong> using GSAP and TailwindCSS for high-performance rendering.",
    techStack: ["React", "TailwindCSS", "GSAP", "JavaScript"],
    liveUrl: "https://quland.vercel.app/",
    githubUrl: "https://github.com/risuvoo"
  },
  {
    id: "proj-4",
    title: "Axtra (Digital Marketplace)",
    category: "SaaS & Web App",
    description: "Digital Marketplace Platform",
    whatIDid: "Implemented <strong>marketplace frontend architecture</strong> including <strong>product catalog listings</strong>, <strong>subscription billing</strong>, and <strong>payment method integration</strong>.",
    techStack: ["TailwindCSS", "Next.js", "Redux", "RTK Query"],
    liveUrl: "https://quomodosoft.com/demo/axtro-demo/",
    githubUrl: "https://github.com/risuvoo",
    featured: true
  },
  {
    id: "proj-5",
    title: "Shopo (Multivendor E-Commerce)",
    category: "E-Commerce",
    description: "Multivendor Ecommerce System",
    whatIDid: "Built and managed frontend workflows for <strong>vendors</strong>, <strong>products</strong>, <strong>order management</strong>, <strong>Flying Cart animation</strong>, <strong>Google Maps delivery tracking</strong>, <strong>real-time chat</strong>, <strong>social login</strong>, <strong>payment gateway integration</strong>, <strong>SEO friendly setup</strong>, and <strong>language/currency switcher</strong>.",
    techStack: ["Next.js SSR", "TailwindCSS", "Laravel Eco", "Redux", "RTK Query", "React Context"],
    liveUrl: "https://shopo-ecom.vercel.app/",
    githubUrl: "https://github.com/risuvoo",
    featured: true
  },
  {
    id: "proj-6",
    title: "Zalinos (Directory Listing)",
    category: "SaaS & Web App",
    description: "Directory Listing Platform",
    whatIDid: "Developed type-safe frontend features for <strong>directory listings</strong>, <strong>filtering engine</strong>, <strong>category-based unique pages</strong>, <strong>subscription checkout</strong>, <strong>payment method integration</strong>, <strong>listing CRUD</strong>, <strong>ADS management</strong>, and <strong>role management</strong>.",
    techStack: ["TypeScript", "Next.js SSR", "TailwindCSS", "Redux", "RTK Query", "Monorepo"],
    githubUrl: "https://github.com/risuvoo"
  },
  {
    id: "proj-7",
    title: "Hotelsun",
    category: "SaaS & Web App",
    description: "Hotel Listing and Booking Template",
    whatIDid: "Engineered <strong>hotel listing reservation interfaces</strong>, dynamic <strong>search filter bars</strong>, <strong>photo gallery sliders</strong>, <strong>availability calendar pickers</strong>, and <strong>customer review cards</strong>.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
    liveUrl: "https://quomodothemes.website/html/hotelsun/index.html",
    githubUrl: "https://github.com/risuvoo"
  },
  {
    id: "proj-8",
    title: "Akylade (Learning Management)",
    category: "LMS & EdTech",
    description: "Learning Management System (LMS)",
    whatIDid: "Owned frontend development of LMS features including <strong>course enrollment</strong>, <strong>content playback views</strong>, <strong>e-commerce for digital product & resource selling</strong>, and <strong>training management</strong>.",
    techStack: ["TypeScript", "Next.js", "TailwindCSS", "Redux", "RTK Query"],
    liveUrl: "https://www.akylade.com/",
    githubUrl: "https://github.com/risuvoo",
    featured: true
  },
  {
    id: "proj-9",
    title: "BankCo",
    category: "SaaS & Web App",
    description: "Fintech & Analytical Admin Dashboard Template",
    whatIDid: "Designed and implemented modern <strong>analytical admin and dashboard solutions</strong> tailored to meet the unique needs of <strong>financial, analytical, and transaction monitoring companies</strong>.",
    techStack: ["TypeScript", "Next.js", "TailwindCSS"],
    liveUrl: "https://bankco-next.vercel.app/",
    githubUrl: "https://github.com/risuvoo"
  },
  {
    id: "proj-10",
    title: "Shopus (Multivendor E-Commerce)",
    category: "E-Commerce",
    description: "Multivendor Ecommerce Platform",
    whatIDid: "Built and managed frontend workflows for <strong>vendors</strong>, <strong>products</strong>, <strong>order management</strong>, <strong>social login</strong>, <strong>payment gateway integration</strong>, <strong>SEO friendly setup</strong>, <strong>language/currency switcher</strong>, and <strong>theme management</strong>.",
    techStack: ["Next.js SSR", "TailwindCSS", "Redux", "RTK Query"],
    liveUrl: "https://quomodosoft.com/demo/shopus-demo-v1/",
    githubUrl: "https://github.com/risuvoo"
  },
  {
    id: "proj-11",
    title: "Spiro (Learning Management)",
    category: "LMS & EdTech",
    description: "Learning Management System (LMS)",
    whatIDid: "Developed and maintained frontend architecture for <strong>course management</strong>, <strong>video streaming</strong>, <strong>quiz engine</strong>, <strong>playlist management</strong>, <strong>credit management</strong>, and <strong>custom Vimeo video player integration</strong>.",
    techStack: ["TailwindCSS", "Nuxt.js", "Vuex", "Vimeo API"],
    githubUrl: "https://github.com/risuvoo"
  },
  {
    id: "proj-12",
    title: "CSS Unites (Chrome Extension)",
    category: "Browser Extension",
    description: "Chrome Extension Developer Tool",
    whatIDid: "Designed and developed the <strong>complete Chrome extension UI and core background logic</strong> to organize, inspect, copy, and <strong>reuse CSS utilities</strong>.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://chromewebstore.google.com/detail/CSS%20Unites/bgbjdaligcmcobjgnhajolfhhhgjmoad",
    githubUrl: "https://github.com/risuvoo",
    featured: true
  }
];

export const testimonial: Testimonial = {
  quote: "Rafiqul is an exceptional software engineer and frontend architect. His technical depth in modern frontend development, scalable architectures, and full-stack engineering combined with product-focused leadership makes him an invaluable engineering asset.",
  author: "SUMON MOLLA SELIM",
  position: "Senior Software Engineer",
  company: "Mimecast",
  location: "Amsterdam, Netherlands"
};
