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
      {/* Main Button Surface */}
      <button
        onClick={onClick}
        className={`relative z-10 w-full flex items-start text-left gap-3 px-3 py-2.5 rounded-md transition-all duration-200 outline-none
          ${isActive 
            ? 'animate-card-breathing' 
            : isFocused 
              ? 'bg-[rgba(255,255,255,0.03)] hover:translate-x-[3px]' 
              : 'hover:bg-[rgba(255,255,255,0.03)] hover:translate-x-[3px] bg-transparent'}
        `}
        style={isActive ? {
          background: 'linear-gradient(90deg, rgba(94,106,210,0.08) 0%, transparent 100%)'
        } : {}}
      >
        <div className="flex-shrink-0 mt-0.5 text-base">
          {template.icon}
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
      `}</style>
    </div>
  );
}
