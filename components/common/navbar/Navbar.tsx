import React from "react";
import Navigation from "./Navigation";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { ThemeToggle } from "../ThemeToggle";
import LogoNav from "../LogoNav";

const Navbar = () => {
  return (
    <nav className="px-5 lg:px-[150px] flex items-center justify-between h-[40px] lg:h-[100px] md:py-9 sticky top-0 bg-white dark:bg-[#000B18] z-[99] max-w-[1920px] mx-auto">
      <LogoNav className="w-[141px] h-auto max-lg:w-[55px]" />
      <Navigation />
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-[26px]">
          <ThemeToggle />
          <Link
            href="/contact"
            className="text-lg text-white bg-black dark:bg-white dark:text-black w-[170px] h-[75px] rounded-none font-bold flex items-center justify-center max-lg:hidden hover:bg-primary-blue transition-all duration-300 ease-in-out"
            prefetch={false}
          >
            Contact Us
          </Link>
        </div>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
