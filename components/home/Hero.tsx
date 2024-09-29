import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center w-full dark:bg-[#000B18] bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-[#000B18]/[0.2] lg:dark:bg-grid-white/[0.2] lg:bg-grid-[#000B18]/[0.2] relative pt-[50px] pb-[70px] lg:pt-[137px] lg:pb-[146px]  px-5 lg:px-[150px]">
      <div className="bg-gradient-to-t from-white/10 to-white dark:from-[#000B18]/20 dark:to-[#000B18] h-[90px] w-full absolute top-0 max-lg:h-[50px]" />
      <div className="bg-gradient-to-b from-white/10 to-white dark:from-[#000B18]/20 dark:to-[#000B18] h-[90px] w-full absolute bottom-0 max-lg:h-[50px]" />
      <div className="bg-gradient-to-l from-white/10 to-white dark:from-[#000B18]/20 dark:to-[#000B18] w-1/4 h-full absolute left-0 top-0 max-[1400px]:hidden max-lg:block max-md:max-w-[50px]" />
      <div className="bg-gradient-to-r from-white/10 to-white dark:from-[#000B18]/20 dark:to-[#000B18] w-1/4 h-full absolute right-0 top-0 max-[1400px]:hidden max-lg:block max-md:max-w-[50px]" />

      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#000B18] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#b4b4b4)]" />

      <h1 className="text-2xl leading-[33px] lg:text-[50px]/[60px] lg:leading-[72.61px] font-bold mb-5 lg:mb-[30px] whitespace-normal lg:whitespace-nowrap text-center z-50">
        We build world&apos;s finest software <br className="max-md:hidden" />{" "}
        with <span className="text-primary-blue">passion and expertise.</span>
      </h1>
      <p className="text-sm sm:text-base lg:text-lg font-medium text-active-text max-w-[486px] text-center z-50">
        We work with businesses of all sizes, from startups to Industry leaders,
        to develop software that accelerates growth with AI and advanced
        technologies.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-5 lg:mt-[35px] w-full sm:w-auto">
        <Link
          href="/contact"
          className="text-base lg:text-lg text-white bg-black dark:bg-white dark:text-black w-full sm:w-[170px] h-[50px] lg:h-[75px] rounded-none font-bold flex items-center justify-center hover:bg-primary-blue transition-all duration-300 ease-in-out z-50"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
