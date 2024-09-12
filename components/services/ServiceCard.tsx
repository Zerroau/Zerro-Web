import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="bg-[#FAFAFA] max-lg:col-span-2">
      <Image
        src={image}
        alt="Service Image"
        width={800}
        height={800}
        className="h-[390px] w-full object-cover px-4 pt-[17px] max-lg:px-[37px] max-lg:w-full max-lg:h-auto"
      />

      <div className="flex flex-col items-center justify-center gap-[13px] lg:gap-[19px] px-[2px] lg:px-[47px] pb-[33px] mt-5 lg:mt-[50px]">
        <h2 className="text-lg lg:text-[26px]/[31.47px] font-bold text-center">
          {title}
        </h2>
        <p className="text-lg max-lg:text-sm max-lg:text-active-text text-black/50 font-medium text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
