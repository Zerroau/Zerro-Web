import React from "react";

import Link from "next/link";
import Image from "next/image";

import ScrollReveal from "@/components/common/ScrollReveal";
import Technologies from "@/components/services/Technologies";
import Services from "@/components/services/Services";
import Features from "@/components/services/Features";

const Page = () => {
  return (
    <div className="mt-[50px] pb-[50px] lg:pb-[100px]">
      <ScrollReveal>
        <div className="flex flex-col items-center justify-center gap-[9px] lg:gap-4 px-5 lg:px-[150px]">
          <h1 className="text-xl lg:text-[40px]/[48px] font-bold text-center">
            Cutting-Edge Solutions from Experts in
            <br className="max-lg:hidden" /> AI, Development, and Design
          </h1>
          <p className="text-xs lg:text-lg font-medium text-center max-w-[680px] max-lg:text-active-text">
            Businesses trust Zerro for our unmatched expertise and commitment to
            delivering top-tier technology solutions, from Machine Learning to
            Web Development. Our professional team ensures quality, reliability,
            and results that exceed expectations every time.
          </p>
        </div>

        <Technologies />
      </ScrollReveal>

      <ScrollReveal>
        <Services />
      </ScrollReveal>

      <ScrollReveal>
        <Features hideContact />
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-black dark:bg-[#121B26] h-full flex flex-row max-lg:flex-col-reverse items-center gap-5 lg:gap-[100px] pt-5 mt-[50px] lg:mt-[100px] lg:justify-between lg:pr-[150px]">
          <Image
            src="/images/help-image.svg"
            width={1000}
            height={1000}
            alt="Help"
            className="w-[683px] h-auto object-contain shrink-0 max-lg:w-full max-lg:h-auto"
          />
          <div className="flex flex-col max-lg:w-full max-lg:px-5 max-lg:items-center">
            <h5 className="text-[28px]/[31px] lg:text-[50px]/[61px] font-bold mb-4 text-white">
              How can we help?
              <br />
              <span className="text-primary-blue">
                Talk to our experts
                <br className="min-[1500px]:hidden" /> today.
              </span>
            </h5>
            <Link
              href="/contact"
              className="text-lg max-lg:text-sm text-white border-white w-full h-[50px] lg:w-[170px] lg:h-[75px] rounded-none font-bold flex items-center justify-center border hover:bg-primary-blue transition-all duration-300 ease-in-out hover:border-primary-blue"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Page;
