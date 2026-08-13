"use client";

import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { personalInfo } from "@/data/portfolioData";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1c1917] text-white border-t-4 border-[#e9f02c] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-800">
          <div className="space-y-2 text-center md:text-left">
            <a href="#home" className="inline-flex items-center space-x-2">
              <span className="bg-[#e9f02c] text-[#1c1917] font-black text-xl px-3 py-1 border-2 border-white">
                RIS
              </span>
              <span className="font-black text-2xl tracking-tight text-white">
                Rafiqul Islam Suvo
                <span className="opacity-0 w-0 h-0 overflow-hidden inline-block">
                  RI Suvo
                </span>
              </span>
            </a>
            <p className="text-xs text-stone-400 font-medium max-w-md">
              Senior Software Engineer with 6+ years of experience building modern frontend development, micro-frontends, Node.js backend services, and scalable enterprise solutions.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-stone-900 border-2 border-stone-700 hover:border-[#e9f02c] text-white hover:text-[#e9f02c] transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-stone-900 border-2 border-stone-700 hover:border-[#e9f02c] text-white hover:text-[#e9f02c] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-stone-900 border-2 border-stone-700 hover:border-[#e9f02c] text-white hover:text-[#e9f02c] transition-colors"
              aria-label="Email Me"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Navigation & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-stone-400">
          <div className="flex flex-wrap justify-center gap-6 uppercase tracking-wider text-stone-300">
            <a href="#home" className="hover:text-[#e9f02c]">
              Home
            </a>
            <a href="#about" className="hover:text-[#e9f02c]">
              About
            </a>
            <a href="#experience" className="hover:text-[#e9f02c]">
              Experience
            </a>
            <a href="#skills" className="hover:text-[#e9f02c]">
              Skills
            </a>
            <a href="#projects" className="hover:text-[#e9f02c]">
              Projects
            </a>
            <a href="#contact" className="hover:text-[#e9f02c]">
              Contact
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 bg-[#e9f02c] text-[#1c1917] px-4 py-2 font-black border-2 border-white hover:bg-white transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center pt-4 border-t border-stone-800 text-[11px] font-semibold text-stone-500">
          &copy; {new Date().getFullYear()} RI Suvo{" "}
          <span className="opacity-0 w-0 h-0 overflow-hidden inline-block">
            Rafiqul Islam Suvo
          </span>{" "}
          . All rights reserved. Built with Next.js, TypeScript & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};
