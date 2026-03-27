import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";

const showcaseItems = [
  {
    title: "Initiatie Percussie",
    excerpt:
      "Een speelse én energieke workshop vol ritme en ontdekking. Van snaredrum tot djembe, van bodypercussion tot polyritmisch samenspel.",
    href: "/aanbod/initiatie-percussie",
    image:
      "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=900&q=80",
    size: "large" as const,
  },
  {
    title: "Ukelele Teambuilding",
    excerpt:
      "Niet om te presteren, maar om in het moment te zijn. Samenklank, verbinding en het plezier van iets nieuws ontdekken.",
    href: "/aanbod/ukelele-teambuilding",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&q=80",
    size: "small" as const,
  },
  {
    title: "Samen Zingen",
    excerpt:
      "Een unieke mix van workshop, koorrepetitie en mini-concert. Interactief, met plezier als rode draad.",
    href: "/aanbod/samen-zingen",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&q=80",
    size: "wide" as const,
  },
];

export function AanbodShowcase() {
  return (
    <section className="bg-wit px-6 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[var(--max-width-site)]">
        <AnimateIn>
          <h2 className="max-w-lg font-display text-4xl text-ink md:text-5xl">
            Ontdek wat muziek voor jou kan betekenen
          </h2>
        </AnimateIn>

        {/* Staggered asymmetric grid */}
        <div className="mt-16 grid gap-4 md:grid-cols-12 md:gap-6">
          {/* Large item -- spans 8 columns */}
          <AnimateIn
            className="group relative md:col-span-8 md:row-span-2"
            delay={0.1}
          >
            <Link href={showcaseItems[0].href} className="block no-underline">
              <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:h-full md:min-h-[500px]">
                <Image
                  src={showcaseItems[0].image}
                  alt={showcaseItems[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-donker/80 via-donker/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-10">
                  <h3 className="font-display text-3xl text-wit md:text-4xl">
                    {showcaseItems[0].title}
                  </h3>
                  <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-wit/70">
                    {showcaseItems[0].excerpt}
                  </p>
                </div>
              </div>
            </Link>
          </AnimateIn>

          {/* Small item -- spans 4 columns */}
          <AnimateIn className="group md:col-span-4" delay={0.2}>
            <Link href={showcaseItems[1].href} className="block no-underline">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={showcaseItems[1].image}
                  alt={showcaseItems[1].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-donker/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-display text-2xl text-wit">
                    {showcaseItems[1].title}
                  </h3>
                </div>
              </div>
            </Link>
          </AnimateIn>

          {/* Samen Zingen — dark text card */}
          <AnimateIn className="group md:col-span-4" delay={0.3}>
            <Link href={showcaseItems[2].href} className="block no-underline">
              <div className="flex h-full flex-col justify-center bg-donker p-8 transition-colors duration-300 group-hover:bg-donker/90 md:p-10">
                <h3 className="font-display text-2xl text-wit">
                  {showcaseItems[2].title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-wit/60">
                  {showcaseItems[2].excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-3 font-body text-sm uppercase tracking-[0.05em] text-goud">
                  Meer info
                  <span className="inline-block h-px w-6 bg-goud transition-all duration-300 group-hover:w-10" />
                </span>
              </div>
            </Link>
          </AnimateIn>
        </div>

        <AnimateIn className="mt-12 md:mt-16" delay={0.3}>
          <Link
            href="/aanbod"
            className="inline-block border border-ink px-7 py-3.5 font-body text-sm uppercase tracking-[0.08em] text-ink no-underline transition-colors duration-200 hover:bg-ink hover:text-wit"
          >
            Bekijk het volledige aanbod
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
