import React from "react";
import Logo from "./Logo";
import { Button } from "../ui/button";
import { navData } from "./navbar/nav-data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] text-[#D9D9D9] px-5 lg:px-[150px] pt-[31px] pb-[26px] lg:pt-[71px] lg:pb-[33px]">
      <div className="flex max-lg:flex-col lg:items-end lg:justify-between max-w-[1920px] mx-auto">
        <div className="flex flex-col max-w-[510px]">
          <Logo className="w-[162px] max-lg:w-[109px] h-auto" footer />
          <p className="text-lg max-lg:text-base font-bold mt-[18px] mb-[56px] lg:mt-5 lg:mb-12">
            Design. Develop. Debug and Expand.
          </p>
          <span className="flex flex-col gap-[5px] font-bold max-lg:hidden">
            <span className="text-sm">Email</span>
            <span className="text-lg">contact@zerro.com.au</span>
          </span>

          <span className="flex flex-col gap-[5px] font-bold mt-[34px] max-lg:hidden">
            <span className="text-sm">Phone</span>
            <span className="text-lg">(487) 456 - 789</span>
          </span>

          <div className="flex flex-col mt-[34px] gap-2.5 max-lg:hidden">
            <span className="text-lg font-bold">Follow us on social media</span>

            <div className="flex flex-row gap-[15px]">
              <a href="#" className="text-lg text-white flex">
                <i className="linkedin-icon size-[35px] shrink-0"></i>
              </a>
              <a href="#" className="text-lg text-white flex">
                <i className="facebook-icon size-[35px] shrink-0"></i>
              </a>
              <a href="#" className="text-lg text-white flex">
                <i className="twitter-icon size-[35px] shrink-0"></i>
              </a>
              <a href="#" className="text-lg text-white flex">
                <i className="instagram-icon size-[35px] shrink-0"></i>
              </a>
              <a href="#" className="text-lg text-white flex">
                <i className="youtube-icon size-[35px] shrink-0"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full lg:max-w-[510px]">
          <h4 className="text-2xl lg:text-[40px]/[48px] font-bold max-lg:text-center">
            Get in touch with us and
            <br /> let’s work on your project!
          </h4>

          <div className="bg-white px-2.5 py-[18px] lg:p-2.5 mt-[34px] flex items-center justify-between">
            <input
              className="focus:outline-none border-none placeholder:text-active-text w-full text-black"
              placeholder="Enter your email address"
            />
            <Button className="rounded-none bg-black w-[160px] h-[60px] text-white max-sm:hidden hover:bg-primary-blue transition-all duration-300 ease-in-out">
              Subscribe
            </Button>
          </div>

          <Button className="rounded-none bg-white w-full h-[45px] text-black sm:hidden mt-2.5 text-base font-bold">
            Subscribe
          </Button>

          <div className="flex flex-col items-center justify-center w-full mt-[54px] gap-2.5 lg::hidden">
            <span className="text-lg max-lg:text-sm font-bold text-center">
              Follow us on social media
            </span>

            <div className="flex flex-row gap-[15px]">
              <a href="#" className="text-lg text-white flex">
                <i className="linkedin-icon size-[35px] shrink-0"></i>
              </a>
              <a href="#" className="text-lg text-white flex">
                <i className="facebook-icon size-[35px] shrink-0"></i>
              </a>
              <a href="#" className="text-lg text-white flex">
                <i className="twitter-icon size-[35px] shrink-0"></i>
              </a>
              <a href="#" className="text-lg text-white flex">
                <i className="instagram-icon size-[35px] shrink-0"></i>
              </a>
              <a href="#" className="text-lg text-white flex">
                <i className="youtube-icon size-[35px] shrink-0"></i>
              </a>
            </div>
          </div>

          <div className="flex flex-row items-center max-lg:justify-center gap-[9px] mt-6 lg:mt-14">
            {navData.map((navItem, index) => (
              <Link
                href={navItem.url}
                key={index}
                className="text-[#D9D9D9] max-lg:text-xs text-lg font-bold"
              >
                {navItem.text}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-8 max-lg:mt-[46px]">
        <p className="text-lg max-lg:text-xs font-bold text-center">
          2024 - © Zerro.All rightrs reseved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
