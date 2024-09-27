import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { technologies } from "./tech";
import Image from "next/image";

const tabs = [
  {
    id: 1,
    title: "Frontend",
    value: "frontend",
  },
  {
    id: 2,
    title: "Backend",
    value: "backend",
  },
  {
    id: 3,
    title: "Database",
    value: "database",
  },
  {
    id: 4,
    title: "Infra and DevOps",
    value: "infra-devOps",
  },
  {
    id: 5,
    title: "Mobile",
    value: "mobile",
  },
  {
    id: 6,
    title: "CRM-ERP",
    value: "crm-erp",
  },
];

const Technologies = () => {
  return (
    <div className="px-5 lg:px-[150px] flex flex-col items-center justify-center gap-[26px] lg:gap-[70px] mt-[50px] lg:mt-[100px]">
      <div className="flex flex-col items-center gap-5 lg:gap-[26px]">
        <h2 className="text-[28px]/[33px] lg:text-[40px]/[48px] font-bold text-center max-lg:hidden">
          <span className="text-primary-blue"> 35+ Experts</span>, Proficient in
          40+ Cutting-Edge
          <br /> Technologies, Ready to Design, Develop,
          <br /> Debug, and{" "}
          <span className="text-primary-blue">Expand Your Vision.</span>
        </h2>
        <h2 className="text-2xl font-bold text-center lg:hidden">
          Expertise in-house, qualified and ready to go
        </h2>
        <span className="text-xs lg:text-2xl font-medium text-center">
          <span className="text-primary-blue">35+ Team of Experts</span> Skilled
          in 40+ Cutting-Edge Technologies
        </span>
      </div>

      <Tabs defaultValue="frontend" className="w-full h-full">
        <TabsList className="flex flex-wrap items-center justify-center w-full h-full bg-white dark:bg-transparent p-0 mb-4 lg:mb-[60px] max-lg:gap-x-[15px] gap-y-3">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.value}
              className="rounded-none w-fit data-[state=active]:bg-black dark:data-[state=active]:bg-[#0F0F0F] data-[state=active]:hover:bg-primary-blue data-[state=active]:text-white text-black dark:text-[#676767] text-sm lg:text-[26px]/[31.47px] font-bold p-3 lg:px-[28.5px] lg:py-[29.5px] hover:bg-primary-blue transition-all duration-300 ease-in-out hover:text-white"
            >
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent
          value="frontend"
          className="flex flex-wrap items-center justify-center gap-2.5 lg:gap-5 h-full"
        >
          {technologies.frontend.map((tech) => (
            <div
              key={tech.id}
              className="flex flex-col items-center gap-[17px] size-[76px] lg:size-[176px] bg-[#FAFAFA] dark:bg-[#121B26] px-2 py-4 lg:py-10 lg:px-[30px] shrink-0"
            >
              <div className="size-7 lg:size-[65px]">
                <Image
                  src={tech.url}
                  alt={tech.title}
                  width={100}
                  height={100}
                  className="size-7 lg:size-[65px] object-contain"
                />
              </div>
              <p className="text-xl max-lg:text-[10px]/[12px] font-bold text-center">
                {tech.title}
              </p>
            </div>
          ))}
        </TabsContent>
        <TabsContent
          value="backend"
          className="flex flex-wrap items-center justify-center gap-2.5 lg:gap-5 h-full"
        >
          {technologies.backend.map((tech) => (
            <div
              key={tech.id}
              className="flex flex-col items-center gap-[17px] size-[76px] lg:size-[176px] bg-[#FAFAFA] dark:bg-[#121B26] px-2 py-4 lg:py-10 lg:px-[30px] shrink-0"
            >
              <div className="size-7 lg:size-[65px]">
                <Image
                  src={tech.url}
                  alt={tech.title}
                  width={100}
                  height={100}
                  className="size-7 lg:size-[65px] object-contain"
                />
              </div>
              <p className="text-xl max-lg:text-[10px]/[12px] font-bold text-center">
                {tech.title}
              </p>
            </div>
          ))}
        </TabsContent>
        <TabsContent
          value="database"
          className="flex flex-wrap items-center justify-center gap-2.5 lg:gap-5 h-full"
        >
          {technologies.database.map((tech) => (
            <div
              key={tech.id}
              className="flex flex-col items-center gap-[17px] size-[76px] lg:size-[176px] bg-[#FAFAFA] dark:bg-[#121B26] px-2 py-4 lg:py-10 lg:px-[30px] shrink-0"
            >
              <div className="size-7 lg:size-[65px]">
                <Image
                  src={tech.url}
                  alt={tech.title}
                  width={100}
                  height={100}
                  className="size-7 lg:size-[65px] object-contain"
                />
              </div>
              <p className="text-xl max-lg:text-[10px]/[12px] font-bold text-center">
                {tech.title}
              </p>
            </div>
          ))}
        </TabsContent>
        <TabsContent
          value="infra-devOps"
          className="flex flex-wrap items-center justify-center gap-2.5 lg:gap-5 h-full"
        >
          {technologies["infra-devOps"].map((tech) => (
            <div
              key={tech.id}
              className="flex flex-col items-center gap-[17px] size-[76px] lg:size-[176px] bg-[#FAFAFA] dark:bg-[#121B26] px-2 py-4 lg:py-10 lg:px-[30px] shrink-0"
            >
              <div className="size-7 lg:size-[65px]">
                <Image
                  src={tech.url}
                  alt={tech.title}
                  width={100}
                  height={100}
                  className="size-7 lg:size-[65px] object-contain"
                />
              </div>
              <p className="text-xl max-lg:text-[10px]/[12px] font-bold text-center">
                {tech.title}
              </p>
            </div>
          ))}
        </TabsContent>
        <TabsContent
          value="mobile"
          className="flex flex-wrap items-center justify-center gap-2.5 lg:gap-5 h-full"
        >
          {technologies.mobile.map((tech) => (
            <div
              key={tech.id}
              className="flex flex-col items-center gap-[17px] size-[76px] lg:size-[176px] bg-[#FAFAFA] dark:bg-[#121B26] px-2 py-4 lg:py-10 lg:px-[30px] shrink-0"
            >
              <div className="size-7 lg:size-[65px]">
                <Image
                  src={tech.url}
                  alt={tech.title}
                  width={100}
                  height={100}
                  className="size-7 lg:size-[65px] object-contain"
                />
              </div>
              <p className="text-xl max-lg:text-[10px]/[12px] font-bold text-center">
                {tech.title}
              </p>
            </div>
          ))}
        </TabsContent>
        <TabsContent
          value="crm-erp"
          className="flex flex-wrap items-center justify-center gap-2.5 lg:gap-5 h-full"
        >
          {technologies["crm-erp"].map((tech) => (
            <div
              key={tech.id}
              className="flex flex-col items-center gap-[17px] size-[76px] lg:size-[176px] bg-[#FAFAFA] dark:bg-[#121B26] px-2 py-4 lg:py-10 lg:px-[30px] shrink-0"
            >
              <div className="size-7 lg:size-[65px]">
                <Image
                  src={tech.url}
                  alt={tech.title}
                  width={100}
                  height={100}
                  className="size-7 lg:size-[65px] object-contain"
                />
              </div>
              <p className="text-xl max-lg:text-[10px]/[12px] font-bold text-center">
                {tech.title}
              </p>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Technologies;
