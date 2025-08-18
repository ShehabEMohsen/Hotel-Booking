import React from "react";
import Image from "next/image";
import Flare from "../ui/Flare";
import Tick from "../../../public/icons/mdi_tick-circle.svg"
import Juice from '../../../public/images/food.png'
import Food from '../../../public/images/drinks.png'
import Button from "../ui/Button";

const SixthSection: React.FC = () => {
  
  return (
    <section className="h-screen flex justify-between px-32 pt-24">
        <div className="w-1/2 flex flex-col gap-8">
            <div><Flare text={"FOOD & DRINK"}/></div>
            <div className="font-bold text-6xl mt-4">
                Quality Food And Drink Your Trip Are Enjoyable
            </div>
            <div className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit blandit dui eu aliquet. Nunc molestie pharetra odio vel euismod. Morbi ut scelerisque lectus, quis porta nisi. Sed et orci.  Vivamus suscipit blandit dui eu aliquet. Nunc molestie pharetra odio vel euismod. Morbi ut scelerisque lectus, quis porta nisi. Sed et orci.</div>
            <div>
                <div className="flex font-bold text-xl gap-2"><Image src={Tick} alt={""}/> Free Breakast, Tea & Coffee</div>
                <div className="ml-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit blandit dui eu aliquet. Nunc molestie pharetra odio vel euismod. Morbi ut scelerisque lectus, quis porta nisi. Sed et orci.</div>
            </div>
            <div>
                <div className="flex font-bold text-xl gap-2"><Image src={Tick} alt={""}/> Quality Foods & Drink</div>
                <div className="ml-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit blandit dui eu aliquet. Nunc molestie pharetra odio vel euismod. Morbi ut scelerisque lectus, quis porta nisi. Sed et orci.</div>
            </div>
            <div>
                <div className="flex font-bold text-xl gap-2"><Image src={Tick} alt={""}/> Restaurant & Bar</div>
                <div className="ml-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit blandit dui eu aliquet. Nunc molestie pharetra odio vel euismod. Morbi ut scelerisque lectus, quis porta nisi. Sed et orci.</div>
            </div>
            <div className="w-1/4"><Button text={"Learn More Hotel"} color={"#1e8f69"}/></div>
        </div>
        <div className="w-1/2 flex items-center justify-center relative min-h-[420px]">
          <div className="relative w-[400px] h-[420px]">
            <div className="absolute  z-10 rounded-3xl shadow-xl overflow-hidden w-[300px] h-[600px]">
              <Image src={Food} alt="Food" className="object-cover w-full h-full" width={256} height={384} />
            </div>
            <div className="absolute -right-60 -bottom-20 z-20 rounded-3xl shadow-xl overflow-hidden  w-[300px] h-[600px]">
              <Image src={Juice} alt="Juice" className="object-cover w-full h-full" width={256} height={384} />
            </div>
             <div className="absolute left-1/2 z-20 bottom-0 translate-y-1/2 bg-white rounded-2xl shadow-lg px-8 py-4 flex flex-col items-center min-w-[270px]">
              <span className="text-[#1e8f69] font-semibold mb-2 text-sm">Popular Client</span>
              <div className="flex -space-x-4">
                {[1,2,3,4,5,6].map(i => (
                  <img
                    key={i}
                    src={`https://randomuser.me/api/portraits/men/${i+10}.jpg`}
                    alt="client"
                    className="w-10 h-10 rounded-full border-2 border-white shadow"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default SixthSection;

