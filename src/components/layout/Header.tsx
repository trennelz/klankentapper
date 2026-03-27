"use client";

import Link from "next/link";
import { useState } from "react";
import { WaveLine } from "@/components/ui/WaveLine";

const navLinks = [
  { href: "/aanbod", label: "Aanbod" },
  { href: "/over", label: "Over" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <nav className="mx-auto flex max-w-[var(--max-width-site)] items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-wit no-underline md:text-2xl"
        >
          Klankentapper
        </Link>

        {/* Desktop nav */}
        <ul className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative font-body text-sm uppercase tracking-[0.05em] text-wit no-underline"
              >
                {link.label}
                <WaveLine 
                  className="absolute -bottom-1 left-0 w-0 opacity-0 transition-all duration-300 ease-out group-hover:w-full group-hover:opacity-100" 
                  color="white"
                  width="100%"
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="font-body text-sm uppercase tracking-[0.05em] text-wit md:hidden"
        >
          {menuOpen ? "Sluit" : "Menu"}
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-start justify-center bg-donker px-10 md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 font-body text-sm uppercase tracking-[0.05em] text-wit"
          >
            Sluit
          </button>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-4xl text-wit no-underline transition-colors hover:text-koraal"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-12 font-body text-sm text-wit/60">
            <p>geert@klankentapper.be</p>
            <p>+32 472 98 50 37</p>
          </div>
        </div>
      )}
    </header>
  );
}
