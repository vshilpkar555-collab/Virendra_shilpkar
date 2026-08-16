"use client";

import React from "react";

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`${className} relative flex items-center justify-center group select-none`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl transition-all duration-500 group-hover:scale-110"
      >
        <defs>
          <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <filter id="logoGlowEffect" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Master Squircle - Modern iOS-inspired shape for a mobile developer aesthetic */}
        <path
          d="M0 32C0 12 12 0 32 0H68C88 0 100 12 100 32V68C100 88 88 100 68 100H32C12 100 0 88 0 68V32Z"
          fill="url(#brandGradient)"
        />

        {/* Precise Geometric 'V' - Representing Virendra & Engineering Excellence */}
        <path
          d="M30 35L50 75L70 35"
          stroke="white"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-300"
        />

        {/* Code Bracket Accent - A subtle nod to Flutter/Dart engineering */}
        <path
          d="M40 50L50 60L60 50"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-30 group-hover:opacity-90 transition-opacity duration-300"
        />
      </svg>

      {/* Interactive Aura Glow - Intensifies brand presence on hover */}
      <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10" />
    </div>
  );
}
