"use client";

import React from 'react';
import { Code2, Terminal, Database, Bot, Cloud, Check } from 'lucide-react';
import { skillCategories } from '@/data/portfolioData';

export const SkillsSection = () => {
  const categoryIcons = [Code2, Terminal, Database, Bot, Cloud, Check];

  return (
    <section id="skills" className="py-16 md:py-24 border-b-2 border-[#1c1917] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-block bg-[#e9f02c] text-[#1c1917] font-black text-sm uppercase px-3 py-1 border-2 border-[#1c1917] shadow-[2px_2px_0px_0px_#1c1917]">
            TECHNICAL EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1c1917] tracking-tight">
            Skills & <span className="underline decoration-[#e9f02c] decoration-4">Tech Stack</span>
          </h2>
          <p className="text-base text-stone-600 font-medium">
            Comprehensive skill set across modern frontend architecture, backend systems, database query optimization, and AI tooling.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const IconComponent = categoryIcons[idx % categoryIcons.length];
            return (
              <div key={category.title} className="paper-card p-6 space-y-5 flex flex-col justify-between">
                
                <div className="space-y-4">
                  {/* Category Title Header */}
                  <div className="flex items-center space-x-3 border-b-2 border-[#1c1917] pb-3">
                    <div className="p-2 bg-[#e9f02c] border border-[#1c1917] shadow-[2px_2px_0px_0px_#1c1917]">
                      <IconComponent className="w-5 h-5 text-[#1c1917]" />
                    </div>
                    <h3 className="font-black text-lg text-[#1c1917]">{category.title}</h3>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-[#f7f6f0] text-[#1c1917] font-bold text-xs px-3 py-1.5 border border-[#1c1917] shadow-[1.5px_1.5px_0px_0px_#1c1917] hover:bg-[#e9f02c] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-right">
                  <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest">
                    MODULE 0{idx + 1}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
