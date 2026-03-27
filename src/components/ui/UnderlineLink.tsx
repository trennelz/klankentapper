import Link from "next/link";
import type { ReactNode } from "react";

interface UnderlineLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function UnderlineLink({
  href,
  children,
  className = "",
}: UnderlineLinkProps) {
  return (
    <Link
      href={href}
      className={`group relative inline-block font-body text-ink no-underline ${className}`}
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-teal transition-all duration-300 ease-out group-hover:w-full" />
    </Link>
  );
}
