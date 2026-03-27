import { AnimateIn } from "@/components/ui/AnimateIn";

export function Intro() {
  return (
    <section className="px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[var(--max-width-site)]">
        <div className="h-px bg-donker/10 mb-16 md:mb-20" />
        <AnimateIn>
          <h2 className="max-w-3xl font-display text-[clamp(1.6rem,3vw,2.6rem)] leading-[1.15] text-donker">
            Muziek die verbindt, verrast en laat groeien.{" "}
            <span className="text-teal">Geen voorkennis nodig</span>{" "}
            — alleen nieuwsgierigheid en goesting.
          </h2>
        </AnimateIn>
      </div>
    </section>
  );
}
