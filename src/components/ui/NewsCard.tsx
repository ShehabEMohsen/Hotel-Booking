import Image, { StaticImageData } from "next/image";
import React from "react";

interface NewsCardProps {
  name: string;
  type: string;
  beds: string;
  guests: string;
  description: string;
  image: StaticImageData;
}

const NewsCard: React.FC<NewsCardProps> = ({
  name,
  type,
  beds,
  guests,
  description,
  image,
}) => (
  <div className="w-full max-w-sm flex flex-col gap-4">
    <div className="w-full">
      <div className="relative">
        <Image
          src={image}
          alt={""}
          className="rounded-xl h-64 sm:h-72 md:h-80 w-full object-cover"
        />
        <div className="absolute top-3 left-3 bg-[#1f8f69] bg-opacity-90 px-5 py-1 rounded-sm shadow text-white text-sm">
          {type}
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <div className="font-bold text-lg sm:text-xl md:text-2xl">{name}</div>
      <div className="flex flex-row gap-6 text-gray-600 text-sm sm:text-base">
        <div>{guests}</div>
        <div>{beds}</div>
      </div>
      <div className="text-gray-600 text-sm sm:text-base">{description}</div>
      <div className="text-[#1f8f69] font-bold underline underline-offset-4">
        <a href="#">Read More ↗</a>
      </div>
    </div>
  </div>
);

export default NewsCard;
