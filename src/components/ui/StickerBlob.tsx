interface StickerBlobProps {
  className?: string;
}

export function StickerBlob({ className = "" }: StickerBlobProps) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Organic blob - not a perfect circle, hand-placed sticker feel */}
      <path
        d="M200 32 C248 28 310 52 340 100 C370 148 374 196 360 244 C346 292 312 336 264 356 C216 376 168 372 128 348 C88 324 52 284 40 236 C28 188 36 132 68 92 C100 52 152 36 200 32Z"
        fill="currentColor"
      />
    </svg>
  );
}
