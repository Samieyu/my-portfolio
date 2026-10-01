import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CybersecuritySection } from './components/CybersecuritySection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CreativeSection } from './components/CreativeSection';
import { CareerGoalsSection } from './components/CareerGoalsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InteractiveTerminal } from './components/InteractiveTerminal';

export function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Global hotkey: Pressing ` (backtick) or Ctrl + K opens terminal
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
    <div className="min-h-screen bg-[#070b14] text-slate-100 relative selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Navigation */}
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
        <AboutSection />
        <CybersecuritySection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ExperienceTimeline />
        <CreativeSection />
        <CareerGoalsSection />
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
