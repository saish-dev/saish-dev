import React, { useState } from 'react';
import { SKILLS } from '../constants';

import {
  FolderCode,
  Globe,
  Database,
  Wrench,
  Cloud,
  Brain,
  FileCode,
  ShieldCheck,
  Settings2,
  GitBranch,
  Layers,
  Cpu,
  Zap,
  Layout,
  MessageSquare
} from 'lucide-react';
import { SkillCategory } from '../types';

const Skills: React.FC = () => {
  const categories = ['All Skills', ...Array.from(new Set(SKILLS.map(s => s.category)))];
  const [activeCategory, setActiveCategory] = useState('All Skills');

  const filteredSkills = activeCategory === 'All Skills'
    ? SKILLS
    : SKILLS.filter(s => s.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'All Skills': return <Layers size={14} />;
      case 'Programming Languages': return <FileCode size={14} />;
      case 'Backend': return <Cpu size={14} />;
      case 'Frontend': return <Layout size={14} />;
      case 'AI': return <Brain size={14} />;
      case 'Databases': return <Database size={14} />;
      case 'Asynchronous & Messaging': return <Zap size={14} />;
      case 'Cloud & DevOps': return <Cloud size={14} />;
      case 'API & Communication': return <MessageSquare size={14} />;
      case 'Architecture & Design': return <Layers size={14} />;
      case 'Version Control & Project Management': return <GitBranch size={14} />;
      default: return <FolderCode size={14} />;
    }
  };

  return (
    <section id="skills" className="py-16">
      <div className="flex items-end justify-between mb-8 gap-4">
        <h2 className="font-light text-4xl tracking-tight">Skills</h2>
        <span className="text-sm text-secondary">{SKILLS.length} tools</span>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-8 overflow-x-auto sm:flex-wrap sm:overflow-visible -mx-6 px-6 sm:mx-0 sm:px-0 pb-2 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((cat) => {
          const count = cat === 'All Skills' ? SKILLS.length : SKILLS.filter(s => s.category === cat).length;
          const isActive = activeCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-sm border transition-all flex items-center gap-2.5 ${isActive
                ? 'bg-primary/10 border-primary/25 text-primary'
                : 'bg-transparent border-border text-secondary hover:border-primary/25 hover:text-primary'
                }`}
            >
              <span className={isActive ? 'text-accent' : 'text-secondary'}>
                {getCategoryIcon(cat)}
              </span>
              <span>{cat}</span>
              <span className={`ml-0.5 px-2 py-0.5 rounded-full text-[10px] ${isActive ? 'bg-primary/15 text-primary' : 'bg-muted text-secondary'
                }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="glass flex items-center gap-3 pl-3 pr-4 py-2.5 rounded-xl hover:border-primary/25 transition-colors group"
          >
            <div className="w-7 h-7 p-1 shrink-0 rounded-md bg-white/90">
              {skill.icon && <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />}
            </div>
            <span className="text-sm text-secondary group-hover:text-primary transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;