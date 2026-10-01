import React from 'react';
import { GraduationCap, ShieldCheck, HeartHandshake, Lightbulb, Compass, Award, FileText, CheckCircle2 } from 'lucide-react';
import { personalInfo, careerVision } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#070b14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>01 // PROFESSIONAL IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Samuel Woldemeskel</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            Software Engineering Student • Cybersecurity Enthusiast • Web & Mobile Developer • Creative Musician
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0a101d] border border-cyan-500/20 shadow-xl space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5 font-mono">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                Engineering Mindset & Ethical Commitment
              </h3>
              
              <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
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

              {/* Verified Core Principles */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {careerVision.values.map((v) => (
                  <div key={v.title} className="p-3 rounded-lg bg-[#0d1424] border border-slate-800">
                    <div className="flex items-center gap-2 text-cyan-300 font-semibold text-xs font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{v.title}</span>
                    </div>
                    <p className="text-[12px] text-slate-400 mt-1 leading-snug">
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* CV Download / Contact CTA */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={personalInfo.cvPath}
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold font-mono bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>Download Curriculum Vitae (CV)</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold font-mono text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  <span>Connect with me &rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Key Academic & Security Pillars */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Education Card */}
            <div className="p-6 rounded-xl bg-[#0a101d] border border-slate-800 hover:border-cyan-500/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">Formal Education</span>
                  <h4 className="text-base font-bold text-white">{personalInfo.university}</h4>
                  <p className="text-xs text-slate-300 font-medium">B.Sc. in Software Engineering</p>
                  <p className="text-xs text-slate-400">
                    Status: 4th-Year, 1st-Semester Student • Ethiopia
                  </p>
                  <p className="text-xs text-slate-400 pt-1">
                    Focused on Algorithms, Software Architecture, Enterprise Database Systems, and Network Security.
                  </p>
                </div>
              </div>
            </div>

            {/* INSA Cyber Talent Camp */}
            <div className="p-6 rounded-xl bg-[#0a101d] border border-slate-800 hover:border-cyan-500/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">Cybersecurity Training</span>
                  <h4 className="text-base font-bold text-white">INSA Cyber Talent Summer Camp</h4>
                  <p className="text-xs text-cyan-300 font-medium">5th Batch Participant & Alum</p>
                  <p className="text-xs text-slate-400">
                    Information Network Security Administration, Ethiopia. Intensive practical training in ethical hacking, network analysis, Linux fundamentals, and defensive cybersecurity.
                  </p>
                </div>
              </div>
            </div>

            {/* Creative Profile Badge */}
            <div className="p-6 rounded-xl bg-[#0a101d] border border-slate-800 hover:border-cyan-500/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider">Creative Leadership</span>
                  <h4 className="text-base font-bold text-white">6+ Years Keyboardist & Media Arts</h4>
                  <p className="text-xs text-slate-300 font-medium">Penuel MKC Church & Community</p>
                  <p className="text-xs text-slate-400">
                    Active church keyboard player, beginner piano teacher for children, graphic designer (Photoshop, Illustrator), and media system creator.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
