import Image, { StaticImageData } from "next/image";
import React from "react";

interface SquareTabProps {
  title: string;
  desciprtion: string;
  icon: StaticImageData;
}

const SquareTab: React.FC<SquareTabProps> = ({
  title, desciprtion, icon
}) => {
  return (
    <div className="relative w-[350px] h-[350px] p-14 bg-white rounded-2xl flex flex-col justify-between cursor-pointer overflow-hidden group">
  {/* Background image (replace with your image URL) */}
  <div
    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
    style={{
      backgroundImage: "url('/images/hotel.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
  {/* Green overlay */}
  <div className="absolute inset-0 bg-[#1e8f69] opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10 " />
  {/* Content */}
  <div className="relative z-20 flex flex-col h-full justify-between">
    <div><Image src={icon} alt={""}/></div>
    <div className="font-bold text-xl transition-colors duration-300 group-hover:text-white">{title}</div>
    <div className="transition-colors duration-300 group-hover:text-white">
    {desciprtion}
  </div>
  </div>
</div>
  );
};

export default SquareTab;
