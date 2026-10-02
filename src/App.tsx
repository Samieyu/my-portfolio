import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { StatsBanner } from './components/StatsBanner';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InteractiveTerminal } from './components/InteractiveTerminal';

export function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Global hotkey: Pressing Ctrl + K or Cmd + K opens terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f9f7] text-[#1a1d1a] font-sans relative selection:bg-[#556453]/20 selection:text-[#2d372c]">
      
      {/* Editorial Navigation */}
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Main Flow following the Aaron Mitchell design structure */}
      <main>
        {/* 1. Hero with Samuel's cutout portrait */}
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />

        {/* 2. Selected Work / Featured Projects */}
        <ProjectsSection />

        {/* 3. What I Do / Services */}
        <ServicesSection />

        {/* 4. Statistics Strip */}
        <StatsBanner />

        {/* 5. About Me & Academic Identity */}
        <AboutSection />

        {/* 6. My Process: Discover -> Architect -> Develop -> Deploy */}
        <ProcessSection />

        {/* 7. Verified Credentials (10+ Coursera & INSA) */}
        <CertificatesSection />

        {/* 8. Bottom Contact Banner */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Cyber Shell Modal */}
      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

    </div>
  );
}

export default App;
