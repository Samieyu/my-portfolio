import React, { useState } from 'react';
import { Palette, Music, ExternalLink, Github, ChevronRight, Volume2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const CreativeSection: React.FC = () => {
  const [showMusicStory, setShowMusicStory] = useState(false);
  const [showDesignStory, setShowDesignStory] = useState(false);

  return (
    <section id="creative" className="py-20 relative bg-[#070b14] border-t border-slate-800/80">
      
      {/* Background glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-purple-950/80 text-purple-300 border border-purple-500/30">
            <Palette className="w-3.5 h-3.5 text-purple-400" />
            <span>07 // CREATIVE PROFILE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Design & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Musicianship</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-normal">
            6+ years playing church piano, beginner piano teaching, and visual media branding.
          </p>
        </div>

        {/* Two-Column Creative Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto items-start">
          
          {/* Card 1: Music & Piano */}
          <div className="p-6 rounded-2xl bg-[#0a101d] border border-purple-500/20 hover:border-purple-500/40 transition-all shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  <Music className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-mono">
                    Piano & Choral Keyboard
                  </h3>
                  <p className="text-[11px] text-purple-300 font-mono">
                    6+ Years Playing • Penuel MKC Church
                  </p>
                </div>
              </div>

              {/* Animated Audio Equalizer Effect */}
              <div className="flex items-end gap-1 h-5 px-2 py-1 rounded bg-[#0d1424] border border-slate-800">
                <span className="w-1 h-3 bg-purple-400 rounded-full animate-pulse" />
                <span className="w-1 h-5 bg-pink-400 rounded-full animate-pulse delay-75" />
                <span className="w-1 h-2 bg-cyan-400 rounded-full animate-pulse delay-150" />
                <span className="w-1 h-4 bg-purple-400 rounded-full animate-pulse delay-100" />
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed">
              Playing keyboard in church services, choir arrangements, and mentoring children in beginner piano fundamentals and musical scales.
            </p>

            {/* Expandable Story */}
            {showMusicStory && (
              <div className="p-3 rounded-xl bg-[#0d1424] border border-purple-500/20 text-xs text-slate-300 space-y-2 animate-in fade-in duration-200">
                <p>
                  Music teaches structured rhythm, harmonic intuition, and deep patience—qualities that directly shape how I architect clean, disciplined code.
                </p>
                <div className="text-[11px] text-purple-300 italic font-mono">
                  "Software engineering is architecture; music is flow."
                </div>
              </div>
            )}

            {/* Musical pills */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Church Keyboard', 'Piano Mentorship', 'Scales & Theory', 'Songwriting'].map((m) => (
                <span key={m} className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#0d1424] text-slate-300 border border-slate-800">
                  {m}
                </span>
              ))}
            </div>

            <button
              onClick={() => setShowMusicStory(!showMusicStory)}
              className="pt-2 text-xs font-mono text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
            >
              <span>{showMusicStory ? 'Hide Narrative -' : 'Read Musical Mindset +'}</span>
              <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showMusicStory ? 'rotate-90' : ''}`} />
            </button>
          </div>

          {/* Card 2: Graphic Design */}
          <div className="p-6 rounded-2xl bg-[#0a101d] border border-cyan-500/20 hover:border-cyan-500/40 transition-all shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-mono">
                    Visual Branding & Media Arts
                  </h3>
                  <p className="text-[11px] text-cyan-300 font-mono">
                    Photoshop • Illustrator • InDesign • Canva
                  </p>
                </div>
              </div>

              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                Adobe Suite
              </span>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed">
              Designing sermon visual slides, church event posters, digital graphics, and promotional identity systems with clean typography.
            </p>

            {/* Expandable Story */}
            {showDesignStory && (
              <div className="p-3 rounded-xl bg-[#0d1424] border border-cyan-500/20 text-xs text-slate-300 space-y-2 animate-in fade-in duration-200">
                <p>
                  Experience producing high-resolution projection media, sermon typography layouts, and church community flyers with balanced color theory and composition.
                </p>
              </div>
            )}

            {/* Design pills */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Photoshop', 'Illustrator', 'InDesign', 'Canva', 'Event Media'].map((t) => (
                <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#0d1424] text-slate-300 border border-slate-800">
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between flex-wrap gap-2">
              <button
                onClick={() => setShowDesignStory(!showDesignStory)}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
              >
                <span>{showDesignStory ? 'Hide Narrative -' : 'Read Design Background +'}</span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showDesignStory ? 'rotate-90' : ''}`} />
              </button>

              <a
                href={personalInfo.creativePortfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-xs font-mono shadow-sm hover:shadow-purple-500/30 transition-all"
              >
                <span>Live Design Portfolio</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
