import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { WaveLine } from "@/components/ui/WaveLine";

interface AanbodSpreadProps {
  title: string;
  excerpt: string;
  href: string;
  image: string;
  duration?: string;
  noExperience?: boolean;
  reverse?: boolean;
  large?: boolean;
}

export function AanbodSpread({
  title,
  excerpt,
  href,
  image,
  duration,
  noExperience = true,
  reverse = false,
  large = false,
}: AanbodSpreadProps) {
  return (
    <article
      className={`grid gap-8 md:grid-cols-12 md:gap-6 ${
        large ? "md:min-h-[600px]" : "md:min-h-[450px]"
      }`}
    >
      {/* Image */}
      <AnimateIn
        className={`relative ${
          large ? "md:col-span-7" : "md:col-span-6"
        } ${reverse ? "md:col-start-7 md:row-start-1" : ""}`}
        delay={0.1}
      >
        <div
          className={`relative overflow-hidden ${
            large ? "aspect-[4/3] md:aspect-auto md:h-full" : "aspect-[3/2] md:aspect-auto md:h-full"
          }`}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
        </div>
      </AnimateIn>

      {/* Text */}
      <div
        className={`flex flex-col justify-center ${
          large
            ? reverse
              ? "md:col-span-5 md:col-start-1 md:row-start-1"
              : "md:col-span-5 md:col-start-8"
            : reverse
              ? "md:col-span-5 md:col-start-1 md:row-start-1 md:pr-8"
              : "md:col-span-5 md:col-start-8 md:pl-8"
        }`}
      >
        <AnimateIn delay={0.2}>
          <h2 className="font-display text-3xl text-ink md:text-4xl">{title}</h2>
          <p className="mt-4 font-body text-base leading-relaxed text-ink/70 md:text-lg">
            {excerpt}
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-body text-sm text-ink/40">
            {duration && <span>{duration}</span>}
            {noExperience && <span>Geen voorkennis vereist</span>}
          </div>

          <Link
            href={href}
            className="group mt-8 inline-flex items-center gap-3 font-body text-sm uppercase tracking-[0.08em] text-ink no-underline"
          >
            Meer info
            <WaveLine className="w-8 transition-all duration-300 group-hover:w-14" color="var(--color-teal)" width="auto" />
          </Link>
        </AnimateIn>
      </div>
    </article>
  );
}
