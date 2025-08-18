import React from "react";
import Button from "../ui/Button";
import Lounge from "../../../public/images/Lounge.png"
import Tick from "../../../public/icons/mdi_tick-circle.svg"
import Person from "../../../public/images/person.png"
import Image from "next/image";

import Bike from '../../../public/icons/streamline-ultimate_fitness-bicycle-1 2.svg'
import './layout.css'
import Flare from "../ui/Flare";
import SquareTab from "../ui/SquareTab";

const FourthSection: React.FC = () => (
    <div className="h-screen flex flex-row justify-around items-center bg-[#f8f8f6] gap-4">
        <div className="w-1/3 flex flex-col gap-4">
            <div>
                <Flare text={"HOTEL SERVICES"}/>
            </div>
            <div className="font-bold text-6xl">Get The Best Hotel Fixyland Services</div>
            <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit blandit dui eu aliquet. Nunc molestie pharetra odio vel euismod. Morbi ut scelerisque lectus, quis porta nisi. Sed et orci.</div>
            <div>
                <Button text={"View All"} color={"#1e8f69"}/>
            </div>
        </div>
        <div className="w-1/2 gap-4 grid grid-cols-2 grid-rows-2">
        {Array.from({length:4}).map((_,i)=>(
            <SquareTab key={i} title={"Fitness Center"} 
            desciprtion={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit blandit dui eu aliquet. Nunc molestie pharetra odio vel euismod."} 
            icon={Bike}/>
        ))}
        </div>
    </div>
);

export default FourthSection;
