import { Project, Experience, Skill, SocialLink } from './types';

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

export const SKILLS: Skill[] = [
  // Programming Languages
  { name: 'Python', category: 'Programming Languages', icon: '/Python.svg' },
  { name: 'JavaScript', category: 'Programming Languages', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },

  // Backend
  { name: 'Django', category: 'Backend', icon: 'https://cdn.simpleicons.org/django/092E20' },
  { name: 'Django REST Framework', category: 'Backend', icon: '/DRF.svg' },
  { name: 'FastAPI', category: 'Backend', icon: 'https://cdn.simpleicons.org/fastapi/009688' },
  { name: 'Flask', category: 'Backend', icon: 'https://cdn.simpleicons.org/flask/000000' },

  // Frontend
  { name: 'HTML', category: 'Frontend', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'CSS', category: 'Frontend', icon: 'https://cdn.simpleicons.org/css/1572B6' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },

  // API & Communication
  { name: 'gRPC', category: 'API & Communication', icon: '/gRPC.svg' },
  { name: 'Swagger', category: 'API & Communication', icon: 'https://cdn.simpleicons.org/swagger/85EA2D' },
  { name: 'Postman', category: 'API & Communication', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },

  // Architecture & Design
  { name: 'Microservices', category: 'Architecture & Design', icon: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
  { name: 'Monolithic Architecture', category: 'Architecture & Design', icon: 'https://cdn.simpleicons.org/serverfault/555555' },
  { name: 'Database Design', category: 'Architecture & Design', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },

  // Databases
  { name: 'PostgreSQL', category: 'Databases', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'MongoDB', category: 'Databases', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'SQLAlchemy', category: 'Databases', icon: 'https://cdn.simpleicons.org/sqlalchemy/D71F00' },
  { name: 'DBeaver', category: 'Databases', icon: '/DBeaver.svg' },

  // Asynchronous & Messaging
  { name: 'Apache Kafka', category: 'Asynchronous & Messaging', icon: 'https://cdn.simpleicons.org/apachekafka/231F20' },
  { name: 'Celery', category: 'Asynchronous & Messaging', icon: 'https://cdn.simpleicons.org/celery/37814A' },
  { name: 'Redis', category: 'Asynchronous & Messaging', icon: '/Redis.svg' },

  // Cloud & DevOps
  { name: 'Docker', category: 'Cloud & DevOps', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'Azure', category: 'Cloud & DevOps', icon: '/Azure.svg' },

  // AI
  { name: 'LangChain', category: 'AI', icon: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
  { name: 'LangGraph', category: 'AI', icon: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
  { name: 'LangSmith', category: 'AI', icon: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
  { name: 'Google AI Studio', category: 'AI', icon: '/aistudio.svg' },
  { name: 'OpenAI Agent Builder', category: 'AI', icon: '/openai.svg' },
  { name: 'MCP', category: 'AI', icon: '/mcp.svg' },

  // Version Control & Project Management
  { name: 'Git', category: 'Version Control & Project Management', icon: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'GitHub', category: 'Version Control & Project Management', icon: 'https://cdn.simpleicons.org/github/181717' },
  { name: 'Bitbucket', category: 'Version Control & Project Management', icon: 'https://cdn.simpleicons.org/bitbucket/0052CC' },
  { name: 'Jira', category: 'Version Control & Project Management', icon: 'https://cdn.simpleicons.org/jira/0052CC' },
  { name: 'Confluence', category: 'Version Control & Project Management', icon: 'https://cdn.simpleicons.org/confluence/172B4D' },
  { name: 'Agile Development', category: 'Version Control & Project Management', icon: 'https://cdn.simpleicons.org/jira/0052CC' },
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
    techStack: ["PYTHON", "FASTAPI"],
    link: "",
    github: "https://github.com/Nexverse-Intelligence/nex-tracker-backend",
    image: "",
    featured: true,
    category: "Backend"
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