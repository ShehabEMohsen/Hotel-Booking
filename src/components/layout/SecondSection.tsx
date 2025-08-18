import React from "react";
import Button from "../ui/Button";
import Lounge from "../../../public/images/Lounge.png"
import Tick from "../../../public/icons/mdi_tick-circle.svg"
import Person from "../../../public/images/person.png"
import Image from "next/image";

import './layout.css'
import Flare from "../ui/Flare";

const SecondSection: React.FC = () => (
    <div className="h-screen flex justify-center items-center bg-[#e9efeb]">
        <div className="w-1/3">
            <Image src={Lounge} width={400} alt={""} className="rounded-2xl " />
            {/* <div className="absolute right-1/2 -translate-x-1/2 w-24 h-24 bg-white border-4 border-gray-200 rounded-full flex flex-col items-center justify-center shadow-lg z-10">
                <span className="text-[10px] text-gray-500 font-semibold uppercase text-center leading-tight">
                30 YEARS OF EXPERIENCE <br />
                <b className="font-bold">HOTEL BUSINESS</b>
                </span>
                <span className="stamp-icon">+</span>
            </div> */}
        </div>
        <div className="w-1/3 gap-8 flex flex-col">
            {/* <div className="bg-white w-32 px-1 py-1 rounded-sm text-[#1f8f69] font-bold text-sm text-center capitalize">About Fixyland</div> */}
            <Flare text={"About Fixyland"}/>
            <div className="flex flex-col gap-4">
                <div className="text-4xl font-black">World Class Luxury Hotel and Resort Near City</div>
                <div className="text-gray-600">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</div>
            </div>
            <div className="grid grid-cols-2 grid-rows-3 justify-center items-center gap-4 text-gray-600">
                <div className="flex"><Image src={Tick} alt={""} />24-Hours Emergency Service</div>
                <div className="flex"><Image src={Tick} alt={""} />Comortable Atmosphere</div>
                <div className="flex"><Image src={Tick} alt={""} />Something by accident</div>
                <div className="flex"><Image src={Tick} alt={""} />It is a Long Established fact</div>
                <div className="flex"><Image src={Tick} alt={""} />Flexible and Cost-Effective</div>
                <div className="flex"><Image src={Tick} alt={""} />Get Free Consultation Anytime</div>
            </div>
            <div className="flex flex-row items-center gap-8">
                <div className="w-18 h-18 relative">
                    <Image src={Person} fill alt={""} className="rounded-full object-cover" />
                </div>
                <div>
                    <div className="font-bold">Robert L. Robinson</div>
                    <div className=" font-extralight text-gray-600">CEO & Founder</div>
                </div>
            </div>
        </div>
    </div>
);

export default SecondSection;
