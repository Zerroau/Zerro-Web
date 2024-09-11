import ScrollReveal from "@/components/common/ScrollReveal";
import {
  portfolioData,
  portfolioTabs,
} from "@/components/portfolio/portfolio-data";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const page = () => {
  return (
    <div className="mt-[50px] pb-[50px] lg:pb-[100px] px-5 lg:px-[150px]">
      <ScrollReveal>
        <div className="flex flex-col items-center justify-center gap-2.5">
          <h1 className="text-[28px]/[31px] lg:text-[60px]/[72px] font-bold text-center">
            Portfolio
          </h1>
          <p className="text-lg max-lg:text-sm font-medium text-center max-w-[680px]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus ante
            velit nunc morbi pretium ut nullam dolor pulvinar proin
            viverra ullamcorper ac eget.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mt-[50px] lg:mt-[88px]">
          <TabsList className="flex flex-row max-lg:flex-wrap max-lg:items-start max-lg:justify-start w-full h-full bg-white p-0 mb-[50px] lg:mb-[91px]">
            {portfolioTabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.value}
                className="min-w-[70px] rounded-none w-fit data-[state=active]:bg-black data-[state=active]:text-white text-black text-sm lg:text-[26px]/[31.47px] font-bold p-3 lg:px-[28.5px] lg:py-[29.5px]"
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {portfolioTabs.map((tab) => (
            <TabsContent
              key={tab.id}
              value={tab.value}
              className="grid grid-cols-2 gap-[45px] lg:gap-x-[27px] lg:gap-y-[116px] mt-0"
            >
              {(portfolioData as any)[tab.value as any].map((data: any) => (
                <PortfolioCard
                  key={data.id}
                  title={data.title}
                  image={data.image}
                />
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </ScrollReveal>
    </div>
  );
};

export default page;
