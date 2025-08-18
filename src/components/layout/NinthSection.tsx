import React from "react";
import Flare from "../ui/Flare";
import StaffCard from "../ui/StaffCard";
import Staff from '../../../public/images/staff.png'

const NinthSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#1f8f69] flex flex-col items-center pt-20 pb-40 px-4">
      <div>
        <Flare text={"FIXYLAND STAFF"} />
      </div>
      <div className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mt-8 text-center">
        Expert Staff Persons
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full sm:w-5/6 rounded-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 -mb-32 z-10 py-6 sm:py-12">
          {Array.from({ length: 4 }).map((_, i) => (
            <StaffCard key={i} name={"John Doe"} role={"chef employee"} image={Staff} />
          ))}
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-1/3 bg-white z-0" />
    </section>
  );
};

export default NinthSection;
