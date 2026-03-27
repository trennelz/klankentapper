import type { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ContactForm } from "@/components/ContactForm";
import { DecorativeShape } from "@/components/ui/DecorativeShapes";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Klankentapper voor een workshop, teambuilding of les op maat.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-donker px-6 pt-32 pb-16 md:px-10 md:pt-44 md:pb-24">
        <div
          className="pointer-events-none absolute top-1/2 left-[-20%] -translate-y-1/2 text-goud opacity-15"
          style={{ maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 70%)" }}
        >
          <DecorativeShape variant="waves" animate="pulse" className="h-[80vh] w-[80vh]" />
        </div>
        <div className="relative mx-auto max-w-[var(--max-width-site)]">
          <AnimateIn>
            <h1 className="font-display text-[clamp(2.5rem,5vw,5rem)] text-wit">
              Contact
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="mt-4 max-w-xl font-body text-lg text-wit/60">
              Benieuwd wat Klankentapper voor jou kan betekenen? Neem
              vrijblijvend contact op.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Contact content — waves accent bottom-right */}
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[var(--max-width-site)] gap-16 md:grid-cols-12 md:gap-8">
          {/* Contact info */}
          <div className="md:col-span-4">
            <AnimateIn>
              <div className="flex flex-col gap-8">
                <div>
                  <p className="font-body text-xs uppercase tracking-[0.1em] text-ink/40">
                    E-mail
                  </p>
                  <a
                    href="mailto:geert@klankentapper.be"
                    className="mt-2 block font-body text-lg text-ink no-underline transition-colors hover:text-teal"
                  >
                    geert@klankentapper.be
                  </a>
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-[0.1em] text-ink/40">
                    Telefoon
                  </p>
                  <a
                    href="tel:+32472985037"
                    className="mt-2 block font-body text-lg text-ink no-underline transition-colors hover:text-teal"
                  >
                    +32 472 98 50 37
                  </a>
                </div>
                <div className="border-t border-ink/10 pt-6">
                  <p className="max-w-xs font-body text-sm leading-relaxed text-ink/50">
                    Klankentapper is actief in heel Vlaanderen. Workshops,
                    teambuildings en lessen worden op locatie gegeven.
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* Contact form */}
          <div className="md:col-span-7 md:col-start-6">
            <AnimateIn delay={0.15}>
              <ContactForm />
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
