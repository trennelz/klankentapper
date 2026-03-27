import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { AanbodShowcase } from "@/components/home/AanbodShowcase";
import { TypoBreaker } from "@/components/home/TypoBreaker";
import { OverTeaser } from "@/components/home/OverTeaser";
import { ContactStrip } from "@/components/home/ContactStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <AanbodShowcase />
      <TypoBreaker />
      <OverTeaser />
      <ContactStrip />
    </>
  );
}
