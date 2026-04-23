"use client";

import { Template } from "../data/templates";

type TemplateCardProps = {
  template: Template;
  isActive?: boolean;
  onClick?: () => void;
};

export default function TemplateCard({ template, isActive, onClick }: TemplateCardProps) {
  return (
    <button
      onClick={onClick}
      className={`group w-full flex items-start text-left gap-3 px-3 py-2.5 rounded-md transition-colors outline-none border-l-2
        ${isActive ? 'bg-[rgba(255,255,255,0.03)] border-[var(--accent-bright)]' : 'hover:bg-[rgba(255,255,255,0.03)] border-transparent'}
      `}
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
  );
}
