"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { CompanyData, logos } from "./company-data";
import Link from "next/link";
import LeadershipCarousel from "./LeadershipCarousel";
import ScrollReveal from "../common/ScrollReveal";

const Company = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="flex flex-col mt-[50px] lg:mt-[100px]">
      <ScrollReveal>
        <div className="flex flex-col items-center justify-center px-5 lg:px-[150px]">
          <h2 className="text-xl lg:text-[40px]/[48px] font-bold mb-[20px] text-center">
            The Founder’s <span className="text-primary-blue">Vision</span>
          </h2>
          <p className="text-xs lg:text-lg font-medium text-black/50 max-w-[710px] text-center dark:text-white/60">
            At Zerro, our leadership team brings years of experience,
            creativity, and expertise in project management and product
            development. You’re not just working with a team; you’re
            collaborating with skilled and talented professionals dedicated to
            turning your vision into reality
          </p>
        </div>
        <div className="px-5 lg:px-[150px] mt-[29px] lg:mt-[45px]">
          <div className="bg-[#FAFAFA] dark:bg-[#121B26] flex flex-row max-lg:flex-col gap-2.5 lg:gap-[73px] items-center justify-center px-[15px] lg:px-[22px] py-[15px] lg:py-[30px]">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/company/ceo.png"
                width={500}
                height={500}
                alt="Dilitha Kolonne"
                className="size-[250px] object-contain max-lg:size-[120px]"
              />
              <span className="font-bold text-xl lg:text-[26px]/[31px] mt-4">
                Dilitha Kolonne
              </span>
              <p className="text-sm lg:text-xl font-semibold text-black/50 dark:text-white/60">
                Founder/ CEO
              </p>
            </div>

            <div className="flex flex-row">
              <i className="quote-icon-2 size-4 lg:size-10 shrink-0 text-[#848484] mr-[7px] dark:text-black" />
              <span className="text-lg max-lg:text-sm font-semibold text-black/50 max-w-[580px] text-center dark:text-white/60">
                Having collaborated with businesses of all sizes, from startups
                to enterprises, across the globe, I’ve observed common
                challenges such as limited growth, high costs, and
                inefficiencies due to outdated technology and knowledge gaps. My
                mission is to empower these businesses to realize their full
                potential by leveraging advanced technological tools. Together,
                we can transform technological challenges into opportunities for
                growth and success.
              </span>
              <i className="quote-icon-2 size-4 lg:size-10 shrink-0 text-[#848484] mt-auto rotate-180 ml-4 dark:text-black" />
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <LeadershipCarousel />
      </ScrollReveal>

      <ScrollReveal>
        <div className="px-5 lg:px-[150px] mt-[50px] lg:mt-[100px] flex flex-row max-lg:flex-col gap-3 lg:gap-[67px] justify-between">
          <h4 className="text-lg lg:text-[40px]/[48px] font-bold w-[70%] max-[370px]:w-full max-lg:mx-auto lg:w-[46%] max-lg:text-center">
            We’ve teamed up with top companies to develop and enhance their
            products.
          </h4>
          <div className="flex flex-wrap w-full lg:w-[54%] gap-5 lg:gap-[50px] items-center justify-center">
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={logo.url}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className={logo.className}
                />
              </div>
            ))}
          </div>
        </div>
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

export default Company;
