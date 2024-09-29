import React from "react";
import { Metadata } from "next";

import Hero from "@/components/about/Hero";
import Process from "@/components/about/Process";
import Contact from "@/components/about/Contact";
import Company from "@/components/about/Company";
import ScrollReveal from "@/components/common/ScrollReveal";

export const metadata: Metadata = {
  title:
    "About Zerro | Australia’s Fast-Growing Technology Company Delivering Innovationand Excellence in Tech Solutions",
};

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
