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

          {/* Right Column: Samuel's Cutout Image with Circular Background Frame & Tech Overlay */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-end justify-center">
              
              {/* Neutral Circular / Soft Backdrop (matching the Aaron Mitchell circular frame) */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#e8ece4] to-[#dde2d8] opacity-90 scale-95" />

              {/* Subtle Tech / Cyber Watermark Graphic behind Samuel */}
              <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none select-none">
                <svg width="340" height="340" viewBox="0 0 200 200" fill="none" className="text-[#556453]">
                  <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3"/>
                  <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.5"/>
                  <line x1="10" y1="100" x2="190" y2="100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2"/>
                  <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2"/>
                  {/* Subtle Tech Coordinates */}
                  <text x="140" y="30" fontSize="6" fontFamily="monospace" fill="currentColor">+ ETH-SEC</text>
                  <text x="20" y="170" fontSize="6" fontFamily="monospace" fill="currentColor">+ LAT-08.9</text>
                </svg>
              </div>

              {/* Samuel's Cutout Portrait (The 2nd user uploaded image!) */}
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="relative z-10 w-full h-full object-contain object-bottom drop-shadow-md"
                loading="eager"
              />

              {/* Floating Status Pill */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm border border-[#d8dcd3] shadow-soft flex items-center gap-2 text-xs font-mono text-[#384334]">
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
