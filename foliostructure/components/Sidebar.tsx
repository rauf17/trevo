"use client";

import { useState, useEffect, useRef } from "react";
import { templates } from "../data/templates";
import TemplateCard from "./TemplateCard";

const CATEGORIES = ["All", "Frontend", "Backend", "Fullstack", "Mobile", "CLI", "Monorepo"];

type SidebarProps = {
  activeTemplateId: string | null;
  onSelectTemplate: (id: string) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
};

export default function Sidebar({ activeTemplateId, onSelectTemplate, isOpenMobile, onCloseMobile }: SidebarProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const listRef = useRef<HTMLDivElement>(null);

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
        className={`fixed inset-y-0 left-0 z-50 w-[280px] bg-panel border-r border-[var(--border-subtle)] flex flex-col transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0
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
              className="w-full bg-[rgba(255,255,255,0.04)] border border-[var(--border-default)] rounded-[6px] pl-8 pr-3 py-1.5 text-[13px] text-primary placeholder-[var(--text-subtle)] outline-none focus:border-[var(--accent-bright)] focus:bg-[rgba(255,255,255,0.06)] transition-all"
            />
          </div>
        </div>

        {/* Pills */}
        <div className="px-3 pb-3 flex flex-wrap gap-1.5 border-b border-[var(--border-subtle)]">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-2.5 py-0.5 rounded-full border text-[12px] font-[510] transition-colors
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
        <div 
          className="flex-1 overflow-y-auto p-2 space-y-0.5 outline-none"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          ref={listRef}
        >
          {filteredTemplates.length > 0 ? (
            filteredTemplates.map((template, index) => (
              <div 
                key={template.id} 
                onMouseEnter={() => setFocusedIndex(index)}
              >
                <TemplateCard 
                  template={template} 
                  isActive={activeTemplateId === template.id}
                  isFocused={index === focusedIndex}
                  onClick={() => {
                    onSelectTemplate(template.id);
                    if (window.innerWidth < 768) onCloseMobile();
                  }}
                />
              </div>
            ))
          ) : (
            <div className="p-6 text-center text-[13px] text-muted">
              No templates match your search.
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
