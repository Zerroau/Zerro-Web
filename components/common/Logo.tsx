import React from "react";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const Logo = ({
  className,
  footer,
}: {
  className?: string;
  footer?: boolean;
}) => {
  return (
    <Link href="/" prefetch={false}>
      <Image
        src={footer ? "/images/logo-footer.png" : "/images/logo.png"}
        alt="Logo"
        width={500}
        height={500}
        className={cn(
          "w-[147px] h-[33px] shrink-0 transition-transform duration-300 ease-in-out hover:scale-110 dark:hidden",
          className
        )}
      />
      <Image
        src={"/images/logo-footer.png"}
        alt="Logo"
        width={500}
        height={500}
        className={cn(
          "w-[147px] h-[33px] shrink-0 transition-transform duration-300 ease-in-out hover:scale-110 hidden dark:block",
          className
        )}
      />
    </Link>
  );
};

export default Logo;
