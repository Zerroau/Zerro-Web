import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Logo({
  className,
  footer = false,
}: {
  className?: string;
  footer?: boolean;
}) {
  return (
    <Link href="/" prefetch={false}>
      <Image
        src={footer ? "/images/logo-footer.png" : "/images/logo.png"}
        alt="Logo"
        width={147}
        height={33}
        className={cn(
          "shrink-0 transition-transform duration-300 ease-in-out hover:scale-110 dark:hidden",
          className
        )}
        priority
      />
      <Image
        src="/images/logo-footer.png"
        alt="Logo"
        width={147}
        height={33}
        className={cn(
          "shrink-0 transition-transform duration-300 ease-in-out hover:scale-110 hidden dark:block",
          className
        )}
        priority
      />
    </Link>
  );
}
