import React, { useState } from 'react';
import { GraduationCap, ShieldCheck, HeartHandshake, Compass, FileText, ChevronRight, X, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { personalInfo, careerVision } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);

  return (
    <section id="about" className="py-20 relative bg-[#070b14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>01 // AT A GLANCE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Who I Am & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">What Drives Me</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-normal">
            Software Engineering undergraduate at Wachemo University & INSA Cyber Talent Alum.
          </p>
        </div>

        {/* 3 High-Impact Cards (Minimalist & Interactive) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          
          {/* Card 1: Software Engineering */}
          <div className="p-6 rounded-2xl bg-[#0a101d] border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group shadow-lg">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-500/30">
                  4th-Year SE
                </span>
              </div>
              <h3 className="text-base font-bold text-white font-mono">
                Software Engineering
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Undergraduate student at <span className="text-slate-200 font-semibold">Wachemo University</span>. Building scalable web architectures, OOP systems, and clean REST APIs.
              </p>
            </div>
            <button
              onClick={() => setIsBioModalOpen(true)}
              className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors w-full"
            >
              <span>Explore Background</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Cybersecurity */}
          <div className="p-6 rounded-2xl bg-[#0a101d] border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between group shadow-lg">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                  INSA 5th Batch
                </span>
              </div>
              <h3 className="text-base font-bold text-white font-mono">
                Cybersecurity Immersion
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Trained in national security labs at <span className="text-slate-200 font-semibold">INSA Cyber Talent Camp</span>. Active focus on penetration testing and SOC log analytics.
              </p>
            </div>
            <button
              onClick={() => setIsBioModalOpen(true)}
              className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors w-full"
            >
              <span>View Security Path</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Creative & Music */}
          <div className="p-6 rounded-2xl bg-[#0a101d] border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between group shadow-lg">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 group-hover:scale-105 transition-transform">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-500/30">
                  6+ Years Piano
                </span>
              </div>
              <h3 className="text-base font-bold text-white font-mono">
                Creativity & Music
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Church keyboardist, beginner piano instructor for children, and visual graphic designer across Adobe Creative Suite & Canva.
              </p>
            </div>
            <button
              onClick={() => setIsBioModalOpen(true)}
              className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors w-full"
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
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30 transition-all font-mono text-xs font-semibold shadow-glow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Click to Read Full Story & Mindset</span>
          </button>

          <a
            href={personalInfo.cvPath}
            download="Samuel_Woldemeskel_CV.pdf"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0a101d] border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-all font-mono text-xs"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Download 1-Page CV (PDF)</span>
          </a>

          <a
            href={personalInfo.cvGoogleDocsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0a101d] border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-all font-mono text-xs"
          >
            <span>Google Docs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Comprehensive Bio Modal (Progressive Disclosure) */}
      {isBioModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-2xl bg-[#090d16] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[88vh] overflow-y-auto font-sans">
            
            <button
              onClick={() => setIsBioModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-[#0d1424] border border-slate-800"
              aria-label="Close Story Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Full Background & Mindset
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Engineering Journey & Core Values
              </h3>
            </div>

            <div className="text-slate-300 text-sm leading-relaxed space-y-4 font-normal">
              <p>
                I am a 4th-year, 1st-semester Software Engineering student at <strong className="text-cyan-300 font-semibold">Wachemo University</strong> in Ethiopia. My technical drive centers around building resilient software systems and understanding the mechanics of cybersecurity from both defensive and offensive perspectives.
              </p>
              <p>
                A transformative milestone in my cybersecurity path was participating in the <strong className="text-cyan-300 font-semibold">5th Batch of the INSA Cyber Talent Summer Camp</strong> organized by the Information Network Security Administration in Ethiopia. This rigorous experience reinforced my dedication to penetration testing methodologies, Linux security internals, and network defense architectures.
              </p>
              <p>
                I bridge rigorous computer science principles (Object-Oriented Design, Software Architecture, MVC patterns) with modern full-stack web and mobile development (React, Node.js, Flutter, Neon PostgreSQL). Simultaneously, my 6 years of piano performance in church and creative design experience bring high discipline, attention to detail, and empathy to human-computer interaction.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
                Core Operating Values
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {careerVision.values.map((v) => (
                  <div key={v.title} className="p-3 rounded-lg bg-[#0d1424] border border-slate-800">
                    <div className="flex items-center gap-2 text-cyan-300 font-semibold text-xs font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{v.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons inside modal */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
              <a
                href={personalInfo.cvPath}
                download="Samuel_Woldemeskel_CV.pdf"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-semibold"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download CV (PDF)</span>
              </a>
              <button
                onClick={() => setIsBioModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-[#0d1424] text-slate-300 border border-slate-800 text-xs font-mono hover:text-white"
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
