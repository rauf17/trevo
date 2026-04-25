"use client";

import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from "react";

export type ToastVariant = "success" | "download";

export type ToastMessage = {
  id: number;
  message: string;
  subtext?: string;
  variant: ToastVariant;
};

type ToastContextType = {
  addToast: (message: string, subtext?: string, variant?: ToastVariant) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback((message: string, subtext?: string, variant: ToastVariant = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, subtext, variant }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col-reverse gap-2 pointer-events-none">
        {toasts.map((toast, index) => (
          <ToastItem key={toast.id} toast={toast} index={index} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function ToastItem({ toast, index }: { toast: ToastMessage; index: number }) {
  const [isLeaving, setIsLeaving] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLeaving(true);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const Icon = toast.variant === "download" ? (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7170ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  const barColor = toast.variant === "download" ? "bg-[#7170ff]" : "bg-[#10b981]";

  return (
    <div 
      className={`pointer-events-auto bg-[rgba(25,26,27,0.85)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.08)] rounded-[10px] p-3 pr-4 flex items-center gap-3 overflow-hidden
        [box-shadow:0_4px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.04)]
        transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02]
        ${isLeaving ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-2'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {Icon}
      <div className="flex flex-col relative z-10">
        <span className="text-[13px] font-[510] text-primary">{toast.message}</span>
        {toast.subtext && <span className="text-[11px] text-subtle mt-0.5">{toast.subtext}</span>}
      </div>
      
      {!isLeaving && (
        <div 
          className={`absolute bottom-0 left-0 h-[2px] ${barColor} origin-left transition-transform duration-100`}
          style={{ 
            animation: 'toast-progress 3000ms linear forwards',
            animationPlayState: isHovered ? 'paused' : 'running'
          }}
        />
      )}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes toast-progress {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}} />
    </div>
  );
}
