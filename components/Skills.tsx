import React, { useState } from 'react';
import { SKILLS, SKILL_CATEGORIES } from '../constants';

import { Brain, Cloud, Cpu, Database, Layers, Layout } from 'lucide-react';
import { SkillCategory } from '../types';

const CATEGORY_ICONS: Record<SkillCategory, React.ReactNode> = {
  'Backend & APIs': <Cpu size={15} />,
  'AI & Agents': <Brain size={15} />,
  'Data & Messaging': <Database size={15} />,
  'Frontend': <Layout size={15} />,
  'DevOps & Tooling': <Cloud size={15} />,
  'Architecture & Process': <Layers size={15} />,
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>(SKILL_CATEGORIES[0]);

  const activeSkills = SKILLS.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-16">
      <div className="flex items-end justify-between mb-8 gap-4">
        <h2 className="font-light text-4xl tracking-tight">Skills</h2>
        <span className="text-sm text-secondary">{SKILLS.length} tools</span>
      </div>

      <div className="grid lg:grid-cols-[260px_minmax(0,1fr)] gap-6 lg:gap-10 items-start">
        {/* Category list: a horizontal scroller on mobile, a vertical list on desktop */}
        <div
          role="group"
          aria-label="Skill categories"
          className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible -mx-6 px-6 lg:mx-0 lg:px-0 pb-2 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {SKILL_CATEGORIES.map((cat) => {
            const count = SKILLS.filter(s => s.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={isActive}
                className={`shrink-0 whitespace-nowrap lg:w-full px-4 py-2.5 rounded-xl text-sm border transition-all flex items-center gap-3 ${isActive
                  ? 'bg-primary/10 border-primary/25 text-primary'
                  : 'bg-transparent border-transparent text-secondary hover:text-primary hover:bg-primary/5'
                  }`}
              >
                <span className={isActive ? 'text-accent' : 'text-secondary'}>
                  {CATEGORY_ICONS[cat]}
                </span>
                <span>{cat}</span>
                <span className={`ml-auto px-2 py-0.5 rounded-full text-[10px] ${isActive ? 'bg-primary/15 text-primary' : 'bg-muted text-secondary'
                  }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected category */}
        <div className="glass rounded-2xl p-6 sm:p-8 min-h-[300px] lg:min-h-[420px]">
          <div className="flex items-baseline justify-between mb-6 gap-4">
            <h3 className="grad-text italic font-light text-2xl sm:text-3xl tracking-tight pr-1">{activeCategory}</h3>
            <span className="font-mono text-xs text-secondary shrink-0">{activeSkills.length} tools</span>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {activeSkills.map((skill) => (
              <div
                key={skill.name}
                className="glass flex items-center gap-3 p-2.5 pr-4 rounded-xl hover:border-primary/25 transition-colors group"
              >
                <div className="w-9 h-9 p-1.5 shrink-0 rounded-lg bg-white/90 flex items-center justify-center">
                  {skill.icon
                    ? <img src={skill.icon} alt="" className="w-full h-full object-contain" />
                    : <span className="font-semibold text-sm text-slate-700">{skill.name[0]}</span>}
                </div>
                <span className="text-sm text-secondary group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
