import React from "react";
import Button from "../ui/Button";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-screen flex flex-col justify-center text-center text-white bg-cover"
      style={{ backgroundImage: "url('/images/hotel.png')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 px-6">
        <h1 className=" text-6xl md:text-6xl font-bold leading-tight">
          Book With Best <br />
          <span className="text-[#e5c464]">Luxury Hotel</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          rhoncus nunc. Duis egestas ac ante sed tincidunt.
        </p>

        <div className="mt-6 flex justify-center gap-4 h-52">
          <Button text="Explore More" color="#e5c464" />
          <Button text="Our Services" color="#ffffff" />
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[90%] justify-end bg-[#1f8f69]/50 text-black rounded-2xl shadow-lg p-6">
        <form className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-white mb-1">Check In</label>
            <input
              type="date"
              className="w-full rounded-md px-3 py-2 border border-gray-300 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">Check Out</label>
            <input
              type="date"
              className="w-full rounded-md px-3 py-2 border border-gray-300 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">Room</label>
            <select className="w-full rounded-md px-3 py-2 border bg-white border-gray-300">
              <option>Room 1</option>
              <option>Room 2</option>
              <option>Room 3</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">Adults</label>
            <select className="w-full rounded-md px-3 py-2 border bg-white border-gray-300">
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>3 Adults</option>
            </select>
            </div>
            <div>
            <label className="block text-sm font-medium text-white mb-1">Children</label>
            <select className="w-full rounded-md px-3 py-2 border bg-white border-gray-300">
              <option>1 Children</option>
              <option>2 Children</option>
              <option>3 Children</option>
            </select>
          </div>
          <div className="flex items-end">
            <Button text="Check Now" color="#e5c464" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
