import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Klankentapper — Muziek die verbindt",
    template: "%s — Klankentapper",
  },
  description:
    "Muziekworkshops, teambuildings en lessen die verbinden, verrassen en laten groeien. Geen voorkennis nodig — alleen nieuwsgierigheid en goesting.",
  metadataBase: new URL("https://klankentapper.be"),
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "nl_BE",
    siteName: "Klankentapper",
    title: "Klankentapper — Muziek die verbindt",
    description:
      "Muziekworkshops, teambuildings en lessen die verbinden, verrassen en laten groeien.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Klankentapper — Muziek die verbindt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${fraunces.variable} ${outfit.variable}`}>
      <body>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
