import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GithubActivity from './components/GithubActivity';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'projects'>('home');

  const handleViewChange = (view: 'home' | 'projects') => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-primary selection:bg-secondary/20 transition-colors duration-300">
      <Navbar currentView={currentView} onViewChange={handleViewChange} />
      <main className="max-w-5xl mx-auto px-6">
        {currentView === 'home' ? (
          <div className="animate-fade-in">
            <Hero />
            <Experience />
            <Skills />
            <GithubActivity />
            <Contact />
          </div>
        ) : (
          <div className="animate-fade-in">
            <Projects />
          </div>
        )}
        <Footer />
      </main>
    </div>
  );
};

export default App;