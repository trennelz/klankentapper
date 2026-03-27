export interface AanbodItem {
  slug: string;
  title: string;
  type: string;
  excerpt: string;
  image: string;
  duration: string;
  noExperience: boolean;
  featured: boolean;
  content: string[];
  highlights?: string[];
}

export const aanbodData: AanbodItem[] = [
  {
    slug: "ukelele-teambuilding",
    title: "Ukelele Teambuilding",
    type: "Teambuilding workshop",
    excerpt:
      "Niet om te presteren, maar om in het moment te zijn. Samenklank, verbinding en het plezier van iets nieuws ontdekken.",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1200&q=80",
    duration: "1,5 of 2 uur",
    noExperience: true,
    featured: true,
    content: [
      "Deze teambuilding draait niet om presteren, maar om in het moment zijn. Je voelt, hoort en ervaart het speelse maar verrassend boeiende karakter van de ukelele.",
      "De focus ligt op samenklank, verbinding en het plezier van iets nieuws ontdekken.",
      "Je kan meer dan je denkt — en je ontdekt het terwijl je als groep toewerkt naar een eenvoudig maar verbindend samenspel.",
    ],
    highlights: [
      "Geen muzikale voorkennis vereist",
      "Duur: 1,5 of 2 uur",
    ],
  },
  {
    slug: "ukelele-initiatie",
    title: "Ukelele Initiatie",
    type: "Workshopreeks",
    excerpt:
      "Voor wie zich écht wil verdiepen in de wereld van de ukelele. Meerdere sessies, van akkoorden tot fingerpicking.",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&q=80",
    duration: "4 sessies van 1,5 of 2 uur",
    noExperience: true,
    featured: false,
    content: [
      "Voor groepen of deelnemers die zich écht willen verdiepen in de wereld van de ukelele. In deze reeks leer je de belangrijkste akkoorden en hun notatie, tabulatuur lezen, verschillende ritmes en strumpatronen, en de basis van fingerpicking.",
      "Alles wordt aangeleerd aan de hand van toegankelijke en bekende liedjes, zodat je meteen muzikaal resultaat voelt en hoort.",
    ],
    highlights: [
      "De belangrijkste akkoorden en hun notatie",
      "Tabulatuur lezen",
      "Verschillende ritmes en strumpatronen",
      "De basis van fingerpicking",
      "Geen muzikale voorkennis vereist",
      "Duur: 4 sessies van 1,5 of 2 uur (of andere frequentie in overleg)",
    ],
  },
  {
    slug: "initiatie-percussie",
    title: "Initiatie Percussie",
    type: "Percussie workshop",
    excerpt:
      "Een speelse én energieke workshop vol ritme en ontdekking. Van bodypercussion tot polyritmisch samenspel.",
    image:
      "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=1200&q=80",
    duration: "Minimaal 2 uur",
    noExperience: true,
    featured: true,
    content: [
      "Een speelse én energieke workshop vol ritme en ontdekking! We werken met een brede variatie aan percussie-instrumenten: snaredrum, hihat, tomtom, cajon, pandeiro, conga, djembe, shekere, shakers, woodblock, boomwhackers en meer.",
      "We starten met een toegankelijke bodypercussion-opwarming, verkennen de speelwijzen van elk instrument door vooral zelf te proberen, en groeien samen toe naar een krachtig polyritmisch samenspel als slot.",
    ],
    highlights: [
      "Snaredrum, hihat, tomtom",
      "Cajon, pandeiro, conga, djembe",
      "Shekere, shakers, woodblock, boomwhackers",
      "Geen muzikale voorkennis vereist",
      "Duur: minimaal 2 uur",
    ],
  },
  {
    slug: "samen-zingen",
    title: "Samen Zingen",
    type: "Zangworkshop",
    excerpt:
      "Een unieke mix van workshop, koorrepetitie en mini-concert. Interactief, met plezier als rode draad.",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1200&q=80",
    duration: "In overleg",
    noExperience: true,
    featured: true,
    content: [
      "Een unieke mix van workshop, koorrepetitie en mini-concert. Samen zingen bij Klankentapper is een interactieve zangervaring waarbij plezier centraal staat. De deelnemers worden uitgenodigd om actief mee te zingen. De teksten worden geprojecteerd en/of meegegeven in een handige liedbundel.",
      "De programma's zijn speciaal afgestemd op mensen die Nederlands leren, maar iedereen is welkom. Een programma op aanvraag is mogelijk: we werken graag een sessie op maat uit, ook voor wie Nederlands als moedertaal heeft.",
    ],
    highlights: [
      "Programma: Je bent een vriend van mij",
      "Programma: Ergens onderweg",
      "Programma: Iedereen is van de wereld",
      "Programma op maat mogelijk",
      "Begeleiding: Geert Hollemans (gitaar, zang) & Jeffrey Dirix (piano, zang)",
    ],
  },
  {
    slug: "prive-les",
    title: "Privé Les",
    type: "Privé les",
    excerpt:
      "Ukelele, gitaar of folkviool — op jouw tempo, in jouw stijl.",
    image:
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1200&q=80",
    duration: "½ uur of 1 uur",
    noExperience: true,
    featured: false,
    content: [
      "Ukelele, gitaar of folkviool — lessen op jouw tempo, in jouw stijl. Lessen van een half uur of een uur, eventueel per twee of drie met familie of vrienden.",
      "Prijzen op aanvraag.",
    ],
    highlights: [
      "Ukelele, gitaar, folkviool",
      "Lessen van ½ uur of 1 uur",
      "Eventueel per twee of drie (familie, vrienden)",
      "Prijzen op aanvraag",
    ],
  },
];

export function getAanbodBySlug(slug: string) {
  return aanbodData.find((item) => item.slug === slug);
}
