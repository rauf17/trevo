export default function Logo({ className = "", style = {} }: { className?: string, style?: React.CSSProperties }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className={className} style={style}>
      <defs>
        <linearGradient id="treeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee"/>
          <stop offset="100%" stopColor="#7170ff"/>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* trunk */}
      <line x1="14" y1="26" x2="14" y2="10" stroke="url(#treeGrad)" strokeWidth="1.5" filter="url(#glow)"/>
      {/* branches */}
      <line x1="14" y1="18" x2="7" y2="13" stroke="url(#treeGrad)" strokeWidth="1.5" filter="url(#glow)"/>
      <line x1="14" y1="18" x2="21" y2="13" stroke="url(#treeGrad)" strokeWidth="1.5" filter="url(#glow)"/>
      <line x1="14" y1="13" x2="10" y2="9" stroke="url(#treeGrad)" strokeWidth="1.2" filter="url(#glow)"/>
      <line x1="14" y1="13" x2="18" y2="9" stroke="url(#treeGrad)" strokeWidth="1.2" filter="url(#glow)"/>
      {/* folder nodes */}
      <rect x="11" y="7" width="6" height="4.5" rx="1" fill="url(#treeGrad)" opacity="0.9" filter="url(#glow)"/>
      <rect x="4.5" y="11" width="5" height="4" rx="1" fill="url(#treeGrad)" opacity="0.8"/>
      <rect x="18.5" y="11" width="5" height="4" rx="1" fill="url(#treeGrad)" opacity="0.8"/>
      <rect x="7.5" y="7" width="4" height="3" rx="0.8" fill="url(#treeGrad)" opacity="0.6"/>
      <rect x="16.5" y="7" width="4" height="3" rx="0.8" fill="url(#treeGrad)" opacity="0.6"/>
    </svg>
  );
}
