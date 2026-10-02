import React, { useState } from 'react';
import { ExternalLink, CheckCircle, ShieldCheck, Building, Quote } from 'lucide-react';
import { certificatesData } from '../data/portfolioData';

export const CertificatesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filterOptions = [
    { key: 'all', label: 'All Credentials (11)' },
    { key: 'cybersecurity', label: 'Cybersecurity & INSA' },
    { key: 'software', label: 'Software Architecture' },
    { key: 'frontend', label: 'Frontend & Python' },
    { key: 'ai', label: 'AI & ML' },
  ];

  const filteredCerts = activeCategory === 'all'
    ? certificatesData
    : certificatesData.filter(c => c.category === activeCategory);

  return (
    <section id="credentials" className="py-20 lg:py-24 bg-[#f9f9f7] border-t border-[#e8ece4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching "CLIENTS SAY / Kind Words" layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-5 border-b border-[#e5e8e0]">
          <div>
            <span className="text-[11px] font-sans font-semibold tracking-[0.22em] text-[#717e6e] uppercase block mb-1">
              Validation & Endorsement
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1a1d1a] tracking-tight">
              Verified Credentials
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {filterOptions.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setActiveCategory(opt.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeCategory === opt.key
                    ? 'bg-[#556453] text-white font-medium shadow-sm'
                    : 'bg-white text-[#525d50] border border-[#dbe0d7] hover:border-[#556453]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Cards styled like Kind Words cards in reference image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="bg-white p-7 rounded-2xl border border-[#e5e9e0] hover:border-[#556453] transition-all shadow-soft flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Quotation Icon and Issuer Badge */}
                <div className="flex items-start justify-between">
                  <span className="text-3xl font-serif font-bold text-[#b4c0ad] leading-none select-none">
                    “
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#f2f5ef] border border-[#d8e0d3] text-[10px] font-mono text-[#43523f]">
                    <CheckCircle className="w-3 h-3 text-[#556453]" />
                    Verified Online
                  </span>
                </div>

                {/* Certificate Title */}
                <div>
                  <h3 className="text-lg font-serif font-medium text-[#1a1d1a] group-hover:text-[#556453] transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  {cert.instructor && (
                    <p className="text-xs text-[#5f6b5b] mt-1.5 font-sans leading-relaxed">
                      Authorized by <strong className="text-[#2b3329] font-medium">{cert.issuer}</strong> and taught by {cert.instructor}.
                    </p>
                  )}
                </div>

                {/* Credential ID */}
                {cert.credentialId && (
                  <div className="text-[11px] font-mono text-[#717e6e] bg-[#f9faf7] px-3 py-1.5 rounded-lg border border-[#e5e9e0] inline-block">
                    ID: <span className="text-[#323b2f] select-all font-semibold">{cert.credentialId}</span>
                  </div>
                )}
              </div>

              {/* Bottom Authority Bar matching the testimonial author row */}
              <div className="pt-4 mt-5 border-t border-[#f0f2eb] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#eaede7] border border-[#d6dbd0] flex items-center justify-center text-[#556453] font-bold text-xs font-mono">
                    {cert.issuer.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-xs font-bold font-sans text-[#1a1d1a]">{cert.issuer}</div>
                    <div className="text-[10px] text-[#717e6e] font-mono">{cert.date}</div>
                  </div>
                </div>

                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-sans font-semibold text-[#556453] hover:text-[#2d372c] underline"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs font-mono font-semibold text-[#556453]">
                    {cert.badge || 'National Camp'}
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
