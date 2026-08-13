"use client";

import React, { useState } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { projects, Project } from '@/data/portfolioData';

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'SaaS & Web App', 'E-Commerce', 'LMS & EdTech', 'Browser Extension'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 md:py-24 border-b-2 border-[#1c1917] bg-[#f7f6f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-block bg-[#e9f02c] text-[#1c1917] font-black text-sm uppercase px-3 py-1 border-2 border-[#1c1917] shadow-[2px_2px_0px_0px_#1c1917]">
            PORTFOLIO SHOWCASE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1c1917] tracking-tight">
            Commercial & <span className="underline decoration-[#e9f02c] decoration-4">Open-Source Work</span>
          </h2>
          <p className="text-base text-stone-600 font-medium">
            Explore 12 real-world projects featuring multi-vendor platforms, LMS systems, SaaS landing pages, and browser extensions.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-black uppercase tracking-wider border-2 border-[#1c1917] transition-all ${
                activeCategory === cat
                  ? 'bg-[#e9f02c] text-[#1c1917] shadow-[3px_3px_0px_0px_#1c1917] -translate-x-0.5 -translate-y-0.5'
                  : 'bg-white text-stone-700 hover:bg-stone-100 shadow-[2px_2px_0px_0px_#1c1917]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid (2-Column Grid, No Images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="paper-card p-6 md:p-8 flex flex-col justify-between space-y-6 relative group bg-white border-2 border-[#1c1917] shadow-[4px_4px_0px_0px_#1c1917] hover:shadow-[6px_6px_0px_0px_#1c1917] transition-all"
            >
              <div className="space-y-4">
                
                {/* Top Badges (Category & Featured) */}
                <div className="flex items-center justify-between gap-2">
                  <span className="bg-[#e9f02c] text-[#1c1917] text-xs font-black uppercase px-3 py-1 border-2 border-[#1c1917] shadow-[2px_2px_0px_0px_#1c1917]">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="bg-[#1c1917] text-white text-xs font-black uppercase px-2.5 py-1 flex items-center space-x-1.5 border border-[#1c1917]">
                      <Sparkles className="w-3.5 h-3.5 text-[#e9f02c]" />
                      <span>Featured</span>
                    </span>
                  )}
                </div>

                {/* 1. Title */}
                <h3 className="text-2xl font-black text-[#1c1917] tracking-tight group-hover:underline">
                  {project.title}
                </h3>

                {/* Primary Description with Bold Highlights */}
                <p
                  className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed [&_strong]:font-black [&_strong]:text-[#1c1917]"
                  dangerouslySetInnerHTML={{ __html: project.whatIDid }}
                />

                {/* 4. Technology Stack */}
                <div className="space-y-2 pt-2">
                  <span className="block text-xs font-black uppercase text-stone-500 tracking-wider">
                    Technology Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white text-[#1c1917] font-extrabold text-xs px-2.5 py-1 border border-[#1c1917] shadow-[1px_1px_0px_0px_#1c1917]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* 5. Others (Live Demo & Source Links) */}
              <div className="flex items-center justify-between pt-4 border-t-2 border-[#1c1917]/20">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="paper-btn-primary px-4 py-2 text-xs uppercase font-extrabold flex items-center space-x-1.5"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="text-xs font-extrabold text-stone-400 italic bg-stone-100 px-3 py-1.5 border border-stone-300">
                    Enterprise Project
                  </span>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border-2 border-[#1c1917] bg-white shadow-[2px_2px_0px_0px_#1c1917] hover:translate-x-[1px] hover:translate-y-[1px] transition-transform"
                    aria-label="View Source Code"
                  >
                    <GithubIcon className="w-5 h-5 text-[#1c1917]" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
