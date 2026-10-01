import React, { useState, useEffect } from 'react';
import { Shield, Clock, Heart, Terminal, ArrowUp, Github, Linkedin, Mail, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      // Ethiopia is UTC+3 (East Africa Time)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Addis_Ababa',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setCurrentTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050810] border-t border-slate-800/80 text-slate-400 font-mono text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Col 1: Identity */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span>Samuel Woldemeskel</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md font-sans">
              4th-year Software Engineering student at Wachemo University. Dedicated to secure software engineering, penetration testing, defensive SOC architectures, and creative digital media.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-cyan-400" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
              <a href={personalInfo.telegram} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400" aria-label="Telegram">
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2">
            <span className="text-white font-bold text-xs uppercase tracking-wider block">
              Navigation
            </span>
            <ul className="space-y-1.5 text-[11px]">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About & Education</a></li>
              <li><a href="#cybersecurity" className="hover:text-cyan-400 transition-colors">Cybersecurity Track</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Technical Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects & Repos</a></li>
              <li><a href="#certifications" className="hover:text-cyan-400 transition-colors">10 Verified Certs</a></li>
              <li><a href="#creative" className="hover:text-cyan-400 transition-colors">Music & Design</a></li>
            </ul>
          </div>

          {/* Col 3: Status & Time */}
          <div className="space-y-3">
            <span className="text-white font-bold text-xs uppercase tracking-wider block">
              System Telemetry
            </span>
            <div className="p-3 rounded-xl bg-[#0a101d] border border-slate-800 space-y-2 text-[11px]">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Status: Seeking Internships</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Addis Ababa: {currentTime || 'Loading...'} (EAT)</span>
              </div>
              <div className="text-[10px] text-slate-500">
                Wachemo University • INSA Camp Alum
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Samuel Woldemeskel. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Built with React, TypeScript & Tailwind CSS</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
