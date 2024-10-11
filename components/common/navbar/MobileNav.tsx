"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { navData, serviceItems } from "./nav-data";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "../Logo";
import { ChevronDown, X } from "lucide-react";

export default function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="lg:!hidden">
        <span className="sr-only">Menu</span>
        <i className="menu-icon w-[28px] h-[19px] shrink-0 lg:!hidden text-black dark:text-white" />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 gap-0 w-full">
        <div className="h-[70px] flex items-center justify-between pl-[30px] pr-6">
          <Logo className="w-[55px] h-auto" />
          <SheetClose>
            <X className="size-[25px] shrink-0" />
          </SheetClose>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center px-6 pb-5">
          {navData.map((item) =>
            item.text === "Services" ? (
              <Accordion
                key={item.id}
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem value="services">
                  <AccordionTrigger
                    Icon={ChevronDown}
                    className={cn(
                      "text-base font-semibold w-fit justify-center py-2 pl-5 [&[data-state=open]>svg]:rotate-180",
                      pathname.startsWith(item.url) ? "text-primary-blue" : ""
                    )}
                  >
                    {item.text}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2 pl-4">
                      {serviceItems.map((service, index) => (
                        <Link
                          key={index}
                          href={service.url}
                          className="text-sm font-medium text-gray-600 hover:text-primary-blue text-center dark:text-white"
                          onClick={() => setIsOpen(false)}
                          prefetch={false}
                        >
                          {service.text}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <Link
                key={item.id}
                href={item.url}
                className={cn(
                  "text-base font-semibold w-full text-center py-2",
                  pathname === item.url ? "text-primary-blue" : ""
                )}
                onClick={() => setIsOpen(false)}
                prefetch={false}
              >
                {item.text}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="text-lg max-lg:text-base text-white bg-black dark:bg-white dark:text-black w-full h-[50px] rounded-none font-bold flex items-center justify-center"
            onClick={() => setIsOpen(false)}
            prefetch={false}
          >
            Contact Us
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
