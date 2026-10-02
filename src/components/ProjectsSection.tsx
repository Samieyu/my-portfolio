import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, ExternalLink, Github, CheckCircle2, Server, X } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full-Stack' },
    { key: 'cybersecurity', label: 'Cybersecurity' },
    { key: 'mobile', label: 'Mobile (Flutter)' },
    { key: 'academic', label: 'Academic' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  // Custom visual mockup theme for each project card matching the reference
  const getProjectMockup = (project: Project) => {
    switch (project.id) {
      case 'melodypass':
        return (
          <div className="w-full h-44 rounded-xl bg-[#f2f4ee] p-4 flex flex-col justify-between border border-[#e2e6de] overflow-hidden group-hover:border-[#556453] transition-all">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#556453]">
              <span className="font-semibold uppercase tracking-wider">MELODYPASS // VERCEL</span>
              <span className="px-2 py-0.5 rounded bg-white border border-[#d8dcd3] text-[10px]">QR-ACCESS</span>
            </div>
            <div className="space-y-1.5 my-auto">
              <div className="text-xl font-serif font-normal text-[#212620]">
                Digital music album access platform.
              </div>
              <p className="text-xs text-[#626e5d] line-clamp-1">
                Unique 6-character tokens & device-based access control.
              </p>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[#e2e6de]/70 text-[10px] font-mono text-[#74826f]">
              <span>Neon PostgreSQL • React</span>
              <span className="font-semibold text-[#3a4536]">LIVE PLATFORM</span>
            </div>
          </div>
        );

      case 'penuel-mkc':
        return (
          <div className="w-full h-44 rounded-xl bg-[#1b201a] p-4 flex flex-col justify-between border border-[#2b3329] overflow-hidden group-hover:border-[#556453] transition-all text-white">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#9bb097]">
              <span className="font-semibold uppercase tracking-wider">PENUEL MKC // MERN</span>
              <span className="px-2 py-0.5 rounded bg-[#272f26] border border-[#3b4739] text-[10px]">ADMIN PORTAL</span>
            </div>
            <div className="space-y-1.5 my-auto">
              <div className="text-xl font-serif font-normal text-[#f4f7f2]">
                Smart administration for church operations.
              </div>
              <p className="text-xs text-[#a4b5a0] line-clamp-1">
                Role-based member directory & administrative analytics.
              </p>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[#2b3329] text-[10px] font-mono text-[#8b9e87]">
              <span>JWT Auth • Express • MongoDB</span>
              <span className="font-semibold text-[#b8d1b3]">LIVE PORTAL</span>
            </div>
          </div>
        );

      case 'ai-pentest-copilot':
        return (
          <div className="w-full h-44 rounded-xl bg-[#f0f3eb] p-4 flex flex-col justify-between border border-[#d8e0d4] overflow-hidden group-hover:border-[#556453] transition-all">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#435240]">
              <span className="font-semibold uppercase tracking-wider">AI SOC ANALYST // SEC</span>
              <span className="px-2 py-0.5 rounded bg-white border border-[#d0d8cb] text-[10px]">RESEARCH</span>
            </div>
            <div className="space-y-1.5 my-auto">
              <div className="text-xl font-serif font-normal text-[#1e251c]">
                Threat intelligence & telemetry reasoning.
              </div>
              <p className="text-xs text-[#576853] line-clamp-1">
                Wazuh SIEM, Sysmon logs & MITRE ATT&CK correlation.
              </p>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[#d8e0d4] text-[10px] font-mono text-[#667a62]">
              <span>Python • Suricata • LLM</span>
              <span className="font-semibold text-[#3f4f3c]">IN PROGRESS</span>
            </div>
          </div>
        );

      case 'lezemer-lyrics':
      case 'gymlearn-app':
        return (
          <div className="w-full h-44 rounded-xl bg-[#f7f8f5] p-4 flex flex-col justify-between border border-[#e2e6de] overflow-hidden group-hover:border-[#556453] transition-all">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#556453]">
              <span className="font-semibold uppercase tracking-wider">FLUTTER // MOBILE</span>
              <span className="px-2 py-0.5 rounded bg-white border border-[#d8dcd3] text-[10px]">DART</span>
            </div>
            <div className="space-y-1.5 my-auto">
              <div className="text-xl font-serif font-normal text-[#212620]">
                {project.title.split('—')[0]}
              </div>
              <p className="text-xs text-[#626e5d] line-clamp-1">
                {project.subtitle || project.description}
              </p>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[#e2e6de]/70 text-[10px] font-mono text-[#74826f]">
              <span>Firebase • Offline Cache</span>
              <span className="font-semibold text-[#3a4536]">CROSS-PLATFORM</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-44 rounded-xl bg-[#f2f4ee] p-4 flex flex-col justify-between border border-[#e2e6de] overflow-hidden group-hover:border-[#556453] transition-all">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#556453]">
              <span className="font-semibold uppercase tracking-wider">{project.category}</span>
              <span className="px-2 py-0.5 rounded bg-white border border-[#d8dcd3] text-[10px]">ENGINEERING</span>
            </div>
            <div className="space-y-1.5 my-auto">
              <div className="text-lg font-serif font-normal text-[#212620]">
                {project.title}
              </div>
              <p className="text-xs text-[#626e5d] line-clamp-1">
                {project.subtitle || project.description}
              </p>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[#e2e6de]/70 text-[10px] font-mono text-[#74826f]">
              <span>{project.techStack.slice(0, 2).join(' • ')}</span>
              <span className="font-semibold text-[#3a4536]">SYSTEM</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="work" className="py-20 lg:py-24 relative bg-[#f9f9f7] border-t border-[#e8ece4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching "Selected Work / Featured Projects" in reference image */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-5 border-b border-[#e5e8e0]">
          <div>
            <span className="text-[11px] font-sans font-semibold tracking-[0.22em] text-[#717e6e] uppercase block mb-1">
              Selected Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1a1d1a] tracking-tight">
              Featured Projects
            </h2>
          </div>

          {/* Right Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setActiveCategory(c.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeCategory === c.key
                    ? 'bg-[#556453] text-white font-medium shadow-sm'
                    : 'bg-white text-[#525d50] border border-[#dbe0d7] hover:border-[#556453]'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Project Grid matching the reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-2xl border border-[#e5e9e0] hover:border-[#556453] transition-all p-3.5 shadow-soft hover:shadow-elevated flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-3.5">
                {/* Visual Mockup Card */}
                {getProjectMockup(project)}

                {/* Project Metadata below card */}
                <div className="px-1 pt-1 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-sans font-bold uppercase tracking-wider text-[#1a1d1a] group-hover:text-[#556453] transition-colors">
                      {project.title.split('—')[0].trim()}
                    </h3>
                    <p className="text-xs text-[#717e6e] mt-0.5">
                      {project.subtitle || project.category}
                    </p>
                  </div>

                  {/* Circular Arrow Button */}
                  <div className="w-8 h-8 rounded-full border border-[#d8dcd3] flex items-center justify-center text-[#556453] group-hover:bg-[#556453] group-hover:text-white transition-all flex-shrink-0">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-2xl bg-white border border-[#d8dcd3] rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-[#717e6e] hover:text-[#1a1d1a] rounded-lg bg-[#f4f5f1] border border-[#e2e6de]"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[11px] font-mono text-[#556453] uppercase tracking-wider">
                {selectedProject.roleBadge || selectedProject.category}
              </span>
              <h3 className="text-2xl font-serif text-[#1a1d1a] mt-1">
                {selectedProject.title}
              </h3>
              {selectedProject.subtitle && (
                <p className="text-xs font-mono text-[#717e6e] mt-1">
                  {selectedProject.subtitle}
                </p>
              )}
            </div>

            <p className="text-[#4a5547] text-sm leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="space-y-2.5">
              <h4 className="text-xs font-sans font-bold text-[#1a1d1a] uppercase tracking-wider">
                Key Architectural Highlights:
              </h4>
              <ul className="space-y-1.5">
                {selectedProject.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#525d50]">
                    <CheckCircle2 className="w-4 h-4 text-[#556453] mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-sans font-bold text-[#1a1d1a] uppercase tracking-wider">
                Technologies:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono rounded-lg bg-[#f2f4ee] text-[#3e4a3b] border border-[#d8dcd3]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-4 border-t border-[#e2e6de] flex flex-wrap items-center gap-3">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#556453] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#465444] transition-all"
                >
                  <span>Visit Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white text-[#2d372c] border border-[#d8dcd3] hover:border-[#556453] text-xs font-mono transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>{selectedProject.backendGithubUrl ? 'Frontend Code' : 'Source Code'}</span>
                </a>
              )}
              {selectedProject.backendGithubUrl && (
                <a
                  href={selectedProject.backendGithubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white text-[#2d372c] border border-[#d8dcd3] hover:border-[#556453] text-xs font-mono transition-all"
                >
                  <Server className="w-3.5 h-3.5" />
                  <span>Backend Code</span>
                </a>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
