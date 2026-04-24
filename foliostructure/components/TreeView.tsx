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

export default function TreeView({ tree, depth = 0, activeLines = [], searchQuery = "" }: { tree: TreeNode[], depth?: number, activeLines?: number[], searchQuery?: string }) {
  return (
    <div className="flex flex-col w-full">
      {depth === 0 && (
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes tree-fade-in {
            from { opacity: 0; transform: translateY(4px); }
            to { opacity: 1; transform: translateY(0); }
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
            searchQuery={searchQuery}
          />
        );
      })}
    </div>
  );
}

const hasMatch = (node: TreeNode, query: string): boolean => {
  if (!query) return true;
  if (node.name.toLowerCase().includes(query.toLowerCase())) return true;
  if (node.children) {
    return node.children.some(child => hasMatch(child, query));
  }
  return false;
};

function TreeItem({ node, depth, index, isLast, activeLines, searchQuery }: { node: TreeNode, depth: number, index: number, isLast: boolean, activeLines: number[], searchQuery: string }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isFlashing, setIsFlashing] = useState(false);
  const isFolder = node.type === "folder";
  
  useEffect(() => {
    const handleToggle = (e: CustomEvent) => {
      if (isFolder) setIsOpen(e.detail.expand);
    };
    window.addEventListener('toggle-all-nodes', handleToggle as EventListener);
    return () => window.removeEventListener('toggle-all-nodes', handleToggle as EventListener);
  }, [isFolder]);
  
  const handleNodeClick = () => {
    if (isFolder) {
      if (!isOpen) {
        setIsFlashing(true);
        setTimeout(() => setIsFlashing(false), 400);
      }
      setIsOpen(!isOpen);
    }
  };

  const nextActiveLines = isLast ? activeLines : [...activeLines, depth];

  const isMatch = hasMatch(node, searchQuery);
  const showAsFaded = searchQuery && !isMatch;
  const showAsHighlight = searchQuery && isMatch && node.name.toLowerCase().includes(searchQuery.toLowerCase());

  // Automatically open folders if they contain a match
  useEffect(() => {
    if (searchQuery && isMatch && isFolder) {
      setIsOpen(true);
    }
  }, [searchQuery, isMatch, isFolder]);

  return (
    <div className="w-full">
      <div 
        className={`group w-full flex items-center relative hover:bg-[rgba(255,255,255,0.03)] cursor-pointer py-[5px] pr-2 rounded-sm transition-all duration-150 border-l-[2px] border-transparent hover:border-[rgba(113,112,255,0.4)]
          ${showAsFaded ? 'opacity-20 blur-[1px]' : 'opacity-100 blur-0'}
          ${showAsHighlight ? 'bg-[rgba(113,112,255,0.05)]' : 'bg-transparent'}
        `}
        style={{ 
          paddingLeft: `${depth * 20 + 6}px`, 
          animation: 'tree-fade-in 200ms ease-out forwards',
          opacity: 0,
          animationDelay: `${(depth * 5 + index) * 20}ms`
        }}
        onClick={handleNodeClick}
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

        <div className="flex items-center gap-1.5 relative z-10 w-full justify-between pr-2">
          <div className="flex items-center gap-1.5">
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
            
            <span className={`font-mono text-[13px] truncate transition-all duration-150 ${isFolder ? 'text-[var(--text-secondary)]' : `${getFileColor(node.name)} group-hover:[text-shadow:0_0_8px_currentColor]`}`}>
              {node.name}
            </span>
          </div>

          {isFolder && node.children && (
            <span 
              className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono transition-colors duration-400 ${isFlashing ? 'bg-[rgba(113,112,255,0.2)] text-[var(--accent-bright)]' : 'bg-[rgba(255,255,255,0.03)] text-[var(--text-muted)]'}`}
            >
              {node.children.length}
            </span>
          )}
        </div>
      </div>

      {isFolder && node.children && (
        <div className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <TreeView tree={node.children} depth={depth + 1} activeLines={nextActiveLines} searchQuery={searchQuery} />
        </div>
      )}
    </div>
  );
}
