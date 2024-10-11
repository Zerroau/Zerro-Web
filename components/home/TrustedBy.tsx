"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  {
    url: "/images/trusted/1.png",
    alt: "Brand logo 1",
    width: 130,
    height: 130,
  },
  { url: "/images/trusted/2.png", alt: "Brand logo 2", width: 64, height: 60 },
  { url: "/images/trusted/3.png", alt: "Brand logo 3", width: 60, height: 60 },
  { url: "/images/trusted/4.png", alt: "Brand logo 4", width: 130, height: 41 },
  { url: "/images/trusted/5.png", alt: "Brand logo 5", width: 60, height: 60 },
  { url: "/images/trusted/6.png", alt: "Brand logo 6", width: 145, height: 48 },
  { url: "/images/trusted/7.png", alt: "Brand logo 7", width: 97, height: 60 },
  { url: "/images/trusted/8.png", alt: "Brand logo 8", width: 104, height: 75 },
];

export default function TrustedBy() {
  const [width, setWidth] = useState(0);

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <section className="w-full flex flex-col gap-5 lg:gap-[34px] items-center justify-center overflow-hidden -mt-0.5 lg:mt-[28px]">
      <div className="flex flex-col gap-1.5 lg:gap-4 items-center justify-center">
        <h2 className="text-center text-lg max-lg:text-xs font-medium">
          Don&apos;t just take our word for it
        </h2>
        <p className="text-xl font-bold text-center max-lg:text-sm">
          We&apos;ve teamed up with top companies to develop and enhance their
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
                className="object-contain shrink-0 w-auto h-auto max-w-[130px] max-h-[75px]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
