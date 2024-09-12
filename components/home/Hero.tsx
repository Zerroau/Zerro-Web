import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="mt-[50px] px-5 lg:px-[150px] flex flex-col lg:flex-row items-center lg:justify-between">
      <div className="flex flex-col w-full lg:max-w-[54%] z-10  items-center lg:items-start text-center lg:text-left">
        <h1 className="text-2xl leading-[33px] lg:text-[50px]/[60px] lg:leading-[72.61px] font-bold mb-5 lg:mb-[26px] whitespace-normal lg:whitespace-nowrap">
          We build world&apos;s finest
          <br /> software with{" "}
          <span className="text-primary-blue">
            passion
            <br className="hidden lg:inline" /> and expertise.
          </span>
        </h1>
        <p className="text-sm sm:text-base lg:text-lg font-medium text-active-text max-w-[485px]">
          We work with businesses of all sizes, from startups to Industry
          leaders, to develop software that accelerates growth with AI and
          advanced technologies.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-5 lg:mt-[58px] w-full sm:w-auto">
          <Link
            href="/contact"
            className="text-base lg:text-lg text-white bg-black w-full sm:w-[170px] h-[50px] lg:h-[75px] rounded-none font-bold flex items-center justify-center hover:bg-primary-blue transition-all duration-300 ease-in-out"
          >
            Contact Us
          </Link>
          <Link
            href="/services"
            className="text-base lg:text-lg text-black bg-white w-full sm:w-[170px] h-[50px] lg:h-[75px] rounded-none font-bold flex items-center justify-center border border-black hover:text-white hover:border-primary-blue hover:bg-primary-blue transition-all duration-300 ease-in-out"
          >
            Our Services
          </Link>
        </div>
      </div>
      <div className="mt-8 lg:mt-0 lg:-ml-[110px] min-[1550px]:ml-0 w-full lg:w-auto">
        <Image
          src="/images/hero.svg"
          width={1000}
          height={800}
          alt="hero image"
          className="object-contain w-full h-auto"
        />
      </div>
    </div>
  );
}
