import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Github, Server, Layout, Globe, Code, Smartphone } from 'lucide-react';

const Projects: React.FC = () => {
  const categories = ['All', 'Backend', 'Frontend', 'Fullstack', 'Mobile'];
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = activeTab === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="pt-36 pb-16 min-h-[80vh]">
      <div className="flex flex-col items-center mb-16">
        <div className="eyebrow mb-4">Selected work · {PROJECTS.length}</div>
        <h2 className="font-light text-5xl md:text-6xl tracking-tight mb-6 text-center">
          Proof of <em className="grad-text pr-1">work</em>
        </h2>
        <p className="text-secondary mb-10 text-center max-w-lg text-lg">
          My projects and work across different technologies and domains.
        </p>

        <div className="glass flex p-1 rounded-full max-w-full overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm transition-all duration-300 ${activeTab === cat ? 'bg-primary/10 text-primary' : 'text-secondary hover:text-primary'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className="group glass rounded-[28px] overflow-hidden hover:border-primary/25 transition-all duration-500">
              {/* Image Section */}
              <div className="relative aspect-[16/9] bg-gradient-to-br from-accent/20 via-accent2/10 to-transparent overflow-hidden border-b border-border flex items-center justify-center">
                {project.screens && project.screens.length > 0 ? (
                  <div className="absolute inset-0 flex items-start justify-center gap-[3%] pt-[6%] px-[4%] overflow-hidden">
                    {project.screens.map((src, i) => {
                      const center = i === Math.floor(project.screens!.length / 2);
                      return (
                        <img
                          key={src}
                          src={src}
                          alt={`${project.title} screen ${i + 1}`}
                          loading="lazy"
                          className={`w-[28%] max-w-[260px] h-auto drop-shadow-2xl transition-transform duration-700 group-hover:-translate-y-2 ${center ? 'mt-0' : 'mt-[5%] opacity-95'}`}
                        />
                      );
                    })}
                  </div>
                ) : project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-20"></div>
                  </>
                ) : (
                  <div className="flex flex-col items-center gap-4 transition-transform duration-700 group-hover:scale-110">
                    <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-accent">
                      {project.category === 'Backend' && <div className="text-secondary opacity-80"><Server size={32} /></div>}
                      {project.category === 'Frontend' && <div className="text-secondary opacity-80"><Layout size={32} /></div>}
                      {project.category === 'Fullstack' && <div className="text-secondary opacity-80"><Globe size={32} /></div>}
                      {project.category === 'Mobile' && <div className="text-secondary opacity-80"><Smartphone size={32} /></div>}
                      {!['Backend', 'Frontend', 'Fullstack', 'Mobile'].includes(project.category) && <div className="text-secondary opacity-80"><Code size={32} /></div>}
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-secondary">{project.category} Project</span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="px-3 py-1 text-[11px] tracking-widest text-secondary rounded-full uppercase border border-border font-mono">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs text-secondary">+{project.techStack.length - 3}</span>
                  )}
                </div>

                <h3 className="text-4xl font-light tracking-tight mb-3">{project.title}</h3>
                <p className="text-secondary leading-relaxed mb-8 max-w-2xl">
                  {project.description}
                </p>

                <div className="flex items-center gap-4">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-background text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      View Project Live <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-secondary text-sm cursor-default">
                      Not Available <ArrowUpRight size={16} className="opacity-40" />
                    </div>
                  )}

                  {[
                    { href: project.github, label: project.githubFrontend ? 'Backend' : 'Source' },
                    { href: project.githubFrontend, label: 'Frontend' },
                  ].map(({ href, label }) => href && (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center gap-2 p-2.5 rounded-full text-secondary hover:text-primary hover:bg-muted transition-all border border-border"
                      aria-label={`View ${label} Source`}
                      title={`${label} repo`}
                    >
                      <Github size={20} />
                      {project.githubFrontend && <span className="text-sm pr-1">{label}</span>}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 px-6 text-center border border-dashed border-border rounded-3xl animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-secondary mb-6">
              <Code size={32} className="opacity-50" />
            </div>
            <h3 className="text-2xl font-light mb-2">Projects Coming Soon</h3>
            <p className="text-secondary max-w-xs mx-auto text-sm">
              I'm currently learning and working on some exciting {activeTab.toLowerCase()} projects. Check back soon for updates!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;