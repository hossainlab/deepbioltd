import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Lazy load route components for better performance
const ResearchPage = lazy(() => import('./components/ResearchPage').then(m => ({ default: m.ResearchPage })));
const ResearchProgramsPage = lazy(() => import('./components/ResearchProgramsPage').then(m => ({ default: m.ResearchProgramsPage })));
const PublicationsPage = lazy(() => import('./components/PublicationsPage').then(m => ({ default: m.PublicationsPage })));
const ThesisProgramPage = lazy(() => import('./components/ThesisProgramPage').then(m => ({ default: m.ThesisProgramPage })));
const Methodology = lazy(() => import('./components/Methodology').then(m => ({ default: m.Methodology })));
const TrainingPage = lazy(() => import('./components/TrainingPage').then(m => ({ default: m.TrainingPage })));
const ServicesPage = lazy(() => import('./components/ServicesPage').then(m => ({ default: m.ServicesPage })));
const AboutPage = lazy(() => import('./components/AboutPage').then(m => ({ default: m.AboutPage })));
const AmbassadorsPage = lazy(() => import('./components/AmbassadorsPage').then(m => ({ default: m.AmbassadorsPage })));
const OurAmbassadorsPage = lazy(() => import('./components/OurAmbassadorsPage').then(m => ({ default: m.OurAmbassadorsPage })));
const AmbassadorHandbookPage = lazy(() => import('./components/AmbassadorHandbookPage').then(m => ({ default: m.AmbassadorHandbookPage })));
const LabOnboardingPage = lazy(() => import('./components/LabOnboardingPage').then(m => ({ default: m.LabOnboardingPage })));
const BigBioLabPage = lazy(() => import('./components/BigBioLabPage').then(m => ({ default: m.BigBioLabPage })));
const GenerativeGenomicsLabPage = lazy(() => import('./components/GenerativeGenomicsLabPage').then(m => ({ default: m.GenerativeGenomicsLabPage })));
const InsilicoMedicineLabPage = lazy(() => import('./components/InsilicoMedicineLabPage').then(m => ({ default: m.InsilicoMedicineLabPage })));
const ResearchAssistantRecruitmentPage = lazy(() => import('./components/ResearchAssistantRecruitmentPage').then(m => ({ default: m.ResearchAssistantRecruitmentPage })));
const BrochurePage = lazy(() => import('./components/BrochurePage').then(m => ({ default: m.BrochurePage })));
const CloudLabsPage = lazy(() => import('./components/CloudLabsPage').then(m => ({ default: m.CloudLabsPage })));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white">
    <div className="text-center">
      <div className="inline-block w-16 h-16 border-4 border-brand-primary border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-slate-600 font-semibold">Loading...</p>
    </div>
  </div>
);

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
    // Throttle scroll event for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Instant scroll to top on route change for better UX
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Navbar scrolled={scrolled} />

      <main>
        <Suspense fallback={<PageLoader />}>
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
            <Route path="/ambassadors" element={<AmbassadorsPage />} />
            <Route path="/our-ambassadors" element={<OurAmbassadorsPage />} />
            <Route path="/ambassador-handbook" element={<AmbassadorHandbookPage />} />
            <Route path="/lab-onboarding" element={<LabOnboardingPage />} />
            <Route path="/research-assistant-recruitment" element={<ResearchAssistantRecruitmentPage />} />
            <Route path="/labs/bigbio" element={<BigBioLabPage />} />
            <Route path="/labs/generative-genomics" element={<GenerativeGenomicsLabPage />} />
            <Route path="/labs/insilico-medicine" element={<InsilicoMedicineLabPage />} />
            <Route path="/labs/cloud-labs" element={<CloudLabsPage />} />
            <Route path="/brochure" element={<BrochurePage />} />
          </Routes>
        </Suspense>
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
