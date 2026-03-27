import { AnimateIn } from "@/components/ui/AnimateIn";
import { ConcentricLines } from "@/components/ui/ConcentricLines";

export function Intro() {
  return (
    <section className="relative overflow-hidden px-6 pt-10 pb-24 md:px-10 md:pt-16 md:pb-36">
      {/* Subtle divider line */}
      <div className="mx-auto mb-20 h-px max-w-[var(--max-width-site)] bg-donker/10 md:mb-28" />

      <div className="mx-auto max-w-[var(--max-width-site)]">
        {/* Two-column: tagline + description left, pull-quote right */}
        <div className="grid gap-12 md:grid-cols-12 md:gap-x-16 md:gap-y-0">
          {/* Left column — tagline + body */}
          <div className="md:col-span-7">
            <AnimateIn>
              <h2 className="max-w-2xl font-display text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.15] text-donker">
                Muziek die verbindt, verrast en laat groeien.{" "}
                <span className="text-teal">
                  Geen voorkennis nodig
                </span>{" "}
                — alleen nieuwsgierigheid en goesting.
              </h2>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <p className="mt-10 max-w-xl font-body text-base leading-relaxed text-ink/60 md:mt-12 md:text-lg md:leading-relaxed">
                Klankentapper is een enthousiast eenmansbedrijf dat muziek inzet
                als krachtig middel om mensen te verbinden, te inspireren en in
                beweging te brengen. Met een breed aanbod aan muziekworkshops,
                teambuildings en lessen creëert Klankentapper unieke belevingen
                waar plezier, samenwerking en expressie centraal staan.
              </p>
            </AnimateIn>
          </div>

          {/* Right column — pull-quote with organic arc accent */}
          <AnimateIn className="relative flex items-center md:col-span-4 md:col-start-9" delay={0.25}>
            {/* Concentric arc — left of quote, partially clipped to look like expanding ripples */}
            <div
              className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2 text-teal opacity-20 md:-left-28"
              style={{ maskImage: "linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)" }}
            >
              <ConcentricLines
                variant="tight"
                animate="drift"
                className="h-[280px] w-[280px] md:h-[340px] md:w-[340px]"
              />
            </div>
            <blockquote className="relative pl-2 font-display text-xl italic leading-snug text-teal md:text-2xl md:leading-snug">
              Laat je verrassen, laat je raken en… tap mee met de klank van het moment!
            </blockquote>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
