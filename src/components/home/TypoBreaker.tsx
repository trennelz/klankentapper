import { AnimateIn } from "@/components/ui/AnimateIn";
import { ConcentricLines } from "@/components/ui/ConcentricLines";

export function TypoBreaker() {
  return (
    <section className="relative overflow-hidden bg-donker px-6 py-28 md:px-10 md:py-40">
      {/* Concentric lines — right side, masked so they dissolve at the edges */}
      <div
        className="pointer-events-none absolute top-1/2 right-[-20%] -translate-y-1/2 text-goud opacity-25"
        style={{ maskImage: "radial-gradient(ellipse 70% 80% at 60% 50%, black 30%, transparent 75%)" }}
      >
        <ConcentricLines
          variant="wide"
          animate="breathe"
          className="h-[90vh] w-[90vh]"
        />
      </div>

      <div className="relative mx-auto max-w-[var(--max-width-site)]">
        <AnimateIn>
          <h2 className="max-w-4xl font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] text-wit">
            Tap mee met de{" "}
            <span className="italic text-goud">klank</span> van het moment
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="mt-8 max-w-lg font-body text-base leading-relaxed text-wit/50 md:text-lg">
            Of het nu gaat om een energieke workshop voor scholen, een
            versterkende teambuilding voor bedrijven of inspirerende
            muzieklessen voor groepen — Klankentapper laat iedereen ervaren hoe
            ritme en klank verbinden.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
