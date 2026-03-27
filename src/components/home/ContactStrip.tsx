import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { WaveLine } from "@/components/ui/WaveLine";

export function ContactStrip() {
  return (
    <section className="bg-teal px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto flex max-w-[var(--max-width-site)] flex-col items-center gap-6 text-center">
        <AnimateIn>
          <h2 className="font-display text-3xl text-wit md:text-4xl">
            Laat je verrassen, laat je raken
          </h2>
          <p className="mt-3 font-body text-base text-wit/70">
            Boek een workshop of neem vrijblijvend contact op.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <Link
            href="/contact"
            className="group relative mt-6 inline-flex items-center gap-4 overflow-hidden bg-donker px-10 py-5 font-body text-xs uppercase tracking-[0.2em] text-wit no-underline transition-all duration-300 hover:bg-donker/90"
          >
            <span className="relative z-10">Neem contact op</span>
            <WaveLine 
              className="relative z-10 w-8 transition-all duration-300 group-hover:w-12" 
              color="white"
              width="auto"
            />
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
