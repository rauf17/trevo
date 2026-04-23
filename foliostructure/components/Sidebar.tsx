"use client";

import { useState } from "react";
import { templates } from "../data/templates";
import TemplateCard from "./TemplateCard";

const CATEGORIES = ["All", "Frontend", "Backend", "Fullstack", "Mobile", "CLI", "Monorepo"];

export default function Sidebar() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTemplateId, setActiveTemplateId] = useState<string | null>(null);

  const filteredTemplates = templates.filter(t => {
    const matchesCategory = activeCategory === "All" || t.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <aside className="w-[280px] h-full flex flex-col bg-panel border-r border-[var(--border-subtle)] shrink-0">
      {/* Header */}
      <div className="px-4 py-4 flex items-center gap-2 border-b border-[var(--border-subtle)]">
        <div className="text-primary opacity-80">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
          </svg>
        </div>
        <h1 className="text-[15px] font-[510] text-primary tracking-tight">FolioStructure</h1>
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
      <div className="flex-1 overflow-y-auto p-2 space-y-0.5">
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map(template => (
            <TemplateCard 
              key={template.id} 
              template={template} 
              isActive={activeTemplateId === template.id}
              onClick={() => setActiveTemplateId(template.id)}
            />
          ))
        ) : (
          <div className="p-6 text-center text-[13px] text-muted">
            No templates match your search.
          </div>
        )}
      </div>
    </aside>
  );
}
