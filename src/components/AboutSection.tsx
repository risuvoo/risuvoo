"use client";

import React from "react";
import { User, GraduationCap, Award, Cpu, Layers } from "lucide-react";
import { personalInfo, education } from "@/data/portfolioData";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 border-b-2 border-[#1c1917] bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Title Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-block bg-[#e9f02c] text-[#1c1917] font-black text-sm uppercase px-3 py-1 border-2 border-[#1c1917] shadow-[2px_2px_0px_0px_#1c1917]">
            BIOGRAPHY & VALUES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1c1917] tracking-tight">
            About{" "}
            <span className="underline decoration-[#e9f02c] decoration-4">
              Rafiqul Islam Suvo
              <span className="opacity-0 w-0 h-0 overflow-hidden inline-block">
                RI Suvo
              </span>
              <span className="block opacity-0 w-0 h-0 overflow-hidden">
                Rafiqul Islam Shuvo
              </span>
              <span className="block opacity-0 w-0 h-0 overflow-hidden">
                RI Shuvo
              </span>
            </span>
          </h2>
          <p className="text-base text-stone-600 font-medium">
            Bridging high-level product design thinking with scalable frontend
            architecture & database-driven backend engineering.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Detailed Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="paper-card p-6 sm:p-8 space-y-4">
              <h3 className="text-2xl font-black text-[#1c1917] flex items-center space-x-3 border-b-2 border-[#1c1917] pb-3">
                <User className="w-6 h-6 text-[#1c1917]" />
                <span>Professional Background</span>
              </h3>

              <p className="text-stone-700 leading-relaxed font-medium text-base">
                <span className="opacity-0 w-0 h-0 overflow-hidden inline-block">
                  I&apos;m RI Suvo (Rafiqul Islam Suvo)
                </span>{" "}
                <span className="block opacity-0 w-0 h-0 overflow-hidden">
                  Rafiqul Islam Shuvo
                </span>
                <span className="block opacity-0 w-0 h-0 overflow-hidden">
                  RI Shuvo
                </span>
                With over{" "}
                <strong className="text-[#1c1917] bg-[#e9f02c] px-1">
                  6+ years of software engineering experience
                </strong>
                , I specialize in engineering high-performance web applications
                and design systems. My focus spans modern frontend
                architectures, micro-frontend structures, and full-stack backend
                development with Node.js and modern databases.
              </p>

              <p className="text-stone-700 leading-relaxed font-medium text-base">
                As{" "}
                <strong className="text-[#1c1917]">
                  Lead Engineer at Quomodosoft
                </strong>
                , I directed cross-functional teams across frontend, backend,
                Flutter, and UI/UX design to deliver 12+ major commercial
                products. Currently, as{" "}
                <strong className="text-[#1c1917]">
                  Senior Executive Software Engineer at Renaissance Group
                </strong>
                , I engineer full-stack solutions and high-performance API
                architectures.
              </p>

              <p className="text-stone-700 leading-relaxed font-medium text-base">
                I am an early adopter of{" "}
                <strong className="bg-[#e9f02c] px-1">
                  AI-augmented development workflows
                </strong>{" "}
                (Claude Code, Cursor, Copilot), enabling rapid prototyping,
                error-free refactoring, and delivering robust code faster
                without compromising software quality.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="paper-card p-5 space-y-2 bg-[#f7f6f0]">
                <Cpu className="w-8 h-8 text-[#1c1917]" />
                <h4 className="font-extrabold text-lg text-[#1c1917]">
                  Micro-Frontend & SSR
                </h4>
                <p className="text-xs text-stone-600 font-medium">
                  Expertise in Next.js Server-Side Rendering (SSR), App Router,
                  and modular micro-frontend design.
                </p>
              </div>

              <div className="paper-card p-5 space-y-2 bg-[#f7f6f0]">
                <Layers className="w-8 h-8 text-[#1c1917]" />
                <h4 className="font-extrabold text-lg text-[#1c1917]">
                  End to End Development
                </h4>
                <p className="text-xs text-stone-600 font-medium">
                  Delivering complete software solutions from pixel-perfect UI
                  design systems to robust Node.js backend services and
                  databases.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Reference */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card */}
            <div className="paper-card p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-black text-[#1c1917] flex items-center space-x-3 border-b-2 border-[#1c1917] pb-3">
                <GraduationCap className="w-6 h-6 text-[#1c1917]" />
                <span>Education & Credentials</span>
              </h3>

              <div className="space-y-6">
                {education.map((item) => (
                  <div
                    key={item.id}
                    className="border-l-4 border-[#1c1917] pl-4 space-y-1"
                  >
                    <span className="text-xs font-bold bg-[#e9f02c] text-[#1c1917] px-2 py-0.5 border border-[#1c1917] inline-block">
                      {item.period}
                    </span>
                    <h4 className="font-black text-lg text-[#1c1917]">
                      {item.degree}
                    </h4>
                    <p className="text-sm font-semibold text-stone-700">
                      {item.institution}
                    </p>
                    <div className="flex items-center justify-between text-xs text-stone-500 font-bold">
                      <span>{item.location}</span>
                      <span className="bg-stone-100 px-2 py-0.5 border border-[#1c1917]/30 text-[#1c1917]">
                        GPA: {item.gpa}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
