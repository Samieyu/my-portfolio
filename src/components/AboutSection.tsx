import React, { useState } from 'react';
import { GraduationCap, ShieldCheck, HeartHandshake, FileText, ChevronRight, X, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { personalInfo, careerVision } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);

  return (
    <section id="about" className="py-20 lg:py-24 bg-[#f9f9f7] border-t border-[#e8ece4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[11px] font-sans font-semibold tracking-[0.22em] text-[#717e6e] uppercase block mb-1">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1a1d1a] tracking-tight">
            Academic Background & Identity
          </h2>
          <p className="text-xs sm:text-sm text-[#5a6656] mt-1.5 max-w-xl">
            Software Engineering undergraduate at Wachemo University & INSA Cyber Talent Alum.
          </p>
        </div>

        {/* 3 High-Impact Cards (Minimalist & Interactive) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          
          {/* Card 1: Software Engineering */}
          <div className="p-6 rounded-2xl bg-white border border-[#e5e9e0] hover:border-[#556453] transition-all flex flex-col justify-between group shadow-soft">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#f2f4ee] border border-[#dce2d7] text-[#556453] group-hover:bg-[#556453] group-hover:text-white transition-colors">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f2f4ee] text-[#42503e] border border-[#dce2d7]">
                  4th-Year SE
                </span>
              </div>
              <h3 className="text-base font-sans font-bold text-[#1a1d1a]">
                Software Engineering
              </h3>
              <p className="text-xs text-[#525d50] leading-relaxed">
                4th-year student at <strong className="text-[#1a1d1a]">Wachemo University</strong>. Building scalable web architectures, OOP systems, and robust database layers.
              </p>
            </div>
            <button
              onClick={() => setIsBioModalOpen(true)}
              className="mt-4 pt-3 border-t border-[#f0f2eb] flex items-center justify-between text-xs font-sans font-semibold text-[#556453] hover:text-[#2d372c] transition-colors w-full"
            >
              <span>Explore Background</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Cybersecurity */}
          <div className="p-6 rounded-2xl bg-white border border-[#e5e9e0] hover:border-[#556453] transition-all flex flex-col justify-between group shadow-soft">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#f2f4ee] border border-[#dce2d7] text-[#556453] group-hover:bg-[#556453] group-hover:text-white transition-colors">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f2f4ee] text-[#42503e] border border-[#dce2d7]">
                  INSA 5th Batch
                </span>
              </div>
              <h3 className="text-base font-sans font-bold text-[#1a1d1a]">
                Cybersecurity Immersion
              </h3>
              <p className="text-xs text-[#525d50] leading-relaxed">
                Trained in national security labs at <strong className="text-[#1a1d1a]">INSA Cyber Talent Camp</strong>. Hands-on learning in penetration testing and SOC log telemetry.
              </p>
            </div>
            <button
              onClick={() => setIsBioModalOpen(true)}
              className="mt-4 pt-3 border-t border-[#f0f2eb] flex items-center justify-between text-xs font-sans font-semibold text-[#556453] hover:text-[#2d372c] transition-colors w-full"
            >
              <span>View Security Focus</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Creative & Music */}
          <div className="p-6 rounded-2xl bg-white border border-[#e5e9e0] hover:border-[#556453] transition-all flex flex-col justify-between group shadow-soft">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#f2f4ee] border border-[#dce2d7] text-[#556453] group-hover:bg-[#556453] group-hover:text-white transition-colors">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f2f4ee] text-[#42503e] border border-[#dce2d7]">
                  6+ Years Piano
                </span>
              </div>
              <h3 className="text-base font-sans font-bold text-[#1a1d1a]">
                Creativity & Music
              </h3>
              <p className="text-xs text-[#525d50] leading-relaxed">
                Church keyboardist, beginner piano instructor for children, and visual graphic designer across Adobe Creative Suite & Canva.
              </p>
            </div>
            <button
              onClick={() => setIsBioModalOpen(true)}
              className="mt-4 pt-3 border-t border-[#f0f2eb] flex items-center justify-between text-xs font-sans font-semibold text-[#556453] hover:text-[#2d372c] transition-colors w-full"
            >
              <span>Creative Journey</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Action Bar (Download CV & Read Full Bio Trigger) */}
        <div className="max-w-xl mx-auto flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setIsBioModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#556453] text-white hover:bg-[#455243] transition-all text-xs font-semibold shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Click to Read Full Story & Mindset</span>
          </button>

          <a
            href={personalInfo.cvPath}
            download="Samuel_Woldemeskel_CV.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-[#d8dcd3] text-[#2c362a] hover:border-[#556453] transition-all text-xs font-medium"
          >
            <FileText className="w-3.5 h-3.5 text-[#556453]" />
            <span>Download 1-Page CV (PDF)</span>
          </a>

          <a
            href={personalInfo.cvGoogleDocsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white border border-[#d8dcd3] text-[#556453] hover:text-[#1c1f1b] transition-all text-xs font-medium"
          >
            <span>Google Docs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Comprehensive Bio Modal (Progressive Disclosure) */}
      {isBioModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-2xl bg-white border border-[#d8dcd3] rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[88vh] overflow-y-auto font-sans">
            
            <button
              onClick={() => setIsBioModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#717e6e] hover:text-[#1a1d1a] rounded-lg bg-[#f4f5f1] border border-[#e2e6de]"
              aria-label="Close Story Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[11px] font-mono text-[#556453] uppercase tracking-wider">
                Full Background & Mindset
              </span>
              <h3 className="text-2xl font-serif text-[#1a1d1a] mt-1">
                Engineering Journey & Values
              </h3>
            </div>

            <div className="text-[#4a5547] text-sm leading-relaxed space-y-4 font-normal">
              <p>
                I am a 4th-year, 1st-semester Software Engineering student at <strong className="text-[#1a1d1a] font-semibold">Wachemo University</strong> in Ethiopia. My technical drive centers around building resilient software systems and understanding cybersecurity from both defensive and offensive perspectives.
              </p>
              <p>
                A transformative milestone in my cybersecurity path was participating in the <strong className="text-[#1a1d1a] font-semibold">5th Batch of the INSA Cyber Talent Summer Camp</strong> organized by the Information Network Security Administration in Ethiopia. This rigorous experience reinforced my dedication to penetration testing methodologies, Linux security internals, and network defense architectures.
              </p>
              <p>
                I bridge computer science principles (Object-Oriented Design, Software Architecture, MVC patterns) with modern full-stack web and mobile development (React, Node.js, Flutter, Neon PostgreSQL). Simultaneously, my 6 years of piano performance in church and creative design experience bring high discipline, attention to detail, and empathy to human-computer interaction.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="pt-4 border-t border-[#e2e6de] space-y-3">
              <h4 className="text-xs font-sans font-bold text-[#1a1d1a] uppercase tracking-wider">
                Core Operating Values
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {careerVision.values.map((v) => (
                  <div key={v.title} className="p-3.5 rounded-xl bg-[#f7f8f5] border border-[#e2e6de]">
                    <div className="flex items-center gap-2 text-[#323d30] font-semibold text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#556453]" />
                      <span>{v.title}</span>
                    </div>
                    <p className="text-[11px] text-[#626e5d] mt-1 leading-snug">
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons inside modal */}
            <div className="pt-4 border-t border-[#e2e6de] flex flex-wrap items-center gap-3">
              <a
                href={personalInfo.cvPath}
                download="Samuel_Woldemeskel_CV.pdf"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#556453] text-white text-xs font-semibold"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download CV (PDF)</span>
              </a>
              <button
                onClick={() => setIsBioModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-[#f4f5f1] text-[#4a5547] border border-[#d8dcd3] text-xs hover:text-[#1a1d1a]"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
