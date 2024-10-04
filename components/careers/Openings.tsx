"use client";

import React from "react";
import { Button } from "../ui/button";
import { openingsData } from "./data";

const Openings = () => {
  const handleApply = (subject: string) => {
    const mailtoLink = `mailto:careers@zerro.com.au?subject=${subject}`;
    const a = document.createElement("a");
    a.href = mailtoLink;
    a.target = "_blank";
    a.click();
  };
  return (
    <div className="bg-[#0F0F0F] px-5 lg:px-[120px] flex flex-col gap-[26px] lg:gap-[46px] items-center py-[50px] lg:py-[100px] mb-[50px]">
      <div className="flex flex-col gap-4 lg:gap-[26px] items-center justify-center">
        <h1 className="text-2xl leading-[33px] lg:text-[60px]/[72.61px] font-bold mb-5 lg:mb-[26px] whitespace-normal lg:whitespace-nowrap text-center text-white">
          We are hiring
        </h1>
        <p className="text-xs lg:text-lg font-medium text-center text-white max-w-[706px]">
          We seek talented individuals. If Zerro matches your career goals,
          browse our openings and find your fit.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[52px] gap-y-[26px] lg:gap-y-[55px]">
        {openingsData.map((data) => (
          <div
            key={data.id}
            className="flex flex-col gap-4 lg:gap-[26px] max-lg:items-center max-lg:justify-center bg-white dark:bg-[#121B26] p-6"
          >
            <h2 className="text-lg lg:text-[26px]/[31px] font-bold max-lg:text-center">
              {data.title}
            </h2>
            <p className="text-sm lg:text-lg font-medium max-lg:text-center dark:text-white/60 lg:pr-[120px]">
              {data.description}
            </p>
            <div className="flex flex-col dark:text-white/60 font-medium text-sm lg:text-lg">
              <span>Salary : {data.salary}</span>
              <span>Job Type : {data.jobType}</span>
            </div>
            <Button
              onClick={() => handleApply(data.title)}
              className="text-lg lg:text-lg text-white bg-[#0F0F0F] dark:text-white dark:bg-[#0F0F0F] w-full h-[60px] lg:h-[75px] rounded-none font-bold flex items-center justify-center hover:bg-primary-blue transition-all duration-300 ease-in-out lg:w-[170px]"
            >
              Apply Now
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Openings;
