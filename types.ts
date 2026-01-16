export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  github?: string;
  image: string;
  featured: boolean;
  category: string; // 'Frontend' | 'Fullstack' | 'System' etc.
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
  logo?: string; // URL to logo or initial
}

export type SkillCategory =
  | 'Programming Languages'
  | 'Backend'
  | 'Frontend'
  | 'AI'
  | 'Databases'
  | 'Cloud & DevOps'
  | 'API & Communication'
  | 'Architecture & Design'
  | 'Asynchronous & Messaging'
  | 'Version Control & Project Management';


export interface Skill {
  name: string;
  category: SkillCategory;
  icon?: string;
}


export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}