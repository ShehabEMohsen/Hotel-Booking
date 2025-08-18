import React from "react";
import Image from "next/image";
import Flare from "../ui/Flare";
import Tick from "../../../public/icons/mdi_tick-circle.svg"
import Juice from '../../../public/images/food.png'
import Food from '../../../public/images/drinks.png'
import Button from "../ui/Button";
import DiscountCard from "../ui/DiscountCard";
// import Hotel from '../../../public/images/hotel.png'

const SixthSection: React.FC = () => {
  
  return (
    
    <section className="h-screen flex flex-col justify-center items-center">
        <div>
            <Flare text={"Special Offers"}/>
        </div>
        <div className="font-bold text-6xl w-1/2 text-center pt-8">
            Special Discount for Hotel & Resort Booking
        </div>
        <div className="w-full flex flex-row gap-4 justify-center pt-20 items-center">
            <DiscountCard discount={"10%"} image={'/images/room.png'}/>
            <DiscountCard discount={"10%"} image={'/images/room.png'}/>
        </div>
    </section>
  );
};

export default SixthSection;

