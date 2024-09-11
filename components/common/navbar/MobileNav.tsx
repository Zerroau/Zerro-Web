"use client";

import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { navData } from "./nav-data";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "../Logo";
import { X } from "lucide-react";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <i className="menu-icon w-[28px] h-[19px] shrink-0" />
      </SheetTrigger>
      <SheetContent className="p-0 gap-0 w-full">
        <div className="h-[70px] flex items-center justify-between pl-[30px] pr-6">
          <Logo className="w-[55px] h-auto" />
          <SheetClose>
            <X className="size-[25px] shrink-0" />
          </SheetClose>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center px-6 pb-5">
          {navData.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className={cn(
                "text-base font-semibold",
                pathname === item.url ? "text-primary-blue" : "text-black"
              )}
            >
              <SheetClose>{item.text}</SheetClose>
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-lg max-lg:text-base text-white bg-black w-full h-[50px] rounded-none font-bold flex items-center justify-center"
          >
            Contact Us
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
