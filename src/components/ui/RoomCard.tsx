import Image, { StaticImageData } from "next/image";
import React from "react";

interface RoomCardProps {
  name: string;
  price: string;
  beds: number;
  guests: number;
  bath: number;
  description: string;
  image: StaticImageData;
}

const RoomCard: React.FC<RoomCardProps> = ({
    name, price, beds, guests, bath, description, image
}) => (
    <div className="w-full sm:w-80 md:w-96 flex-shrink-0 flex flex-col rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 group">
        {/* Image Container */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden">
            <Image 
                src={image} 
                alt={`${name} room`} 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
            {/* Price Tag */}
            <div className="absolute top-4 left-4 bg-[#1f8f69] text-white text-sm font-medium px-4 py-2 rounded-md shadow-lg">
                {price}/Night
            </div>
            {/* View Details Button - Appears on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button className="bg-white text-[#1f8f69] font-semibold px-6 py-2 rounded-full hover:bg-[#1f8f69] hover:text-white transition-colors">
                    View Details
                </button>
            </div>
        </div>
        
        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{name}</h3>
            
            {/* Room Features */}
            <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-4">
                <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-[#1f8f69]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    {guests} Guests
                </div>
                <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-[#1f8f69]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    {beds} Beds
                </div>
                <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-[#1f8f69]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                    {bath} Bath
                </div>
            </div>
            
            <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
            
            <div className="mt-auto">
                <a href="#" className="inline-flex items-center text-[#1f8f69] font-semibold hover:text-[#197a56] transition-colors group-hover:underline">
                    Read More
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
);

export default RoomCard;
