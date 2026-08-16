"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  FileText,
  Send,
  Sparkles,
  MapPin,
  CheckCircle2,
  X,
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleResumeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes("@")) return;

    setIsSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Unknown User",
          email: emailInput,
          subject: "Requesting Full Resume",
          message: `Hello Rafiqul,\n\nI visited your website and would like to request a copy of your full professional resume. Please feel free to send it to my email (${emailInput}) at your convenience.\n\nThank you!`,
        }),
      });
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setIsModalOpen(false);
        setEmailInput("");
      }, 4000);
    } catch (err) {
      console.error("Resume Request Error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="home"
      className="py-16 md:py-24 border-b-2 border-[#1c1917] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1c1917] leading-none">
              Hi, I&apos;m{" "}
              <span className="bg-[#e9f02c] px-2 py-0.5 border-2 border-[#1c1917] shadow-[4px_4px_0px_0px_#1c1917]">
                RI Suvo
                {/* keywords */}
                <span className="opacity-0 w-0 h-0 overflow-hidden inline-block">
                  Rafiqul Islam Suvo, rafiqul islam suvo, Al- Jamil Suvo -
                  Software Engineer at Meta, Rafiqul Islam Suvo - | WordPress
                  And Shopify Expert, Suvo Dev — Web Developer, Suvo frontend
                  developer, Suvo frontend engineer, Suvo software engineer,
                  Suvo software developer, Suvo web developer, Suvo front end
                  developer, Suvo front end engineer, Suvo front end software
                  engineer, Suvo front end software developer, Suvo full stack
                  developer, Suvo full stack engineer, Suvo full stack software
                  engineer, Suvo full stack software developer, Suvo senior
                  software engineer, Suvo senior software developer, React
                  Software Engineer Next.js Software Engineer Node.js Software
                  Engineer TypeScript Software Engineer Full Stack Developer
                  Full Stack Software Engineer Node.js Developer Bangladesh
                  React Developer Bangladesh Next.js Developer
                  Bangladesh,Software Engineer Bangladesh Senior Software
                  Engineer Bangladesh Software Engineer Dhaka Software Engineer
                  in Dhaka Full Stack Developer Bangladesh Full Stack Software
                  Engineer Bangladesh, Software Engineer, software engineer,
                  full stack developer, front end developer, front end engineer,
                  front end engineer, software developer
                </span>
                <span className="block opacity-0 w-0 h-0 overflow-hidden">
                  Rafiqul Islam Shuvo
                </span>
                <span className="block opacity-0 w-0 h-0 overflow-hidden">
                  Rafiqul Islam Shuvo
                </span>
                <span className="block opacity-0 w-0 h-0 overflow-hidden">
                  RI Shuvo
                </span>
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1917] leading-tight">
              {personalInfo.title}
            </h2>

            <p className="text-lg text-stone-700 font-medium leading-relaxed">
              {personalInfo.subTitle}
            </p>

            <p className="text-base text-stone-600 leading-relaxed max-w-2xl">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="paper-btn-primary px-6 py-3.5 text-base uppercase font-black flex items-center space-x-2"
              >
                <span>Get Resume</span>
                <FileText className="w-5 h-5" />
              </button>

              <a
                href="#projects"
                className="paper-btn-secondary px-6 py-3.5 text-base uppercase font-black flex items-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <a
                href="#contact"
                className="paper-btn-secondary px-6 py-3.5 text-base uppercase font-black flex items-center space-x-2"
              >
                <span>Contact Me</span>
                <Send className="w-5 h-5" />
              </a>
            </div>

            {/* Highlighted Meta Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-[#1c1917]/20">
              <div className="p-3 bg-white border-2 border-[#1c1917] shadow-[2px_2px_0px_0px_#1c1917]">
                <span className="block text-2xl font-black text-[#1c1917]">
                  6+ YOE
                </span>
                <span className="text-xs font-bold text-stone-600 uppercase">
                  Frontend Lead
                </span>
              </div>
              <div className="p-3 bg-white border-2 border-[#1c1917] shadow-[2px_2px_0px_0px_#1c1917]">
                <span className="block text-2xl font-black text-[#1c1917]">
                  12+
                </span>
                <span className="text-xs font-bold text-stone-600 uppercase">
                  Real Projects
                </span>
              </div>
              <div className="p-3 bg-white border-2 border-[#1c1917] shadow-[2px_2px_0px_0px_#1c1917]">
                <span className="block text-2xl font-black text-[#1c1917]">
                  Dhaka
                </span>
                <span className="text-xs font-bold text-stone-600 uppercase">
                  Bangladesh
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Background Accent Card */}
              <div className="absolute inset-0 bg-[#e9f02c] border-2 border-[#1c1917] translate-x-4 translate-y-4"></div>

              {/* Main Avatar / Card */}
              <div className="relative bg-white border-2 border-[#1c1917] p-6 shadow-[6px_6px_0px_0px_#1c1917] space-y-5">
                <div className="relative w-full aspect-square border-2 border-[#1c1917] overflow-hidden bg-stone-100">
                  <img
                    src={personalInfo.avatarUrl}
                    alt={
                      personalInfo.name + " | RI Suvo, Shuvo, Software Engineer"
                    }
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 right-3 bg-[#e9f02c] text-[#1c1917] border-2 border-[#1c1917] px-3 py-1 font-extrabold text-xs">
                    SOFTWARE ENGINEER
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-black text-xl text-[#1c1917]">
                      {personalInfo.name}{" "}
                      <span className="opacity-0 w-0 h-0 overflow-hidden inline-block">
                        RI Suvo
                      </span>
                      <span className="block opacity-0 w-0 h-0 overflow-hidden">
                        Rafiqul Islam Shuvo
                      </span>
                      <span className="block opacity-0 w-0 h-0 overflow-hidden">
                        RI Shuvo
                      </span>
                    </h3>
                    <span className="text-xs font-bold bg-stone-100 px-2 py-1 border border-[#1c1917]">
                      {personalInfo.location}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-stone-600">
                    Lead Engineer | Node.js | Microfrontends | PostgreSQL
                  </p>
                </div>

                <div className="pt-2 border-t-2 border-[#1c1917] flex justify-between items-center text-xs font-bold text-[#1c1917]">
                  <span className="flex items-center space-x-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Verified Engineer</span>
                  </span>
                  <a
                    href="#about"
                    className="underline hover:bg-[#e9f02c] px-1"
                  >
                    Read Biography &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Brutalist Resume Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-white border-2 border-[#1c1917] p-6 sm:p-8 shadow-[8px_8px_0px_0px_#1c1917] space-y-6">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => {
                setIsModalOpen(false);
                setIsSuccess(false);
              }}
              className="absolute top-4 right-4 p-1.5 bg-[#e9f02c] border-2 border-[#1c1917] shadow-[2px_2px_0px_0px_#1c1917] hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5 text-[#1c1917]" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2">
              <div className="inline-block bg-[#e9f02c] text-[#1c1917] font-black text-xs uppercase px-2.5 py-0.5 border border-[#1c1917] shadow-[1.5px_1.5px_0px_0px_#1c1917]">
                FIND RESUME
              </div>
              <h3 className="text-2xl font-black text-[#1c1917] tracking-tight">
                Get Suvo&apos;s Resume
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-medium leading-relaxed">
                Please enter your email address below to receive Rafiqul&apos;s
                complete technical resume:
              </p>
            </div>

            {/* Modal Body */}
            {isSuccess ? (
              <div className="p-4 bg-[#e9f02c]/30 border-2 border-[#1c1917] space-y-2 text-center">
                <CheckCircle2 className="w-8 h-8 text-[#1c1917] mx-auto" />
                <h4 className="font-black text-base text-[#1c1917]">
                  Request Delivered!
                </h4>
                <p className="text-xs font-bold text-stone-800">
                  Rafiqul has received your request and will reach out to{" "}
                  <span className="underline font-black">{emailInput}</span>{" "}
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleResumeSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="block text-xs font-black uppercase text-stone-700">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 bg-[#f7f6f0] border-2 border-[#1c1917] font-bold text-sm text-[#1c1917] focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_0px_#1c1917]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="paper-btn-primary w-full py-3.5 text-sm uppercase font-black flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <span>{isSubmitting ? "Sending..." : "Get Resume"}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
