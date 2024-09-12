import React from "react";

import ContactForm from "@/components/contact/ContactForm";
import TrustedBy from "@/components/contact/TrustedBy";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { Mail } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";

const Page = () => {
  return (
    <main className="mt-[50px] pb-[50px] lg:pb-[100px] ">
      <ScrollReveal>
        <div className="mb-[50px] lg:mb-[100px] px-5 lg:px-[150px]">
          <div className="flex flex-col items-center justify-center gap-5 lg:gap-[26px] max-lg:col-span-3 mb-10">
            <h1 className="text-[50px]/[60px] max-lg:text-2xl font-bold text-center">
              Contact us
            </h1>
            <p className="text-lg max-lg:text-sm font-bold text-active-text text-center">
              Interested in working with our talented team? Reach out to us to
              discover how we can collaborate effectively and bring your ideas
              into reality.
            </p>
          </div>

          <ContactForm />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="px-5 lg:px-[150px] mb-[50px] lg:mb-[100px] flex items-center justify-between max-lg:flex-col max-lg:gap-[10px]">
          <div className="py-3 lg:p-6 flex flex-row max-lg:items-center max-lg: justify-center gap-2.5 border-2 border-black w-full lg:w-fit">
            <i className="email-button-icon size-7 lg:size-[50px] shrink-0 text-black" />
            <div className="flex flex-col">
              <h3 className="text-lg max-lg:text-xs font-bold text-active-text mb-[3px]">
                You Can Also Reach Us At
              </h3>
              <p className="text-lg max-lg:text-xs font-bold">
                hello@zerro.com.au
              </p>
            </div>
          </div>
          <div className="py-3 lg:p-6 flex flex-row max-lg:items-center max-lg: justify-center gap-2.5 border-2 border-black w-full lg:w-fit">
            <i className="phone-button-icon size-[50px] shrink-0 max-lg:hidden" />
            <i className="phone-icon-mb size-7 shrink-0 lg:hidden" />
            <div className="flex flex-col">
              <h3 className="text-lg max-lg:text-xs font-bold text-active-text mb-[3px]">
                What to join our Team ?
              </h3>
              <p className="text-lg max-lg:text-xs font-bold">
                Careers@zerro.com.au
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <TrustedBy />
      </ScrollReveal>

      <ScrollReveal>
        <div className="px-5 lg:px-[150px]">
          <div className="py-10 lg:py-[50px] px-6 max-lg:mx-5 bg-[#FAFAFA]">
            <div className="flex flex-col items-center justify-center gap-[25px] mb-8 lg:mb-[68px]">
              <h2 className="text-xl lg:text-[40px]/[48px] font-bold text-center">
                Frequently Asked Questions
              </h2>
              <p className="text-xs lg:text-lg font-medium text-active-text text-center max-w-[860px]">
                Cras tincidunt lobortis feugiat vivamus at morbi leo urna
                molestie atole elementum eu facilisis faucibus interdum posuere.
              </p>
            </div>

            <Accordion type="multiple" className="grid grid-cols-2 gap-x-5">
              <AccordionItem value="item-1" className="max-lg:col-span-2">
                <AccordionTrigger className="text-sm lg:text-lg font-bold h-20">
                  What Services Does Zerro Offer?
                </AccordionTrigger>
                <AccordionContent>
                  We specialize in software development, web development, and
                  mobile app development, tailored to meet your business needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="max-lg:col-span-2">
                <AccordionTrigger className="text-sm lg:text-lg font-bold h-20">
                  How Do I Start a Project with Zerro?
                </AccordionTrigger>
                <AccordionContent>
                  To start your project, book a complimentary consultation on
                  our website or email hello@zerro.com.au for a prompt response
                  within the same day{" "}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="max-lg:col-span-2">
                <AccordionTrigger className="text-sm lg:text-lg font-bold h-20">
                  What are the Technologies That Zerro Use for Development?
                </AccordionTrigger>
                <AccordionContent>
                  We use the latest industry-standard technologies and tools to
                  ensure our development processes are cutting-edge and
                  efficient. Our tech stack includes modern programming
                  languages, frameworks, and methodologies such as AI, machine
                  learning, blockchain, DevOps, and microservices.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="max-lg:col-span-2">
                <AccordionTrigger className="text-sm lg:text-lg font-bold h-20">
                  Do you offer ongoing support after project completion?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we provide maintenance and support services to ensure
                  your software remains updated and functional.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="flex flex-col items-center justify-center max-lg:mt-[50px] mt-[100px]">
          <h2 className="text-2xl lg:text-[40px]/[48px] font-bold text-center">
            Come and visit us in one of our offices
            <br className="max-[400px]:hidden" /> worldwide
          </h2>

          <div className="mt-[26px] lg:mt-[70px] flex flex-row max-lg:flex-col gap-x-[150px] items-center justify-center max-lg:gap-y-[26px] w-full">
            <div className="flex flex-col items-center justify-center gap-[6px]">
              <h3 className="text-2xl font-bold max-lg:text-lg">
                Brisbane, Australia
              </h3>
              <span className="text-lg font-medium text-active-text flex items-center max-lg:text-xs">
                <Mail className="size-5 shrink-0 mr-2.5" />
                didi@zerro.com.au
              </span>
            </div>

            <div className="flex flex-col items-center justify-center gap-[6px]">
              <h3 className="text-2xl font-bold max-lg:text-lg">
                Rockhampton, Australia
              </h3>
              <span className="text-lg font-medium text-active-text flex items-center max-lg:text-xs">
                <Mail className="size-5 shrink-0 mr-2.5" />
                didi@zerro.com.au
              </span>
            </div>

            <div className="flex flex-col items-center justify-center gap-[6px]">
              <h3 className="text-2xl font-bold max-lg:text-lg">
                Melbourne, Australia
              </h3>
              <span className="text-lg font-medium text-active-text flex items-center max-lg:text-xs">
                <Mail className="size-5 shrink-0 mr-2.5" />
                contact@zerro.com.au
              </span>
            </div>
          </div>

          <div className="mt-[26px] lg:mt-[50px] flex flex-row max-lg:flex-col gap-x-[150px] items-center justify-center max-lg:gap-y-[26px] w-full">
            <div className="flex flex-col items-center justify-center gap-[6px]">
              <h3 className="text-2xl font-bold max-lg:text-lg">
                Dubai, United Arab Emirates
              </h3>
              <span className="text-lg font-medium text-active-text flex items-center max-lg:text-xs">
                <Mail className="size-5 shrink-0 mr-2.5" />
                yazy.uae@zerro.com.au
              </span>
            </div>

            <div className="flex flex-col items-center justify-center gap-[6px]">
              <h3 className="text-2xl font-bold max-lg:text-lg">
                Colombo, Sri Lanka
              </h3>
              <span className="text-lg font-medium text-active-text flex items-center max-lg:text-xs">
                <Mail className="size-5 shrink-0 mr-2.5" />
                contact@zerro.com.au
              </span>
            </div>
          </div>

          <Image
            src="/images/contact-bottom-image.svg"
            width={1920}
            height={1080}
            alt="map"
            className="mt-[26px] lg:mt-[70px] h-auto w-full object-contain px-5 lg:px-[150px]"
          />
        </div>
      </ScrollReveal>
    </main>
  );
};

export default Page;
