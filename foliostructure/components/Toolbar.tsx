"use client";

import { useState } from "react";
import { Template } from "../data/templates";
import { generateFullAsciiTree, generateFullIndentTree } from "../utils/treeToAscii";
import { useToast } from "@/components/ToastProvider";

type ToolbarProps = {
  template: Template;
  viewMode: "ide" | "ascii";
  setViewMode: (mode: "ide" | "ascii") => void;
  treeSearchQuery: string;
  setTreeSearchQuery: (query: string) => void;
};

export default function Toolbar({ template, viewMode, setViewMode, treeSearchQuery, setTreeSearchQuery }: ToolbarProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const { addToast } = useToast();

  const handleCopy = () => {
    const treeText = viewMode === "ascii" 
      ? generateFullAsciiTree(template.id, template.tree)
      : generateFullIndentTree(template.id, template.tree);
      
    navigator.clipboard.writeText(treeText);
    addToast("Copied to clipboard");
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
    
    addToast("Download started", `${template.id}-structure.txt`, "download");
  };

  const handleToggleAll = () => {
    const newExpandedState = !isExpanded;
    setIsExpanded(newExpandedState);
    window.dispatchEvent(new CustomEvent('toggle-all-nodes', { detail: { expand: newExpandedState } }));
  };

  return (
    <div className="flex items-center w-full min-w-max">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes toolbar-btn-in {
          0% { transform: translateY(8px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-toolbar-btn {
          opacity: 0;
          animation: toolbar-btn-in 250ms ease-out forwards;
        }
      `}} />
      
      <div className="flex items-center gap-2">
        <button 
          onClick={handleCopy}
          className="animate-toolbar-btn px-3 py-1.5 bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.05)] border border-[var(--border-default)] rounded-[6px] text-[13px] font-[510] text-[var(--text-secondary)] transition-all duration-100 hover:scale-[1.02] active:scale-96 hover:brightness-110 flex items-center justify-center gap-2 cursor-pointer outline-none focus:border-[var(--accent-bright)] min-w-[130px]"
          style={{ animationDelay: '0ms' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          Copy as Text
        </button>

        <button 
          onClick={handleDownload}
          className="animate-toolbar-btn px-3 py-1.5 bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.05)] border border-[var(--border-default)] rounded-[6px] text-[13px] font-[510] text-[var(--text-secondary)] transition-all duration-100 hover:scale-[1.02] active:scale-96 hover:brightness-110 flex items-center gap-2 cursor-pointer outline-none focus:border-[var(--accent-bright)]"
          style={{ animationDelay: '80ms' }}
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
          className="animate-toolbar-btn px-3 py-1.5 bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.05)] border border-[var(--border-default)] rounded-[6px] text-[13px] font-[510] text-[var(--text-secondary)] transition-all duration-100 hover:scale-[1.02] active:scale-96 hover:brightness-110 flex items-center gap-2 cursor-pointer outline-none focus:border-[var(--accent-bright)]"
          style={{ animationDelay: '160ms' }}
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

      {/* Tree Search Input */}
      {viewMode === "ide" && (
        <div className="flex-1 max-w-[200px] ml-4 animate-toolbar-btn" style={{ animationDelay: '200ms' }}>
          <div className="relative flex items-center w-full">
            <div className="absolute left-2.5 text-subtle pointer-events-none">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search files..."
              value={treeSearchQuery}
              onChange={(e) => setTreeSearchQuery(e.target.value)}
              className="w-full bg-[rgba(255,255,255,0.02)] border border-[var(--border-default)] rounded-[6px] pl-7 pr-3 py-1.5 text-[12px] text-primary placeholder-[var(--text-subtle)] outline-none focus:border-[rgba(113,112,255,0.4)] focus:shadow-[0_0_0_3px_rgba(113,112,255,0.1)] focus:bg-[rgba(255,255,255,0.04)] transition-all"
            />
          </div>
        </div>
      )}

      {/* View Switcher */}
      <div className="ml-auto flex items-center gap-1 bg-[rgba(255,255,255,0.02)] border border-[var(--border-default)] p-1 rounded-[8px] animate-toolbar-btn" style={{ animationDelay: '240ms' }}>
        <button
          onClick={() => setViewMode("ide")}
          className={`flex items-center justify-center py-1 px-2.5 rounded-[6px] transition-all duration-100 hover:scale-[1.02] active:scale-96 hover:brightness-110
            ${viewMode === "ide" 
              ? "text-white shadow-[0_2px_8px_rgba(94,106,210,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]" 
              : "text-muted hover:text-primary"}
          `}
          style={viewMode === "ide" ? { background: 'linear-gradient(135deg, rgba(94,106,210,0.9), rgba(113,112,255,0.7))' } : {}}
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
          className={`flex items-center justify-center py-1 px-2.5 rounded-[6px] transition-all duration-100 hover:scale-[1.02] active:scale-96 hover:brightness-110
            ${viewMode === "ascii" 
              ? "text-white shadow-[0_2px_8px_rgba(94,106,210,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]" 
              : "text-muted hover:text-primary"}
          `}
          style={viewMode === "ascii" ? { background: 'linear-gradient(135deg, rgba(94,106,210,0.9), rgba(113,112,255,0.7))' } : {}}
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
