import ScrollReveal from "@/components/common/ScrollReveal";
import { servicesData } from "@/components/services/service-data";
import ServiceCard from "@/components/services/ServiceCard";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="mt-[50px] pb-[50px] lg:pb-[100px] px-5 lg:px-[150px]">
      <ScrollReveal>
        <div className="flex flex-col items-center justify-center gap-[9px] lg:gap-4">
          <h1 className="text-[28px]/[31px] lg:text-[60px]/[72px] font-bold text-center">
            Our services
          </h1>
          <p className="text-sm lg:text-lg font-medium text-center max-w-[680px] max-lg:text-active-text">
            Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus ante
            velit nunc morbi pretium ut nullam dolor pulvinar proin
            viverra ullamcorper ac eget.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:mt-[72px] lg:gap-x-[25px] lg:gap-y-[18px] gap-[45px]">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        <Link
          href="/contact"
          className="text-lg max-lg:text-sm text-white bg-black w-full h-[50px] lg:w-[170px] lg:h-[75px] rounded-none font-bold flex items-center justify-center mt-20 mx-auto hover:bg-primary-blue transition-all duration-300 ease-in-out"
        >
          Contact Us
        </Link>
      </ScrollReveal>
    </div>
  );
};

export default Page;
