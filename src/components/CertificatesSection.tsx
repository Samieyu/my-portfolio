import React, { useState } from 'react';
import { Award, ExternalLink, CheckCircle, ShieldCheck, Bookmark, Search, Building } from 'lucide-react';
import { certificatesData } from '../data/portfolioData';

export const CertificatesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filterOptions = [
    { key: 'all', label: 'All Credentials (11)' },
    { key: 'cybersecurity', label: 'Cybersecurity & INSA' },
    { key: 'software', label: 'Software Architecture & OOD' },
    { key: 'frontend', label: 'Frontend & Python' },
    { key: 'ai', label: 'AI & Machine Learning' },
  ];

  const filteredCerts = activeCategory === 'all'
    ? certificatesData
    : certificatesData.filter(c => c.category === activeCategory);

  return (
    <section id="certifications" className="py-24 relative bg-[#070b14] border-t border-slate-800/80">
      
      {/* Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>05 // VERIFIED ACADEMIC & PROFESSIONAL CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Government Training</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            10 verifiable Coursera certifications from Meta, IBM, University of Alberta, University of London, and Total Seminars, alongside the INSA Cyber Talent Camp.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setActiveCategory(opt.key)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeCategory === opt.key
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-glow-sm font-semibold'
                  : 'bg-[#0a101d] text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-[#0a101d] border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-lg relative group"
            >
              <div className="space-y-4">
                
                {/* Header Tag & Issuer */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-[#0d1424] border border-slate-800 text-cyan-400">
                      {cert.category === 'cybersecurity' ? (
                        <ShieldCheck className="w-5 h-5 text-cyan-400" />
                      ) : (
                        <Building className="w-5 h-5 text-slate-300" />
                      )}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-cyan-400 font-semibold block">
                        {cert.issuer}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {cert.date}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle className="w-2.5 h-2.5 text-emerald-400" />
                    Verified
                  </span>
                </div>

                {/* Certificate Title */}
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  {cert.instructor && (
                    <p className="text-xs text-slate-400 mt-1 font-mono">
                      Instructor: <span className="text-slate-300">{cert.instructor}</span>
                    </p>
                  )}
                </div>

                {/* Credential ID */}
                {cert.credentialId && (
                  <div className="text-[11px] font-mono text-slate-400 bg-[#0d1424] px-3 py-1.5 rounded-lg border border-slate-800/80">
                    <span className="text-slate-500">ID: </span>
                    <span className="text-slate-300 select-all">{cert.credentialId}</span>
                  </div>
                )}
              </div>

              {/* Card Footer: Verification Link */}
              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold group/link"
                  >
                    <span>Verify at Coursera</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <span className="text-emerald-400 font-semibold">
                    {cert.badge || 'National Training Alum'}
                  </span>
                )}

                <span className="text-[11px] text-slate-500 uppercase">
                  {cert.category}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
