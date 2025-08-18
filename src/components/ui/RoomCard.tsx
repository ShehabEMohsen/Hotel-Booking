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
    <div className="w-96 min-w-96 max-w-96 flex flex-col gap-4">
        <div className="w-[400px]">
            <div className="relative">
                <Image src={image} alt={""} className="rounded-xl"/>
                <div className="absolute top-3 left-3 bg-[#1f8f69] bg-opacity-90 px-5 py-1 rounded-sm shadow text-white text-sm">{price}/Night</div>
            </div>
        </div>
        <div className="flex flex-col gap-2 ">
            <div className="font-bold text-2xl">{name}</div>
            <div className="flex flex-row gap-8 text-gray-600">
                <div>{guests} Guests</div>
                <div>{beds} Beds</div>
                <div>{bath} Bath</div>
            </div>
            <div className="text-gray-600">{description}</div>
            <div className="text-[#1f8f69] font-bold underline underline-offset-4"><a href="#">Read More ↗</a></div>
        </div>
    </div>
);

export default RoomCard;
