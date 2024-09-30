import React from "react";
import { Metadata } from "next";

import Hero from "@/components/about/Hero";
import Process from "@/components/about/Process";
import Contact from "@/components/about/Contact";
import Company from "@/components/about/Company";
import ScrollReveal from "@/components/common/ScrollReveal";

export const metadata: Metadata = {
  title:
    "About Zerro | Australia’s Fast-Growing Technology Company Delivering Innovation and Excellence in Tech Solutions",
  description:
    "Discover Zerro, Australia’s trusted software development company. We build cutting-edge digital solutions that transform businesses, backed by years of experience and a client-focused approach.",
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
