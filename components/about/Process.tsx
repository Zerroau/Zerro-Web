import React from "react";
import { processData } from "./process-data";
import { cn } from "@/lib/utils";

const Process = () => {
  return (
    <div className="flex flex-col px-5 lg:px-[150px] mt-[50px] lg:mt-[100px]">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl lg:text-[40px]/[48px] font-bold mb-6 lg:mb-[28px] text-center">
          Working together is simple
        </h2>
        <p className="text-sm lg:text-lg font-medium text-black/50 max-w-[910px] text-center dark:text-white/60">
          At Zerro, we guide you from the inception of your idea to its
          transformation into a finished product. Here’s how we make it happen.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-x-[37px] gap-y-7 max-lg:gap-[10px] mt-12 lg:mt-[60px]">
        {processData.map((item, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col p-[18px] max-lg:col-span-3 bg-[#FAFAFA] dark:bg-[#121B26]",
              item.id === 1 && "bg-black dark:bg-[#0577FF]"
            )}
          >
            <i
              className={cn(
                "size-[50px] lg:size-[60px] max-lg:size-12 text-black shrink-0 mb-[15px] max-lg:mb-6 dark:text-white",
                item.icon,
                item.id === 1 && "text-white"
              )}
            />
            <h3
              className={cn(
                "text-lg lg:text-[26px]/[31px] font-bold mb-[22px]",
                item.id === 1 && "text-white"
              )}
            >
              {item.title}
            </h3>
            <p
              className={cn(
                "text-xs font-semibold text-active-text lg:text-xl",
                item.id === 1 && "text-[#D9D9D9]"
              )}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
