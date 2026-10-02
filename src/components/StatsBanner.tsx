import React from 'react';
import { Award, GraduationCap, ShieldCheck, Music } from 'lucide-react';

export const StatsBanner: React.FC = () => {
  const stats = [
    {
      icon: <Award className="w-5 h-5 text-[#556453]" />,
      number: "10+",
      label: "Verified Credentials",
      detail: "Meta • IBM • Alberta • London"
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-[#556453]" />,
      number: "4th",
      label: "Year Software Engineering",
      detail: "Wachemo University, Ethiopia"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#556453]" />,
      number: "5th",
      label: "Batch INSA Cyber Camp",
      detail: "National Security Academy"
    },
    {
      icon: <Music className="w-5 h-5 text-[#556453]" />,
      number: "6+",
      label: "Years Piano & Pedagogy",
      detail: "Church Keyboardist & Media"
    },
  ];

  return (
    <section className="bg-[#ebede6] border-y border-[#dce0d6] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#d4d9ce]">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center p-6 sm:p-8 ${
                idx % 2 === 0 ? 'border-r sm:border-r-0 lg:border-r-0' : ''
              }`}
            >
              <div className="mb-3 p-2.5 rounded-full bg-white/70 border border-[#d6dbd0]">
                {stat.icon}
              </div>
              <div className="text-4xl sm:text-5xl font-serif font-normal text-[#1a1d1a] tracking-tight">
                {stat.number}
              </div>
              <div className="text-sm font-sans font-semibold text-[#2f382d] mt-2">
                {stat.label}
              </div>
              <div className="text-xs text-[#677364] mt-0.5 font-mono">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
