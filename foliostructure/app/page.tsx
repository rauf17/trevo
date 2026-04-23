"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Toolbar from "@/components/Toolbar";
import TreeView from "@/components/TreeView";
import { templates } from "@/data/templates";

export default function Page() {
  const [activeTemplateId, setActiveTemplateId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeTemplate = templates.find(t => t.id === activeTemplateId);

  // Trigger shimmer when active template changes
  useEffect(() => {
    if (activeTemplateId) {
      setIsTransitioning(true);
      const timer = setTimeout(() => setIsTransitioning(false), 400);
      return () => clearTimeout(timer);
    }
  }, [activeTemplateId]);

  return (
    <div className="flex flex-col h-screen w-full overflow-hidden bg-page text-primary relative">
      {/* Radial Gradient Hero Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] w-full" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(94,106,210,0.04) 0%, transparent 70%)' }} />

      {/* Top Navbar */}
      <header className="h-[48px] shrink-0 w-full bg-panel border-b border-[var(--border-subtle)] flex items-center justify-between px-4 z-20 relative">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-muted hover:text-primary transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          
          <div className="flex items-center gap-2 text-primary opacity-80">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
            </svg>
            <h1 className="text-[15px] font-[510] tracking-tight">FolioStructure</h1>
          </div>
        </div>

        <a href="#" className="text-muted hover:text-primary transition-colors" title="GitHub">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        </a>
      </header>

      {/* Main Layout */}
      <div className="flex-1 flex overflow-hidden relative z-10">
        <Sidebar 
          activeTemplateId={activeTemplateId} 
          onSelectTemplate={setActiveTemplateId} 
          isOpenMobile={isMobileMenuOpen}
          onCloseMobile={() => setIsMobileMenuOpen(false)}
        />
        
        <main className="flex-1 flex flex-col relative h-full overflow-y-auto w-full">
          {activeTemplate ? (
            <div className="flex flex-col max-w-4xl w-full p-6 md:p-10 gap-6 md:gap-8 mx-auto">
              {/* Header Area */}
              <div className="flex flex-col gap-3 mt-2 md:mt-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[32px] leading-none">{activeTemplate.icon}</span>
                  <h2 className="text-[20px] md:text-[24px] font-[510] tracking-[-0.288px] text-primary leading-tight">
                    {activeTemplate.name}
                  </h2>
                  <span className="px-2 py-0.5 rounded-full border border-accent text-[10px] font-[510] text-accent uppercase tracking-wider ml-0 md:ml-2">
                    {activeTemplate.category}
                  </span>
                </div>
                <p className="text-[14px] md:text-[15px] font-normal text-muted max-w-2xl">
                  {activeTemplate.description}
                </p>
              </div>

              {/* Toolbar */}
              <div className="overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <Toolbar template={activeTemplate} />
              </div>

              {/* Tree Area */}
              <div className="bg-surface border border-[var(--border-default)] rounded-[8px] p-[16px] md:p-[20px] min-h-[300px]">
                {isTransitioning ? (
                  /* Shimmer Skeleton */
                  <div className="flex flex-col gap-3 opacity-60">
                    <div className="h-5 w-[40%] rounded animate-shimmer" />
                    <div className="h-5 w-[30%] rounded animate-shimmer ml-6" />
                    <div className="h-5 w-[45%] rounded animate-shimmer ml-6" />
                    <div className="h-5 w-[35%] rounded animate-shimmer ml-12" />
                    <div className="h-5 w-[50%] rounded animate-shimmer ml-12" />
                    <div className="h-5 w-[40%] rounded animate-shimmer ml-6" />
                  </div>
                ) : (
                  <TreeView key={activeTemplate.id} tree={activeTemplate.tree} />
                )}
              </div>
            </div>
          ) : (
            /* Empty State */
            <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center p-6">
              <span className="text-4xl opacity-80 mb-2">📁</span>
              <p className="text-subtle text-[15px] font-normal">Select a template to get started</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
