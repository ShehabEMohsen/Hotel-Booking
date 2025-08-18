import React from "react";
import Flare from "../ui/Flare";
import NewsCard from "../ui/NewsCard";
import Hotel from "../../../public/images/lounge2.png";

const TenthSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[#e9efeb] px-4 py-16">
      <div>
        <Flare text={"HOTEL NEWS"} />
      </div>
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold w-full max-w-2xl text-center mt-8">
        Get More Update For Flxyland
      </div>
      <div className="w-full flex flex-col sm:flex-row flex-wrap justify-center gap-8 mt-12">
        {Array.from({ length: 3 }).map((_, i) => (
          <NewsCard
            key={i}
            name={"Most Expensive Hotel Rooms in New York"}
            type={"Hotel"}
            beds={"January 16,2024"}
            guests={"Admin"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit blandit dui eu aliquet. Nunc molestie pharetra odio vel euismod."
            }
            image={Hotel}
          />
        ))}
      </div>
    </section>
  );
};

export default TenthSection;
