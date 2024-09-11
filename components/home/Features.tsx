import Link from "next/link";
import React from "react";

const Features = () => {
  return (
    <div className="flex flex-col gap-[26px] lg:gap-[50px] items-center px-5 lg:px-[150px] mt-[50px] lg:mt-[100px] w-full">
      <div className="flex flex-col gap-[34px] w-full">
        <h3 className="text-2xl lg:text-[50px]/[60.51px] font-bold text-center">
          Working together is simple
        </h3>
        <span className="text-sm font-medium text-center">
          We create a simple framework to collaborate and develop technologies
          tailored for your business
        </span>
      </div>
      <div className="grid grid-cols-3 gap-[18px] w-full">
        <div className="flex flex-col gap-5 lg:gap-[42px] h-full w-full bg-[#FAFAFA] p-6 lg:py-[25px] lg:px-10 max-lg:col-span-3">
          <i className="feature1-icon w-[36px] h-[40px]" />
          <div className="flex flex-col gap-[14px] lg:gap-7">
            <h4 className="text-lg lg:text-[26px]/[30px] font-bold">
              Efficient and scalable infraestructure
            </h4>
            <p className="text-sm lg:text-lg font-medium text-active-text">
              We employ a thorough hiring process that focuses on finding the
              most skilled and innovative developers in the industry.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:gap-[42px] h-full w-full bg-[#FAFAFA] p-6 lg:py-[25px] lg:px-10 max-lg:col-span-3">
          <i className="feature2-icon w-[43px] h-[41px]" />
          <div className="flex flex-col gap-[14px] lg:gap-7">
            <h4 className="text-lg lg:text-[26px]/[30px] font-bold">
              Affordable cost for startups and companies
            </h4>
            <p className="text-sm lg:text-lg font-medium text-active-text">
              Our commitment to ongoing training and learning keeps our talent
              at the cutting edge of technology, ready to tackle any challenge.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:gap-[42px] h-full w-full bg-[#0F0F0F] p-6 lg:py-[25px] lg:px-10 max-lg:col-span-3 text-white">
          <i className="feature3-icon w-[42px] h-[39px]" />
          <div className="flex flex-col gap-[14px] lg:gap-7">
            <h4 className="text-lg lg:text-[26px]/[30px] font-bold">
              Deliver your MVP in 4 weeks or less
            </h4>
            <p className="text-sm lg:text-lg font-medium">
              Our team&apos;s expertise is demonstrated through consistent,
              high-quality results in every project we deliver, reinforcing our
              claim to having top-tier talent.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center gap-[38px] mt-5 max-lg:hidden">
        <Link
          href="/contact"
          className="text-lg text-white bg-black w-[170px] h-[75px] rounded-none font-bold flex items-center justify-center hover:bg-primary-blue transition-all duration-300 ease-in-out"
        >
          Contact Us
        </Link>
        <Link
          href="/services"
          className="text-lg text-black bg-white w-[170px] h-[75px] rounded-none font-bold flex items-center justify-center border border-black hover:text-white hover:border-primary-blue hover:bg-primary-blue transition-all duration-300 ease-in-out"
        >
          Our Services
        </Link>
      </div>
    </div>
  );
};

export default Features;
