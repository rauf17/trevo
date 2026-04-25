"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Toolbar from "@/components/Toolbar";
import TreeView from "@/components/TreeView";
import SplashScreen from "@/components/SplashScreen";
import Logo from "@/components/Logo";
import { templates } from "@/data/templates";
import { generateFullAsciiTree } from "@/utils/treeToAscii";
import { calculateTreeStats } from "@/utils/treeStats";

function CountUp({ end, duration = 600 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOut cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}</span>;
}

export default function Page() {
  const [showSplash, setShowSplash] = useState(true);
  const [appReady, setAppReady] = useState(false);
  const [activeTemplateId, setActiveTemplateId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [viewMode, setViewMode] = useState<"ide" | "ascii">("ide");
  const [isFlipping, setIsFlipping] = useState(false);
  const [currentViewMode, setCurrentViewMode] = useState<"ide" | "ascii">("ide");

  const [treeSearchQuery, setTreeSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const activeTemplate = templates?.find(t => t?.id === activeTemplateId);
  const stats = activeTemplate ? calculateTreeStats(activeTemplate.tree) : null;

  // Splash screen readiness
  useEffect(() => {
    const timer = setTimeout(() => {
      setAppReady(true);
    }, 3600);
    return () => clearTimeout(timer);
  }, []);

  // Template switch transition logic
  const handleSelectTemplate = (id: string) => {
    if (id === activeTemplateId) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTemplateId(id);
      setTreeSearchQuery("");
      setIsTransitioning(false);
    }, 180);
  };

  const handleViewModeChange = (mode: "ide" | "ascii") => {
    if (mode === viewMode) return;
    setViewMode(mode);
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentViewMode(mode);
      setIsFlipping(false);
    }, 200);
  };

  const handleMainScroll = (e: React.UIEvent<HTMLElement>) => {
    setIsScrolled(e.currentTarget.scrollTop > 20);
  };

  // Mouse tracking for aurora background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      <div
        className="flex flex-col h-screen w-full overflow-hidden text-primary relative transition-opacity duration-400 ease-in-out"
        style={{ opacity: appReady ? 1 : 0 }}
      >
        {/* Dynamic Background */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] w-full z-0 animate-spotlight-breathe" style={{ background: 'radial-gradient(ellipse 800px 500px at 50% -100px, rgba(94,106,210,0.07) 0%, transparent 70%)' }} />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[600px] w-[600px] z-0 animate-spotlight-breathe" style={{ background: 'radial-gradient(ellipse 600px 400px at 100% 100%, rgba(34,211,238,0.03) 0%, transparent 60%)' }} />
        <div className="pointer-events-none fixed inset-0 z-0" style={{ background: 'radial-gradient(ellipse 1000px 600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(94,106,210,0.04) 0%, transparent 60%)' }} />

        {/* 3 Drifting Orbs */}
        <div className="fixed top-[10%] left-[10%] w-[400px] h-[400px] bg-[rgba(94,106,210,0.04)] rounded-full blur-[80px] pointer-events-none z-0 animate-orb-1" />
        <div className="fixed bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[rgba(34,211,238,0.03)] rounded-full blur-[80px] pointer-events-none z-0 animate-orb-2" />
        <div className="fixed top-[40%] right-[20%] w-[350px] h-[350px] bg-[rgba(113,112,255,0.03)] rounded-full blur-[80px] pointer-events-none z-0 animate-orb-3" />

        {/* Top Navbar */}
        <header className={`h-[48px] shrink-0 w-full flex items-center justify-between px-4 z-40 relative transition-all duration-300 ${isScrolled ? 'bg-[rgba(15,16,17,0.8)] backdrop-blur-[12px] border-b border-[rgba(255,255,255,0.05)]' : 'bg-panel border-b border-[var(--border-subtle)]'}`}>
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

            <div className="flex items-center gap-4">
              <div className="group relative flex items-center gap-2 cursor-pointer">
                <div className="transition-transform duration-200 ease-in-out group-hover:rotate-[8deg] group-hover:drop-shadow-[0_0_10px_rgba(113,112,255,0.7)]">
                  <Logo className="w-5 h-5" />
                </div>
                <h1 className="text-[15px] font-[590] tracking-[-0.3px] text-primary flex">
                  {['T', 'r', 'e', 'v', 'o'].map((letter, i) => (
                    <span
                      key={i}
                      className="inline-block transition-transform duration-200 ease-in-out group-hover:-translate-y-[3px] bg-[linear-gradient(90deg,#f7f8f8,#7170ff,#22d3ee,#f7f8f8)] bg-[length:300%_100%] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] animate-[gradientShift_4s_ease_infinite]"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {letter}
                    </span>
                  ))}
                </h1>

                {/* Tooltip */}
                <div className="absolute top-full mt-2 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-500 pointer-events-none">
                  <div className="bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] rounded-[6px] px-[10px] py-[4px] text-[11px] font-mono text-muted whitespace-nowrap animate-fade-in">
                    tree + evolve
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-3">
                <span className="text-[13px] text-subtle font-normal">Folder Structure Generator</span>
                <span className="bg-[rgba(94,106,210,0.15)] border border-[rgba(113,112,255,0.3)] text-[#7170ff] text-[11px] font-[510] rounded-full px-[10px] py-[4px]">
                  25 templates
                </span>
              </div>
            </div>
          </div>

          <a href="https://github.com/rauf17" target="_blank" rel="noopener noreferrer" className="text-[#8a8f98] hover:text-[#f7f8f8] transition-colors" title="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        </header>

        {/* Main Layout */}
        <div className="flex-1 flex overflow-hidden relative z-10">
          <Sidebar
            activeTemplateId={activeTemplateId}
            onSelectTemplate={handleSelectTemplate}
            isOpenMobile={isMobileMenuOpen}
            onCloseMobile={() => setIsMobileMenuOpen(false)}
            showSplash={showSplash}
          />

          <main className="flex-1 flex flex-col relative h-full overflow-y-auto w-full" onScroll={handleMainScroll}>
            {activeTemplate ? (
              <div
                className={`flex flex-col max-w-4xl w-full px-6 md:px-10 pb-10 gap-6 md:gap-8 mx-auto transition-all duration-[280ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${isTransitioning ? 'opacity-0 -translate-x-2' : 'opacity-100 translate-x-0'}
                `}
              >
                {/* Header Area */}
                <div className="flex flex-col gap-3 pt-[48px] pb-[20px] border-b border-[var(--border-subtle)] relative z-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      key={activeTemplate.id}
                      className={`text-[32px] leading-none ${isTransitioning ? '' : 'animate-emoji-bounce'}`}
                    >
                      {activeTemplate.icon}
                    </span>
                    <h2 className="text-[20px] md:text-[24px] font-[510] tracking-[-0.288px] text-primary leading-tight">
                      {activeTemplate.name}
                    </h2>
                    <span
                      className="animate-border-slide px-2 py-0.5 rounded-full border border-transparent text-[10px] font-[510] text-accent uppercase tracking-wider ml-0 md:ml-2"
                      style={{
                        background: 'linear-gradient(#191a1b, #191a1b) padding-box, linear-gradient(90deg, var(--accent), #22d3ee, var(--accent)) border-box',
                        backgroundSize: '200% 100%'
                      }}
                    >
                      {activeTemplate.category}
                    </span>
                  </div>
                  <p className="text-[14px] md:text-[15px] font-normal text-muted max-w-2xl">
                    {activeTemplate.description}
                  </p>

                  {/* Stats Bar */}
                  {stats && (
                    <div className="flex items-center gap-3 mt-2">
                      <div className="group relative flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] border border-[var(--border-default)] hover:border-[rgba(113,112,255,0.3)] transition-all hover:scale-105">
                        <span className="text-[12px] text-subtle font-medium">Files:</span>
                        <span className="text-[12px] text-primary font-[510]"><CountUp end={stats.files} /></span>
                        <div className="absolute top-full mt-1.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-50 whitespace-nowrap bg-[#191a1b] border border-[rgba(255,255,255,0.08)] rounded-[6px] px-2 py-1 text-[11px] font-mono text-muted">
                          Total files across all directories
                        </div>
                      </div>
                      <div className="group relative flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] border border-[var(--border-default)] hover:border-[rgba(113,112,255,0.3)] transition-all hover:scale-105">
                        <span className="text-[12px] text-subtle font-medium">Folders:</span>
                        <span className="text-[12px] text-primary font-[510]"><CountUp end={stats.folders} /></span>
                        <div className="absolute top-full mt-1.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-50 whitespace-nowrap bg-[#191a1b] border border-[rgba(255,255,255,0.08)] rounded-[6px] px-2 py-1 text-[11px] font-mono text-muted">
                          Total directories in this structure
                        </div>
                      </div>
                      <div className={`group relative flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] border transition-all hover:scale-105 ${stats.depth <= 2 ? 'border-[#10b981] text-[#10b981]' : stats.depth <= 4 ? 'border-[#f59e0b] text-[#f59e0b]' : 'border-[#e06c75] text-[#e06c75]'}`}>
                        <span className="text-[12px] opacity-80 font-medium">Depth:</span>
                        <span className="text-[12px] font-[510]"><CountUp end={stats.depth} /></span>
                        <div className="absolute top-full mt-1.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-50 whitespace-nowrap bg-[#191a1b] border border-[rgba(255,255,255,0.08)] rounded-[6px] px-2 py-1 text-[11px] font-mono text-muted !text-muted">
                          Maximum folder nesting level
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Toolbar */}
                <div className="overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  <Toolbar
                    template={activeTemplate}
                    viewMode={viewMode}
                    setViewMode={handleViewModeChange}
                    treeSearchQuery={treeSearchQuery}
                    setTreeSearchQuery={setTreeSearchQuery}
                  />
                </div>

                {/* Tree Area */}
                <div className="min-h-[400px]" style={{ perspective: '800px' }}>
                  <div
                    className={`relative overflow-hidden bg-surface rounded-[8px] shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_4px_24px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.04)] hover:shadow-[0_0_0_1px_rgba(113,112,255,0.15),0_4px_32px_rgba(94,106,210,0.08)] transition-shadow duration-300 ease-in-out min-h-[400px]
                      ${isFlipping ? 'animate-flip-out' : 'animate-flip-in'}
                    `}
                  >

                    {/* Scan Line */}
                    <div className="absolute top-0 left-0 w-full h-[2px] pointer-events-none z-10 animate-scan-line"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(113,112,255,0.15), transparent)' }} />

                    <div className="p-[16px] md:p-[20px] h-full relative z-20">
                      {currentViewMode === "ascii" ? (
                        <pre className="font-mono text-[13px] leading-[1.8] text-secondary overflow-auto">
                          {generateFullAsciiTree(activeTemplate.id, activeTemplate.tree)}
                        </pre>
                      ) : (
                        <TreeView key={activeTemplate.id} tree={activeTemplate.tree} searchQuery={treeSearchQuery} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Hero Empty State */
              <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center p-6 relative">
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <div className="w-[300px] h-[300px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(94,106,210,0.08) 0%, transparent 70%)' }} />
                </div>
                <span className="text-[48px] relative z-10 mb-2 leading-none">🌿</span>
                <h2 className="text-[24px] font-[510] tracking-[-0.288px] text-[#f7f8f8] relative z-10">Pick a template</h2>
                <p className="text-[15px] text-[#8a8f98] relative z-10 mb-4">Choose from 25 project structures on the left</p>
                <div className="flex flex-wrap items-center justify-center gap-3 relative z-10">
                  <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-full px-[14px] py-[8px] text-[12px] font-[510] text-[#d0d6e0]">⚡ Instant preview</div>
                  <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-full px-[14px] py-[8px] text-[12px] font-[510] text-[#d0d6e0]">📋 Copy as ASCII</div>
                  <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-full px-[14px] py-[8px] text-[12px] font-[510] text-[#d0d6e0]">💾 Download .txt</div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 200ms ease-in-out forwards;
        }

        @keyframes flip-out {
          0% { transform: rotateY(0); opacity: 1; }
          100% { transform: rotateY(90deg); opacity: 0; }
        }
        .animate-flip-out { animation: flip-out 200ms ease-in forwards; }

        @keyframes flip-in {
          0% { transform: rotateY(-90deg); opacity: 0; }
          100% { transform: rotateY(0); opacity: 1; }
        }
        .animate-flip-in { animation: flip-in 250ms ease-out forwards; }

        @keyframes gradientShift { 
          0% { background-position: 0% 50% } 
          50% { background-position: 100% 50% } 
          100% { background-position: 0% 50% } 
        }

        @keyframes emoji-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          75% { transform: translateY(2px); }
        }
        .animate-emoji-bounce {
          animation: emoji-bounce 400ms cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
        }

        @keyframes scan-line {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan-line {
          animation: scan-line 3s linear infinite;
        }
      `}</style>
    </>
  );
}
