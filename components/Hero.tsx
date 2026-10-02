import React from 'react';
import { Github, Linkedin, Instagram, FileText, ArrowUpRight } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

const calculateYOE = () => {
  const start = new Date(PROFILE_DATA.careerStartDate);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }
  return { years, months };
};

const Hero: React.FC = () => {
  const { years, months } = calculateYOE();

  return (
    <section className="pt-36 pb-10">
      <div className="grid md:grid-cols-[1.35fr_1fr] gap-12 md:gap-16 items-center">
        <div className="animate-slide-up">
          <div className="eyebrow">Python backend · Applied GenAI</div>
          <h1 className="font-light text-5xl sm:text-6xl lg:text-7xl leading-[1] tracking-tight mt-5 mb-6 text-balance">
            Systems that scale. <em className="grad-text pr-1">Agents that think.</em>
          </h1>
          <div className="max-w-xl mb-8 space-y-4">
            <p className="text-primary text-lg">
              Python Backend Engineer <span className="text-secondary mx-1">|</span>{' '}
              <span className="grad-text font-medium">{years} Years {months > 0 ? `${months} Months ` : ''}of Experience</span>
            </p>
            <p className="text-secondary text-lg leading-relaxed">
              I'm {PROFILE_DATA.name.split(' ')[0]}, a software developer in {PROFILE_DATA.location.split(',')[0]}. {PROFILE_DATA.tagline} {PROFILE_DATA.bio}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={PROFILE_DATA.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-background font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <FileText size={16} />
              View resume
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm hover:bg-muted transition-colors"
            >
              See my work <ArrowUpRight size={15} />
            </a>
            <div className="flex gap-1 ml-1 text-secondary">
              {[
                { Icon: Github, href: 'https://github.com', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="p-2.5 rounded-full hover:text-primary hover:bg-muted transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative justify-self-center md:justify-self-end w-full max-w-[340px] animate-fade-in">
          <div className="aspect-[4/5] rounded-[28px] overflow-hidden border border-border bg-gradient-to-br from-accent/25 via-accent2/10 to-transparent">
            <img src={PROFILE_DATA.avatar} alt={PROFILE_DATA.name} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
