import Link from "next/link";
import { ConcentricLines } from "@/components/ui/ConcentricLines";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-donker px-6 py-16 text-wit md:px-10 md:py-24">
      <ConcentricLines variant="offset" className="pointer-events-none absolute -bottom-[30%] -right-[10%] h-[50vh] w-[50vh] text-goud opacity-10" />
      <div className="relative mx-auto grid max-w-[var(--max-width-site)] gap-12 md:grid-cols-12 md:gap-8">
        {/* Name / tagline */}
        <div className="md:col-span-5">
          <p className="font-display text-3xl md:text-4xl">
            {"Klankentapper".split("").map((char, i) => (
              <span
                key={`${char}-${i}`}
                style={{
                  animation: `hero-char-color 16s ease-in-out ${i * 0.13 + 1.8}s infinite`,
                }}
              >
                {char}
              </span>
            ))}
          </p>
          <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-wit/60">
            Workshops, teambuildings en lessen vol ritme, klank en verbinding.
          </p>
        </div>

        {/* Navigation */}
        <div className="md:col-span-3 md:col-start-7">
          <p className="font-body text-xs uppercase tracking-[0.1em] text-wit/40">
            Navigatie
          </p>
          <nav className="mt-4 flex flex-col gap-2">
            {[
              { href: "/aanbod", label: "Aanbod" },
              { href: "/over", label: "Over" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative w-fit font-body text-sm text-wit/80 no-underline transition-colors hover:text-wit"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-teal transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="md:col-span-3">
          <p className="font-body text-xs uppercase tracking-[0.1em] text-wit/40">
            Contact
          </p>
          <div className="mt-4 flex flex-col gap-1 font-body text-sm text-wit/80">
            <a
              href="mailto:geert@klankentapper.be"
              className="no-underline transition-colors hover:text-teal"
            >
              geert@klankentapper.be
            </a>
            <a
              href="tel:+32472985037"
              className="no-underline transition-colors hover:text-teal"
            >
              +32 472 98 50 37
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 md:col-span-12">
          <p className="font-body text-xs text-wit/30">
            &copy; {new Date().getFullYear()} Klankentapper
          </p>
        </div>
      </div>
    </footer>
  );
}
