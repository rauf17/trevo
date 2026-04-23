"use client";

import { useState, useEffect } from "react";
import { TreeNode } from "../data/templates";

const getFileColor = (name: string) => {
  if (name.endsWith('.ts') || name.endsWith('.tsx')) return 'text-[var(--accent-bright)]';
  if (name.endsWith('.json') || name.endsWith('.yaml') || name.endsWith('.yml')) return 'text-[#e5c07b]';
  if (name.endsWith('.md')) return 'text-[#98c379]';
  if (name === '.env' || name.startsWith('.env.') || name === '.gitignore') return 'text-[#e06c75]';
  if (name.endsWith('.css') || name.endsWith('.scss')) return 'text-[#c678dd]';
  return 'text-[var(--text-muted)]';
};

export default function TreeView({ tree, depth = 0, activeLines = [] }: { tree: TreeNode[], depth?: number, activeLines?: number[] }) {
  return (
    <div className="flex flex-col w-full">
      {depth === 0 && (
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes tree-fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}} />
      )}
      {tree.map((node, i) => {
        const isLast = i === tree.length - 1;
        return (
          <TreeItem 
            key={node.name + i} 
            node={node} 
            depth={depth} 
            index={i} 
            isLast={isLast} 
            activeLines={activeLines}
          />
        );
      })}
    </div>
  );
}

function TreeItem({ node, depth, index, isLast, activeLines }: { node: TreeNode, depth: number, index: number, isLast: boolean, activeLines: number[] }) {
  const [isOpen, setIsOpen] = useState(true);
  const isFolder = node.type === "folder";
  
  useEffect(() => {
    const handleToggle = (e: CustomEvent) => {
      if (isFolder) setIsOpen(e.detail.expand);
    };
    window.addEventListener('toggle-all-nodes', handleToggle as EventListener);
    return () => window.removeEventListener('toggle-all-nodes', handleToggle as EventListener);
  }, [isFolder]);
  
  const nextActiveLines = isLast ? activeLines : [...activeLines, depth];

  return (
    <div className="w-full">
      <div 
        className="w-full flex items-center relative hover:bg-[rgba(255,255,255,0.03)] cursor-pointer py-[5px] pr-2 rounded-sm transition-colors"
        style={{ 
          paddingLeft: `${depth * 20 + 8}px`, 
          animation: 'tree-fade-in 0.2s ease-out forwards',
          opacity: 0,
          animationDelay: `${(depth * 5 + index) * 10}ms`
        }}
        onClick={() => isFolder && setIsOpen(!isOpen)}
      >
        {Array.from({ length: depth }).map((_, d) => {
          if (d === depth - 1) {
            return (
              <div key={d} className="absolute top-0 bottom-0 pointer-events-none" style={{ left: `${d * 20 + 14}px`, width: '10px' }}>
                <div className="absolute top-0 w-[1px] bg-[var(--border-default)]" style={{ bottom: isLast ? '50%' : 0 }} />
                <div className="absolute top-[50%] w-full h-[1px] bg-[var(--border-default)]" />
              </div>
            );
          } else if (activeLines.includes(d)) {
            return (
              <div 
                key={d}
                className="absolute top-0 bottom-0 w-[1px] bg-[var(--border-default)] pointer-events-none"
                style={{ left: `${d * 20 + 14}px` }}
              />
            );
          }
          return null;
        })}

        <div className="flex items-center gap-1.5 relative z-10 w-full">
          {isFolder ? (
            <svg 
              width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className={`text-[var(--text-secondary)] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          ) : (
            <span className="w-3 shrink-0" />
          )}
          
          <span className={`font-mono text-[13px] truncate ${isFolder ? 'text-[var(--text-secondary)]' : getFileColor(node.name)}`}>
            {node.name}
          </span>
        </div>
      </div>

      {isFolder && isOpen && node.children && (
        <TreeView tree={node.children} depth={depth + 1} activeLines={nextActiveLines} />
      )}
    </div>
  );
}
