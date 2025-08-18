import React from "react";
import Button from "../ui/Button";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center text-center text-white bg-cover pt-20 md:pt-0"
      style={{ backgroundImage: "url('/images/hotel.png')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 px-4 sm:px-6 md:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Book With Best <br className="hidden sm:block" />
          <span className="text-[#e5c464]">Luxury Hotel</span>
        </h1>
        <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-gray-200 text-sm sm:text-base px-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          rhoncus nunc. Duis egestas ac ante sed tincidunt.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
          <Button text="Explore More" color="#e5c464" className="w-full sm:w-auto" />
          <Button text="Our Services" color="#ffffff" className="w-full sm:w-auto" />
        </div>
      </div>
      
      {/* Booking Form - Positioned differently on mobile */}
      <div className="relative md:absolute bottom-0 right-0 md:translate-y-1/2 w-full md:w-5/6 bg-[#1f8f69]/50 text-black rounded-t-2xl md:rounded-l-2xl shadow-lg p-4 sm:p-6 mt-8 md:mt-0">
        <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4">
          <div className="lg:col-span-1">
            <label className="block text-xs sm:text-sm font-medium text-white mb-1">Check In</label>
            <input
              type="date"
              className="w-full rounded-md px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 bg-white"
            />
          </div>
          <div className="lg:col-span-1">
            <label className="block text-xs sm:text-sm font-medium text-white mb-1">Check Out</label>
            <input
              type="date"
              className="w-full rounded-md px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 bg-white"
            />
          </div>
          <div className="lg:col-span-1">
            <label className="block text-xs sm:text-sm font-medium text-white mb-1">Room</label>
            <select className="w-full rounded-md px-2 sm:px-3 py-2 text-xs sm:text-sm border bg-white border-gray-300">
              <option>Room 1</option>
              <option>Room 2</option>
              <option>Room 3</option>
            </select>
          </div>
          <div className="lg:col-span-1">
            <label className="block text-xs sm:text-sm font-medium text-white mb-1">Adults</label>
            <select className="w-full rounded-md px-2 sm:px-3 py-2 text-xs sm:text-sm border bg-white border-gray-300">
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>3 Adults</option>
            </select>
          </div>
          <div className="lg:col-span-1">
            <label className="block text-xs sm:text-sm font-medium text-white mb-1">Children</label>
            <select className="w-full rounded-md px-2 sm:px-3 py-2 text-xs sm:text-sm border bg-white border-gray-300">
              <option>0 Children</option>
              <option>1 Child</option>
              <option>2 Children</option>
            </select>
          </div>
          <div className="flex items-end lg:col-span-1">
            <button className="w-full bg-[#e5c464] text-white py-2 px-2 sm:px-4 text-xs sm:text-sm rounded-md hover:bg-[#d4b356] transition-colors">
              Check Availability
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
