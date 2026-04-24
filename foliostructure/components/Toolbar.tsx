"use client";

import { useState } from "react";
import { Template } from "../data/templates";
import { generateFullAsciiTree, generateFullIndentTree } from "../utils/treeToAscii";

type ToolbarProps = {
  template: Template;
  viewMode: "ide" | "ascii";
  setViewMode: (mode: "ide" | "ascii") => void;
};

export default function Toolbar({ template, viewMode, setViewMode }: ToolbarProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const treeText = viewMode === "ascii" 
      ? generateFullAsciiTree(template.id, template.tree)
      : generateFullIndentTree(template.id, template.tree);
      
    navigator.clipboard.writeText(treeText);
    
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleDownload = () => {
    const treeText = viewMode === "ascii" 
      ? generateFullAsciiTree(template.id, template.tree)
      : generateFullIndentTree(template.id, template.tree);
      
    const blob = new Blob([treeText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${template.id}-structure.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleToggleAll = () => {
    const newExpandedState = !isExpanded;
    setIsExpanded(newExpandedState);
    window.dispatchEvent(new CustomEvent('toggle-all-nodes', { detail: { expand: newExpandedState } }));
  };

  return (
    <div className="flex items-center w-full min-w-max">
      <div className="flex items-center gap-2">
        <button 
          onClick={handleCopy}
          className="px-3 py-1.5 bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.05)] border border-[var(--border-default)] rounded-[6px] text-[13px] font-[510] text-[var(--text-secondary)] transition-all duration-100 hover:scale-[1.02] hover:brightness-110 flex items-center justify-center gap-2 cursor-pointer outline-none focus:border-[var(--accent-bright)] min-w-[130px]"
        >
          {copied ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-in zoom-in duration-200">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-[#10b981]">Copied!</span>
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy as Text
            </>
          )}
        </button>

        <button 
          onClick={handleDownload}
          className="px-3 py-1.5 bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.05)] border border-[var(--border-default)] rounded-[6px] text-[13px] font-[510] text-[var(--text-secondary)] transition-all duration-100 hover:scale-[1.02] hover:brightness-110 flex items-center gap-2 cursor-pointer outline-none focus:border-[var(--accent-bright)]"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download .txt
        </button>

        <button 
          onClick={handleToggleAll}
          className="px-3 py-1.5 bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.05)] border border-[var(--border-default)] rounded-[6px] text-[13px] font-[510] text-[var(--text-secondary)] transition-all duration-100 hover:scale-[1.02] hover:brightness-110 flex items-center gap-2 cursor-pointer outline-none focus:border-[var(--accent-bright)]"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isExpanded ? (
              <>
                <path d="M4 14h6v6" />
                <path d="M20 10h-6V4" />
                <path d="M14 10l7-7" />
                <path d="M3 21l7-7" />
              </>
            ) : (
              <>
                <path d="M15 3h6v6" />
                <path d="M9 21H3v-6" />
                <path d="M21 3l-7 7" />
                <path d="M3 21l7-7" />
              </>
            )}
          </svg>
          {isExpanded ? "Collapse All" : "Expand All"}
        </button>
      </div>

      {/* View Switcher */}
      <div className="ml-auto flex items-center gap-1 bg-[rgba(255,255,255,0.02)] border border-[var(--border-default)] p-1 rounded-[8px]">
        <button
          onClick={() => setViewMode("ide")}
          className={`flex items-center justify-center py-1 px-2.5 rounded-[6px] transition-all duration-100 hover:scale-[1.02] hover:brightness-110
            ${viewMode === "ide" 
              ? "bg-accent text-white shadow-sm" 
              : "text-muted hover:text-primary"}
          `}
          title="IDE View"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="9" y1="3" x2="9" y2="21" />
            <path d="M13 8h4" />
            <path d="M13 12h2" />
          </svg>
        </button>
        
        <button
          onClick={() => setViewMode("ascii")}
          className={`flex items-center justify-center py-1 px-2.5 rounded-[6px] transition-all duration-100 hover:scale-[1.02] hover:brightness-110
            ${viewMode === "ascii" 
              ? "bg-accent text-white shadow-sm" 
              : "text-muted hover:text-primary"}
          `}
          title="ASCII View"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>
        </button>
      </div>
    </div>
  );
}
