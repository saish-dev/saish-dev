import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Github, Server, Layout, Globe, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const categories = ['All', 'Backend', 'Frontend', 'Fullstack'];
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = activeTab === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="pt-32 pb-16 min-h-[80vh]">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif italic text-primary mb-6 text-center">
          Proof of Work <span className="text-2xl text-secondary not-italic font-sans align-middle ml-1">({PROJECTS.length})</span>
        </h2>
        <p className="text-secondary mb-10 text-center max-w-lg text-lg">
          My projects and work across different technologies and domains.
        </p>

        <div className="flex bg-muted p-1 rounded-full border border-border">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === cat ? 'bg-background text-primary shadow-sm' : 'text-secondary hover:text-primary hover:bg-background/50'
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
            <div key={project.id} className="group bg-surface border border-border rounded-3xl overflow-hidden hover:border-secondary transition-all duration-500 shadow-sm">
              {/* Image Section */}
              <div className="relative aspect-[16/9] bg-muted overflow-hidden border-b border-border flex items-center justify-center">
                {project.image ? (
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
                    <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center text-secondary shadow-sm">
                      {project.category === 'Backend' && <div className="text-secondary opacity-80"><Server size={32} /></div>}
                      {project.category === 'Frontend' && <div className="text-secondary opacity-80"><Layout size={32} /></div>}
                      {project.category === 'Fullstack' && <div className="text-secondary opacity-80"><Globe size={32} /></div>}
                      {!['Backend', 'Frontend', 'Fullstack'].includes(project.category) && <div className="text-secondary opacity-80"><Code size={32} /></div>}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-secondary opacity-50">{project.category} Project</span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="px-3 py-1 text-[10px] font-bold tracking-widest text-secondary bg-muted rounded-full uppercase border border-border">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs text-secondary">+{project.techStack.length - 3}</span>
                  )}
                </div>

                <h3 className="text-2xl font-serif font-medium text-primary mb-3">{project.title}</h3>
                <p className="text-secondary leading-relaxed mb-8 max-w-2xl">
                  {project.description}
                </p>

                <div className="flex items-center gap-4">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-background text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                      View Project Live <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted text-secondary/40 text-sm font-semibold border border-border cursor-default">
                      Not Available <ArrowUpRight size={16} className="opacity-20" />
                    </div>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      className="p-2.5 bg-muted rounded-full text-secondary hover:text-primary hover:bg-border transition-all border border-border"
                      aria-label="View Source"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 px-6 text-center bg-surface border border-dashed border-border rounded-3xl animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-secondary mb-6">
              <Code size={32} className="opacity-50" />
            </div>
            <h3 className="text-xl font-serif text-primary mb-2">Projects Coming Soon</h3>
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