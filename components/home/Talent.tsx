import React from "react";
import { aboutData } from "./about-data";
import { cn } from "@/lib/utils";

const Talent = () => {
  return (
    <div className="flex flex-col gap-[26px] lg:gap-[50px] items-center px-5 lg:px-[150px] mt-[50px] lg:mt-[100px] w-full">
      <h3 className="text-2xl lg:text-[40px]/[48.51px] font-bold text-center max-w-[986px]">
        We&apos;re an Australian tech company with a global focus, driving
        innovation across borders.
      </h3>

      <div className="grid grid-cols-3 gap-[18px] w-full">
        <div className="flex flex-col gap-6 lg:gap-[17px] h-full w-full bg-[#0F0F0F] px-6 pt-9 pb-[60px] lg:pt-[56px] lg:pb-[50px] lg:px-8 max-lg:col-span-3 text-white">
          <i className="selective-hiring-icon size-[35px] lg:size-[60px] text-white" />
          <div className="flex flex-col gap-6 lg:gap-[36px]">
            <h4 className="text-lg lg:text-[26px]/[30px] font-bold">
              Selective Hiring Criteria
            </h4>
            <p className="text-sm lg:text-lg font-medium">
              We begin with a detailed consultation to understand your business
              requirements and challenges, ensuring our solutions align with
              your goals
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:gap-[17px]  h-full w-full bg-[#FAFAFA] px-6 pt-9 pb-[60px] lg:pt-[56px] lg:pb-[50px] lg:px-8 max-lg:col-span-3">
          <i className="continous-skill-icon size-[35px] lg:size-[60px] text-black" />
          <div className="flex flex-col gap-6 lg:gap-[36px]">
            <h4 className="text-lg lg:text-[26px]/[30px] font-bold">
              Continuous Skill Development
            </h4>
            <p className="text-sm lg:text-lg font-medium text-active-text">
              We craft a customized development plan, outlining the technologies
              and strategies we’ll use to build your project.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:gap-[17px]  h-full w-full bg-[#FAFAFA] px-6 pt-9 pb-[60px] lg:pt-[56px] lg:pb-[50px] lg:px-8 max-lg:col-span-3">
          <i className="proven-record-icon size-[35px] lg:size-[60px] text-black" />
          <div className="flex flex-col gap-6 lg:gap-[36px]">
            <h4 className="text-lg lg:text-[26px]/[30px] font-bold">
              Proven Track Record
            </h4>
            <p className="text-sm lg:text-lg font-medium text-active-text">
              We initiate the project with a clear timeline and regular updates,
              making the collaboration smooth and efficient.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talent;
