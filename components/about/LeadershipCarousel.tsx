"'use client'";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CompanyData } from "./company-data";

export default function LeadershipCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [showArrows, setShowArrows] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="flex flex-col items-center justify-center mt-[35px] lg:mt-20 lg:px-[9px] max-lg:px-5">
      <h3 className="text-xl lg:text-[40px]/[48px] font-bold mb-5 lg:mb-[50px] text-center">
        Hear from our leadership team
      </h3>

      <div className="lg:hidden flex flex-col gap-2.5">
        {CompanyData.map((data) => (
          <div
            key={data.id}
            className="bg-[#FAFAFA] flex flex-col gap-[9px] items-center justify-start px-[18px] pt-6 pb-[35px] h-full"
          >
            <div className="flex flex-col items-center justify-center">
              <Image
                src={data.image ?? "/images/user-placeholder.svg"}
                width={500}
                height={500}
                alt={data.name}
                className="size-[120px] lg:size-[214px] object-contain"
              />
              <span className="font-bold text-lg mt-[28px]">{data.name}</span>
              <p className="text-sm font-semibold text-black/50 mt-[9px]">
                {data.title}
              </p>
            </div>

            <span className="text-xs font-semibold text-black/50 text-center">
              {data.description}
            </span>
          </div>
        ))}
      </div>

      <div
        className="relative w-full group max-lg:hidden"
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex h-full">
            {CompanyData.map((data) => (
              <div
                key={data.id}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] min-w-0 mr-6 min-h-full"
              >
                <div className="bg-[#FAFAFA] flex flex-col gap-9 items-center justify-start px-5 pt-6 pb-[47px] h-full">
                  <div className="flex flex-col items-center justify-center">
                    <Image
                      src={data.image ?? "/images/user-placeholder.svg"}
                      width={500}
                      height={500}
                      alt={data.name}
                      className="size-[120px] lg:size-[214px] object-contain"
                    />
                    <span className="font-bold text-2xl mt-[14px]">
                      {data.name}
                    </span>
                    <p className="text-lg font-semibold text-black/50">
                      {data.title}
                    </p>
                  </div>

                  <span className="text-xs font-semibold text-black/50 text-center">
                    {data.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={`absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md transition-opacity duration-1000 animate-bounce opacity-0 group-hover:opacity-100`}
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
        >
          <ChevronLeft className="size-4 lg:size-6" />
        </button>

        <button
          className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md transition-opacity duration-1000 animate-bounce opacity-0 group-hover:opacity-100`}
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
        >
          <ChevronRight className="size-4 lg:size-6" />
        </button>
      </div>
    </div>
  );
}
