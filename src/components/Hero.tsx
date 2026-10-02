import React from 'react';
import { ArrowUpRight, ArrowRight, ShieldCheck, Terminal, Download, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#f9f9f7]">
      
      {/* Subtle background technical markings */}
      <div className="absolute top-24 left-10 text-[10px] font-mono tracking-widest text-[#a8b1a3] uppercase select-none hidden lg:block">
        [ 09.04.14 // ETH ]
      </div>
      <div className="absolute top-28 right-16 text-[10px] font-mono tracking-widest text-[#a8b1a3] uppercase select-none hidden lg:block">
        AI + SECURITY<br />HUMAN + IMPACT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Overline with vertical indicator line */}
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1.5px] bg-[#556453]" />
              <span className="text-[11px] font-sans font-semibold tracking-[0.22em] text-[#556453] uppercase">
                Software Engineering & Cybersecurity
              </span>
            </div>

            {/* Editorial Serif Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-serif font-normal text-[#1a1d1a] leading-[1.12] tracking-tight">
              I build secure digital experiences that are{' '}
              <span className="italic font-serif font-normal text-[#384334]">
                intuitive, intelligent
              </span>{' '}
              and impactful.
            </h1>

            {/* Sub-paragraph */}
            <p className="text-[#555d51] text-base sm:text-lg max-w-xl leading-relaxed font-sans font-normal">
              I'm <strong className="text-[#1a1d1a] font-semibold">{personalInfo.name}</strong>, a Software Engineering student at <strong className="text-[#1a1d1a]">Wachemo University</strong> & <strong className="text-[#556453]">INSA Cyber Talent Alum</strong> crafting secure, resilient web systems and security architectures.
            </p>

            {/* Primary & Secondary Action Buttons (matching reference) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-semibold tracking-wider text-white bg-[#556453] hover:bg-[#465444] rounded-lg transition-all shadow-sm hover:shadow-sage"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-semibold tracking-wider text-[#2d362b] bg-white border border-[#d8dcd3] hover:border-[#556453] rounded-lg transition-all shadow-sm hover:bg-[#fafbf9]"
              >
                <span>LET'S WORK TOGETHER</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={personalInfo.cvPath}
                download="Samuel_Woldemeskel_CV.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-mono text-[#556453] hover:text-[#1c1f1b] transition-colors"
                title="Download One-Page CV"
              >
                <Download className="w-3.5 h-3.5" />
                <span>1-Page CV</span>
              </a>
            </div>

            {/* Micro details bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-[#747e70]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#556453]" />
                <span>Wachemo Univ (4th Year)</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#556453]" />
                <span>INSA 5th Batch Alum</span>
              </div>
              <span>•</span>
              <span>10+ Verified Certifications</span>
            </div>

          </div>

          {/* Right Column: Samuel's Enhanced HD Cutout Portrait */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[440px] sm:max-w-[460px] lg:max-w-[480px] aspect-[4/5] flex items-end justify-center">
              
              {/* Soft Studio Circular Backdrop (matching Aaron Mitchell circular halo) */}
              <div className="absolute inset-2 sm:inset-4 rounded-full bg-gradient-to-b from-[#e7ebe2] via-[#dde2d7] to-[#d2d8cb] opacity-95 scale-95 shadow-inner" />

              {/* Technical Blueprint & Coordinate Watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none select-none">
                <svg width="360" height="360" viewBox="0 0 200 200" fill="none" className="text-[#556453]">
                  <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3"/>
                  <circle cx="100" cy="100" r="74" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="100" cy="100" r="54" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1 3"/>
                  <line x1="8" y1="100" x2="192" y2="100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2"/>
                  <line x1="100" y1="8" x2="100" y2="192" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2"/>
                  {/* Subtle Tech Coordinates */}
                  <text x="135" y="28" fontSize="5.5" fontFamily="monospace" fill="currentColor">+ ETH-SEC // 2026</text>
                  <text x="18" y="175" fontSize="5.5" fontFamily="monospace" fill="currentColor">+ INSA-TALENT-B5</text>
                  <text x="135" y="175" fontSize="5.5" fontFamily="monospace" fill="currentColor">+ 4TH-YEAR-SE</text>
                </svg>
              </div>

              {/* Samuel's Enhanced Studio Cutout (1152x2048 HD resolution, bold contrast & rich golden embroidery) */}
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="relative z-10 w-full h-full object-contain object-bottom drop-shadow-[0_16px_28px_rgba(26,30,25,0.18)] hover:scale-[1.02] transition-transform duration-500"
                loading="eager"
              />

              {/* Floating Status Pill */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-[#d8dcd3] shadow-elevated flex items-center gap-2 text-xs font-mono text-[#384334] whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open for Cybersecurity & Dev Roles</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
