"use client";

import { useEffect, useState } from "react";

export type ToastMessage = {
  id: number;
  message: string;
  subtext?: string;
};

export default function Toast({ toast, onClose }: { toast: ToastMessage | null; onClose: () => void }) {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (toast) {
      setIsLeaving(false);
      const exitTimer = setTimeout(() => {
        setIsLeaving(true);
      }, 2300); // Start exit animation at 2.3s
      
      const unmountTimer = setTimeout(() => {
        onClose();
      }, 2500); // Fully remove at 2.5s

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(unmountTimer);
      };
    }
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes toast-enter {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes toast-exit {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(8px); }
        }
        @keyframes toast-progress {
          from { width: 100%; }
          to { width: 0%; }
        }
        .animate-toast-enter { animation: toast-enter 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-toast-exit { animation: toast-exit 200ms ease-in forwards; }
        .animate-toast-progress { animation: toast-progress 2500ms linear forwards; }
      `}} />
      <div 
        className={`fixed bottom-6 right-6 z-[9999] bg-[#191a1b] border border-[rgba(255,255,255,0.08)] rounded-[10px] p-3 pr-4 flex items-center gap-3 overflow-hidden
          [box-shadow:0_4px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.04)]
          ${isLeaving ? 'animate-toast-exit' : 'animate-toast-enter'}
        `}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <div className="flex flex-col relative z-10">
          <span className="text-[13px] font-[510] text-primary">{toast.message}</span>
          {toast.subtext && <span className="text-[11px] text-subtle mt-0.5">{toast.subtext}</span>}
        </div>
        
        {/* Progress bar */}
        {!isLeaving && (
          <div className="absolute bottom-0 left-0 h-[2px] bg-[#10b981] animate-toast-progress origin-left" />
        )}
      </div>
    </>
  );
}
