export default function Logo({ className = "", style = {} }: { className?: string, style?: React.CSSProperties }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className={className} style={{ ...style, filter: 'drop-shadow(0 0 6px rgba(113,112,255,0.5))' }}>
      <defs>
        <linearGradient id="treeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5e6ad2"/>
          <stop offset="100%" stopColor="#7170ff"/>
        </linearGradient>
      </defs>
      {/* trunk */}
      <line className="tree-trunk" x1="14" y1="26" x2="14" y2="10" stroke="url(#treeGrad)" strokeWidth="1.5" />
      {/* branches */}
      <line className="tree-branch" x1="14" y1="18" x2="7" y2="13" stroke="url(#treeGrad)" strokeWidth="1.5" />
      <line className="tree-branch" x1="14" y1="18" x2="21" y2="13" stroke="url(#treeGrad)" strokeWidth="1.5" />
      <line className="tree-branch" x1="14" y1="13" x2="10" y2="9" stroke="url(#treeGrad)" strokeWidth="1.2" />
      <line className="tree-branch" x1="14" y1="13" x2="18" y2="9" stroke="url(#treeGrad)" strokeWidth="1.2" />
      {/* folder nodes */}
      <rect className="tree-folder" x="11" y="7" width="6" height="4.5" rx="1" fill="url(#treeGrad)" opacity="0.9" />
      <rect className="tree-folder" x="4.5" y="11" width="5" height="4" rx="1" fill="url(#treeGrad)" opacity="0.8"/>
      <rect className="tree-folder" x="18.5" y="11" width="5" height="4" rx="1" fill="url(#treeGrad)" opacity="0.8"/>
      <rect className="tree-folder" x="7.5" y="7" width="4" height="3" rx="0.8" fill="url(#treeGrad)" opacity="0.6"/>
      <rect className="tree-folder" x="16.5" y="7" width="4" height="3" rx="0.8" fill="url(#treeGrad)" opacity="0.6"/>
    </svg>
  );
}
