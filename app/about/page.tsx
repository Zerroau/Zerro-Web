import React from "react";

import Hero from "@/components/about/Hero";
import Process from "@/components/about/Process";
import Contact from "@/components/about/Contact";
import Company from "@/components/about/Company";
import ScrollReveal from "@/components/common/ScrollReveal";

const Page = () => {
  return (
    <main className="flex flex-col mb-[126px]">
      <Hero />

      <ScrollReveal>
        <Process />
      </ScrollReveal>

      <Company />

      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </main>
  );
};

export default Page;
