import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CustomNext,
  CustomPrev,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-[26px] lg:gap-[50px] items-center px-5 lg:px-[150px] mt-[50px] lg:mt-[100px] mb-[50px] lg:mb-[100px]">
      <div className="flex max-lg:flex-col gap-[15px] lg:justify-between w-full">
        <h3 className="text-xl lg:text-[40px]/[48.51px] font-bold text-nowrap">
          <span className="text-primary-blue">What</span> our great
          <br />
           customers say
        </h3>

        <span className="text-xl max-lg:text-sm text-active-text max-w-[520px] font-medium">
          Porta tincidunt at ac risus id sit eu quam eleifend dui ullamcorper
          scelerisque sodales quisque consectetur faucibus tincidunt risus
        </span>
      </div>
      {/* <Carousel className="px-[77px] py-[47px] bg-[#FAFAFA]">
        <CarouselContent className="ml-0">
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="h-full w-full flex flex-row gap-9 justify-center items-end"
            >
              <Image
                src="/images/testimonial-user.png"
                alt="Testimonial"
                width={500}
                height={500}
                className="size-[350px] rounded-full object-fill shrink-0"
              />
              <div className="flex flex-col pb-6 ">
                <p className="text-active-text text-26px font-bold mb-[22px] relative">
                  “Lorem ipsum dolor sit ametolil col consectetur adipiscing
                  lectus a nunc mauris scelerisque sed egestas. Drakogn filmeon
                  dorlerin saled tiner”
                  <i className="quote-icon w-[200px] h-[176px] absolute -top-[45px] left-[129px]" />
                </p>
                <span className="flex flex-col gap-[9px]">
                  <p className="text-26px font-bold">Andy Smith</p>
                  <p className="text-lg text-active-text">@andysmith</p>
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex flex-row w-full gap-[11px] items-center justify-end">
          <CustomPrev
            variant="outline"
            className="border-black rounded-none border-2"
          >
            <ArrowLeft size={24} />
          </CustomPrev>
          <CustomNext
            variant="outline"
            className="border-black rounded-none border-2"
          >
            <ArrowRight size={24} />
          </CustomNext>
        </div>
      </Carousel> */}

      <Image
        src="/images/testimonials.png"
        alt="Testimonial"
        width={2500}
        height={1500}
        className="w-full object-contain h-auto"
      />
    </div>
  );
};

export default Testimonials;
