import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResearchPage } from './components/ResearchPage';
import { ResearchProgramsPage } from './components/ResearchProgramsPage';
import { PublicationsPage } from './components/PublicationsPage';
import { ThesisProgramPage } from './components/ThesisProgramPage';
import { Methodology } from './components/Methodology';
import { TrainingPage } from './components/TrainingPage';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';

const HomePage: React.FC = () => (
  <>
    <section id="home">
      <Hero />
    </section>
    <section id="services" className="py-24 bg-white">
      <Services />
    </section>
    <section id="contact" className="py-24 bg-white">
      <Contact />
    </section>
  </>
);

const AppContent: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Navbar scrolled={scrolled} />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/research-programs" element={<ResearchProgramsPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/thesis-support" element={<ThesisProgramPage />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
