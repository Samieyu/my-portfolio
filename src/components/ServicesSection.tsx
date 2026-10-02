import React from 'react';
import { Globe, Shield, Smartphone, Palette, ArrowRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Web Engineering",
      icon: <Globe className="w-5 h-5 text-[#556453]" />,
      description: "Clean, responsive web architectures crafted with purpose, React, Node.js, and serverless PostgreSQL.",
      tech: "React • TypeScript • MERN • REST APIs"
    },
    {
      title: "Cybersecurity & PenTest",
      icon: <Shield className="w-5 h-5 text-[#556453]" />,
      description: "External and web application penetration testing, vulnerability audits, and Wazuh SOC monitoring.",
      tech: "Kali Linux • OWASP • Nmap • Burp Suite"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-5 h-5 text-[#556453]" />,
      description: "Intuitive cross-platform Flutter applications built for offline caching and real-time cloud data.",
      tech: "Flutter • Dart • Firebase • Firestore"
    },
    {
      title: "Visual Media & Music",
      icon: <Palette className="w-5 h-5 text-[#556453]" />,
      description: "Visual identity design in Adobe Photoshop & Illustrator, paired with 6+ years of church piano pedagogy.",
      tech: "Photoshop • Illustrator • Piano • Theory"
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#f9f9f7] border-t border-[#e8ece4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching "WHAT I DO / Services" */}
        <div className="mb-12">
          <span className="text-[11px] font-sans font-semibold tracking-[0.22em] text-[#717e6e] uppercase block mb-1">
            What I Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1a1d1a] tracking-tight">
            Services & Technical Domains
          </h2>
        </div>

        {/* 4-Column Horizontal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white p-6 rounded-2xl border border-[#e5e9e0] hover:border-[#556453] transition-all shadow-soft flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Circular Outline Icon matching reference */}
                <div className="w-12 h-12 rounded-full border border-[#d8dcd3] bg-[#f5f6f3] flex items-center justify-center group-hover:border-[#556453] group-hover:bg-[#556453]/10 transition-colors">
                  {s.icon}
                </div>

                <div>
                  <h3 className="text-base font-sans font-bold text-[#1a1d1a]">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#555f52] mt-2 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#f0f2eb] text-[10px] font-mono text-[#7a8677]">
                {s.tech}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
