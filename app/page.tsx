import dynamic from "next/dynamic";

import ScrollReveal from "@/components/common/ScrollReveal";
import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";

const About = dynamic(() => import("@/components/home/About"));
const Features = dynamic(() => import("@/components/home/Features"));
const Technologies = dynamic(() => import("@/components/home/Technologies"));
const Talent = dynamic(() => import("@/components/home/Talent"));
const Testimonials = dynamic(() => import("@/components/home/Testimonials"));

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />

      <TrustedBy />

      <ScrollReveal>
        <About />
      </ScrollReveal>

      <ScrollReveal>
        <Features />
      </ScrollReveal>

      <ScrollReveal>
        <Technologies />
      </ScrollReveal>

      <ScrollReveal>
        <Talent />
      </ScrollReveal>

      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
    </main>
  );
}
