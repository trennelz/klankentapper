interface InstrumentIllustrationProps {
  instrument: "ukulele" | "percussion";
  className?: string;
}

function UkuleleSVG() {
  return (
    <svg viewBox="0 0 200 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Body */}
      <ellipse cx="100" cy="370" rx="72" ry="88" stroke="currentColor" strokeWidth="1.2" />
      {/* Sound hole */}
      <circle cx="100" cy="355" r="18" stroke="currentColor" strokeWidth="0.8" />
      {/* Neck */}
      <line x1="84" y1="282" x2="84" y2="80" stroke="currentColor" strokeWidth="1.1" />
      <line x1="116" y1="282" x2="116" y2="80" stroke="currentColor" strokeWidth="1.1" />
      {/* Headstock */}
      <path d="M84 80 Q82 42 74 30 Q70 24 76 20 Q88 14 100 16 Q112 14 124 20 Q130 24 126 30 Q118 42 116 80" stroke="currentColor" strokeWidth="1.0" />
      {/* Frets */}
      <line x1="84" y1="120" x2="116" y2="120" stroke="currentColor" strokeWidth="0.6" />
      <line x1="84" y1="155" x2="116" y2="155" stroke="currentColor" strokeWidth="0.6" />
      <line x1="84" y1="188" x2="116" y2="188" stroke="currentColor" strokeWidth="0.6" />
      <line x1="84" y1="218" x2="116" y2="218" stroke="currentColor" strokeWidth="0.6" />
      <line x1="84" y1="246" x2="116" y2="246" stroke="currentColor" strokeWidth="0.6" />
      {/* Strings */}
      <line x1="92" y1="282" x2="92" y2="440" stroke="currentColor" strokeWidth="0.5" />
      <line x1="100" y1="282" x2="100" y2="444" stroke="currentColor" strokeWidth="0.5" />
      <line x1="108" y1="282" x2="108" y2="440" stroke="currentColor" strokeWidth="0.5" />
      {/* Bridge */}
      <line x1="86" y1="440" x2="114" y2="440" stroke="currentColor" strokeWidth="0.8" />
      {/* Tuning pegs */}
      <circle cx="78" cy="40" r="4" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="78" cy="58" r="4" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="122" cy="40" r="4" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="122" cy="58" r="4" stroke="currentColor" strokeWidth="0.7" />
    </svg>
  );
}

function PercussionSVG() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Djembe body */}
      <path
        d="M120 60 Q120 58 140 56 Q170 52 200 52 Q230 52 260 56 Q280 58 280 60 L280 80 Q282 140 270 200 Q265 230 260 250 Q258 260 256 280 L256 320 Q256 340 240 348 Q220 356 200 356 Q180 356 160 348 Q144 340 144 320 L144 280 Q142 260 140 250 Q135 230 130 200 Q118 140 120 80 Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {/* Drum head top ellipse */}
      <ellipse cx="200" cy="58" rx="80" ry="12" stroke="currentColor" strokeWidth="1.0" />
      {/* Drum head detail lines */}
      <path d="M136 62 Q168 78 200 80 Q232 78 264 62" stroke="currentColor" strokeWidth="0.6" />
      {/* Rope details */}
      <line x1="140" y1="68" x2="148" y2="300" stroke="currentColor" strokeWidth="0.5" />
      <line x1="160" y1="62" x2="156" y2="310" stroke="currentColor" strokeWidth="0.5" />
      <line x1="240" y1="62" x2="244" y2="310" stroke="currentColor" strokeWidth="0.5" />
      <line x1="260" y1="68" x2="252" y2="300" stroke="currentColor" strokeWidth="0.5" />
      {/* Drumstick 1 */}
      <line x1="60" y1="20" x2="190" y2="120" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <ellipse cx="190" cy="120" rx="6" ry="5" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.15" />
      {/* Drumstick 2 */}
      <line x1="340" y1="30" x2="215" y2="115" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <ellipse cx="215" cy="115" rx="6" ry="5" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}

export function InstrumentIllustration({
  instrument,
  className = "",
}: InstrumentIllustrationProps) {
  return (
    <div className={className}>
      {instrument === "ukulele" ? <UkuleleSVG /> : <PercussionSVG />}
    </div>
  );
}
