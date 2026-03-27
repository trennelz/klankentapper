import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";

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
            className="mt-2 inline-block border border-wit px-8 py-4 font-body text-sm uppercase tracking-[0.1em] text-wit no-underline transition-colors duration-200 hover:bg-wit hover:text-teal"
          >
            Neem contact op
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
