"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Toolbar from "@/components/Toolbar";
import TreeView from "@/components/TreeView";
import { templates } from "@/data/templates";

export default function Page() {
  const [activeTemplateId, setActiveTemplateId] = useState<string | null>(null);

  const activeTemplate = templates.find(t => t.id === activeTemplateId);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-page text-primary">
      <Sidebar activeTemplateId={activeTemplateId} onSelectTemplate={setActiveTemplateId} />
      
      <main className="flex-1 flex flex-col relative h-full overflow-y-auto">
        {activeTemplate ? (
          <div className="flex flex-col max-w-4xl w-full p-10 gap-8 mx-auto">
            {/* Header Area */}
            <div className="flex flex-col gap-3 mt-4">
              <div className="flex items-center gap-3">
                <span className="text-[32px] leading-none">{activeTemplate.icon}</span>
                <h2 className="text-[24px] font-[510] tracking-[-0.288px] text-primary leading-tight">
                  {activeTemplate.name}
                </h2>
                <span className="px-2 py-0.5 rounded-full border border-accent text-[10px] font-[510] text-accent uppercase tracking-wider ml-2">
                  {activeTemplate.category}
                </span>
              </div>
              <p className="text-[15px] font-normal text-muted max-w-2xl">
                {activeTemplate.description}
              </p>
            </div>

            {/* Toolbar */}
            <Toolbar template={activeTemplate} />

            {/* Tree Area */}
            <div className="bg-surface border border-[var(--border-default)] rounded-[8px] p-[20px]">
               {/* We use a key to completely re-render TreeView when template changes so animations restart */}
               <TreeView key={activeTemplate.id} tree={activeTemplate.tree} />
            </div>
          </div>
        ) : (
          /* Empty State */
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
            <span className="text-4xl opacity-80 mb-2">📁</span>
            <p className="text-subtle text-[15px] font-normal">Select a template to get started</p>
          </div>
        )}
      </main>
    </div>
  );
}
