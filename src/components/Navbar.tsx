"use client";

import React, { useState } from "react";
import { Menu, X, Mail, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { personalInfo } from "@/data/portfolioData";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#f7f6f0]/95 backdrop-blur-sm border-b-2 border-[#1c1917]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <span className="bg-[#e9f02c] text-[#1c1917] font-black text-xl px-3 py-1 border-2 border-[#1c1917] shadow-[2px_2px_0px_0px_#1c1917] group-hover:translate-x-[1px] group-hover:translate-y-[1px]">
              RIS
            </span>
            <span className="font-extrabold text-xl tracking-tight text-[#1c1917] hidden sm:inline-block">
              Rafiqul Islam Suvo{" "}
              <span className="block opacity-0 w-0 h-0 overflow-hidden">
                RI Suvo
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-bold text-sm uppercase tracking-wider text-[#1c1917] hover:bg-[#e9f02c] px-2 py-1 rounded transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-[#1c1917] bg-white shadow-[2px_2px_0px_0px_#1c1917] hover:translate-x-[1px] hover:translate-y-[1px] transition-transform"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5 text-[#1c1917]" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-[#1c1917] bg-white shadow-[2px_2px_0px_0px_#1c1917] hover:translate-x-[1px] hover:translate-y-[1px] transition-transform"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5 text-[#1c1917]" />
            </a>
            <a
              href="#contact"
              className="paper-btn-primary px-4 py-2 text-sm uppercase font-extrabold"
            >
              Let&apos;s Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border-2 border-[#1c1917] bg-[#e9f02c] shadow-[2px_2px_0px_0px_#1c1917]"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-[#1c1917]" />
              ) : (
                <Menu className="w-6 h-6 text-[#1c1917]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-[#1c1917] bg-[#f7f6f0] px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block font-bold text-lg uppercase tracking-wider text-[#1c1917] hover:bg-[#e9f02c] px-3 py-2 border-2 border-transparent hover:border-[#1c1917]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex items-center space-x-4 border-t-2 border-[#1c1917]/20">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-[#1c1917] bg-white shadow-[2px_2px_0px_0px_#1c1917]"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-[#1c1917] bg-white shadow-[2px_2px_0px_0px_#1c1917]"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="paper-btn-primary px-5 py-3 text-sm uppercase font-extrabold flex-1 text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
