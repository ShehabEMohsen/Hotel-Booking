import React from "react";
import Button from "./Button";

interface DiscountCardProps {
  discount: string;
  image: string;
}

const DiscountCard: React.FC<DiscountCardProps> = ({
    discount, image
}) => {
  return (
    <div 
      className="w-[700px] h-[350px] p-14 bg-white rounded-2xl flex flex-col justify-between cursor-pointer overflow-hidden group transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300 z-0"></div>
      <div className="relative z-10 text-white w-1/6 text-center rounded-md border-white border-t-0 border-r-0 border-2">{discount} OFF</div>
      <div className="relative z-10 font-bold text-5xl text-white">Get {discount} Off on Hotel Booking</div>
      <div className="relative z-10 w-1/4"><Button text={"Book Now"} color={"#ffffff"}/></div>
    </div>
  );
};

export default DiscountCard;
