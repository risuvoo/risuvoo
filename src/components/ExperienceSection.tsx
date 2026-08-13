"use client";

import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences } from '@/data/portfolioData';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 md:py-24 border-b-2 border-[#1c1917] bg-[#f7f6f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-block bg-[#e9f02c] text-[#1c1917] font-black text-sm uppercase px-3 py-1 border-2 border-[#1c1917] shadow-[2px_2px_0px_0px_#1c1917]">
            CAREER HISTORY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1c1917] tracking-tight">
            Work Experience & <span className="underline decoration-[#e9f02c] decoration-4">Leadership</span>
          </h2>
          <p className="text-base text-stone-600 font-medium">
            Over 7 years of proven track record leading product architecture, full-stack systems, and engineering teams.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="space-y-8 relative">
          
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-1 bg-[#1c1917]"></div>

          {experiences.map((exp, idx) => (
            <div key={exp.id} className="relative grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              
              {/* Timeline Marker (Desktop) */}
              <div className="hidden md:flex md:col-span-1 justify-center pt-2">
                <div className="w-12 h-12 bg-[#e9f02c] border-2 border-[#1c1917] flex items-center justify-center font-black text-lg text-[#1c1917] shadow-[3px_3px_0px_0px_#1c1917] z-10">
                  0{idx + 1}
                </div>
              </div>

              {/* Main Experience Card */}
              <div className="md:col-span-11">
                <div className="paper-card p-6 sm:p-8 space-y-6">
                  
                  {/* Card Top Banner */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[#1c1917] pb-4 gap-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-extrabold text-xs uppercase tracking-wider bg-[#1c1917] text-white px-2 py-0.5">
                          {exp.company}
                        </span>
                        {exp.duration && (
                          <span className="font-bold text-xs bg-[#e9f02c] text-[#1c1917] px-2 py-0.5 border border-[#1c1917]">
                            {exp.duration}
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-black text-[#1c1917] mt-1">{exp.role}</h3>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-bold text-stone-600 space-y-1">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4 text-[#1c1917]" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4 text-[#1c1917]" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-3">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-3 text-stone-700 font-medium text-sm sm:text-base">
                        <CheckCircle2 className="w-5 h-5 text-[#1c1917] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies Used */}
                  <div className="pt-4 border-t-2 border-[#1c1917]/20">
                    <span className="block text-xs font-black uppercase text-stone-500 mb-2">Tech Stack & Tools:</span>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-white text-[#1c1917] font-bold text-xs px-2.5 py-1 border border-[#1c1917] shadow-[2px_2px_0px_0px_#1c1917]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
