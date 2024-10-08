import React from "react";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/common/ScrollReveal";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <ScrollReveal>
        <div className="mt-[50px] max-lg:px-5 lg:px-[150px] flex max-lg:flex-col-reverse items-start justify-center lg:justify-between">
          <Image
            src="/images/about-hero.svg"
            width={1000}
            height={800}
            alt="hero image"
            className="object-contain w-full h-auto lg:w-auto lg:h-[465px] max-lg:mt-10 dark:hidden"
          />
          <Image
            src="/images/about-hero-dark.svg"
            width={1000}
            height={800}
            alt="hero image"
            className="object-contain w-full h-auto lg:w-auto lg:h-[465px] max-lg:mt-10 hidden dark:block"
          />
          <div className="flex flex-col lg:max-w-[54%] z-10 lg:ml-6">
            <h1 className="text-2xl lg:text-[50px]/[60px] font-bold mb-[20px] lg:mb-[26x] max-[370px]:text-wrap text-nowrap max-lg:text-center">
              We Are Experts <br className="max-lg:hidden" /> Turning{" "}
              <br className="max-[370px]:hidden lg:hidden" />
              <span className="text-primary-blue"> Ideas</span> into{" "}
              <br className="max-lg:hidden" />
              <span className="text-primary-blue">Solutions</span>
            </h1>
            <p className="text-sm lg:text-lg font-medium text-active-text max-w-full max-lg:text-center dark:text-white">
              From a three-person startup to a growing team of creative minds,
              technical experts, and project managers, Zerro is dedicated to
              turning your ideas into reality.
            </p>
            <div className="flex flex-row items-center gap-4 mt-[20px] lg:mt-[50px]">
              <Link
                href="/contact"
                className="text-lg max-lg:text-base text-white bg-black dark:bg-white dark:text-black w-full h-[50px] max-lg:mx-auto md:w-[170px] lg:h-[75px] rounded-none font-bold flex items-center justify-center hover:bg-primary-blue transition-all duration-300 ease-in-out"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mt-[50px] lg:mt-[100px] max-lg:px-5 lg:pr-3 lg:pl-[150px] flex items-start lg:items-end lg:justify-between max-lg:flex-col justify-center">
          <div className="flex flex-col lg:max-w-[54%] z-10 lg:mr-0.5">
            <h2 className="text-xl lg:text-[40px]/[48px] font-bold mb-5 lg:mb-[28px] text-nowrap">
              Turning Ideas and <br /> Implementation into <br />
              <span className="text-primary-blue">Innovative Products</span>
            </h2>
            <p className="text-sm lg:text-lg font-medium text-active-text max-w-[600px] dark:text-white">
              At Zerro, our team of highly qualified professionals uses their
              expertise to turn your ideas into successful development projects.
              From innovative solutions to precise implementation, we ensure
              your vision becomes a reality with top-notch skills and
              dedication.
            </p>
            <p className="text-sm lg:text-lg font-medium text-active-text max-w-[600px] dark:text-white mt-[15px]">
              Backed by a team with years of combined experience and a track
              record of successfully delivering hundreds of projects worldwide,
              Zerro brings seasoned expertise to every new venture
            </p>
            <div className="flex items-center w-full justify-between mt-4 lg:mt-[42px]">
              <div className="flex flex-col">
                <span className="text-xl lg:text-[50px]/[60px] font-semibold mb-[13px] max-lg:mb-4 dark:text-[#0577FF]">
                  10+
                </span>
                <span className="text-xl lg:text-[22px]/[26px] font-semibold dark:text-[#0577FF]">
                  Years in Operations
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl lg:text-[50px]/[60px] font-semibold mb-[13px] max-lg:mb-4 dark:text-[#0577FF]">
                  50+
                </span>
                <span className="text-xl lg:text-[22px]/[26px] font-semibold dark:text-[#0577FF]">
                  Client&apos;s in Worldwide
                </span>
              </div>
            </div>
          </div>

          <Image
            src="/images/about-hero2.svg"
            width={1000}
            height={800}
            alt="hero image"
            className="object-contain w-full h-auto lg:w-auto lg:h-[300px] xl:w-auto xl:h-[427px] max-lg:mt-12 dark:hidden"
          />

          <Image
            src="/images/about-hero2-dark.svg"
            width={1000}
            height={800}
            alt="hero image"
            className="object-contain w-full h-auto lg:w-auto lg:h-[300px] xl:w-auto xl:h-[427px] max-lg:mt-12 hidden dark:block"
          />
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Hero;
