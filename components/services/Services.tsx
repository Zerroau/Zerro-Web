import React from "react";
import { cn } from "@/lib/utils";
import { servicesData } from "./service-data";

const Services = () => {
  return (
    <div className="flex flex-col gap-[26px] lg:gap-[50px] items-center px-5 lg:px-[150px] mt-[50px] lg:mt-[100px] w-full">
      <h3 className="text-xl lg:text-[40px]/[48.51px] font-bold text-center max-w-[986px]">
        We Provide End-to-End Services for <br className="max-lg:hidden" />{" "}
        Product Development,
        <br className="max-lg:hidden" /> Including AI, Web, and Mobile Solutions
      </h3>

      <div className="grid grid-cols-6 gap-2.5 lg:gap-y-6 lg:gap-x-[18px] w-full">
        {servicesData.map((data) => (
          <div
            key={data.id}
            id={data.value}
            className="flex flex-col gap-[5px] lg:gap-2.5 h-full w-full bg-[#FAFAFA] dark:bg-[#121B26] px-5 pt-2.5 lg:pt-[35px] lg:px-6 pb-[42px] col-span-6 sm:col-span-3 lg:col-span-2"
          >
            <i className={cn("size-[30px] lg:size-[50px]", data.icon)} />
            <div className="flex flex-col justify-between gap-[5px] lg:gap-5">
              <h4 className="text-lg lg:text-[26px]/[30px] font-bold">
                {data.title}
              </h4>
              <p className="text-sm lg:text-lg font-medium text-active-text dark:text-white/60">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
