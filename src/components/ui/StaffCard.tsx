import Image, { StaticImageData } from "next/image";
import React from "react";

interface StaffCardProps {
  name: string;
  role: string;
  image: StaticImageData;
}

const StaffCard: React.FC<StaffCardProps> = ({ name, role, image }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col items-center w-full">
      <div className="relative w-full h-64 sm:h-72 md:h-80">
        <Image className="w-full h-full object-cover rounded-t-3xl" src={image} alt={""} />
        <button className="absolute bottom-4 right-4 bg-[#1e8f69] w-10 h-10 rounded-lg flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="w-full p-4 sm:p-6 flex flex-col items-center">
        <div className="font-bold text-lg sm:text-xl text-gray-900 mb-2">{name}</div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-4 h-1 rounded-full bg-[#1e8f69]"></span>
          <span className="text-gray-400 text-sm sm:text-md">{role}</span>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
