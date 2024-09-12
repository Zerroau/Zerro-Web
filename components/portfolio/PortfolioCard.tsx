import Image from "next/image";
import React from "react";

interface PortfolioCardProps {
  image: string;
  title: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ image, title }) => {
  return (
    <div className="max-lg:col-span-2 max-w-xl mx-auto">
      <Image
        src={image}
        alt="Portfolio Image"
        className="lg:h-[385px] max-lg:px-[60px]max-lg:h-auto w-full object-fill"
        width={800}
        height={800}
      />

      <h2 className="text-sm lg:text-[26px]/[31.47px] font-bold mt-[22px] mb-[35px]">
        {title}
      </h2>

      <div className="border-t border-black/50 mb-4" />

      <div className="flex items-center justify-between">
        <i className="portfolio-badge-icon w-[145.63px] h-[34.41px]" />
        <span className="text-sm lg:text-lg font-bold">Learn More</span>
      </div>
    </div>
  );
};

export default PortfolioCard;
