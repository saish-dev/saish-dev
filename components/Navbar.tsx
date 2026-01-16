import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'projects';
  onViewChange: (view: 'home' | 'projects') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check local storage or system preference
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex space-x-6">
          <button
            onClick={() => onViewChange('home')}
            className={`text-sm font-medium transition-colors border-b ${currentView === 'home'
                ? 'text-primary border-primary'
                : 'text-secondary border-transparent hover:text-primary'
              } pb-0.5`}
          >
            Home
          </button>
          <button
            onClick={() => onViewChange('projects')}
            className={`text-sm font-medium transition-colors border-b ${currentView === 'projects'
                ? 'text-primary border-primary'
                : 'text-secondary border-transparent hover:text-primary'
              } pb-0.5`}
          >
            Projects
          </button>
        </div>

        <button
          onClick={toggleTheme}
          className="text-secondary hover:text-primary transition-colors p-2 rounded-full hover:bg-muted"
          aria-label="Toggle Theme"
        >
          {isDark ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;