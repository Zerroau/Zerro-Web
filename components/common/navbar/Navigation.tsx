"use client";

import React from "react";
import { navData } from "./nav-data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-row items-center gap-4 max-[1400px]:gap-0 max-lg:hidden">
      {navData.map((item) => (
        <Link
          key={item.id}
          href={item.url}
          className={cn(
            "text-lg font-medium px-4 py-2.5 transition-transform duration-300 ease-in-out hover:scale-110",
            pathname === item.url ? "text-primary-blue" : "text-black"
          )}
        >
          {item.text}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
