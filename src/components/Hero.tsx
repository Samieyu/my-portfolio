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

          {/* Right Column: Samuel's Enhanced HD Cutout Portrait with Very Attractive Background */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[460px] sm:max-w-[490px] lg:max-w-[510px] aspect-[4/5] flex items-end justify-center select-none">
              
              {/* 1. Ambient Radial Glow Aura (multi-layered warm & sage light) */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[340px] sm:w-[400px] h-[340px] sm:h-[400px] rounded-full bg-gradient-to-tr from-[#556453]/25 via-[#9cb098]/20 to-[#e2dad0]/30 blur-2xl pointer-events-none" />

              {/* 2. Soft Studio Circular Halo with Glassmorphic Rim */}
              <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[310px] sm:w-[370px] lg:w-[400px] h-[310px] sm:h-[370px] lg:h-[400px] rounded-full bg-gradient-to-b from-[#f2f5ee] via-[#e6ebdf] to-[#d6dcce] border border-[#d2d8cb] shadow-[0_20px_50px_rgba(85,100,83,0.12)] overflow-hidden">
                {/* Subtle internal concentric rings */}
                <div className="absolute inset-4 rounded-full border border-[#cbd3c3]/60" />
                <div className="absolute inset-10 rounded-full border border-dashed border-[#b8c3af]/50" />
                <div className="absolute inset-20 rounded-full bg-gradient-to-tr from-white/40 to-transparent" />
              </div>

              {/* 3. Futuristic Holographic Cyber Reticle & Constellation Watermark */}
              <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[310px] sm:w-[370px] lg:w-[400px] h-[310px] sm:h-[370px] lg:h-[400px] flex items-center justify-center opacity-35 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" className="text-[#455243]">
                  {/* Outer Tech Degree Ring */}
                  <circle cx="200" cy="200" r="185" stroke="currentColor" strokeWidth="1" strokeDasharray="3 6" />
                  <circle cx="200" cy="200" r="165" stroke="currentColor" strokeWidth="0.75" />
                  <circle cx="200" cy="200" r="145" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
                  <circle cx="200" cy="200" r="115" stroke="currentColor" strokeWidth="0.75" />
                  
                  {/* Axis Crosshairs */}
                  <line x1="15" y1="200" x2="385" y2="200" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" />
                  <line x1="200" y1="15" x2="200" y2="385" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" />

                  {/* Dynamic Corner Crosses */}
                  <path d="M70 70 L80 70 M75 65 L75 75" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M330 70 L320 70 M325 65 L325 75" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M70 330 L80 330 M75 325 L75 335" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M330 330 L320 330 M325 325 L325 335" stroke="currentColor" strokeWidth="1.2" />

                  {/* Technical Coordinates and Engineering Badges */}
                  <text x="270" y="55" fontSize="8.5" fontFamily="monospace" fontWeight="600" fill="currentColor">ETH // INSA-B5</text>
                  <text x="35" y="190" fontSize="8" fontFamily="monospace" fill="currentColor">SEC.TLS: 1.3</text>
                  <text x="35" y="340" fontSize="8.5" fontFamily="monospace" fontWeight="600" fill="currentColor">4TH-YEAR-SE</text>
                  <text x="260" y="340" fontSize="8" fontFamily="monospace" fill="currentColor">WACHEMO.UNIV</text>
                </svg>
              </div>

              {/* 4. Floating Tech Badge 1 (Top-Right): INSA Cyber Talent */}
              <div className="absolute top-10 -right-2 sm:right-2 z-20 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-[#d2d8cb] shadow-elevated flex items-center gap-2 animate-bounce duration-1000 hidden sm:flex">
                <div className="w-5 h-5 rounded-full bg-[#556453] text-white flex items-center justify-center text-[10px]">
                  🛡️
                </div>
                <div className="text-left font-mono">
                  <div className="text-[10px] font-bold text-[#1a1d1a]">INSA Cyber Talent</div>
                  <div className="text-[9px] text-[#556453]">5th Batch Alum</div>
                </div>
              </div>

              {/* 5. Floating Tech Badge 2 (Mid-Left): Software & Mobile */}
              <div className="absolute top-36 -left-3 sm:left-1 z-20 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-[#d2d8cb] shadow-elevated flex items-center gap-2 hidden sm:flex">
                <div className="w-5 h-5 rounded-full bg-[#3d473a] text-white flex items-center justify-center text-[10px]">
                  ⚡
                </div>
                <div className="text-left font-mono">
                  <div className="text-[10px] font-bold text-[#1a1d1a]">Full-Stack & Mobile</div>
                  <div className="text-[9px] text-[#556453]">React • Flutter • Py</div>
                </div>
              </div>

              {/* 6. Samuel's Studio Cutout (1152x2048 HD resolution, bold contrast & rich golden embroidery) */}
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="relative z-10 w-full h-full object-contain object-bottom drop-shadow-[0_20px_35px_rgba(26,30,25,0.22)] hover:scale-[1.02] transition-transform duration-500"
                loading="eager"
              />

              {/* 7. Bottom Floating Glass Status Pill */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-[#ccd3c5] shadow-elevated flex items-center gap-2.5 text-xs font-mono text-[#323d30] whitespace-nowrap">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold tracking-wide">Available for Internships & Projects</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
