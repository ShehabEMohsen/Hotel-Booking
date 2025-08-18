import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
import Bike from "../../../public/icons/streamline-ultimate_fitness-bicycle-1.svg"

// Icons
// import FitnessIcon from '../../../public/icons/streamline-ultimate_fitness-bicycle-1 2.svg';
// import RestaurantIcon from '../../../public/icons/restaurant-icon.svg';
// import SpaIcon from '../../../public/icons/spa-icon.svg';
// import PoolIcon from '../../../public/icons/pool-icon.svg';

import './layout.css';
import Flare from "../ui/Flare";
import SquareTab from "../ui/SquareTab";

const services = [
  {
    title: "Fitness Center",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus aliquet libero et maximus. ",
    // icon: FitnessIcon
  },
  {
    title: "Jacuzzi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus aliquet libero et maximus. ",
    // icon: RestaurantIcon
  },
  {
    title: "Swimming Pool",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus aliquet libero et maximus. ",
    // icon: SpaIcon
  },
  {
    title: "SPA Treatments",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus aliquet libero et maximus. ",
    // icon: SpaIcon
  }
];

const FourthSection: React.FC = () => (
  <section className="py-16 md:py-24 lg:py-32 bg-[#f8f8f6] relative overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
        <div className="lg:w-2/5 xl:w-1/3">
          <div className="mb-4">
            <Flare text="HOTEL SERVICES" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Get The Best Hotel Fixyland Services
          </h2>
          
          <p className="text-gray-600 text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus aliquet libero et maximus. Duis aliquet luctus lacus, et tincidunt dui laoreet ut. Fusce porttitor sollicitudin lectus, tempor feugiat dolor.
          </p>
          
          <div className="w-full sm:w-auto">
            <Button 
              text="View All Services" 
              color="#1f8f69"
              className="px-8 py-3 text-base w-full sm:w-auto"
            />
          </div>

        </div>
        
        <div className="lg:w-3/5 xl:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <SquareTab 
                key={index}
                title={service.title}
                desciprtion={service.description}
                icon={Bike}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FourthSection;
