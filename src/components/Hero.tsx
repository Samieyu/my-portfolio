import React from 'react';
import { Shield, Terminal, ArrowRight, Github, Linkedin, Mail, Send, Award, Lock, Code, Cpu, ExternalLink, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-cyber-grid">
      {/* Radial ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Badges */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pills */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                4th-Year Software Engineering • Wachemo Univ
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#0d1424] text-slate-300 border border-slate-700">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                INSA Cyber Talent Alum (5th Batch)
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 text-glow-cyan">{personalInfo.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-cyan-200/90 font-mono">
                {personalInfo.headline}
              </p>
            </div>

            {/* Narrative Intro */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {personalInfo.shortBio}
            </p>

            {/* Core Competency Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {['External / Internal PenTesting', 'Web Application Security', 'MERN & Full-Stack', 'Flutter / Dart', 'Neon PostgreSQL', 'Wazuh & SOC Monitoring'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-[#0f172a] text-slate-300 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-[#070b14] hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all font-mono"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#cybersecurity"
                className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-[#0d1322] text-slate-200 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all font-mono"
              >
                <Lock className="w-4 h-4 text-cyan-400" />
                <span>Cybersecurity Track</span>
              </a>

              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-mono bg-[#0a101d] text-cyan-300 border border-slate-700 hover:border-cyan-400 hover:bg-cyan-950/40 transition-all"
                title="Launch Interactive Terminal"
              >
                <Terminal className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>&gt;_ Interactive Shell</span>
              </button>
            </div>

            {/* Social Links & Location Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-sm text-slate-400 font-mono">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-[#0d1322] border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub: Samieyu"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-[#0d1322] border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn: Samuel Woldemeskel"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-lg bg-[#0d1322] border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                  aria-label="Email Samuel"
                  title={`Email: ${personalInfo.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-[#0d1322] border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                  aria-label="Telegram"
                  title="Telegram: @sameEyuW"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Cyber Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Glowing Cyber Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-emerald-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />

              {/* Main Card Frame */}
              <div className="relative rounded-2xl bg-[#090d16] border border-cyan-500/30 overflow-hidden shadow-2xl p-3 sm:p-4">
                
                {/* Image Container */}
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  
                  {/* Subtle Scanline Overlay */}
                  <div className="absolute inset-0 scanline pointer-events-none opacity-20" />
                  
                  {/* Bottom Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-90" />

                  {/* On-Image Status Pill */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
                      <Cpu className="w-3 h-3 text-cyan-400" />
                      <span>Security & Full-Stack Rigor</span>
                    </div>
                    <p className="text-white text-sm font-semibold tracking-wide">
                      {personalInfo.fullName}
                    </p>
                    <p className="text-xs text-slate-300">
                      Wachemo University • 4th Year
                    </p>
                  </div>
                </div>

                {/* Floating Metrics beneath image */}
                <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-800/80 font-mono text-xs">
                  <div className="p-2 rounded-lg bg-[#0d1424] border border-slate-800 flex items-center gap-2">
                    <Award className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <div>
                      <div className="text-white font-bold text-xs">10+ Verified</div>
                      <div className="text-[10px] text-slate-400">Meta • IBM • UofA</div>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-[#0d1424] border border-slate-800 flex items-center gap-2">
                    <Code className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <div>
                      <div className="text-white font-bold text-xs">Full-Stack & Apps</div>
                      <div className="text-[10px] text-slate-400">React • Flutter • MERN</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
