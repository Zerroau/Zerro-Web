import React from "react";
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

const Process = () => {
  return (
    <div className="grid grid-cols-8 pt-[57px] lg:pt-[90px] px-5 lg:px-[150px] gap-[30px] lg:gap-x-[33px] lg:gap-y-[87px]">
      <div className="flex flex-col w-full items-center gap-5 col-span-8 lg:col-span-4">
        <h3 className="text-xl lg:text-[50px]/[60.51px] font-bold max-lg:text-center">
          We&apos;re an Australian tech company with a global focus, driving{" "}
          <span className="text-primary-blue">innovation</span> across borders.
        </h3>
      </div>

      <div className="flex flex-col justify-between h-full w-full col-span-8 lg:col-span-2 bg-[#FAFAFA] pt-[30px]">
        <div className="flex flex-col gap-6 px-5">
          <h4 className="text-[26px]/[30px] font-bold"> Expert Developers</h4>
          <p className="text-lg font-medium text-active-text">
            We customize our development services to meet your unique business
            needs, guaranteeing satisfaction.
          </p>
        </div>
        <span
          className={cn(
            "text-[#DADADA] text-[100px]/[132px] lg:text-[200px]/[264px] font-medium text-end w-full -mb-5 max-lg:-mt-8",
            jetBrainsMono.className
          )}
        >
          1
        </span>
      </div>
      <div className="flex flex-col justify-between h-full w-full col-span-8 lg:col-span-2 bg-[#FAFAFA] pt-[30px]">
        <div className="flex flex-col gap-6 px-5">
          <h4 className="text-[26px]/[30px] font-bold">Strong Cybersecurity</h4>
          <p className="text-lg font-medium text-active-text">
            We uphold strong cybersecurity practices to protect your data.
          </p>
        </div>
        <span
          className={cn(
            "text-[#DADADA] text-[100px]/[132px] lg:text-[200px]/[264px] font-medium text-end w-full -mb-5 max-lg:-mt-8",
            jetBrainsMono.className
          )}
        >
          2
        </span>
      </div>
      <div className="flex flex-col justify-between h-full w-full col-span-8 lg:col-span-2 bg-[#FAFAFA] pt-[30px]">
        <div className="flex flex-col gap-6 px-5">
          <h4 className="text-[26px]/[30px] font-bold">
            Client-Focused Services
          </h4>
          <p className="text-lg font-medium text-active-text">
            We customize our development services to meet your unique business
            needs, guaranteeing satisfaction.
          </p>
        </div>
        <span
          className={cn(
            "text-[#DADADA] text-[100px]/[132px] lg:text-[200px]/[264px] font-medium text-end w-full -mb-5 max-lg:-mt-8",
            jetBrainsMono.className
          )}
        >
          3
        </span>
      </div>
      <div className="flex flex-col justify-between h-full w-full col-span-8 lg:col-span-2 bg-[#FAFAFA] pt-[30px]">
        <div className="flex flex-col gap-6 px-5">
          <h4 className="text-[26px]/[30px] font-bold">
            {" "}
            Strong Cybersecurity
          </h4>
          <p className="text-lg font-medium text-active-text">
            We uphold strong cybersecurity practices to protect your data.
          </p>
        </div>
        <span
          className={cn(
            "text-[#DADADA] text-[100px]/[132px] lg:text-[200px]/[264px] font-medium text-end w-full -mb-5 max-lg:-mt-8",
            jetBrainsMono.className
          )}
        >
          4
        </span>
      </div>

      <div className="flex flex-col justify-between h-full w-full col-span-8 lg:col-span-2 bg-[#FAFAFA] pt-[30px]">
        <div className="flex flex-col gap-6 px-5">
          <h4 className="text-[26px]/[30px] font-bold">
            Agility and Strategic Vision
          </h4>
          <p className="text-lg font-medium text-active-text">
            W We adapt to market demands with a clear strategic vision, driving
            your success.
          </p>
        </div>
        <span
          className={cn(
            "text-[#DADADA] text-[100px]/[132px] lg:text-[200px]/[264px]  font-medium text-end w-full -mb-5 max-lg:-mt-8",
            jetBrainsMono.className
          )}
        >
          5
        </span>
      </div>

      <div className="flex flex-col justify-between h-full w-full col-span-8 lg:col-span-2 bg-[#FAFAFA] pt-[30px] relative max-lg:pb-[70px]">
        <div className="flex flex-col gap-6 px-5">
          <h4 className="text-[26px]/[30px] font-bold">
            Proactive Project Management
          </h4>
          <p className="text-lg font-medium text-active-text z-20">
            We utilize proactive project management strategies, ensuring that
            every phase of the development process is meticulously planned and
            executed. This approach minimizes risks, keeps the project on
            schedule, and ensures that the final product meets your business
            requirements and expectations.
          </p>
        </div>
        <span
          className={cn(
            "text-[#DADADA] text-[100px]/[132px] lg:text-[200px]/[264px] font-medium text-end w-full -mb-5 absolute bottom-0 right-0 z-10",
            jetBrainsMono.className
          )}
        >
          6
        </span>
      </div>
    </div>
  );
};

export default Process;
