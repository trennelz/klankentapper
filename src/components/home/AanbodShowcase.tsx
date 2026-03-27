import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { WaveLine } from "@/components/ui/WaveLine";

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

        {/* Three cards on one row on desktop */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {showcaseItems.map((item, i) => (
            <AnimateIn
              key={item.href}
              className="group relative"
              delay={0.1 * (i + 1)}
            >
              <Link href={item.href} className="block h-full no-underline">
                <div className={`relative flex h-full min-h-[450px] flex-col overflow-hidden ${i === 2 ? 'bg-donker' : ''}`}>
                  {i !== 2 && (
                    <>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-donker/90 via-donker/20 to-transparent" />
                    </>
                  )}
                  
                  <div className={`relative mt-auto p-8 md:p-10 ${i === 2 ? 'flex flex-col justify-center h-full' : ''}`}>
                    <h3 className="font-display text-2xl text-wit md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 font-body text-sm leading-relaxed text-wit/70">
                      {item.excerpt}
                    </p>
                    <div className="mt-8">
                      <WaveLine 
                        className="w-8 transition-all duration-300 group-hover:w-12" 
                        color={i === 2 ? "var(--color-goud)" : "white"}
                        width="auto"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>

        <div className="mt-12 flex justify-center md:mt-20">
          <AnimateIn delay={0.4}>
            <Link
              href="/aanbod"
              className="group relative inline-flex items-center gap-4 overflow-hidden bg-ink px-10 py-5 font-body text-xs uppercase tracking-[0.2em] text-wit no-underline transition-all duration-300 hover:bg-ink/90"
            >
              <span className="relative z-10">Bekijk het volledige aanbod</span>
              <WaveLine 
                className="relative z-10 w-8 transition-all duration-300 group-hover:w-12" 
                color="white"
                width="auto"
              />
            </Link>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
