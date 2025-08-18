import React from "react";
import Button from "../ui/Button";
import Flare from "../ui/Flare";
import RoomCard from "../ui/RoomCard";
import Room from '../../../public/images/room.png'
import './layout.css'

const rooms = [
  {
    name: "Deluxe Room",
    price: "$250",
    beds: 1,
    guests: 2,
    bath: 1,
    description: "Elegant and spacious room with a comfortable king-size bed and modern amenities.",
    image: Room
  },
  {
    name: "Executive Suite",
    price: "$450",
    beds: 1,
    guests: 2,
    bath: 1,
    description: "Luxurious suite with separate living area, perfect for business or leisure travelers.",
    image: Room
  },
  {
    name: "Family Room",
    price: "$350",
    beds: 2,
    guests: 4,
    bath: 1,
    description: "Spacious room with two queen beds, ideal for families or groups.",
    image: Room
  },
  {
    name: "Presidential Suite",
    price: "$800",
    beds: 1,
    guests: 2,
    bath: 2,
    description: "Our most luxurious accommodation featuring a king-size bed, living room, and premium amenities.",
    image: Room
  },
  {
    name: "Honeymoon Suite",
    price: "$600",
    beds: 1,
    guests: 2,
    bath: 1,
    description: "Romantic suite with a king-size bed, jacuzzi, and stunning views, perfect for newlyweds.",
    image: Room
  },
];

const ThirdSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#e9efeb] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col text-center justify-center items-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="mb-4">
            <Flare text="Room Type" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Best Luxury Rooms And Suites
          </h2>
        </div>

        {/* Room Cards */}
        <div className="relative">
          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 no-scrollbar">
            <div className="flex space-x-6 md:space-x-8">
              {rooms.map((room, index) => (
                <RoomCard 
                  key={index}
                  name={room.name}
                  price={room.price}
                  beds={room.beds}
                  guests={room.guests}
                  bath={room.bath}
                  description={room.description}
                  image={room.image}
                />
              ))}
            </div>
          </div>
          
          {/* Scroll Indicator - Only shows on mobile */}
          <div className="md:hidden text-center mt-4 text-sm text-gray-500">
            ← Scroll to explore more rooms →
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            text="View All Rooms" 
            color="#1f8f69"
            className="px-8 py-3 text-base"
          />
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
