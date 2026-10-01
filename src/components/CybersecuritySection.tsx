import React, { useState } from 'react';
import { Shield, Lock, Terminal, Activity, Eye, Cpu, Database, Server, ExternalLink, AlertTriangle, CheckCircle2, ChevronRight } from 'lucide-react';
import { cyberTracks, projectsData } from '../data/portfolioData';

export const CybersecuritySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'roadmap' | 'soc-labs' | 'tools'>('roadmap');
  const [expandedTracks, setExpandedTracks] = useState<Record<string, boolean>>({});

  const toggleTrack = (stage: string) => {
    setExpandedTracks(prev => ({ ...prev, [stage]: !prev[stage] }));
  };

  const aiProject = projectsData.find(p => p.id === 'ai-pentest-copilot');
  const ctfProject = projectsData.find(p => p.id === 'lucy-ctf');

  return (
    <section id="cybersecurity" className="py-24 relative bg-[#070b14] border-t border-slate-800/80">
      
      {/* Background cyber grid & glow */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>02 // CYBERSECURITY & RED TEAMING FOCUS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Offensive & Defensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Security Engineering</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            Practical penetration testing learning paths, virtualized security labs, SOC monitoring, and AI-assisted threat telemetry.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-xl bg-[#0a101d] border border-slate-800 text-xs font-mono">
            <button
              onClick={() => setActiveTab('roadmap')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'roadmap'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-glow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              1. PenTest Learning Roadmap
            </button>
            <button
              onClick={() => setActiveTab('soc-labs')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'soc-labs'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-glow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              2. Lab & SOC Monitoring
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'tools'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-glow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              3. Security Tooling & Kali
            </button>
          </div>
        </div>

        {/* TAB 1: PenTest Learning Roadmap */}
        {activeTab === 'roadmap' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {cyberTracks.map((track) => {
                const isExpanded = expandedTracks[track.stage];

                return (
                  <div
                    key={track.stage}
                    className="p-5 rounded-xl bg-[#0a101d] border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-cyan-400">{track.stage}</span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          track.status === 'Active Learning'
                            ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30'
                            : track.status === 'Hands-on Labs'
                            ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/30'
                            : 'bg-purple-950/80 text-purple-300 border-purple-500/30'
                        }`}>
                          {track.status}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-white tracking-wide">
                        {track.title}
                      </h3>

                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                        {track.description}
                      </p>

                      {/* Expandable Core Focus */}
                      {isExpanded && (
                        <div className="space-y-1 pt-2 border-t border-slate-800/80 animate-in fade-in duration-200">
                          <div className="text-[11px] font-mono text-slate-300 font-semibold">Core Focus:</div>
                          <ul className="space-y-1">
                            {track.keyTopics.map((topic) => (
                              <li key={topic} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                                <ChevronRight className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-800 flex flex-col gap-2">
                      <button
                        onClick={() => toggleTrack(track.stage)}
                        className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 flex items-center justify-between w-full"
                      >
                        <span>{isExpanded ? 'Hide Topics -' : 'View Topics +'}</span>
                        <ChevronRight className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </button>

                      <div className="flex flex-wrap gap-1">
                        {track.tools.slice(0, 3).map((tool) => (
                          <span key={tool} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#0d1424] text-slate-300 border border-slate-800">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Disclaimer pill */}
            <div className="p-4 rounded-xl bg-[#090e1a] border border-cyan-500/20 flex items-center gap-3 text-xs text-slate-300 font-mono">
              <AlertTriangle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>
                <strong>Academic & Lab Integrity:</strong> All cybersecurity activities, vulnerability scans, and red-team testing are performed strictly inside authorized sandboxes, virtualized machines, or dedicated CTF environments in compliance with legal and ethical standards.
              </span>
            </div>
          </div>
        )}

        {/* TAB 2: SOC & Lab Monitoring */}
        {activeTab === 'soc-labs' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* AI SOC Analyst Project Spotlight */}
            {aiProject && (
              <div className="p-6 rounded-2xl bg-[#0a101d] border border-cyan-500/30 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono bg-purple-950/80 text-purple-300 border border-purple-500/30">
                    <Cpu className="w-3.5 h-3.5 text-purple-400" />
                    <span>Active Research Concept</span>
                  </span>
                  <a
                    href={aiProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-xs font-mono text-cyan-400 hover:underline"
                  >
                    <span>GitHub Repo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">{aiProject.title}</h3>
                  <p className="text-xs font-mono text-cyan-300 mt-0.5">{aiProject.subtitle}</p>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {aiProject.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="text-xs font-mono text-slate-300 font-semibold">Planned Capabilities & Pipeline:</div>
                  <ul className="space-y-1.5">
                    {aiProject.keyFeatures.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 flex flex-wrap gap-1.5 border-t border-slate-800">
                  {aiProject.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-[11px] font-mono rounded bg-[#0d1424] text-cyan-200 border border-cyan-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Lucy CTF & Security Labs */}
            <div className="p-6 rounded-2xl bg-[#0a101d] border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Hands-on Lab Repo</span>
                </span>
                {ctfProject?.githubUrl && (
                  <a
                    href={ctfProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-xs font-mono text-cyan-400 hover:underline"
                  >
                    <span>View Lucy CTF</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">Lucy CTF & Security Challenges</h3>
                <p className="text-xs font-mono text-emerald-300 mt-0.5">Offensive Security Labs & Exploit Tracking</p>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                A personal hands-on laboratory space where I document penetration testing techniques, solve capture-the-flag challenges, write automation scripts, and test attack vectors against isolated Linux and Windows targets.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-[#0d1424] border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-slate-200 font-mono">Recon & Scanning</div>
                  <p className="text-[11px] text-slate-400">Nmap timing templates, service fingerprinting, and NSE scripts.</p>
                </div>
                <div className="p-3 rounded-lg bg-[#0d1424] border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-slate-200 font-mono">Web Application Security</div>
                  <p className="text-[11px] text-slate-400">Burp Suite Repeater, OWASP Top 10 vulnerabilities, auth bypass testing.</p>
                </div>
                <div className="p-3 rounded-lg bg-[#0d1424] border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-slate-200 font-mono">SIEM & Log Auditing</div>
                  <p className="text-[11px] text-slate-400">Wazuh agent rules, Windows Security Events, and Sysmon process telemetry.</p>
                </div>
                <div className="p-3 rounded-lg bg-[#0d1424] border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-slate-200 font-mono">Virtual Lab Environment</div>
                  <p className="text-[11px] text-slate-400">Kali Linux host with VirtualBox and WSL2 segregated networks.</p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: Tooling & Kali Ecosystem */}
        {activeTab === 'tools' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-[#0a101d] border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-mono font-bold text-sm">
                <Terminal className="w-4 h-4" />
                <span>Operating Systems & Virtualization</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Primary testing setups operated inside sandboxed virtual environments:
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Kali Linux', 'Ubuntu Linux', 'VirtualBox', 'WSL2', 'Bash Scripting', 'SSH Key Auth'].map(t => (
                  <span key={t} className="px-2 py-1 text-xs font-mono rounded bg-[#0d1424] text-slate-300 border border-slate-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#0a101d] border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-sm">
                <Lock className="w-4 h-4" />
                <span>Offensive Tools & Assessment</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Methodological tools for reconnaissance, vulnerability mapping, and inspection:
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Nmap', 'Burp Suite Community', 'Wireshark', 'Metasploit Basics', 'OWASP ZAP', 'Hydra', 'John the Ripper'].map(t => (
                  <span key={t} className="px-2 py-1 text-xs font-mono rounded bg-[#0d1424] text-slate-300 border border-slate-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#0a101d] border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-blue-400 font-mono font-bold text-sm">
                <Eye className="w-4 h-4" />
                <span>Defensive Monitoring & Telemetry</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Blue-team detection, log aggregation, and threat framework mapping:
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Wazuh SIEM', 'Suricata IDS', 'Sysmon', 'Windows Event Logs', 'MITRE ATT&CK', 'Log Analysis'].map(t => (
                  <span key={t} className="px-2 py-1 text-xs font-mono rounded bg-[#0d1424] text-slate-300 border border-slate-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
