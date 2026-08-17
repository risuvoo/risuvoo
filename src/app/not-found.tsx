import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Home,
  ArrowLeft,
  User,
  Briefcase,
  Wrench,
  FolderGit2,
  Mail,
  Compass,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "404: Page Not Found | RI Suvo",
  description: "The requested page could not be found. Explore Rafiqul Islam Suvo's software engineering portfolio.",
};

export default function NotFound() {
  const quickLinks = [
    {
      title: "Home",
      description: "Return to main hero overview",
      href: "/#home",
      icon: Home,
    },
    {
      title: "About",
      description: "Learn about my background & 6+ years experience",
      href: "/#about",
      icon: User,
    },
    {
      title: "Experience",
      description: "Career history, companies & leadership roles",
      href: "/#experience",
      icon: Briefcase,
    },
    {
      title: "Skills",
      description: "Frontend, Micro-frontends & Node.js tech stack",
      href: "/#skills",
      icon: Wrench,
    },
    {
      title: "Projects",
      description: "Featured engineering work & live applications",
      href: "/#projects",
      icon: FolderGit2,
    },
    {
      title: "Contact",
      description: "Send a message or get in touch directly",
      href: "/#contact",
      icon: Mail,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f6f0] text-[#1c1917]">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col items-center justify-center">
        {/* Main 404 Hero Card */}
        <div className="w-full max-w-3xl paper-card p-6 sm:p-10 text-center space-y-6 relative overflow-hidden">
          {/* Top Decorative Tag */}
          <div className="inline-flex items-center space-x-2 yellow-badge px-4 py-1.5 text-xs sm:text-sm tracking-wider uppercase">
            <AlertTriangle className="w-4 h-4" />
            <span>404 // Page Lost in Hyperspace</span>
          </div>

          {/* Large Neo-Brutalist 404 Banner */}
          <div className="py-4">
            <h1 className="text-7xl sm:text-9xl font-black tracking-extratight text-[#1c1917] select-none">
              4<span className="bg-[#e9f02c] px-2 py-0 border-4 border-[#1c1917] shadow-[4px_4px_0px_0px_#1c1917] inline-block -rotate-3">0</span>4
            </h1>
          </div>

          <div className="space-y-3 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Oops! Page Not Found
            </h2>
            <p className="text-stone-700 text-base sm:text-lg font-medium leading-relaxed">
              The link you followed might be broken, or the page may have been moved or renamed. Don&apos;t worry, here is a compass to guide you back!
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="paper-btn-primary px-6 py-3 text-base uppercase font-extrabold inline-flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <Home className="w-5 h-5" />
              <span>Back To Homepage</span>
            </Link>
            <Link
              href="/#contact"
              className="paper-btn-secondary px-6 py-3 text-base uppercase font-extrabold inline-flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              <span>Report Broken Link</span>
            </Link>
          </div>
        </div>

        {/* Explore Navigation Grid */}
        <div className="w-full max-w-3xl mt-12 space-y-6">
          <div className="flex items-center space-x-3">
            <Compass className="w-6 h-6 text-[#1c1917]" />
            <h3 className="text-xl font-extrabold tracking-tight uppercase">
              Where would you like to go?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className="paper-card p-4 flex flex-col justify-between group hover:border-[#1c1917]"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="p-2 bg-[#e9f02c] border-2 border-[#1c1917] shadow-[2px_2px_0px_0px_#1c1917]">
                        <Icon className="w-5 h-5 text-[#1c1917]" />
                      </div>
                      <ArrowLeft className="w-4 h-4 rotate-180 opacity-0 group-hover:opacity-100 transition-opacity text-[#1c1917]" />
                    </div>
                    <h4 className="font-extrabold text-lg text-[#1c1917]">
                      {link.title}
                    </h4>
                    <p className="text-xs text-stone-600 font-medium">
                      {link.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
