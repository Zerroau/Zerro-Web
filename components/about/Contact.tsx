import { Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center max-lg:mt-[50px] mt-[100px]">
      <h2 className="text-2xl lg:text-[40px]/[48px] font-bold text-center">
        Come and visit us in one of our offices
        <br className="max-[400px]:hidden" /> worldwide
      </h2>

      <div className="mt-[26px] lg:mt-[70px] flex flex-row max-lg:flex-col gap-x-[150px] items-center justify-center max-lg:gap-y-[26px] w-full">
        <div className="flex flex-col items-center justify-center gap-[6px]">
          <h3 className="text-2xl font-bold max-lg:text-lg">
            Brisbane, Australia
          </h3>
          <span className="text-lg font-medium text-active-text flex items-center max-lg:text-xs">
            <Mail className="size-5 shrink-0 mr-2.5" />
            didi@zerro.com.au
          </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-[6px]">
          <h3 className="text-2xl font-bold max-lg:text-lg">
            Rockhampton, Australia
          </h3>
          <span className="text-lg font-medium text-active-text flex items-center max-lg:text-xs">
            <Mail className="size-5 shrink-0 mr-2.5" />
            didi@zerro.com.au
          </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-[6px]">
          <h3 className="text-2xl font-bold max-lg:text-lg">
            Melbourne, Australia
          </h3>
          <span className="text-lg font-medium text-active-text flex items-center max-lg:text-xs">
            <Mail className="size-5 shrink-0 mr-2.5" />
            contact@zerro.com.au
          </span>
        </div>
      </div>

      <div className="mt-[26px] lg:mt-[50px] flex flex-row max-lg:flex-col gap-x-[150px] items-center justify-center max-lg:gap-y-[26px] w-full">
        <div className="flex flex-col items-center justify-center gap-[6px]">
          <h3 className="text-2xl font-bold max-lg:text-lg">
            Dubai, United Arab Emirates
          </h3>
          <span className="text-lg font-medium text-active-text flex items-center max-lg:text-xs">
            <Mail className="size-5 shrink-0 mr-2.5" />
            yazy.uae@zerro.com.au
          </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-[6px]">
          <h3 className="text-2xl font-bold max-lg:text-lg">
            Colombo, Sri Lanka
          </h3>
          <span className="text-lg font-medium text-active-text flex items-center max-lg:text-xs">
            <Mail className="size-5 shrink-0 mr-2.5" />
            contact@zerro.com.au
          </span>
        </div>
      </div>

      <Image
        src="/images/contact-bottom-image.svg"
        width={1920}
        height={1080}
        alt="map"
        className="mt-[26px] lg:mt-[70px] h-auto w-full object-contain px-5 lg:px-[150px]"
      />
    </div>
  );
};

export default Contact;
