"use client";

import { Template } from "../data/templates";

type TemplateCardProps = {
  template: Template;
  isActive?: boolean;
  isFocused?: boolean;
  onClick?: () => void;
};

export default function TemplateCard({ template, isActive, isFocused, onClick }: TemplateCardProps) {
  return (
    <div className="relative w-full rounded-md group">
      {/* Shimmer Sweep Effect */}
      <div className="absolute top-0 bottom-0 left-0 w-[60%] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.04)_50%,transparent_100%)] opacity-0 group-hover:opacity-100 group-hover:animate-card-shimmer pointer-events-none z-20 rounded-md overflow-hidden" />

      {/* Main Button Surface */}
      <button
        onClick={onClick}
        className={`relative z-10 w-full flex items-start text-left gap-3 px-3 py-2.5 rounded-md transition-all duration-200 outline-none
          ${isActive 
            ? 'animate-card-breathing' 
            : isFocused 
              ? 'bg-[rgba(255,255,255,0.03)] hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.3)]' 
              : 'hover:bg-[rgba(255,255,255,0.03)] hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.3)] bg-transparent'}
        `}
        style={isActive ? {
          background: 'linear-gradient(90deg, rgba(94,106,210,0.08) 0%, transparent 100%)'
        } : {}}
      >
        <div className="flex-shrink-0 mt-0.5 text-base flex items-center relative">
          {/* Category Dot */}
          <div 
            className={`w-[6px] h-[6px] rounded-full absolute -left-2 ${isActive ? 'animate-dot-pulse' : ''}`}
            style={{ 
              backgroundColor: 
                template.category === 'frontend' ? '#22d3ee' :
                template.category === 'backend' ? '#10b981' :
                template.category === 'fullstack' ? '#7170ff' :
                template.category === 'mobile' ? '#f59e0b' :
                template.category === 'CLI' ? '#8a8f98' :
                template.category === 'monorepo' ? '#e06c75' : '#c678dd'
            }}
          />
          <span className="ml-1">{template.icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="text-[14px] font-[510] text-primary truncate leading-tight">
              {template.name}
            </h3>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity text-muted">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
          <p className="text-[12px] text-muted line-clamp-2 mt-1 leading-snug">
            {template.description}
          </p>
        </div>
      </button>
      
      <style jsx>{`
        @keyframes card-breathing {
          0%, 100% {
            box-shadow: inset 3px 0 0 rgba(113,112,255,0.6), inset 0 0 20px rgba(113,112,255,0.05);
          }
          50% {
            box-shadow: inset 3px 0 0 rgba(113,112,255,1.0), inset 0 0 20px rgba(113,112,255,0.05);
          }
        }
        .animate-card-breathing {
          animation: card-breathing 2s infinite ease-in-out;
        }

        @keyframes card-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-card-shimmer {
          animation: card-shimmer 600ms ease forwards;
        }

        @keyframes dot-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }
        .animate-dot-pulse {
          animation: dot-pulse 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
