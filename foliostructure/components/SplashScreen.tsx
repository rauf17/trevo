"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 3600);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#08090a] flex flex-col items-center justify-center pointer-events-none overflow-hidden">
      <div className="relative flex flex-col items-center justify-center animate-splash-fadeout">
        {/* Glow */}
        <div 
          className="absolute w-[200px] h-[200px] rounded-full blur-[40px] animate-splash-glow"
          style={{ background: 'radial-gradient(circle, rgba(113,112,255,0.3) 0%, rgba(34,211,238,0.1) 50%, transparent 100%)' }}
        />
        <div 
          className="absolute w-[200px] h-[200px] rounded-full animate-[spin_3s_linear_infinite]"
          style={{ background: 'conic-gradient(from 0deg, rgba(34,211,238,0.2), rgba(113,112,255,0.2), transparent, rgba(34,211,238,0.2))' }}
        />
        
        {/* Logo */}
        <div className="relative z-10 animate-splash-logo mb-6">
          <Logo className="w-16 h-16 splash-logo-svg" />
        </div>
        
        {/* Wordmark */}
        <h1 className="relative z-10 text-[32px] font-[510] text-primary tracking-[-0.704px] animate-splash-text">
          Trevo
        </h1>
        
        {/* Tagline */}
        <p className="relative z-10 text-[13px] text-subtle mt-2 animate-splash-tagline">
          folder structure generator
        </p>

        {/* Line */}
        <div className="relative z-10 h-[1px] mt-6 animate-splash-line" style={{ background: 'linear-gradient(90deg, transparent, #7170ff, transparent)' }} />
      </div>

      {/* Progress bar at bottom */}
      <div className="absolute bottom-0 left-0 h-[3px] animate-splash-progress" style={{ 
        background: 'linear-gradient(90deg, #22d3ee, #7170ff)',
        boxShadow: '0 0 8px rgba(113,112,255,0.6)'
      }} />

      <style jsx>{`
        @keyframes splash-logo {
          0% { transform: scale(0.3); opacity: 0; }
          1% { opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-splash-logo {
          opacity: 0;
          animation: splash-logo 700ms cubic-bezier(0.34, 1.56, 0.64, 1) 200ms forwards;
        }

        /* SVG Stagger */
        @keyframes svg-part-in {
          0% { opacity: 0; transform: translateY(4px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .splash-logo-svg :global(.tree-trunk) { animation: svg-part-in 400ms ease-out 300ms both; }
        .splash-logo-svg :global(.tree-branch) { animation: svg-part-in 400ms ease-out 450ms both; }
        .splash-logo-svg :global(.tree-folder) { animation: svg-part-in 400ms ease-out 600ms both; }

        @keyframes splash-glow {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-splash-glow {
          opacity: 0;
          animation: splash-glow 600ms ease-out 900ms forwards;
        }

        @keyframes splash-text {
          0% { transform: translateY(10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-splash-text {
          opacity: 0;
          animation: splash-text 500ms ease-out 1000ms forwards;
        }

        @keyframes splash-tagline {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-splash-tagline {
          opacity: 0;
          animation: splash-tagline 400ms ease-out 1400ms forwards;
        }

        @keyframes splash-line {
          0% { width: 0px; opacity: 0; }
          10% { opacity: 1; }
          100% { width: 120px; opacity: 1; }
        }
        .animate-splash-line {
          width: 0px;
          opacity: 0;
          animation: splash-line 500ms ease-out 1700ms forwards;
        }

        @keyframes splash-progress {
          0% { width: 0%; opacity: 0; }
          1% { opacity: 1; }
          100% { width: 100%; opacity: 1; }
        }
        .animate-splash-progress {
          width: 0%;
          opacity: 0;
          animation: splash-progress 1200ms ease-in-out 2000ms forwards;
        }

        @keyframes splash-fadeout {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-12px); }
        }
        .animate-splash-fadeout {
          animation: splash-fadeout 400ms ease-in 3200ms forwards;
        }
      `}</style>
    </div>
  );
}
