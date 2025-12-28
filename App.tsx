import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { ResearchPage } from './components/ResearchPage';
import { Methodology } from './components/Methodology';
import { TrainingPage } from './components/TrainingPage';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';

export type View = 'home' | 'about' | 'research' | 'methodology' | 'training' | 'services';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState<View>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (newView: View) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Navbar scrolled={scrolled} currentView={view} onNavigate={navigateTo} />
      
      <main>
        {view === 'home' && (
          <>
            <section id="home">
              <Hero onNavigate={navigateTo} />
            </section>
            <section id="services" className="py-24 bg-white">
              <Services onNavigate={navigateTo} />
            </section>
            <section id="contact" className="py-24 bg-white">
              <Contact />
            </section>
          </>
        )}
        {view === 'about' && <AboutPage />}
        {view === 'research' && <ResearchPage />}
        {view === 'methodology' && <Methodology />}
        {view === 'training' && <TrainingPage />}
        {view === 'services' && <ServicesPage />}
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;
