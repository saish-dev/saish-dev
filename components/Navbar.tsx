import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

interface NavbarProps {
  currentView: 'home' | 'projects';
  onViewChange: (view: 'home' | 'projects') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const tabs: { id: 'home' | 'projects'; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 pointer-events-none bg-gradient-to-b from-background via-background/90 to-transparent">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
        <span className="font-serif italic font-semibold text-lg pointer-events-auto hidden sm:block">
          {PROFILE_DATA.name}
        </span>

        <div className="glass bg-background/80 pointer-events-auto flex gap-1 p-1 rounded-full shadow-lg shadow-black/5 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onViewChange(tab.id)}
              className={`px-4 sm:px-5 py-1.5 rounded-full text-sm transition-colors ${currentView === tab.id
                ? 'bg-primary/10 text-primary'
                : 'text-secondary hover:text-primary'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 pointer-events-auto">
          <span className="hidden md:flex items-center gap-2 text-xs text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_10px_#2dd4bf]"></span>
            {PROFILE_DATA.availability}
          </span>
          <button
            onClick={toggleTheme}
            className="glass text-secondary hover:text-primary transition-colors p-2.5 rounded-full"
            aria-label="Toggle Theme"
          >
            {isDark ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
