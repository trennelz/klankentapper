import type { Metadata } from "next";
import { AanbodSpread } from "@/components/aanbod/AanbodSpread";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ContactStrip } from "@/components/home/ContactStrip";
import { ConcentricLines } from "@/components/ui/ConcentricLines";

export const metadata: Metadata = {
  title: "Aanbod",
  description:
    "Muziekworkshops, teambuildings en lessen. Van ukelele tot percussie, van samen zingen tot privéles.",
};

const aanbodItems = [
  {
    title: "Ukelele Teambuilding",
    excerpt:
      "Deze teambuilding draait niet om presteren, maar om in het moment zijn. Je voelt, hoort en ervaart het speelse maar verrassend boeiende karakter van de ukelele. De focus ligt op samenklank, verbinding en het plezier van iets nieuws ontdekken. Je kan meer dan je denkt — en je ontdekt het terwijl je als groep toewerkt naar een eenvoudig maar verbindend samenspel.",
    href: "/aanbod/ukelele-teambuilding",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=900&q=80",
    duration: "1,5 of 2 uur",
    large: true,
  },
  {
    title: "Ukelele Initiatie",
    excerpt:
      "Voor groepen of deelnemers die zich écht willen verdiepen in de wereld van de ukelele. Leer de belangrijkste akkoorden, tabulatuur lezen, verschillende ritmes en strumpatronen, en de basis van fingerpicking. Alles aan de hand van toegankelijke en bekende liedjes.",
    href: "/aanbod/ukelele-initiatie",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=900&q=80",
    duration: "4 sessies van 1,5 of 2 uur",
  },
  {
    title: "Initiatie Percussie",
    excerpt:
      "Een speelse én energieke workshop vol ritme en ontdekking. We werken met snaredrum, hihat, cajon, djembe, shekere, boomwhackers en meer. Van bodypercussion-opwarming tot krachtig polyritmisch samenspel als slot.",
    href: "/aanbod/initiatie-percussie",
    image:
      "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=900&q=80",
    duration: "Minimaal 2 uur",
    large: true,
  },
  {
    title: "Samen Zingen",
    excerpt:
      "Een unieke mix van workshop, koorrepetitie en mini-concert. Samen zingen bij Klankentapper is een interactieve zangervaring waarbij plezier centraal staat. Beschikbare programma's: Je bent een vriend van mij, Ergens onderweg, Iedereen is van de wereld. Een programma op maat is ook mogelijk.",
    href: "/aanbod/samen-zingen",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=900&q=80",
    duration: "In overleg",
  },
  {
    title: "Privé Les",
    excerpt:
      "Ukelele, gitaar of folkviool — op jouw tempo, in jouw stijl. Lessen van een half uur of een uur, eventueel per twee of drie met familie of vrienden.",
    href: "/aanbod/prive-les",
    image:
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=900&q=80",
    duration: "½ uur of 1 uur",
  },
];

export default function AanbodPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-donker px-6 pt-32 pb-16 md:px-10 md:pt-44 md:pb-24">
        <div
          className="pointer-events-none absolute top-1/2 right-[-15%] -translate-y-1/2 text-goud opacity-20"
          style={{ maskImage: "radial-gradient(ellipse 70% 80% at 60% 50%, black 30%, transparent 75%)" }}
        >
          <ConcentricLines variant="wide" animate="breathe" className="h-[70vh] w-[70vh]" />
        </div>
        <div className="relative mx-auto max-w-[var(--max-width-site)]">
          <AnimateIn>
            <p className="font-display text-lg italic text-goud">
              Wat heeft Klankentapper te bieden?
            </p>
            <h1 className="mt-2 font-display text-[clamp(2.5rem,5vw,5rem)] text-wit">
              Aanbod
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="mt-4 max-w-xl font-body text-lg text-wit/60">
              Muziek voor iedereen. Speels, verbindend en verrassend
              toegankelijk. Geen voorkennis nodig — alleen nieuwsgierigheid en
              goesting om mee te doen.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Aanbod items */}
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-[var(--max-width-site)] flex-col gap-20 md:gap-32">
          {aanbodItems.map((item, i) => (
            <AanbodSpread
              key={item.href}
              {...item}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
