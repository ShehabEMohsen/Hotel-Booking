import React from "react";
import Image from "next/image";
import Flare from "../ui/Flare";
import TestimonalCard from "../ui/TestimonalCard";

import Lounge from "../../../public/images/lounge2.png";

const EightSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row justify-center items-center bg-[#ffffff] px-4 py-12">
      <div className="w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
        <Image
          src={Lounge}
          alt="Luxury lounge"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover rounded-2xl shadow-lg"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
        <div className="w-full sm:w-auto">
          <Flare text={"TESTIMONIAL"} />
        </div>
        <div className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-xl pt-6">
          Amazing Feedback Say About Services
        </div>
        <div className="mt-8 w-full flex justify-center lg:justify-start">
          <TestimonalCard
            testimonial={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit blandit dui eu aliquet. Nunc molestie pharetra odio vel euismod."
            }
            name={"John Doe"}
            role={"CEO, Company"}
          />
        </div>
      </div>
    </section>
  );
};

export default EightSection;
