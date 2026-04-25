"use client";

import { useState, useEffect, useRef } from "react";
import { templates, Template } from "../data/templates";
import TemplateCard from "./TemplateCard";

const CATEGORIES = ["All", "frontend", "backend", "fullstack", "mobile", "CLI", "devops", "other"];

type SidebarProps = {
  activeTemplateId: string | null;
  onSelectTemplate: (id: string) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  showSplash?: boolean;
};

export default function Sidebar({ activeTemplateId, onSelectTemplate, isOpenMobile, onCloseMobile, showSplash = false }: SidebarProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const [isPoofing, setIsPoofing] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const [isFiltering, setIsFiltering] = useState(false);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  
  const [hoveredTemplate, setHoveredTemplate] = useState<Template | null>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const [previewTop, setPreviewTop] = useState(0);

  const filteredTemplates = templates.filter(t => {
    const matchesCategory = activeCategory === "All" || t.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Reset focus when filter changes
  useEffect(() => {
    setFocusedIndex(-1);
  }, [searchQuery, activeCategory]);

  const handleCategorySwitch = (category: string) => {
    if (category === activeCategory) return;
    setIsFiltering(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsFiltering(false);
    }, 150);
  };

  const handleMouseEnter = (template: Template, e: React.MouseEvent) => {
    const top = e.currentTarget.getBoundingClientRect().top;
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setHoveredTemplate(template);
      setPreviewTop(top);
    }, 800);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setHoveredTemplate(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (filteredTemplates.length === 0) return;
    
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex(prev => (prev < filteredTemplates.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex(prev => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter" && focusedIndex >= 0) {
      e.preventDefault();
      onSelectTemplate(filteredTemplates[focusedIndex].id);
      if (window.innerWidth < 768) {
        onCloseMobile();
      }
    }
  };

  // Keep focused item in view
  useEffect(() => {
    if (focusedIndex >= 0 && listRef.current) {
      const activeEl = listRef.current.children[focusedIndex] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [focusedIndex]);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpenMobile && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 md:hidden" 
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Drawer / Fixed Column */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-[320px] bg-panel border-r border-[var(--border-subtle)] flex flex-col transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0
          ${isOpenMobile ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Mobile Header */}
        <div className="px-4 py-4 md:hidden flex items-center justify-between border-b border-[var(--border-subtle)]">
          <h2 className="text-[15px] font-[510] text-primary">Menu</h2>
          <button onClick={onCloseMobile} className="text-muted hover:text-primary p-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Search */}
        <div className="px-3 py-3">
          <div className="relative flex items-center w-full group">
            <div className="absolute left-2.5 text-subtle pointer-events-none group-focus-within:text-accent-bright transition-colors">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[rgba(255,255,255,0.04)] border border-[var(--border-default)] rounded-[6px] pl-8 pr-[70px] py-1.5 text-[13px] text-primary placeholder-[var(--text-subtle)] outline-none focus:border-[rgba(113,112,255,0.4)] focus:shadow-[0_0_0_3px_rgba(113,112,255,0.1)] focus:bg-[rgba(255,255,255,0.06)] transition-all"
            />
            {searchQuery && (
              <>
                <div className="absolute right-7 text-[11px] text-[var(--text-subtle)] pointer-events-none">
                  {filteredTemplates.length} matches
                </div>
                <button 
                  onClick={() => {
                    setIsPoofing(true);
                    setTimeout(() => {
                      setSearchQuery("");
                      setIsPoofing(false);
                    }, 200);
                  }}
                  className={`absolute right-2.5 text-subtle hover:text-primary transition-colors ${isPoofing ? 'animate-poof' : ''}`}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Pills */}
        <div className="px-3 pb-3 flex flex-wrap gap-1.5 border-b border-[var(--border-subtle)]">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => handleCategorySwitch(category)}
              className={`px-2.5 py-0.5 rounded-full border text-[12px] font-[510] transition-all active:scale-95 duration-150
                ${activeCategory === category 
                  ? 'bg-accent border-accent text-white' 
                  : 'bg-transparent border-[var(--border-default)] text-secondary hover:text-primary hover:bg-[rgba(255,255,255,0.02)]'}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Templates List */}
        <div className="flex-1 relative flex flex-col overflow-hidden">
          <div 
            className="flex-1 overflow-y-auto p-2 space-y-0.5 outline-none"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            ref={listRef}
            onScroll={(e) => {
              const el = e.currentTarget;
              setIsScrolledToBottom(Math.abs(el.scrollHeight - el.scrollTop - el.clientHeight) < 10);
            }}
          >
            {filteredTemplates.length > 0 ? (
              filteredTemplates.map((template, index) => (
                <div 
                  key={template.id} 
                  onMouseEnter={(e) => {
                    setFocusedIndex(index);
                    handleMouseEnter(template, e);
                  }}
                  onMouseLeave={handleMouseLeave}
                  className={isFiltering ? "animate-category-out" : (!showSplash ? "animate-category-in" : "opacity-100")}
                  style={{ 
                    animationDelay: isFiltering ? `${index * 15}ms` : (!showSplash ? `${index * 60}ms` : '0ms'),
                    animationFillMode: 'forwards'
                  }}
                >
                  <TemplateCard 
                    template={template} 
                    isActive={activeTemplateId === template.id}
                    isFocused={index === focusedIndex}
                    onClick={() => {
                      onSelectTemplate(template.id);
                      handleMouseLeave();
                      if (window.innerWidth < 768) onCloseMobile();
                    }}
                  />
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-[13px] text-muted animate-shake">
                No files found
              </div>
            )}
          </div>
          <div className={`absolute bottom-0 left-0 right-0 h-[60px] bg-[linear-gradient(transparent,var(--bg-panel))] pointer-events-none z-10 transition-opacity duration-300 ${isScrolledToBottom ? 'opacity-0' : 'opacity-100'}`} />
        </div>
      </aside>

      {/* Floating Preview Tooltip */}
      {hoveredTemplate && (
        <div 
          className="hidden md:block fixed left-[324px] z-[60] bg-[#191a1b] border border-[rgba(255,255,255,0.08)] rounded-[10px] p-3 w-[200px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] animate-preview-in pointer-events-none"
          style={{ top: Math.min(previewTop, window.innerHeight - 150) + 'px' }}
        >
          <div className="text-[13px] font-[510] text-primary mb-1 truncate">{hoveredTemplate.name}</div>
          <div className="text-[11px] text-muted mb-2">
            {hoveredTemplate.tree.filter(n => n.type === 'file').length} files, {hoveredTemplate.tree.filter(n => n.type === 'folder').length} folders
          </div>
          <div className="text-[11px] font-mono text-subtle flex flex-col gap-0.5">
            {hoveredTemplate.tree.slice(0, 5).map((node, i) => (
              <div key={i} className="truncate">{node.type === 'folder' ? '📁' : '📄'} {node.name}</div>
            ))}
            {hoveredTemplate.tree.length > 5 && <div className="mt-0.5 text-[10px] opacity-60">...</div>}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes category-in {
          0% { opacity: 0; transform: translateY(4px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-category-in {
          opacity: 0;
          animation: category-in 200ms ease-out forwards;
        }

        @keyframes category-out {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-4px); }
        }
        .animate-category-out {
          animation: category-out 150ms ease-in forwards;
        }

        @keyframes preview-in {
          0% { opacity: 0; transform: translateX(-8px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-preview-in {
          animation: preview-in 200ms ease-out forwards;
        }

        @keyframes poof {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.5; }
          100% { transform: scale(0); opacity: 0; }
        }
        .animate-poof { animation: poof 200ms ease-out forwards; }
        
        @keyframes shake {
          0% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
          100% { transform: translateX(0); }
        }
        .animate-shake { animation: shake 400ms ease-in-out; }
      `}</style>
    </>
  );
}
