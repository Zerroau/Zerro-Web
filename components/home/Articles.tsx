import Image from "next/image";
import Link from "next/link";
import React from "react";

const Articles = () => {
  return (
    <div className="flex flex-col gap-[90px] px-5 lg:px-[150px] mt-[50px] max-lg:mt-[100px]">
      <div className="flex max-lg:flex-col max-lg:gap-[16px] items-center lg:justify-between">
        <h3 className="text-[28px]/[33px] lg:text-[50px]/[60.51px] font-bold max-lg:text-center">
          <span className="text-primary-blue">Browse</span> our latest
          <br />
          articles and resources
        </h3>
        <Link
          href="#"
          className="text-lg max-lg:text-base text-black bg-white w-full lg:w-[220px] h-[50px] lg:h-[75px] rounded-none font-bold flex items-center justify-center border border-black hover:text-white hover:border-primary-blue hover:bg-primary-blue transition-all duration-300 ease-in-out"
        >
          Browse more articles
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <Link href="#" className="flex flex-col max-lg:col-span-3">
          <Image
            src="/images/article-image.png"
            alt="Article"
            width={500}
            height={500}
            className="w-auto h-[261px] object-fill"
          />
          <span className="text-active-text font-medium text-lg mt-4 mb-5">
            26 Apr , 2024 - Engineering
          </span>
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-bold text-black">
              6 great keyboards that your development team will completely fall
              in love with
            </h4>
            <span className="text-lg text-primary-blue font-bold">
              Read more
            </span>
          </div>
        </Link>

        <Link href="#" className="flex flex-col max-lg:col-span-3">
          <Image
            src="/images/article-image.png"
            alt="Article"
            width={500}
            height={500}
            className="w-auto h-[261px] object-fill"
          />
          <span className="text-active-text font-medium text-lg mt-4 mb-5">
            26 Apr , 2024 - Engineering
          </span>
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-bold text-black">
              Code refactoring best practices: when its time (and when its not)
              to do it
            </h4>
            <span className="text-lg text-primary-blue font-bold">
              Read more
            </span>
          </div>
        </Link>

        <Link href="#" className="flex flex-col max-lg:col-span-3">
          <Image
            src="/images/article-image.png"
            alt="Article"
            width={500}
            height={500}
            className="w-auto h-[261px] object-fill"
          />
          <span className="text-active-text font-medium text-lg mt-4 mb-5">
            26 Apr , 2024 - Engineering
          </span>
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-bold text-black">
              10 amazing web development libraries you should know about in 2022
            </h4>
            <span className="text-lg text-primary-blue font-bold">
              Read more
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Articles;
