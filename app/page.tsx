import ScrollReveal from "@/components/common/ScrollReveal";
import Articles from "@/components/home/Articles";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
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
        <Technologies />
      </ScrollReveal>

      <ScrollReveal>
        <Process />
      </ScrollReveal>

      <ScrollReveal>
        <Features />
      </ScrollReveal>
      {/* <Articles /> */}
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
    </main>
  );
}
