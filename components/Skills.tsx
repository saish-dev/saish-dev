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
    <section id="skills" className="py-12">
      <h2 className="text-3xl font-serif italic text-primary mb-8">Skills</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => {
          const count = cat === 'All Skills' ? SKILLS.length : SKILLS.filter(s => s.category === cat).length;
          const isActive = activeCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all flex items-center gap-2.5 ${isActive
                ? 'bg-[#1a1a1a] border-[#333] text-white ring-1 ring-[#444]'
                : 'bg-transparent border-[#222] text-[#888] hover:border-[#444] hover:text-[#ccc]'
                }`}
            >
              <span className={isActive ? 'text-white' : 'text-[#666]'}>
                {getCategoryIcon(cat)}
              </span>
              <span>{cat}</span>
              <span className={`ml-0.5 px-2 py-0.5 rounded-full text-[10px] ${isActive ? 'bg-[#333] text-white' : 'bg-[#1a1a1a] text-[#555]'
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
            className="flex items-center gap-3 px-4 py-3 bg-surface border border-border rounded-lg hover:border-secondary transition-colors group"
          >
            <div className="w-5 h-5 shrink-0 transition-all">
              {skill.icon && <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />}
            </div>
            <span className="text-sm font-medium text-secondary group-hover:text-primary transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;