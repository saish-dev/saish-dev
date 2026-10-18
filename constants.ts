import { Project, Experience, Skill, SkillCategory, SocialLink } from './types';

export const PROFILE_DATA = {
  name: "Saish Naik",
  role: "Software Developer",
  tagline: "Building scalable Python backend systems and applied GenAI products.",
  bio: "A passionate programmer and quick learner with a strong self-learning mindset. I enjoy exploring new technologies and building meaningful solutions. Outside of coding, I love traveling, hiking, and spending time in nature to stay inspired.",
  location: "Goa, India",
  email: "sn.saishnaik@gmail.com",
  availability: "Open for opportunities",
  avatar: "/Saish.jpg", // Placeholder
  githubUsername: "saish-dev", // Updated to a valid username to ensure the graph renders
  resumeUrl: "https://flowcv.com/resume/mqf9sdidui",
  careerStartDate: "2022-02-01"
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Twitter", url: "https://twitter.com", icon: "Twitter" },
  { platform: "GitHub", url: "https://github.com", icon: "Github" },
  { platform: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
  { platform: "Instagram", url: "https://instagram.com/", icon: "Instagram" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  'Backend & APIs',
  'AI & Agents',
  'Data & Messaging',
  'Frontend',
  'DevOps & Tooling',
  'Architecture & Process',
];

export const SKILLS: Skill[] = [
  // Backend & APIs
  { name: 'Python', category: 'Backend & APIs', icon: '/Python.svg' },
  { name: 'Django', category: 'Backend & APIs', icon: 'https://cdn.simpleicons.org/django/092E20' },
  { name: 'Django REST Framework', category: 'Backend & APIs', icon: '/DRF.svg' },
  { name: 'FastAPI', category: 'Backend & APIs', icon: 'https://cdn.simpleicons.org/fastapi/009688' },
  { name: 'Flask', category: 'Backend & APIs', icon: 'https://cdn.simpleicons.org/flask/000000' },
  { name: 'NestJS', category: 'Backend & APIs', icon: 'https://cdn.simpleicons.org/nestjs/E0234E' },
  { name: 'gRPC', category: 'Backend & APIs', icon: '/gRPC.svg' },
  { name: 'Swagger', category: 'Backend & APIs', icon: 'https://cdn.simpleicons.org/swagger/85EA2D' },
  { name: 'Postman', category: 'Backend & APIs', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },

  // AI & Agents
  { name: 'LangChain', category: 'AI & Agents', icon: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
  { name: 'LangGraph', category: 'AI & Agents', icon: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
  { name: 'LangSmith', category: 'AI & Agents', icon: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
  { name: 'Google AI Studio', category: 'AI & Agents', icon: '/aistudio.svg' },
  { name: 'OpenAI Agent Builder', category: 'AI & Agents', icon: '/openai.svg' },
  { name: 'MCP', category: 'AI & Agents', icon: '/mcp.svg' },
  { name: 'Claude Code', category: 'AI & Agents', icon: 'https://cdn.simpleicons.org/claude/D97757' },
  { name: 'Higgsfield', category: 'AI & Agents', icon: '/Higgsfield.png' },

  // Data & Messaging
  { name: 'PostgreSQL', category: 'Data & Messaging', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'MongoDB', category: 'Data & Messaging', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'SQLAlchemy', category: 'Data & Messaging', icon: 'https://cdn.simpleicons.org/sqlalchemy/D71F00' },
  { name: 'DBeaver', category: 'Data & Messaging', icon: '/DBeaver.svg' },
  { name: 'Apache Kafka', category: 'Data & Messaging', icon: 'https://cdn.simpleicons.org/apachekafka/231F20' },
  { name: 'Celery', category: 'Data & Messaging', icon: 'https://cdn.simpleicons.org/celery/37814A' },
  { name: 'Redis', category: 'Data & Messaging', icon: '/Redis.svg' },

  // Frontend
  { name: 'JavaScript', category: 'Frontend', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'HTML', category: 'Frontend', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'CSS', category: 'Frontend', icon: 'https://cdn.simpleicons.org/css/1572B6' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'React', category: 'Frontend', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Next.js', category: 'Frontend', icon: 'https://cdn.simpleicons.org/nextdotjs/000000' },

  // DevOps & Tooling
  { name: 'Docker', category: 'DevOps & Tooling', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'Azure', category: 'DevOps & Tooling', icon: '/Azure.svg' },
  { name: 'Git', category: 'DevOps & Tooling', icon: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'GitHub', category: 'DevOps & Tooling', icon: 'https://cdn.simpleicons.org/github/181717' },
  { name: 'Bitbucket', category: 'DevOps & Tooling', icon: 'https://cdn.simpleicons.org/bitbucket/0052CC' },
  { name: 'GitLab', category: 'DevOps & Tooling', icon: 'https://cdn.simpleicons.org/gitlab/FC6D26' },

  // Architecture & Process
  { name: 'Microservices', category: 'Architecture & Process', icon: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
  { name: 'Monolithic Architecture', category: 'Architecture & Process', icon: 'https://cdn.simpleicons.org/serverfault/555555' },
  { name: 'Database Design', category: 'Architecture & Process', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'Agile Development', category: 'Architecture & Process', icon: 'https://cdn.simpleicons.org/jira/0052CC' },
  { name: 'Jira', category: 'Architecture & Process', icon: 'https://cdn.simpleicons.org/jira/0052CC' },
  { name: 'Confluence', category: 'Architecture & Process', icon: 'https://cdn.simpleicons.org/confluence/172B4D' },
  { name: 'DevStride', category: 'Architecture & Process', icon: '/DevStride.svg' },
  { name: 'Spec-Driven Development', category: 'Architecture & Process' },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    company: "Creative Capsule",
    role: "Software Developer",
    period: "Aug 2025 - Present",
    description: [
      "Built a GenAI proof-of-concept for floorplan analysis, automating interpretation and insight extraction from architectural layouts.",
      "Contributing to the maintenance and evolution of a LangChain and LangGraph–based conversational backend supporting multi-step reasoning and context-aware workflows.",
      "Implemented agentic search and retrieval workflows to improve grounding, relevance, and decision accuracy in AI-driven responses.",
      "Designed scalable backend architecture for training and course scheduling optimization using FastAPI and FastMCP, leveraging Google OR-Tools for constraint-based optimization.",
      "Integrated MCP (Model Context Protocol) to unify model context and tool usage across internal AI services.",
      "Worked with OpenAI Agent Builder to design automated, agentic workflows orchestrating tasks across existing systems.",
      "Maintained web scraping pipelines using Scrapy to extract, clean, and normalize data from unstructured, multi-brand sources for downstream AI systems.",
      "Actively refined prompts and safeguards within security assessment pipelines to ensure controlled, safe, and reliable model behavior."
    ],
    skills: [
      "Python",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "GenAI",
      "Agentic Workflows",
      "FastMCP",
      "OpenAI Agent Builder",
      "Scrapy",
      "MCP"
    ],
    logo: "https://www.creativecapsule.com/wp-content/themes/creative-capsule/content/images/content-images/favicon.ico"
  },
  {
    id: 2,
    company: "Trellissoft, Inc",
    role: "Software Engineer",
    period: "Feb 2022 - Aug 2025",
    description: [
      "Spearheaded backend development across 5 major projects, specializing in Python, Django, Flask, and Django REST Framework across the full SDLC.",
      "Architected and led the development of a multi-tenant chatbot builder platform, managing a team of 8 developers and designing the core backend architecture.",
      "Built a high-accuracy NLP engine for intent classification and implemented chatflow versioning to support safe iteration, testing, and rollback of conversational logic.",
      "Designed, developed, and optimized high-performance APIs, using Celery for asynchronous and periodic task execution.",
      "Led backend development for a legal case management and OCR automation platform, contributing ~80% of the backend codebase.",
      "Automated document processing, discrepancy detection, and report generation to significantly improve legal workflows.",
      "Built automated notification systems for an Invoice Finance platform supporting real-time funding and repayments.",
      "Developed a Faust–Kafka cron job system for contract scheduling and billing, achieving an 83% improvement in processing efficiency for key APIs.",
      "Collaborated closely with US-based clients, translating business requirements into reliable, scalable technical solutions."
    ],
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "Flask",
      "Microservices",
      "Kafka",
      "Celery",
      "Redis",
      "PostgreSQL",
      "NLP",
      "API Design"
    ],
    logo: "https://trellissoft.ai/wp-content/uploads/2021/11/cropped-Trellissoft-logo-without-tagline-32x32.png"
  }
];


export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "NexTracker",
    description: "NexTracker is an enterprise-grade productivity and work-tracking system that enables employees to log daily tasks, managers to monitor team productivity, and admins to gain organization-wide analytics through secure, role-based access.",
    techStack: ["PYTHON", "FASTAPI", "REACT", "TYPESCRIPT", "TAILWIND"],
    link: "",
    github: "https://github.com/Nexverse-Intelligence/nex-tracker-backend",
    githubFrontend: "https://github.com/saish-dev/nex-tracker-frontend",
    image: "projects/nextracker.jpg",
    featured: true,
    category: "Fullstack"
  },
  {
    id: 2,
    title: "Mishti Bakehouse",
    description: "Ordering website for a home bakery. Customers browse the menu, configure items, and submit an order that lands on the baker's WhatsApp, or send a custom-cake inquiry. The baker manages menu items and gallery photos herself through a password-protected admin page, with Supabase storage and WhatsApp Cloud API notifications behind it.",
    techStack: ["NEXT.JS", "TYPESCRIPT", "TAILWIND", "SUPABASE"],
    link: "https://mishti-bakehouse.vercel.app",
    image: "projects/mishti-bakehouse.jpg",
    featured: true,
    category: "Fullstack"
  },
  {
    id: 3,
    title: "NexSplit",
    description: "AI-powered iOS bill-splitting app. Scan a receipt and Google Gemini extracts the items, prices and quantities. Review them, assign items to people or split shared costs evenly, organise friends into groups, and track who owes what. Built natively with SwiftUI and SwiftData.",
    techStack: ["SWIFTUI", "SWIFTDATA", "GEMINI"],
    link: "",
    github: "https://github.com/saish-dev/NexSplit",
    image: "",
    screens: ["projects/nexsplit/home.png", "projects/nexsplit/scan.png", "projects/nexsplit/split.png"],
    featured: true,
    category: "Mobile"
  },
  {
    id: 4,
    title: "Finance Planner",
    description: "Personal cashflow and net-worth planner that replaces a multi-tab Excel model. Enter income, expenses, loans, investments and insurance once, and it projects bank, investment, PF and loan balances month by month to any year you pick. Money is handled with Decimal math throughout, and the projection engine is a pure function of the database.",
    techStack: ["PYTHON", "DJANGO", "POSTGRESQL"],
    link: "",
    github: "https://github.com/saish-dev/finance-planner",
    image: "projects/finance-planner.jpg",
    featured: false,
    category: "Fullstack"
  },
  {
    id: 5,
    title: "Lensque",
    description: "Photography portfolio with a home page of latest frames, a filterable work gallery by category, and per-photo pages with prev/next. Enquiries go straight to Instagram DMs. An admin area lets me upload, categorise, publish and feature photos, with uploads going directly to Supabase storage and row-level security ensuring visitors only see published work.",
    techStack: ["NEXT.JS", "TYPESCRIPT", "SUPABASE"],
    link: "https://lensque.vercel.app",
    github: "https://github.com/saish-dev/lensque_",
    image: "projects/lensque.jpg",
    featured: false,
    category: "Fullstack"
  },
  {
    id: 6,
    title: "TAG - The Art of Gifting",
    description: "Website for a handmade gifting studio in Goa that makes invitations, favours and hampers for weddings, corporate and events. Visitors browse products by kind and collection, get a budget estimate for their occasion, and place orders over Instagram DM.",
    techStack: ["NEXT.JS", "TYPESCRIPT", "CSS"],
    link: "https://the-art-of-gifting.vercel.app/",
    github: "https://github.com/saish-dev/TAG",
    image: "projects/tag.jpg",
    featured: false,
    category: "Frontend"
  },
  {
    id: 7,
    title: "Resource Management",
    description: "Internal resource-allocation app for assigning people to projects. Covers allocation locks, bench tracking and capacity planning, with a 100% capacity ceiling enforced by the API inside a database transaction. Status and utilisation are derived rather than stored. A pnpm monorepo with a Next.js web app, a NestJS API and shared Zod schemas.",
    techStack: ["NEXT.JS", "NESTJS", "TYPESCRIPT", "POSTGRESQL"],
    link: "",
    github: "https://github.com/saish-dev/resource-management",
    image: "projects/resource-management.jpg",
    featured: false,
    category: "Fullstack"
  },
  // {
  //   id: 2,
  //   title: "Uni Notes",
  //   description: "University notes and study platform with MDX-based content and a Notion-style interface for courses and syllabus.",
  //   techStack: ["NEXT.JS", "TYPESCRIPT", "TAILWIND"],
  //   link: "https://example.com",
  //   github: "https://github.com",
  //   image: "https://picsum.photos/id/20/800/500",
  //   featured: false,
  //   category: "Fullstack"
  // },

];