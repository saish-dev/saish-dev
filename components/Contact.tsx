import React from 'react';
import { Mail, Copy } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

const Contact: React.FC = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    // Could add toast here
    alert("Email copied!");
  };

  return (
    <section id="contact" className="py-24">
      <h2 className="text-3xl font-serif italic text-primary mb-8">Reach Out</h2>

      <p className="text-secondary text-lg leading-relaxed max-w-2xl mb-10">
        Most of the time, you'll catch me coding or capturing moments. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      </p>

      <div className="flex gap-4">
        <a
          href={`mailto:${PROFILE_DATA.email}`}
          className="flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-secondary hover:bg-muted transition-all text-sm font-medium text-primary"
        >
          <Mail size={16} />
          Send email
        </a>

        <button
          onClick={copyEmail}
          className="flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-secondary hover:bg-muted transition-all text-sm font-medium text-primary"
        >
          <Copy size={16} />
          Copy email
        </button>
      </div>

      <div className="h-px w-full bg-border mt-24"></div>
    </section>
  );
};

export default Contact;