"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Image from "next/image";

const TrustedBy = () => {
  const [width, setWidth] = useState(0);

  const logos = [
    {
      url: "/images/trusted/1.svg",
      alt: "Brand logo 1",
      height: 500,
      width: 500,
      className: "object-contain shrink-0 size-[54px] lg:size-[130px]",
    },
    {
      url: "/images/trusted/2.svg",
      alt: "Brand logo 2",
      height: 500,
      width: 500,
      className: "object-contain shrink-0 w-[27px] h-6 lg:w-[64px] lg:h-[60px]",
    },
    {
      url: "/images/trusted/3.svg",
      alt: "Brand logo 3",
      height: 500,
      width: 500,
      className: "object-contain shrink-0 w-[26px] h-[24px] lg:size-[60px]",
    },
    {
      url: "/images/trusted/4.svg",
      alt: "Brand logo 4",
      height: 41,
      width: 160,
      className:
        "object-contain shrink-0 w-[67px] h-[14px] lg:w-[130px] lg:h-[41px]",
    },
    {
      url: "/images/trusted/5.svg",
      alt: "Brand logo 5",
      height: 500,
      width: 500,
      className: "object-contain shrink-0 w-[27px] h-[24px] lg:size-[60px]",
    },
    {
      url: "/images/trusted/6.svg",
      alt: "Brand logo 6",
      height: 500,
      width: 500,
      className:
        "object-contain shrink-0 w-[60px] h-[18px] lg:w-[145px] lg:h-[48px]",
    },
    {
      url: "/images/trusted/7.svg",
      alt: "Brand logo 7",
      height: 500,
      width: 500,
      className:
        "object-contain shrink-0 w-[43px] h-[24px] lg:w-[97px] lg:h-[60px]",
    },
    {
      url: "/images/trusted/8.svg",
      alt: "Brand logo 8",
      height: 500,
      width: 500,
      className:
        "object-contain shrink-0 w-[41px] h-[30px] lg:w-[104px] lg:h-[75px]",
    },
  ];

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="w-full flex flex-col gap-5 lg:gap-[34px] items-center justify-center overflow-hidden -mt-0.5 lg:mt-[28px]">
      <div className="flex flex-col gap-1.5 lg:gap-4 items-center justify-center">
        <h2 className="text-center text-lg max-lg:text-xs font-medium">
          Don&apos;t just take our word for it
        </h2>
        <p className="text-xl font-bold text-center max-lg:text-sm">
          we’ve teamed up with top companies to develop and enhance their
          products.
        </p>
      </div>
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex"
          animate={{
            x: width < 768 ? -width * 2 : -width,
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-5 lg:mx-[50px] my-auto"
            >
              <Image
                src={logo.url}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={logo.className}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TrustedBy;
