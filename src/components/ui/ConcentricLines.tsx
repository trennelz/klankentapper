import type React from "react";

interface ConcentricLinesProps {
  className?: string;
  variant?: "wide" | "tight" | "offset";
  animate?: "breathe" | "drift" | false;
}

type VariantProps = { className: string; style?: React.CSSProperties };

export function ConcentricLines({
  className = "",
  variant = "wide",
  animate = false,
}: ConcentricLinesProps) {
  const style: React.CSSProperties | undefined = animate === "breathe"
    ? { animation: "concentric-breathe 9s ease-in-out infinite", transformOrigin: "center" }
    : animate === "drift"
    ? { animation: "concentric-drift 14s ease-in-out infinite", transformOrigin: "center" }
    : undefined;

  if (variant === "tight") return <TightVariant className={className} style={style} />;
  if (variant === "offset") return <OffsetVariant className={className} style={style} />;
  return <WideVariant className={className} style={style} />;
}

function WideVariant({ className, style }: VariantProps) {
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <ellipse cx="310" cy="290" rx="58" ry="56" stroke="currentColor" strokeWidth="0.6" />
      <ellipse cx="308" cy="292" rx="95" ry="92" stroke="currentColor" strokeWidth="0.7" />
      <ellipse cx="312" cy="288" rx="138" ry="134" stroke="currentColor" strokeWidth="0.8" />
      <ellipse cx="306" cy="294" rx="182" ry="178" stroke="currentColor" strokeWidth="1.0" />
      <ellipse cx="314" cy="286" rx="228" ry="224" stroke="currentColor" strokeWidth="1.1" />
      <ellipse cx="308" cy="290" rx="270" ry="266" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="312" cy="292" rx="296" ry="292" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  );
}

function TightVariant({ className, style }: VariantProps) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* Dense concentric rings — sticker / stamp feel */}
      <ellipse cx="204" cy="196" rx="18" ry="17" stroke="currentColor" strokeWidth="0.7" />
      <ellipse cx="202" cy="198" rx="34" ry="32" stroke="currentColor" strokeWidth="0.6" />
      <ellipse cx="205" cy="195" rx="52" ry="50" stroke="currentColor" strokeWidth="0.8" />
      <ellipse cx="201" cy="199" rx="68" ry="66" stroke="currentColor" strokeWidth="0.7" />
      <ellipse cx="204" cy="196" rx="86" ry="84" stroke="currentColor" strokeWidth="0.9" />
      <ellipse cx="200" cy="200" rx="104" ry="101" stroke="currentColor" strokeWidth="0.8" />
      <ellipse cx="203" cy="197" rx="120" ry="118" stroke="currentColor" strokeWidth="1.0" />
      <ellipse cx="199" cy="201" rx="138" ry="135" stroke="currentColor" strokeWidth="0.7" />
      <ellipse cx="202" cy="198" rx="154" ry="152" stroke="currentColor" strokeWidth="1.1" />
      <ellipse cx="200" cy="200" rx="172" ry="170" stroke="currentColor" strokeWidth="0.8" />
      <ellipse cx="203" cy="197" rx="190" ry="188" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  );
}

function OffsetVariant({ className, style }: VariantProps) {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* Off-center — dynamic, asymmetric energy */}
      <ellipse cx="180" cy="220" rx="28" ry="26" stroke="currentColor" strokeWidth="0.6" />
      <ellipse cx="182" cy="218" rx="56" ry="52" stroke="currentColor" strokeWidth="0.7" />
      <ellipse cx="178" cy="222" rx="88" ry="84" stroke="currentColor" strokeWidth="0.8" />
      <ellipse cx="183" cy="217" rx="124" ry="120" stroke="currentColor" strokeWidth="0.9" />
      <ellipse cx="177" cy="223" rx="164" ry="158" stroke="currentColor" strokeWidth="1.0" />
      <ellipse cx="180" cy="220" rx="206" ry="200" stroke="currentColor" strokeWidth="1.1" />
      <ellipse cx="182" cy="218" rx="244" ry="240" stroke="currentColor" strokeWidth="0.7" />
    </svg>
  );
}
