import React from 'react';
import { Search, PenTool, Code, Rocket, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Discover & Model",
      icon: <Search className="w-4 h-4 text-[#556453]" />,
      description: "Analyze project scope, audit potential attack surfaces, and clarify technical specifications.",
    },
    {
      num: "02",
      title: "Architect",
      icon: <PenTool className="w-4 h-4 text-[#556453]" />,
      description: "Design modular OOP architectures, secure database schemas, and defense-in-depth protocols.",
    },
    {
      num: "03",
      title: "Develop & Secure",
      icon: <Code className="w-4 h-4 text-[#556453]" />,
      description: "Implement clean, maintainable code using React, Node, Flutter, or Python with secure JWT auth.",
    },
    {
      num: "04",
      title: "Test & Deploy",
      icon: <Rocket className="w-4 h-4 text-[#556453]" />,
      description: "Conduct web penetration testing, review security telemetry, and deploy to Vercel/Render.",
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-24 bg-[#f9f9f7] border-t border-[#e8ece4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-[11px] font-sans font-semibold tracking-[0.22em] text-[#717e6e] uppercase block mb-1">
            My Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1a1d1a] tracking-tight">
            How I Engineer & Secure
          </h2>
        </div>

        {/* 4-Step Horizontal Stepper with Dotted Connectors matching the reference design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={step.num} className="relative space-y-4">
              
              {/* Stepper Header with Number badge & Icon */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ebede6] border border-[#d6dbd0] text-xs font-mono font-bold text-[#384334]">
                  {step.num}
                </div>
                <div className="p-2 rounded-lg bg-white border border-[#d8dcd3]">
                  {step.icon}
                </div>

                {/* Dotted horizontal connector line (for screens where steps sit side by side) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex flex-1 items-center px-2">
                    <div className="w-full border-t border-dashed border-[#b8c3b1]" />
                    <ArrowRight className="w-3.5 h-3.5 text-[#869480] -ml-1 flex-shrink-0" />
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-base font-sans font-bold text-[#1a1d1a]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#555f52] mt-1.5 leading-relaxed">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
