import React, { useState, useEffect } from 'react';
import { Shield, Terminal, Menu, X, Download, ExternalLink, Code2 } from 'lucide-react';
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
    { name: 'About', href: '#about' },
    { name: 'Cybersecurity', href: '#cybersecurity' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Creative', href: '#creative' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070b14]/90 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Samuel Woldemeskel Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 group-hover:border-cyan-400 group-hover:shadow-glow-cyan transition-all">
              <Shield className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#070b14] animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-100 tracking-wide font-mono text-sm sm:text-base group-hover:text-cyan-400 transition-colors">
                  samuel.woldemeskel
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  SE.student
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono hidden md:block">
                Wachemo Univ • INSA Alum
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all font-mono"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Terminal Button */}
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-lg bg-[#0d1322] border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-glow-cyan transition-all"
              title="Open Interactive Cyber Shell"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>&gt;_ CLI</span>
            </button>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-[#070b14] hover:from-cyan-400 hover:to-blue-500 shadow-sm hover:shadow-glow-cyan transition-all"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-lg bg-[#0d1322] border border-cyan-500/30 text-cyan-400"
              aria-label="Open CLI"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0d1322] border border-slate-700 text-slate-300 hover:text-cyan-400"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#070b14]/95 border-b border-cyan-500/20 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-3 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md font-mono"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-mono rounded-lg bg-[#0d1322] border border-cyan-500/30 text-cyan-300"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Launch Cyber Terminal (&gt;_ CLI)</span>
            </button>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center py-2.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-[#070b14]"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
