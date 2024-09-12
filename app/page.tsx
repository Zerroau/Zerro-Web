import ScrollReveal from "@/components/common/ScrollReveal";
import About from "@/components/home/About";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Talent from "@/components/home/Talent";
import Technologies from "@/components/home/Technologies";
import Testimonials from "@/components/home/Testimonials";
import TrustedBy from "@/components/home/TrustedBy";

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
