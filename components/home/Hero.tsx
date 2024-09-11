import React from "react";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="mt-[50px] px-5 lg:px-[150px] flex flex-row max-lg:flex-col max-lg:gap-[26px] items-center justify-center">
      <div className="flex flex-col w-full lg:max-w-[54%] z-10 max-lg:items-center">
        <h1 className="text-[28px]/[33px] lg:text-[60px]/[72.61px] font-bold mb-[20px] lg:mb-[26px] text-nowrap max-lg:text-center">
          We build world’s finest
          <br /> software with{" "}
          <span className="text-primary-blue">
            passion
            <br /> and expertise.
          </span>
        </h1>
        <p className="text-lg max-lg:text-sm max-lg:text-center font-medium text-active-text lg:max-w-[485px]">
          We work with businesses of all sizes, from startups to Industry
          leaders, to develop software that accelerates growth with AI and
          advanced technologies.
        </p>
        <div className="flex flex-row max-lg:flex-col items-center gap-[15px] lg:gap-4 mt-5 lg:my-[58px] w-full">
          <Link
            href="/contact"
            className="text-lg max-lg:text-base text-white bg-black w-full lg:w-[170px] h-[50px] lg:h-[75px] rounded-none font-bold flex items-center justify-center hover:bg-primary-blue transition-all duration-300 ease-in-out"
          >
            Contact Us
          </Link>
          <Link
            href="/services"
            className="text-lg max-lg:text-base text-black bg-white w-full lg:w-[170px] h-[50px] lg:h-[75px] rounded-none font-bold flex items-center justify-center border border-black hover:text-white hover:border-primary-blue hover:bg-primary-blue transition-all duration-300 ease-in-out"
          >
            Our Services
          </Link>
        </div>
      </div>
      <Image
        src="/images/hero.svg"
        width={1000}
        height={800}
        alt="hero image"
        className="object-contain w-auto max-lg:w-full max-lg:h-auto h-[537px] lg:-ml-10"
      />
    </div>
  );
};

export default Hero;
