import React from "react";
import Button from "../ui/Button";
import Flare from "../ui/Flare";
import RoomCard from "../ui/RoomCard";
import Room from '../../../public/images/room.png'
import './layout.css'

const ThirdSection: React.FC = () => {
  return (
    <section className="h-screen flex flex-col items-center pt-16 gap-8 bg-[#e9efeb] overflow-auto mt-32">
        <div>
            <Flare text={"Room Type"}/>
        </div>
        <div className=" font-bold text-6xl w-1/2 text-center">The Best Luxury Rooms And Suites</div>
        <div className=" flex flex-row overflow-x-scroll gap-8 w-full px-4 pl-52 no-scrollbar">
            {Array.from({length:8}).map((_,i)=>(
                <RoomCard key={i} name={"Deluxe Rooms"} price={"$800"} beds={2} guests={2} bath={1} 
                description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered."} 
                image={Room}
                />
            ))}
        </div>
    </section>
  );
};

export default ThirdSection;
