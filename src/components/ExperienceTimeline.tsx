import React from 'react';
import { History, GraduationCap, Shield, Award, Music, MapPin, CheckCircle2 } from 'lucide-react';
import { timelineData } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case 'cyber':
        return <Shield className="w-5 h-5 text-emerald-400" />;
      case 'community':
        return <Music className="w-5 h-5 text-purple-400" />;
      default:
        return <Award className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="timeline" className="py-24 relative bg-[#070b14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
            <History className="w-3.5 h-3.5 text-cyan-400" />
            <span>06 // ACADEMIC & PRACTICAL JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education, Training & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Milestones</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            A chronological timeline of university studies, cybersecurity immersion, and community service.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical center connecting line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500/30" />

          <div className="space-y-12">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#090d16] border-2 border-cyan-400 shadow-glow-sm">
                    {getIcon(item.type)}
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Timeline Card */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${isEven ? 'sm:pr-10' : 'sm:pl-10'}`}>
                    <div className="p-6 rounded-2xl bg-[#0a101d] border border-slate-800 hover:border-cyan-500/40 transition-all shadow-lg space-y-3">
                      
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-mono font-bold text-cyan-400 px-2.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">
                          {item.period}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                          <MapPin className="w-3 h-3 text-cyan-500" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="text-xs font-mono text-slate-300">
                          {item.institution}
                        </p>
                      </div>

                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
