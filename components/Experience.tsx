import React, { useState } from 'react';
import { EXPERIENCE } from '../constants';
import { ChevronDown } from 'lucide-react';

const VISIBLE = 3;

const Experience: React.FC = () => {
  const [openIds, setOpenIds] = useState<number[]>([]);
  const toggle = (id: number) =>
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));

  return (
    <section id="experience" className="py-16">
      <div className="flex items-end justify-between mb-8 gap-4">
        <h2 className="font-light text-4xl tracking-tight">Experience</h2>
        <span className="text-sm text-secondary">2022 — now</span>
      </div>

      <div className="grid gap-4">
        {EXPERIENCE.map((job) => {
          const open = openIds.includes(job.id);
          const bullets = open ? job.description : job.description.slice(0, VISIBLE);
          return (
            <article key={job.id} className="glass rounded-3xl p-6 sm:p-8 transition-colors hover:border-primary/20">
              <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0 border border-border">
                    {job.logo?.includes('http') ? (
                      <img src={job.logo} alt="" className="w-6 h-6 object-contain" />
                    ) : (
                      <span className="font-serif italic font-semibold text-black">{job.company[0]}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-normal text-2xl leading-tight">{job.company}</h3>
                    <p className="text-sm text-secondary">{job.role}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-accent">{job.period}</span>
              </header>

              <ul className="mt-6 grid gap-3 sm:pl-[60px]">
                {bullets.map((desc, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-secondary">
                    <span className="mt-2.5 w-1 h-1 rounded-full bg-accent shrink-0"></span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {job.description.length > VISIBLE && (
                <button
                  onClick={() => toggle(job.id)}
                  className="mt-4 sm:ml-[60px] inline-flex items-center gap-1.5 text-sm text-accent hover:opacity-80"
                  aria-expanded={open}
                >
                  {open ? 'Show less' : `Show all ${job.description.length} highlights`}
                  <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
                </button>
              )}

              {job.skills && job.skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-6 sm:ml-[60px]">
                  {job.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-xs text-secondary rounded-full border border-border">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
