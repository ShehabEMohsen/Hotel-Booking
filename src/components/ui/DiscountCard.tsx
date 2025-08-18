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
    <div className="w-[700px] h-[350px] p-14 bg-white rounded-2xl flex flex-col justify-between cursor-pointer overflow-hidden group" style={{backgroundImage: `url(${image})`}}>
        <div className="text-black w-1/6 text-center rounded-md border-black border-t-0 border-r-0 border-2">{discount} OFF</div>
        <div className="font-bold text-5xl text-black ">Get {discount} Off on Hotel Booking</div>
        <div className="w-1/4"><Button text={"Book Now"} color={"#ffffff"}/></div>
    </div>
  );
};

export default DiscountCard;
