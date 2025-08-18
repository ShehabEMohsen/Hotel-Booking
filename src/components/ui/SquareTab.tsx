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
    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[350px] p-6 sm:p-8 md:p-10 lg:p-14 bg-white rounded-2xl flex flex-col justify-between cursor-pointer overflow-hidden group transition-all duration-500 hover:shadow-2xl">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          backgroundImage: "url('/images/hotel.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1e8f69] opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10" />
      
      {/* Content */}
      <div className="relative z-20 flex flex-col h-full justify-between">
        <div className="w-12 h-12 flex items-center justify-center bg-[#1e8f69] rounded-lg group-hover:bg-white transition-colors duration-500">
          <Image 
            src={icon} 
            alt={title} 
            width={24} 
            height={24} 
            className="group-hover:invert transition-all duration-500"
          />
        </div>
        
        <div className="mt-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300 mb-3">
            {title}
          </h3>
          <p className="text-gray-600 group-hover:text-white transition-colors duration-300 text-sm sm:text-base">
            {desciprtion}
          </p>
        </div>
        
        <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <button className="text-white font-medium flex items-center text-sm sm:text-base">
            Learn more
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SquareTab;
