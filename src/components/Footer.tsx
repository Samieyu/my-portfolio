import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Send, FileText, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f9f9f7] border-t border-[#e5e8e0] pt-16 pb-12 text-[#5a6656] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid matching reference design */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#e5e8e0]">
          
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg border border-[#3f4a3c] bg-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#3c4738]">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" strokeWidth="1.75"/>
                  <path d="M12 6L16 9.5V14.5L12 18L8 14.5V9.5L12 6Z" fill="#556453" fillOpacity="0.2"/>
                </svg>
              </div>
              <div>
                <span className="font-sans font-bold text-xs tracking-[0.2em] text-[#1c1f1b] uppercase block">
                  Samuel Woldemeskel
                </span>
                <span className="text-[10px] tracking-[0.15em] text-[#717e6e] uppercase font-medium">
                  Software Engineer & Cybersecurity
                </span>
              </div>
            </div>

            <p className="text-xs text-[#626e5e] leading-relaxed max-w-sm">
              4th-year Software Engineering student at Wachemo University & INSA Cyber Talent Alum. Building resilient, intelligent, and secure software solutions.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-[11px] font-mono font-bold tracking-[0.18em] text-[#1c1f1b] uppercase block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-[#1c1f1b] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#1c1f1b] transition-colors">About</a></li>
              <li><a href="#work" className="hover:text-[#1c1f1b] transition-colors">Work</a></li>
              <li><a href="#services" className="hover:text-[#1c1f1b] transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-[#1c1f1b] transition-colors">Process</a></li>
              <li><a href="#credentials" className="hover:text-[#1c1f1b] transition-colors">Credentials</a></li>
            </ul>
          </div>

          {/* Col 3: Resources & CV */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono font-bold tracking-[0.18em] text-[#1c1f1b] uppercase block">
              Curriculum Vitae
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={personalInfo.cvPath}
                  download="Samuel_Woldemeskel_CV.pdf"
                  className="flex items-center gap-1.5 hover:text-[#1c1f1b] transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-[#556453]" />
                  <span>Download 1-Page CV (PDF)</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.cvGoogleDocsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#1c1f1b] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#556453]" />
                  <span>View in Google Docs</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.creativePortfolioUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#1c1f1b] transition-colors"
                >
                  Graphic Portfolio (Netlify)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Follow */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono font-bold tracking-[0.18em] text-[#1c1f1b] uppercase block">
              Connect
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-[#1c1f1b] transition-colors">
                  GitHub: @Samieyu
                </a>
              </li>
              <li>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#1c1f1b] transition-colors">
                  LinkedIn: Samuel Woldemeskel
                </a>
              </li>
              <li>
                <a href={personalInfo.telegram} target="_blank" rel="noreferrer" className="hover:text-[#1c1f1b] transition-colors">
                  Telegram: @sameEyuW
                </a>
              </li>
              <li>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-[#1c1f1b] transition-colors">
                  {personalInfo.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7b8778]">
          <div>
            &copy; {new Date().getFullYear()} Samuel Woldemeskel. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#556453] hover:text-[#1c1f1b] font-medium transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
