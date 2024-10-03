import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center w-full pt-[50px] px-5 lg:px-[150px]">
      <h1 className="text-2xl leading-[33px] lg:text-[60px]/[72.61px] font-bold mb-5 lg:mb-[26px] whitespace-normal lg:whitespace-nowrap text-center">
        Working at Zerro
      </h1>
      <p className="text-xs lg:text-lg font-medium text-active-text max-w-[676px] text-center dark:text-white/50">
        As humans, we are born with problem-solving skills. With the right
        environment and guidance, those skills lead to innovation. We cultivate
        a culture where creativity, technology, and collaboration drive
        cutting-edge solutions in software development and beyond.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-5 lg:mt-[35px] w-full sm:w-auto">
        <Link
          href="/contact"
          className="text-base lg:text-lg text-white bg-black dark:bg-white dark:text-black w-full sm:w-[170px] h-[50px] lg:h-[75px] rounded-none font-bold flex items-center justify-center hover:bg-primary-blue transition-all duration-300 ease-in-out"
        >
          Contact Us
        </Link>
      </div>

      <div className="grid grid-cols-2 mt-[50px] gap-5 max-lg:gap-7">
        <Image
          alt="Careers 1"
          src="/images/careers/hero1.png"
          width={1500}
          height={1500}
          className="col-span-2 lg:col-span-1 w-full h-auto object-contain"
        />
        <Image
          alt="Careers 2"
          src="/images/careers/hero2.png"
          width={1500}
          height={1500}
          className="col-span-2 lg:col-span-1 w-full h-auto object-contain"
        />
      </div>

      <span className="text-xs font-medium lg:text-lg lg:px-5 mt-[50px] max-lg:mt-7 text-center">
        At Zerro, we believe that our team is our greatest asset. We strive to
        create an environment where everyone feels supported, valued, and
        motivated. From competitive salaries to opportunities for personal
        growth, our benefits are designed to ensure your well-being, growth, and
        success. Discover what makes working at Zerro both rewarding and
        fulfilling.
      </span>
    </div>
  );
}
