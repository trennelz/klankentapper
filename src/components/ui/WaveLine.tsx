interface WaveLineProps {
  className?: string;
  color?: string;
  width?: number | string;
}

export function WaveLine({ className = "", color = "currentColor", width = 40 }: WaveLineProps) {
  return (
    <svg
      width={width}
      height="6"
      viewBox="0 0 40 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 3C5 3 5 1 10 1C15 1 15 5 20 5C25 5 25 1 30 1C35 1 35 3 40 3"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
