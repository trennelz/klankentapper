import { AnimateIn } from "@/components/ui/AnimateIn";

export function Intro() {
  return (
    <section className="px-6 py-8 md:px-10 md:py-12">
      <div className="mx-auto max-w-[var(--max-width-site)]">
        <AnimateIn>
          <h2 className="mx-auto max-w-3xl text-center font-display text-[clamp(1.6rem,3vw,2.6rem)] leading-[1.15] text-donker">
            Muziek die verbindt, verrast en laat groeien.{" "}
            <span className="text-teal">Geen voorkennis nodig</span>{" "}
            — alleen nieuwsgierigheid en goesting.
          </h2>
        </AnimateIn>
      </div>
    </section>
  );
}
