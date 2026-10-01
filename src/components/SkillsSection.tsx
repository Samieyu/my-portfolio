import React, { useState } from 'react';
import { ShieldAlert, Code2, Globe, Smartphone, Terminal, Palette, Search, Check } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const iconMap: Record<string, React.ReactNode> = {
    ShieldAlert: <ShieldAlert className="w-5 h-5 text-cyan-400" />,
    Code2: <Code2 className="w-5 h-5 text-emerald-400" />,
    Globe: <Globe className="w-5 h-5 text-sky-400" />,
    Smartphone: <Smartphone className="w-5 h-5 text-blue-400" />,
    Terminal: <Terminal className="w-5 h-5 text-purple-400" />,
    Palette: <Palette className="w-5 h-5 text-pink-400" />,
  };

  const categories = ['All', ...skillCategories.map(c => c.title)];

  const filteredCategories = skillCategories.map(cat => {
    if (selectedCategory !== 'All' && cat.title !== selectedCategory) {
      return null;
    }

    const filteredSkills = cat.skills.filter(s =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.tag && s.tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (searchQuery.trim() && filteredSkills.length === 0) {
      return null;
    }

    return {
      ...cat,
      skills: filteredSkills,
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 relative bg-[#070b14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>03 // TECHNICAL COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Categorized <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills & Tooling</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            Organized accurately by domain with genuine proficiency indicators. No fabricated percentages.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g., Python, Kali, React)..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#0a101d] border border-slate-800 text-xs font-mono text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-glow-sm'
                    : 'bg-[#0a101d] text-slate-400 border border-slate-800 hover:text-slate-200'
                }`}
              >
                {cat.length > 25 ? cat.substring(0, 22) + '...' : cat}
              </button>
            ))}
          </div>

        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => cat && (
            <div
              key={cat.title}
              className="p-6 rounded-2xl bg-[#0a101d] border border-slate-800 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-[#0d1424] border border-slate-800">
                    {iconMap[cat.icon]}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-mono leading-tight">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-2.5 py-1.5 rounded-lg bg-[#0d1424] border border-slate-800/80 hover:border-cyan-500/40 transition-colors flex items-center justify-between gap-2 text-xs"
                    >
                      <span className="text-slate-200 font-medium">{skill.name}</span>
                      {skill.level && (
                        <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                          skill.level === 'Proficient'
                            ? 'bg-cyan-950 text-cyan-300'
                            : skill.level === 'Intermediate'
                            ? 'bg-slate-800 text-slate-300'
                            : 'bg-emerald-950 text-emerald-300'
                        }`}>
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>{cat.skills.length} competencies listed</span>
                <span className="text-cyan-500/80 flex items-center gap-1">
                  <Check className="w-3 h-3 text-cyan-400" /> Active Practice
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
