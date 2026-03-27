import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { WaveLine } from "@/components/ui/WaveLine";

export function OverTeaser() {
  return (
    <section className="bg-creme px-6 py-24 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[var(--max-width-site)] gap-12 md:grid-cols-12 md:gap-8">
        {/* Portrait image */}
        <AnimateIn className="md:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&q=80"
              alt="Geert Hollemans"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </AnimateIn>

        {/* Text */}
        <div className="flex flex-col justify-center md:col-span-6 md:col-start-7">
          <AnimateIn delay={0.1}>
            <p className="font-display text-lg italic text-teal">
              Wie is de klankentapper?
            </p>
            <h2 className="mt-3 font-display text-4xl text-donker md:text-5xl">
              Geert Hollemans
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="mt-6 max-w-prose font-body text-base leading-relaxed text-donker/75 md:text-lg">
              Leerkracht, muzikant en freelance muzikaal cultuurwerker. Met
              Klankentapper brengt Geert zijn passie voor muziek naar scholen,
              bedrijven en iedereen die wil ervaren hoe ritme en klank mensen
              samenbrengt.
            </p>
            <p className="mt-4 max-w-prose font-body text-base leading-relaxed text-donker/75 md:text-lg">
              Geert is tevens freelance educatief medewerker bij VZW Avansa
              Halle-Vilvoorde.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <Link
              href="/over"
              className="group relative mt-12 inline-flex items-center gap-4 overflow-hidden bg-donker px-10 py-5 font-body text-xs uppercase tracking-[0.2em] text-wit no-underline transition-all duration-300 hover:bg-donker/90"
            >
              <span className="relative z-10">Meer over Klankentapper</span>
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
