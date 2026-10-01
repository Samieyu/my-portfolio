import React from 'react';
import { Target, Flag, Shield, Briefcase, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { careerVision } from '../data/portfolioData';

export const CareerGoalsSection: React.FC = () => {
  return (
    <section id="career-goals" className="py-24 relative bg-[#070b14] border-t border-slate-800/80">
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
            <Target className="w-3.5 h-3.5 text-cyan-400" />
            <span>08 // CAREER VISION & HORIZONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ambitions & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Professional Path</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            A clear, grounded roadmap for high-impact contributions in cybersecurity and software engineering.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Short-Term Objectives */}
          <div className="p-8 rounded-2xl bg-[#0a101d] border border-cyan-500/20 hover:border-cyan-500/40 transition-all shadow-xl space-y-5">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Flag className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                Immediate / 2026-2027
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                Internship & Practical Mastery
              </h3>
              <p className="text-xs font-mono text-cyan-400 mt-1">
                INSA • Tech Companies • Applied Security Labs
              </p>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {careerVision.shortTerm}
            </p>

            <ul className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Gain rigorous internship experience in cybersecurity or software engineering.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Complete university graduation with distinction in Software Engineering at Wachemo University.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Expand penetration testing methodology across web, network, and active directories.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Long-Term Horizon */}
          <div className="p-8 rounded-2xl bg-[#0a101d] border border-blue-500/20 hover:border-blue-500/40 transition-all shadow-xl space-y-5">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-950/80 text-blue-300 border border-blue-500/30">
                Long-Term Horizon
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                Cybersecurity Engineer & Innovator
              </h3>
              <p className="text-xs font-mono text-blue-400 mt-1">
                National Defense • Resilient Systems • AI Security
              </p>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {careerVision.longTerm}
            </p>

            <ul className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>Contribute to critical national infrastructure security initiatives with institutions like INSA.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>Architect secure enterprise systems that minimize attack surfaces from day zero.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>Advance research in AI-driven defensive telemetry, anomaly detection, and red team automation.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Call to Collaborate Banner */}
        <div className="mt-12 max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-cyan-950/50 via-[#0a101d] to-blue-950/50 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white">
              Looking for a dedicated Software Engineering intern or Junior Cyber Analyst?
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              I am eager to contribute energy, disciplined problem-solving, and continuous learning to your team.
            </p>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-[#070b14] font-semibold text-xs font-mono shadow-md hover:shadow-cyan-400/30 transition-all flex-shrink-0"
          >
            <span>Let's Discuss Opportunities</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
