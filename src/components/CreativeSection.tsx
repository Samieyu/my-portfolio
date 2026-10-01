import React from 'react';
import { Palette, Music, Sparkles, ExternalLink, Github, Heart, Play, Sliders } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const CreativeSection: React.FC = () => {
  return (
    <section id="creative" className="py-24 relative bg-[#070b14] border-t border-slate-800/80">
      
      {/* Background glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-purple-950/80 text-purple-300 border border-purple-500/30">
            <Palette className="w-3.5 h-3.5 text-purple-400" />
            <span>07 // CREATIVE PROFILE & ARTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Design, Visual Arts & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Musicianship</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            Balancing software engineering discipline with 6+ years of piano performance, community mentorship, and visual graphic design.
          </p>
        </div>

        {/* Two-Column Creative Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Music, Piano & Church Pedagogy */}
          <div className="p-8 rounded-2xl bg-[#0a101d] border border-purple-500/20 hover:border-purple-500/40 transition-all flex flex-col justify-between shadow-xl space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  <Music className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#0d1424] text-purple-300 border border-purple-500/30">
                  6+ Years Playing
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  Piano Performance & Choral Direction
                </h3>
                <p className="text-xs font-mono text-purple-300/80 mt-1">
                  Keyboardist • Beginner Piano Teacher • Music Theory
                </p>
              </div>

              <div className="text-slate-300 text-sm leading-relaxed space-y-3">
                <p>
                  I have been playing keyboard and piano for over six years, serving regularly in church worship services, youth gatherings, and choir rehearsals.
                </p>
                <p>
                  As an educator, I mentor children and beginners in fundamental piano technique, scales, ear training, and harmonic structure. Music teaches structured rhythm and deep focus—qualities that directly influence how I architect clean, disciplined software.
                </p>
              </div>

              {/* Musical skills pill */}
              <div className="pt-2 border-t border-slate-800 space-y-2">
                <span className="text-xs font-mono text-slate-400 font-semibold">Musical Horizons:</span>
                <div className="flex flex-wrap gap-2">
                  {['Church Keyboard', 'Beginner Piano Teaching', 'Scales & Modes', 'Songwriting & Arrangement', 'Bass Guitar (In Learning)'].map((m) => (
                    <span key={m} className="px-2.5 py-1 text-xs font-mono rounded-lg bg-[#0d1424] text-slate-300 border border-slate-800">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote box */}
            <div className="p-4 rounded-xl bg-[#0d1424] border border-purple-500/20 text-xs font-mono text-slate-300 italic">
              "Software engineering is architecture; music is flow. The discipline of playing keyboard and understanding harmony enriches how I approach problem solving in code."
            </div>
          </div>

          {/* Card 2: Graphic Design & Digital Media */}
          <div className="p-8 rounded-2xl bg-[#0a101d] border border-cyan-500/20 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-xl space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Palette className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#0d1424] text-cyan-300 border border-cyan-500/30">
                  Adobe Creative Suite
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  Visual Branding & Digital Media
                </h3>
                <p className="text-xs font-mono text-cyan-300/80 mt-1">
                  Photoshop • Illustrator • InDesign • Canva • Church Media
                </p>
              </div>

              <div className="text-slate-300 text-sm leading-relaxed space-y-3">
                <p>
                  My visual creativity spans brand identity, event posters, church media graphics, and digital content creation. I focus on clean composition, balanced typography, and meaningful visual storytelling.
                </p>
                <p>
                  Explore my dedicated graphic design portfolio website to view promotional flyers, church projection slides, and digital layout designs.
                </p>
              </div>

              {/* Design Tooling pills */}
              <div className="pt-2 border-t border-slate-800 space-y-2">
                <span className="text-xs font-mono text-slate-400 font-semibold">Design Toolset:</span>
                <div className="flex flex-wrap gap-2">
                  {['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Canva Pro', 'Typography', 'Church Media'].map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs font-mono rounded-lg bg-[#0d1424] text-slate-300 border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Links to Live Graphic Portfolio */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
              <a
                href={personalInfo.creativePortfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-xs font-mono shadow-md hover:shadow-purple-500/20 transition-all"
              >
                <span>View Live Graphic Portfolio</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.creativeGithub}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0d1424] text-slate-300 border border-slate-800 hover:border-purple-400 text-xs font-mono transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Graphic Repo</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
