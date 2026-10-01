import React, { useState } from 'react';
import { Layers, ExternalLink, Github, CheckCircle2, Server, Smartphone, Shield, Terminal, X, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full-Stack Web' },
    { key: 'cybersecurity', label: 'Cybersecurity & SOC' },
    { key: 'mobile', label: 'Mobile Apps (Flutter)' },
    { key: 'academic', label: 'Academic Engineering' },
    { key: 'creative', label: 'Graphic & Media' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative bg-[#070b14] border-t border-slate-800/80">
      
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>04 // FEATURED WORKS & REPOSITORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Systems & Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            Real production architectures, security research prototypes, mobile apps, and academic engineering solutions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActiveCategory(c.key)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeCategory === c.key
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-[#070b14] font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-[#0a101d] text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#0a101d] border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between overflow-hidden group shadow-lg"
            >
              <div className="p-6 space-y-4">
                
                {/* Header Badges */}
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                    project.category === 'cybersecurity'
                      ? 'bg-purple-950/80 text-purple-300 border-purple-500/30'
                      : project.category === 'mobile'
                      ? 'bg-blue-950/80 text-blue-300 border-blue-500/30'
                      : project.category === 'academic'
                      ? 'bg-amber-950/80 text-amber-300 border-amber-500/30'
                      : project.category === 'creative'
                      ? 'bg-pink-950/80 text-pink-300 border-pink-500/30'
                      : 'bg-cyan-950/80 text-cyan-300 border-cyan-500/30'
                  }`}>
                    {project.roleBadge || project.category}
                  </span>

                  {project.isConcept && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-yellow-950/80 text-yellow-300 border border-yellow-500/30">
                      Concept / In Progress
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-xs font-mono text-cyan-300/80 mt-1">
                      {project.subtitle}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Key Features preview */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  {project.keyFeatures.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#0d1424] text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links Bar */}
              <div className="p-4 bg-[#090d16] border-t border-slate-800/80 flex items-center justify-between gap-2 font-mono text-xs">
                
                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all font-semibold"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0d1424] text-slate-300 border border-slate-800 hover:text-cyan-300 hover:border-cyan-500/30 transition-all"
                      title="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>{project.backendGithubUrl ? 'Frontend' : 'Repo'}</span>
                    </a>
                  )}

                  {project.backendGithubUrl && (
                    <a
                      href={project.backendGithubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#0d1424] text-slate-400 border border-slate-800 hover:text-cyan-300 hover:border-cyan-500/30 transition-all"
                      title="Backend API Repository"
                    >
                      <Server className="w-3 h-3" />
                      <span>Backend</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-[11px] text-slate-400 hover:text-cyan-300 underline"
                >
                  Details &rarr;
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-2xl bg-[#090d16] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-[#0d1424] border border-slate-800"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                {selectedProject.roleBadge || selectedProject.category}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                {selectedProject.title}
              </h3>
              {selectedProject.subtitle && (
                <p className="text-sm font-mono text-cyan-300 mt-1">
                  {selectedProject.subtitle}
                </p>
              )}
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
                Key Architectural Highlights & Features:
              </h4>
              <ul className="space-y-2">
                {selectedProject.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
                Technologies Utilized:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono rounded-lg bg-[#0d1424] text-cyan-200 border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links in modal */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-[#070b14] font-semibold text-xs font-mono"
                >
                  <span>Visit Live Application</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {selectedProject.backendLiveUrl && (
                <a
                  href={selectedProject.backendLiveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0d1424] text-cyan-300 border border-cyan-500/30 text-xs font-mono"
                >
                  <Server className="w-3.5 h-3.5" />
                  <span>Live Backend API</span>
                </a>
              )}
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0d1424] text-slate-200 border border-slate-800 text-xs font-mono hover:border-cyan-400"
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
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0d1424] text-slate-200 border border-slate-800 text-xs font-mono hover:border-cyan-400"
                >
                  <Github className="w-4 h-4" />
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
