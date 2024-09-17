"use client";

import React, { useState } from "react";
import { navData, serviceItems } from "./nav-data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row items-center gap-4 max-[1400px]:gap-0 max-lg:hidden">
      {navData.map((item) =>
        item.text === "Services" ? (
          <DropdownMenu key={item.id} open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger
              asChild
              className="focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <Link
                href={item.url}
                className={cn(
                  "text-lg font-medium px-4 py-2.5 transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-transparent flex items-center",
                  pathname.startsWith(item.url)
                    ? "text-primary-blue"
                    : "text-black"
                )}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                {item.text} <ChevronDown className="ml-2 h-4 w-4" />
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              {serviceItems.map((service, index) => (
                <DropdownMenuItem key={index} asChild>
                  <Link href={service.url} className="w-full">
                    {service.text}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
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
        )
      )}
    </div>
  );
}
