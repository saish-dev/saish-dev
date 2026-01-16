import React, { useState } from 'react';
import { EXPERIENCE } from '../constants';
import { Plus, Minus } from 'lucide-react';

const Experience: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="experience" className="pt-4 pb-12">
      <div className="flex flex-col mb-8">
        <h2 className="text-3xl md:text-4xl font-serif italic text-primary mb-3">Work History</h2>
        <p className="text-secondary text-base max-w-xl">
          My professional journey and the impact I've made.
        </p>
      </div>

      <div className="space-y-4">
        {EXPERIENCE.map((job) => (
          <div
            key={job.id}
            className={`border border-border rounded-2xl overflow-hidden transition-all duration-500 bg-surface shadow-sm ${openId === job.id ? 'ring-1 ring-secondary/10 border-secondary/20' : 'hover:border-secondary/10'
              }`}
          >
            <div
              className="flex items-center justify-between cursor-pointer p-4 sm:p-5"
              onClick={() => toggle(job.id)}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center overflow-hidden border border-border shadow-inner shrink-0 transition-transform group-hover:scale-105">
                  {job.logo?.includes('http') ? (
                    <img src={job.logo} alt={job.company} className="w-5 h-5 object-contain" />
                  ) : (
                    <span className="text-sm font-serif italic font-bold text-primary">{job.company[0]}</span>
                  )}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-serif font-medium text-primary leading-tight">
                    {job.company}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <p className="text-xs font-medium text-secondary">{job.role}</p>
                    <span className="w-0.5 h-0.5 rounded-full bg-border hidden sm:block"></span>
                    <span className="text-[10px] font-mono text-secondary/60 sm:hidden">{job.period}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[11px] font-mono text-secondary/70 hidden sm:block whitespace-nowrap">{job.period}</span>
                <button
                  className={`w-8 h-8 rounded-full border border-border flex items-center justify-center transition-all ${openId === job.id ? 'bg-primary text-background border-primary' : 'text-secondary hover:text-primary hover:border-secondary'
                    }`}
                >
                  {openId === job.id ? <Minus size={14} /> : <Plus size={14} />}
                </button>
              </div>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${openId === job.id ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-1 ml-1 sm:ml-14">
                <div className="space-y-3 border-l border-border/40 pl-5 sm:pl-6 py-1">
                  {job.description.map((desc, index) => (
                    <div key={index} className="flex gap-3 group/item">
                      <div className="mt-1.5 shrink-0">
                        <div className="w-1 h-1 rounded-full bg-secondary/20 group-hover/item:bg-primary transition-colors duration-300"></div>
                      </div>
                      <p className="text-sm leading-relaxed text-secondary/80 group-hover/item:text-primary transition-colors duration-300">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>

                {job.skills && job.skills.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-border/40">
                    <h4 className="text-[9px] uppercase tracking-[0.2em] font-bold text-secondary/30 mb-3 ml-1">Stack</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {job.skills.map(skill => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-[10px] font-medium text-secondary bg-muted rounded-md border border-border hover:border-secondary/20 hover:text-primary transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;