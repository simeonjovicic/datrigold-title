export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-label="Gold Title"
      role="img"
    >
      <defs>
        <linearGradient id="lg-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6dfa1" />
          <stop offset="50%" stopColor="#d4a857" />
          <stop offset="100%" stopColor="#8c6a25" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#lg-gold)" strokeWidth="2">
        <path d="M32 3 L60 18 V46 L32 61 L4 46 V18 Z" />
        <path d="M32 11 L52 22 V42 L32 53 L12 42 V22 Z" opacity="0.4" />
      </g>
      <text
        x="32"
        y="38"
        textAnchor="middle"
        fontFamily="Bebas Neue, Impact, sans-serif"
        fontSize="20"
        fill="url(#lg-gold)"
        letterSpacing="2"
      >
        GT
      </text>
    </svg>
  );
}
