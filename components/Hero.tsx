import React from 'react';
import { Twitter, Github, Linkedin, Instagram, FileText } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

const Hero: React.FC = () => {
  const calculateYOE = () => {
    const start = new Date(PROFILE_DATA.careerStartDate);
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    const yearsPart = years > 0 ? `${years} Years` : '';
    const monthsPart = months > 0 ? ` ${months} Months` : '';

    return `${yearsPart}${monthsPart}`.trim() || 'Entry Level';
  };

  return (
    <section className="pt-32 pb-10">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Avatar - Left side */}
        <div className="shrink-0">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-border ring-4 ring-muted">
            <img
              src={PROFILE_DATA.avatar}
              alt={PROFILE_DATA.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content - Right side */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif italic font-medium text-primary mb-2">
              {PROFILE_DATA.name}
            </h1>
            <p className="text-secondary text-lg">• {PROFILE_DATA.role}</p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com" className="text-secondary hover:text-primary transition-colors"><Github size={20} /></a>
            <a href="https://linkedin.com" className="text-secondary hover:text-primary transition-colors"><Linkedin size={20} /></a>
            <a href="https://instagram.com" className="text-secondary hover:text-primary transition-colors"><Instagram size={20} /></a>
          </div>

          <div className="space-y-4 text-secondary leading-relaxed max-w-3xl">
            <p className="text-primary">
              Python Backend Engineer | {calculateYOE()} of Experience
            </p>
            <p>
              {PROFILE_DATA.bio}
            </p>
          </div>
          <div className="pt-2">
            <a
              href={PROFILE_DATA.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-background font-medium text-sm hover:opacity-90 transition-opacity shadow-sm"
            >
              <FileText size={18} />
              Resume
            </a>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-border mt-8"></div>
    </section>
  );
};

export default Hero;