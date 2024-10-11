import dynamic from "next/dynamic";

const ScrollReveal = dynamic(() => import("@/components/common/ScrollReveal"));
const Hero = dynamic(() => import("@/components/home/Hero"));
const TrustedBy = dynamic(() => import("@/components/home/TrustedBy"));
const About = dynamic(() => import("@/components/home/About"));
const Features = dynamic(() => import("@/components/home/Features"));
const Technologies = dynamic(() => import("@/components/home/Technologies"));
const Talent = dynamic(() => import("@/components/home/Talent"));
const Testimonials = dynamic(() => import("@/components/home/Testimonials"));

export default function Home() {
  return (
    <main className="flex flex-col">
      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      <ScrollReveal>
        <TrustedBy />
      </ScrollReveal>

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
