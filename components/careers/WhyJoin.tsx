import React from "react";
import { whyJoinData } from "./data";
import { cn } from "@/lib/utils";

const WhyJoin = () => {
  return (
    <div className="flex flex-col gap-[26px] lg:gap-[50px] items-center px-5 lg:px-[150px] mt-[50px] lg:mt-[100px] w-full">
      <h3 className="text-2xl lg:text-[40px]/[48.51px] font-bold text-center max-w-[986px]">
        Why Join Zerro? Employee Perks and Benefits
      </h3>

      <div className="grid grid-cols-6 gap-2.5 lg:gap-y-6 lg:gap-x-[18px] w-full">
        {whyJoinData.map((data) => (
          <div
            key={data.id}
            className="flex flex-col gap-[5px] lg:gap-2.5 h-full w-full bg-[#FAFAFA] dark:bg-[#121B26] px-5 pt-2.5 pb-[25px] col-span-6 sm:col-span-3 lg:col-span-2"
          >
            <i className={cn("size-[30px] lg:size-[50px]", data.icon)} />
            <div className="flex flex-col gap-[10px] lg:gap-4">
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
      <span className="text-xs lg:text-lg font-medium text-center lg:max-w-[806px] -mt-6">
        Join a team where challenges fuel growth, collaboration sparks ideas,
        and every project pushes boundaries. Ready to make an impact with a team
        that thrives on thinking differently?
      </span>
    </div>
  );
};

export default WhyJoin;
