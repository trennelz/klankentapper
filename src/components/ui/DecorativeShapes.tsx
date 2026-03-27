import type React from "react";

interface DecorativeShapeProps {
  className?: string;
  variant: "waves" | "spiral" | "burst";
  animate?: "breathe" | "drift" | "pulse" | false;
}

type VariantProps = { className: string; style?: React.CSSProperties };

export function DecorativeShape({
  className = "",
  variant,
  animate = false,
}: DecorativeShapeProps) {
  const style: React.CSSProperties | undefined =
    animate === "breathe"
      ? { animation: "concentric-breathe 9s ease-in-out infinite", transformOrigin: "center" }
      : animate === "drift"
        ? { animation: "concentric-drift 14s ease-in-out infinite", transformOrigin: "center" }
        : animate === "pulse"
          ? { animation: "shape-pulse 11s ease-in-out infinite", transformOrigin: "center" }
          : undefined;

  if (variant === "waves") return <WavesVariant className={className} style={style} />;
  if (variant === "spiral") return <SpiralVariant className={className} style={style} />;
  return <BurstVariant className={className} style={style} />;
}

/* ------------------------------------------------------------------ */
/*  Sound waves — flowing horizontal sine-like curves                  */
/* ------------------------------------------------------------------ */

const WAVE_DEFS = [
  { y: 55, amp: 22, invert: false, shift: 0, sw: 0.6 },
  { y: 112, amp: 30, invert: true, shift: 8, sw: 0.7 },
  { y: 165, amp: 18, invert: false, shift: -5, sw: 0.6 },
  { y: 220, amp: 35, invert: true, shift: 3, sw: 0.9 },
  { y: 272, amp: 26, invert: false, shift: -3, sw: 0.8 },
  { y: 328, amp: 32, invert: true, shift: 6, sw: 0.7 },
  { y: 380, amp: 20, invert: false, shift: -8, sw: 0.6 },
  { y: 438, amp: 28, invert: true, shift: 4, sw: 0.8 },
];

function buildWavePath(baseY: number, amplitude: number, invert: boolean, xShift: number): string {
  const hp = 95;
  const startX = -30 + xShift;
  let d = `M${startX} ${baseY}`;
  let x = startX;

  for (let i = 0; i < 8; i++) {
    const dir = (i % 2 === 0) !== invert ? -1 : 1;
    const a = amplitude * dir;
    const nx = x + hp;
    const ox = ((i * 7 + Math.abs(baseY)) % 5) - 2;
    const oy = ((i * 11 + Math.abs(baseY)) % 3) - 1;
    d += ` C${(x + hp * 0.35 + ox).toFixed(1)} ${(baseY + a + oy).toFixed(1)}, ${(x + hp * 0.65 - ox).toFixed(1)} ${(baseY + a - oy).toFixed(1)}, ${nx} ${baseY}`;
    x = nx;
  }
  return d;
}

function WavesVariant({ className, style }: VariantProps) {
  return (
    <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      {WAVE_DEFS.map((w) => (
        <path key={w.y} d={buildWavePath(w.y, w.amp, w.invert, w.shift)} stroke="currentColor" strokeWidth={w.sw} />
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Spiral — concentric arcs with progressive rotation                 */
/* ------------------------------------------------------------------ */

const SPIRAL_ARCS = [
  { rx: 30, ry: 28, ox: 1, oy: -1, start: 0, span: 280, sw: 0.6 },
  { rx: 56, ry: 54, ox: -2, oy: 2, start: 44, span: 275, sw: 0.7 },
  { rx: 82, ry: 79, ox: 3, oy: -1, start: 86, span: 285, sw: 0.6 },
  { rx: 108, ry: 105, ox: -1, oy: 3, start: 130, span: 270, sw: 0.8 },
  { rx: 134, ry: 131, ox: 2, oy: -2, start: 170, span: 280, sw: 0.7 },
  { rx: 160, ry: 157, ox: -3, oy: 1, start: 215, span: 275, sw: 0.9 },
  { rx: 186, ry: 183, ox: 1, oy: -3, start: 256, span: 285, sw: 0.7 },
  { rx: 212, ry: 209, ox: -2, oy: 2, start: 300, span: 270, sw: 0.8 },
];

function SpiralVariant({ className, style }: VariantProps) {
  const cx = 252;
  const cy = 248;

  return (
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      {SPIRAL_ARCS.map((a) => {
        const s = (a.start * Math.PI) / 180;
        const e = ((a.start + a.span) * Math.PI) / 180;
        const acx = cx + a.ox;
        const acy = cy + a.oy;
        const x1 = acx + a.rx * Math.cos(s);
        const y1 = acy + a.ry * Math.sin(s);
        const x2 = acx + a.rx * Math.cos(e);
        const y2 = acy + a.ry * Math.sin(e);
        return (
          <path
            key={a.start}
            d={`M${x1.toFixed(1)} ${y1.toFixed(1)} A${a.rx} ${a.ry} 0 1 1 ${x2.toFixed(1)} ${y2.toFixed(1)}`}
            stroke="currentColor"
            strokeWidth={a.sw}
          />
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Radial burst — lines radiating from center                         */
/* ------------------------------------------------------------------ */

const BURST_RAYS = [
  { angle: 2, ri: 40, ro: 225, sw: 0.6 },
  { angle: 17, ri: 35, ro: 195, sw: 0.7 },
  { angle: 34, ri: 45, ro: 230, sw: 0.6 },
  { angle: 50, ri: 38, ro: 200, sw: 0.8 },
  { angle: 68, ri: 42, ro: 218, sw: 0.7 },
  { angle: 85, ri: 36, ro: 235, sw: 0.6 },
  { angle: 103, ri: 44, ro: 205, sw: 0.9 },
  { angle: 118, ri: 38, ro: 220, sw: 0.7 },
  { angle: 136, ri: 40, ro: 192, sw: 0.6 },
  { angle: 152, ri: 35, ro: 228, sw: 0.8 },
  { angle: 170, ri: 42, ro: 210, sw: 0.7 },
  { angle: 185, ri: 38, ro: 238, sw: 0.6 },
  { angle: 202, ri: 44, ro: 198, sw: 0.8 },
  { angle: 218, ri: 36, ro: 222, sw: 0.7 },
  { angle: 235, ri: 40, ro: 215, sw: 0.6 },
  { angle: 253, ri: 42, ro: 232, sw: 0.9 },
  { angle: 268, ri: 35, ro: 202, sw: 0.7 },
  { angle: 286, ri: 38, ro: 226, sw: 0.6 },
  { angle: 302, ri: 44, ro: 208, sw: 0.8 },
  { angle: 320, ri: 40, ro: 236, sw: 0.7 },
  { angle: 338, ri: 36, ro: 195, sw: 0.6 },
  { angle: 355, ri: 42, ro: 220, sw: 0.8 },
];

function BurstVariant({ className, style }: VariantProps) {
  const cx = 250;
  const cy = 250;

  return (
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      {BURST_RAYS.map((r) => {
        const rad = (r.angle * Math.PI) / 180;
        return (
          <line
            key={r.angle}
            x1={(cx + r.ri * Math.cos(rad)).toFixed(1)}
            y1={(cy + r.ri * Math.sin(rad)).toFixed(1)}
            x2={(cx + r.ro * Math.cos(rad)).toFixed(1)}
            y2={(cy + r.ro * Math.sin(rad)).toFixed(1)}
            stroke="currentColor"
            strokeWidth={r.sw}
          />
        );
      })}
    </svg>
  );
}
