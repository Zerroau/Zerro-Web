import React from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface FeaturesProps {
  hideContact?: boolean;
}

const Features: React.FC<FeaturesProps> = () => {
  return (
    <div className="flex flex-col gap-[26px] lg:gap-[50px] items-center px-5 lg:px-[150px] mt-[50px] lg:mt-[100px] w-full">
      <div className="flex flex-col gap-[15px] w-full">
        <h3 className="text-xl lg:text-[40px]/[48.51px] font-bold text-center">
          Working together is simple
        </h3>
        <span className="text-sm lg:text-2xl text-active-text font-medium text-center">
          We create a simple framework to collaborate and develop technologies
          tailored for your business
        </span>
      </div>
      <div className="grid grid-cols-3 gap-[18px] w-full">
        <div className="flex flex-col gap-5 lg:gap-[42px] h-full w-full bg-[#FAFAFA] px-6 pt-5 pb-10 lg:pt-[15px] lg:pb-[50px] lg:px-10 max-lg:col-span-3">
          <i className="discovery-icon size-[35px] lg:size-[60px] text-black" />
          <div className="flex flex-col gap-[14px] lg:gap-7">
            <h4 className="text-lg lg:text-[26px]/[30px] font-bold">
              Discovery and Consultation
            </h4>
            <p className="text-sm lg:text-lg font-medium text-active-text">
              We begin with a detailed consultation to understand your business
              requirements and challenges, ensuring our solutions align with
              your goals
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:gap-[42px] h-full w-full bg-[#FAFAFA] px-6 pt-5 pb-10 lg:pt-[15px] lg:pb-[50px] lg:px-10 max-lg:col-span-3">
          <i className="custom-development-icon size-[35px] lg:size-[60px] text-black" />
          <div className="flex flex-col gap-[14px] lg:gap-7">
            <h4 className="text-lg lg:text-[26px]/[30px] font-bold">
              Custom Development Plan
            </h4>
            <p className="text-sm lg:text-lg font-medium text-active-text">
              We craft a customized development plan, outlining the technologies
              and strategies we’ll use to build your project.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:gap-[42px] h-full w-full bg-[#0F0F0F] px-6 pt-5 pb-10 lg:pt-[15px] lg:pb-[50px] lg:px-10 max-lg:col-span-3 text-white">
          <i className="effortless-icon size-[35px] lg:size-[60px] text-white" />
          <div className="flex flex-col gap-[14px] lg:gap-7">
            <h4 className="text-lg lg:text-[26px]/[30px] font-bold">
              Effortless Collaboration
            </h4>
            <p className="text-sm lg:text-lg font-medium">
              We initiate the project with a clear timeline and regular updates,
              making the collaboration smooth and efficient.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;