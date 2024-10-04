import React from "react";

import Hero from "@/components/careers/Hero";
import WhyJoin from "@/components/careers/WhyJoin";
import Values from "@/components/careers/Values";
import InterviewProcess from "@/components/careers/InterviewProcess";
import ScrollReveal from "@/components/common/ScrollReveal";
import Openings from "@/components/careers/Openings";

const Page = () => {
  return (
    <div className="flex flex-col">
      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      <ScrollReveal>
        <WhyJoin />
      </ScrollReveal>

      <ScrollReveal>
        <Values />
      </ScrollReveal>

      <ScrollReveal>
        <InterviewProcess />
      </ScrollReveal>

      <ScrollReveal>
        <Openings />
      </ScrollReveal>
    </div>
  );
};

export default Page;
