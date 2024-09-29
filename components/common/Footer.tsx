import React from "react";
import Logo from "./Logo";
import { Button } from "../ui/button";
import { navData } from "./navbar/nav-data";
import Link from "next/link";
import NewsLetter from "./NewsLetter";

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
            <div className="flex flex-col">
              <span className="text-lg">contact@zerro.nz</span>
              <span className="text-lg">contact@zerro.com.au</span>
            </div>
          </span>

          <span className="flex flex-col gap-[5px] font-bold mt-[34px] max-lg:hidden">
            <span className="text-sm">Phone</span>
            <span className="text-lg">+61 433 993 708</span>
          </span>

          <div className="flex flex-col mt-[34px] gap-2.5 max-lg:hidden">
            <span className="text-lg font-bold">Follow us on social media</span>

            <div className="flex flex-row gap-[15px]">
              <a
                href="https://www.linkedin.com/company/zerroau/"
                target="_blank"
                className="text-white flex"
              >
                <i className="lnkedin-icon size-[35px] shrink-0 hover:bg-primary-blue"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61564861119135&mibextid=LQQJ4d"
                target="_blank"
                className="text-white flex"
              >
                <i className="fb-icon size-[35px] shrink-0 hover:bg-primary-blue"></i>
              </a>
              <a href="#" className="text-white flex">
                <i className="x-icon size-[35px] shrink-0 hover:bg-primary-blue"></i>
              </a>
              <a
                href="https://www.instagram.com/zerro_au?igsh=cnd1OHJyMmV1OWpj&utm_source=q"
                target="_blank"
                className="text-white flex"
              >
                <i className="insta-icon size-[35px] shrink-0 hover:bg-primary-blue"></i>
              </a>
              <a href="#" className="text-white flex">
                <i className="yt-icon size-[35px] shrink-0 hover:bg-primary-blue"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full lg:max-w-[510px]">
          <h4 className="text-2xl lg:text-[40px]/[48px] font-bold max-lg:text-center">
            Get in touch with us and
            <br className="max-sm:hidden" /> let’s work on your project!
          </h4>

          <NewsLetter />

          <div className="flex flex-col items-center justify-center w-full mt-[30px] gap-2.5 lg:hidden">
            <span className="text-lg max-lg:text-sm font-bold text-center">
              Follow us on social media
            </span>

            <div className="flex flex-row gap-[15px]">
              <a
                href="https://www.linkedin.com/company/zerroau/"
                target="_blank"
                className="text-white flex"
              >
                <i className="lnkedin-icon size-[30px] shrink-0 hover:bg-primary-blue"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61564861119135&mibextid=LQQJ4d"
                target="_blank"
                className="text-white flex"
              >
                <i className="fb-icon size-[30px] shrink-0 hover:bg-primary-blue"></i>
              </a>
              <a href="#" className="text-white flex">
                <i className="x-icon size-[30px] shrink-0 hover:bg-primary-blue"></i>
              </a>
              <a
                href="https://www.instagram.com/zerro_au?igsh=cnd1OHJyMmV1OWpj&utm_source=q"
                target="_blank"
                className="text-white flex"
              >
                <i className="insta-icon size-[30px] shrink-0 hover:bg-primary-blue"></i>
              </a>
              <a href="#" className="text-white flex">
                <i className="yt-icon size-[30px] shrink-0 hover:bg-primary-blue"></i>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between lg:hidden mt-4">
            <span className="text-sm font-medium">contact@zerro.nz</span>
            <span className="text-sm font-medium">contact@zerro.com.au</span>
          </div>

          <div className="flex flex-row items-center max-lg:justify-center gap-[9px] mt-[30px] lg:mt-14">
            {navData.map((navItem, index) => (
              <Link
                href={navItem.url}
                key={index}
                className="text-[#D9D9D9] max-lg:text-xs text-lg font-medium"
              >
                {navItem.text}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-8 max-lg:mt-[46px]">
        <p className="text-lg max-lg:text-xs font-bold text-center">
          2024 - © Zerro.All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
