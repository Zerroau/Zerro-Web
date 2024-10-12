import React from "react";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const LogoNav = ({ className }: { className?: string }) => {
  return (
    <Link href="/">
      <Image
        src={"/images/logo-new.png"}
        alt="Logo"
        width={500}
        height={500}
        className={cn(
          "w-[147px] h-[33px] shrink-0 transition-transform duration-300 ease-in-out hover:scale-110 dark:hidden",
          className
        )}
        fetchPriority="high"
      />
      <Image
        src={"/images/logo-footer-new.png"}
        alt="Logo"
        width={500}
        height={500}
        className={cn(
          "w-[147px] h-[33px] shrink-0 transition-transform duration-300 ease-in-out hover:scale-110 hidden dark:block",
          className
        )}
        fetchPriority="high"
      />
    </Link>
  );
};

export default LogoNav;
