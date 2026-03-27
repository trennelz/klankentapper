import Link from "next/link";
import { WaveLine } from "@/components/ui/WaveLine";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-start justify-center px-6 md:px-10">
      <div className="mx-auto w-full max-w-[var(--max-width-site)]">
        <p className="font-body text-xs uppercase tracking-[0.15em] text-ink/40">
          404
        </p>
        <h1 className="mt-4 font-display text-[clamp(2.5rem,5vw,5rem)] text-ink">
          Pagina niet gevonden
        </h1>
        <p className="mt-4 max-w-md font-body text-lg text-ink/60">
          Deze pagina bestaat niet of is verplaatst.
        </p>
        <Link
          href="/"
          className="group mt-8 inline-flex items-center gap-3 font-body text-sm uppercase tracking-[0.08em] text-ink no-underline"
        >
          Terug naar home
          <WaveLine className="w-8 transition-all duration-300 group-hover:w-14" color="var(--color-teal)" width="auto" />
        </Link>
      </div>
    </section>
  );
}
