import React from "react";
import Logo from "../Logo";
import Navigation from "./Navigation";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="px-5 lg:px-[150px] flex items-center justify-between h-[40px] lg:h-[100px] md:py-9 sticky top-0 bg-white dark:bg-[#000B18] z-50 max-w-[1920px] mx-auto">
      <Logo className="w-[141px] h-auto max-lg:w-[55px]" />
      <Navigation />
      <Link
        href="/contact"
        className="text-lg text-white bg-black dark:bg-white dark:text-black w-[170px] h-[75px] rounded-none font-bold flex items-center justify-center max-lg:hidden hover:bg-primary-blue transition-all duration-300 ease-in-out"
      >
        Contact Us
      </Link>
      <MobileNav />
    </nav>
  );
};

export default Navbar;
