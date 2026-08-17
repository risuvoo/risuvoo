"use client";

import React, { useEffect } from "react";
import { AlertOctagon, RotateCcw, Home } from "lucide-react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Layout Error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-[#f7f6f0] text-[#1c1917] font-sans antialiased min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white border-4 border-[#1c1917] shadow-[6px_6px_0px_0px_#1c1917] p-6 sm:p-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-red-600 text-white font-extrabold px-4 py-1.5 text-xs tracking-wider uppercase border-2 border-[#1c1917]">
            <AlertOctagon className="w-4 h-4" />
            <span>Critical Layout Exception</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-black text-[#1c1917]">
              System Encountered an Error
            </h1>
            <p className="text-stone-700 text-sm font-medium leading-relaxed">
              A critical application error occurred. Click below to recover.
            </p>
          </div>

          {error?.digest && (
            <div className="bg-stone-100 border-2 border-[#1c1917] p-2 text-xs font-mono text-stone-700 text-left">
              <span>Digest: {error.digest}</span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => reset()}
              className="bg-[#e9f02c] text-[#1c1917] font-extrabold uppercase px-5 py-2.5 border-2 border-[#1c1917] shadow-[3px_3px_0px_0px_#1c1917] hover:translate-x-[-1px] hover:translate-y-[-1px] flex items-center justify-center space-x-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Page</span>
            </button>
            <Link
              href="/"
              className="bg-white text-[#1c1917] font-extrabold uppercase px-5 py-2.5 border-2 border-[#1c1917] shadow-[3px_3px_0px_0px_#1c1917] hover:translate-x-[-1px] hover:translate-y-[-1px] flex items-center justify-center space-x-2"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
