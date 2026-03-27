import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ConcentricLines } from "@/components/ui/ConcentricLines";
import type { AanbodItem } from "@/lib/aanbod-data";

interface AanbodDetailProps {
  item: AanbodItem;
}

export function AanbodDetail({ item }: AanbodDetailProps) {
  return (
    <>
      {/* Hero image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden md:h-[60vh]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-donker/60 to-transparent" />
      </section>

      {/* Content */}
      <section className="relative overflow-hidden px-6 py-16 md:px-10 md:py-24">
        <div
          className="pointer-events-none absolute top-0 right-[-10%] text-teal opacity-[0.07]"
          style={{ maskImage: "radial-gradient(ellipse 60% 70% at 60% 30%, black 30%, transparent 80%)" }}
        >
          <ConcentricLines variant="tight" className="h-[80vh] w-[80vh]" />
        </div>
        <div className="relative mx-auto max-w-[var(--max-width-site)]">
          <div className="grid md:grid-cols-12 md:gap-12">
            {/* Main content - narrow column */}
            <div className="md:col-span-7">
              <AnimateIn>
                <Link
                  href="/aanbod"
                  className="font-body text-sm uppercase tracking-[0.1em] text-ink/40 no-underline transition-colors hover:text-teal"
                >
                  &larr; Terug naar aanbod
                </Link>

                <p className="mt-8 font-display text-lg italic text-teal">
                  {item.type}
                </p>
                <h1 className="mt-2 font-display text-[clamp(2.5rem,4vw,4rem)] text-ink">
                  {item.title}
                </h1>
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <div className="mt-8 flex flex-col gap-5">
                  {item.content.map((paragraph, i) => (
                    <p
                      key={i}
                      className="max-w-[var(--max-width-prose)] font-body text-base leading-relaxed text-ink/75 md:text-lg md:leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <div className="mt-12">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 font-body text-sm uppercase tracking-[0.08em] text-teal no-underline"
                  >
                    Boek deze workshop
                    <span className="inline-block h-px w-8 bg-teal transition-all duration-300 group-hover:w-14" />
                  </Link>
                </div>
              </AnimateIn>
            </div>

            {/* Sidebar info */}
            <div className="mt-12 md:col-span-4 md:col-start-9 md:mt-0">
              <AnimateIn delay={0.15}>
                <div className="border-t border-ink/10 pt-6">
                  <p className="font-body text-xs uppercase tracking-[0.1em] text-ink/40">
                    Praktisch
                  </p>

                  <dl className="mt-4 flex flex-col gap-4">
                    <div>
                      <dt className="font-body text-sm text-ink/50">Duur</dt>
                      <dd className="mt-1 font-body text-base text-ink">
                        {item.duration}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-body text-sm text-ink/50">
                        Voorkennis
                      </dt>
                      <dd className="mt-1 font-body text-base text-ink">
                        {item.noExperience
                          ? "Geen voorkennis vereist"
                          : "Enige ervaring gewenst"}
                      </dd>
                    </div>
                  </dl>

                  {item.highlights && item.highlights.length > 0 && (
                    <div className="mt-8 border-t border-ink/10 pt-6">
                      <p className="font-body text-xs uppercase tracking-[0.1em] text-ink/40">
                        Inhoud
                      </p>
                      <ul className="mt-4 flex flex-col gap-2">
                        {item.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="font-body text-sm leading-relaxed text-ink/70"
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
