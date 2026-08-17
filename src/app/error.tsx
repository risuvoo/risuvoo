"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AlertOctagon, RotateCcw, Home, Mail } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service if needed
    console.error("Unhandled Route Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f6f0] text-[#1c1917]">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl paper-card p-6 sm:p-10 text-center space-y-6 relative overflow-hidden">
          {/* Top Status Tag */}
          <div className="inline-flex items-center space-x-2 bg-red-500 text-white font-extrabold px-4 py-1.5 text-xs sm:text-sm tracking-wider uppercase border-2 border-[#1c1917] shadow-[2px_2px_0px_0px_#1c1917]">
            <AlertOctagon className="w-4 h-4" />
            <span>500 // Application Exception</span>
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1c1917]">
              Something Went Wrong!
            </h1>
            <p className="text-stone-700 text-base sm:text-lg font-medium leading-relaxed max-w-lg mx-auto">
              An unexpected system error occurred while loading this page. Don&apos;t worry, you can try reloading or navigate back home safely.
            </p>
          </div>

          {/* Technical Digest Box if present */}
          {error?.digest && (
            <div className="bg-stone-100 border-2 border-[#1c1917] p-3 text-xs font-mono text-stone-700 text-left max-w-md mx-auto overflow-x-auto">
              <span className="font-bold text-red-600 block">Error Reference Code:</span>
              <span>{error.digest}</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => reset()}
              className="paper-btn-primary px-6 py-3 text-base uppercase font-extrabold inline-flex items-center space-x-2 w-full sm:w-auto justify-center cursor-pointer"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Try Again</span>
            </button>
            <Link
              href="/"
              className="paper-btn-secondary px-6 py-3 text-base uppercase font-extrabold inline-flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <Home className="w-5 h-5" />
              <span>Return Home</span>
            </Link>
          </div>

          {/* Contact Support Option */}
          <div className="pt-4 border-t-2 border-stone-200">
            <p className="text-xs text-stone-500 font-semibold">
              If this error keeps recurring, feel free to{" "}
              <Link href="/#contact" className="underline font-bold text-[#1c1917] hover:bg-[#e9f02c]">
                contact me directly
              </Link>
              .
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
