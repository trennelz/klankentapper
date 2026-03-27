import type { Metadata } from "next";
import Image from "next/image";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ContactStrip } from "@/components/home/ContactStrip";

export const metadata: Metadata = {
  title: "Over Klankentapper",
  description:
    "Klankentapper is een eenmansbedrijf van Geert Hollemans. Leerkracht, muzikant en freelance muzikaal cultuurwerker.",
};

export default function OverPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-donker px-6 pt-32 pb-16 md:px-10 md:pt-44 md:pb-24">
        <div className="mx-auto max-w-[var(--max-width-site)]">
          <AnimateIn>
            <p className="font-body text-xs uppercase tracking-[0.15em] text-teal">
              De mens achter de klank
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,5vw,5rem)] text-wit">
              Geert Hollemans
            </h1>
          </AnimateIn>
        </div>
      </section>

      {/* Portrait + intro */}
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[var(--max-width-site)] gap-12 md:grid-cols-12 md:gap-8">
          <AnimateIn className="md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80"
                alt="Geert Hollemans"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </AnimateIn>

          <div className="flex flex-col justify-center md:col-span-6 md:col-start-7">
            <AnimateIn delay={0.1}>
              <p className="max-w-[var(--max-width-prose)] font-body text-lg leading-relaxed text-ink/80 md:text-xl md:leading-relaxed">
                Klankentapper is een enthousiast eenmansbedrijf dat muziek
                inzet als krachtig middel om mensen te verbinden, te inspireren
                en in beweging te brengen. Met een breed aanbod aan
                muziekworkshops, teambuildings en lessen creëert Klankentapper
                unieke belevingen waar plezier, samenwerking en expressie
                centraal staan.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <p className="mt-6 max-w-[var(--max-width-prose)] font-body text-base leading-relaxed text-ink/70 md:text-lg md:leading-relaxed">
                Geert Hollemans is leerkracht, muzikant en freelance muzikaal
                cultuurwerker. Met Klankentapper brengt hij zijn passie voor
                muziek naar scholen, bedrijven en iedereen die wil ervaren hoe
                ritme en klank mensen samenbrengt.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <p className="mt-6 max-w-[var(--max-width-prose)] font-body text-base leading-relaxed text-ink/70 md:text-lg md:leading-relaxed">
                Geert is tevens freelance educatief medewerker bij VZW Avansa
                Halle-Vilvoorde.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Visie / pull quote */}
      <section className="bg-donker px-6 py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-[var(--max-width-site)]">
          <AnimateIn>
            <blockquote className="max-w-3xl font-display text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.15] text-wit">
              Laat je verrassen, laat je raken en&hellip;{" "}
              <span className="italic text-koraal">
                tap mee met de klank van het moment
              </span>
            </blockquote>
          </AnimateIn>
        </div>
      </section>

      {/* Samen Zingen samenwerking */}
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[var(--max-width-site)]">
          <div className="grid md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7">
              <AnimateIn>
                <p className="font-body text-xs uppercase tracking-[0.15em] text-ink/40">
                  Samenwerking
                </p>
                <h2 className="mt-4 font-display text-3xl text-ink md:text-4xl">
                  Samen Zingen
                </h2>
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <p className="mt-6 max-w-[var(--max-width-prose)] font-body text-base leading-relaxed text-ink/70 md:text-lg">
                  Voor het Samen Zingen-programma werkt Geert samen met Jeffrey
                  Dirix, muzikant, leerkracht en orkest- en koordirigent. Samen
                  brengen ze een interactieve zangervaring waar plezier centraal
                  staat.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.15}>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="border-t border-ink/10 pt-4">
                    <p className="font-display text-xl text-ink">
                      Geert Hollemans
                    </p>
                    <p className="mt-1 font-body text-sm text-ink/50">
                      Gitaar, zang en performance
                    </p>
                  </div>
                  <div className="border-t border-ink/10 pt-4">
                    <p className="font-display text-xl text-ink">
                      Jeffrey Dirix
                    </p>
                    <p className="mt-1 font-body text-sm text-ink/50">
                      Piano, zang, orkest- en koordirigent
                    </p>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <p className="mt-8 font-body text-sm text-ink/40">
                  Programma&apos;s uitgewerkt i.s.m. Hallo Nederlands Halle en
                  Avansa Halle-Vilvoorde. Voorstellingen in juni 2023, 2024 en
                  2025.
                </p>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
