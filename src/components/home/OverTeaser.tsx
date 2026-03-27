import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function OverTeaser() {
  return (
    <section className="bg-pistache px-6 py-24 md:px-10 md:py-40">
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
            <p className="font-display text-lg italic text-donker/60">
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
              className="mt-8 inline-block border border-donker px-7 py-3.5 font-body text-sm uppercase tracking-[0.08em] text-donker no-underline transition-colors duration-200 hover:bg-donker hover:text-wit"
            >
              Meer over Klankentapper
            </Link>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
