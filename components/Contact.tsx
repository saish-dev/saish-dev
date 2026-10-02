import React, { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_DATA.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable; the address is visible on the page */
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="glass rounded-[32px] text-center px-6 py-16 sm:py-20 bg-gradient-to-b from-accent/15 to-transparent">
        <h2 className="font-light text-4xl sm:text-6xl leading-[1.05] tracking-tight mb-5 text-balance">
          Let's build something <em className="grad-text pr-1">worth shipping.</em>
        </h2>
        <p className="text-secondary text-lg leading-relaxed max-w-xl mx-auto mb-9">
          Most of the time you'll catch me coding or capturing moments. I'm open to new projects, creative ideas, and opportunities to be part of your vision.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${PROFILE_DATA.email}`}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-background hover:opacity-90 transition-opacity text-sm font-medium"
          >
            <Mail size={16} />
            {PROFILE_DATA.email}
          </a>
          <button
            onClick={copyEmail}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted transition-colors text-sm"
          >
            {copied ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
            {copied ? 'Copied' : 'Copy email'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
