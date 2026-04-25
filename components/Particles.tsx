"use client";
import { useEffect, useState } from "react";

export default function Particles() {
  const [particles, setParticles] = useState<{ id: number; left: string; delay: string; duration: string; width: string; opacityDur: string; color: string }[]>([]);

  useEffect(() => {
    // Generate 20 particles
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      delay: `${Math.random() * 20}s`,
      duration: `${15 + Math.random() * 20}s`,
      width: `${1 + Math.random() * 1.5}px`,
      opacityDur: `${3 + Math.random() * 4}s`,
      color: Math.random() > 0.5 ? "rgba(113,112,255,0.15)" : "rgba(34,211,238,0.1)",
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bottom-[-20px] rounded-full animate-particle-float"
          style={{
            left: p.left,
            width: p.width,
            height: '20px',
            backgroundColor: p.color,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        >
          <div 
            className="w-full h-full animate-particle-pulse"
            style={{
              animationDuration: p.opacityDur,
              animationDelay: p.delay,
              backgroundColor: 'inherit'
            }}
          />
        </div>
      ))}
    </div>
  );
}
