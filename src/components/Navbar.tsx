import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ArrowUpRight, Shield } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT', href: '#about' },
    { name: 'WORK', href: '#work' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PROCESS', href: '#process' },
    { name: 'CREDENTIALS', href: '#credentials' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f9f9f7]/90 backdrop-blur-md border-b border-[#e5e7e0] py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo matching the reference brand mark */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg border border-[#3f4a3c] bg-white group-hover:border-[#556453] transition-colors shadow-sm">
              {/* Geometric Hexagon/Shield Logo */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#3c4738]">
                <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6L16 9.5V14.5L12 18L8 14.5V9.5L12 6Z" fill="#556453" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.25"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-xs tracking-[0.2em] text-[#1c1f1b] uppercase">
                Samuel Woldemeskel
              </span>
              <span className="text-[10px] tracking-[0.16em] text-[#6b7568] uppercase font-medium">
                Software Engineer & Cybersecurity
              </span>
            </div>
          </a>

          {/* Center Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium tracking-[0.15em] text-[#4d564a] hover:text-[#1c1f1b] transition-colors relative py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Let's Talk CTA & Terminal */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Interactive Terminal Trigger */}
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#4a5547] hover:text-[#1c1f1b] border border-[#d8dcd3] bg-white rounded-lg hover:border-[#556453] transition-all"
              title="Open Interactive Cyber Shell"
            >
              <Terminal className="w-3.5 h-3.5 text-[#556453]" />
              <span>&gt;_ CLI</span>
            </button>

            {/* Let's Talk Button (matching the reference button) */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider text-white bg-[#556453] hover:bg-[#465444] rounded-lg transition-all shadow-sm hover:shadow-sage"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-lg border border-[#d8dcd3] bg-white text-[#4a5547]"
              aria-label="Open CLI"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg border border-[#d8dcd3] bg-white text-[#4a5547]"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#f9f9f7] border-b border-[#e5e7e0] px-4 py-4 space-y-3 mt-3 shadow-md animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2 pb-3 border-b border-[#e5e7e0]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs tracking-wider text-[#4a5547] hover:text-[#1c1f1b] font-medium py-1.5"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2 pt-1">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold tracking-wider text-white bg-[#556453] rounded-lg"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
