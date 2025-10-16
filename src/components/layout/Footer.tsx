import React from "react";
import Image from "next/image";
// import Flare from "../ui/Flare";
// import TestimonalCard from "../ui/TestimonalCard";
// import Hotel from '../../../public/images/lounge2.png'
import Instagram from "../../../public/icons/mdi_instagram_green.svg";
import Facebook from "../../../public/icons/ic_baseline-facebook.svg";
import InstagramWhite from "../../../public/icons/mdi_instagram.svg";
import Twitter from "../../../public/icons/prime_twitter.svg";
import Behance from "../../../public/icons/ri_behance-fill.svg";
import Logo from "../../../public/icons/icon-park-solid_city.svg";

// import Lounge from "../../../public/images/lounge2.png"
// import Pool from "../../../public/images/pool.png"
import room1 from "../../../public/images/room1.png";
import room2 from "../../../public/images/room2.png";
import room3 from "../../../public/images/room3.png";
import room4 from "../../../public/images/room4.png";
import room5 from "../../../public/images/room5.png";
// import NewsCard from "../ui/NewsCard";

const Footer: React.FC = () => {
  return (
    <section className="bg-[#181A1B] pt-0 h-[80vh]">
      <div className="relative flex w-full h-64 md:h-72 lg:h-80 xl:h-96 overflow-hidden">
        {[room1, room2, room3, room4, room5].map((img, i) => (
          <div key={i} className="flex-1 relative h-full">
            <Image
              src={img}
              alt="room"
              fill
              className="object-cover w-full h-full"
            />
          </div>
        ))}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <div className="bg-white/80 rounded-xl w-88 h-88 px-8 py-6 flex flex-col justify-center items-center shadow-lg">
            <Image src={Instagram} alt={""} />
            <div className="text-[#1f8f69] font-bold text-4xl">
              Follow Our
              <br />
              Instagram
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-6 md:px-16 xl:px-32 2xl:px-64 pt-12 pb-8 bg-[#181A1B] grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Image src={Logo} alt={""} />
            <span className="text-2xl font-bold text-white">Fixyland</span>
          </div>
          <div className="text-gray-400 text-sm">
            Nam libero tempore cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus maxime placeat facere
          </div>
          <div className="flex gap-3 mt-2">
            <a href="#" className="bg-[#232627] p-2 rounded-md">
              <Image src={Facebook} alt="fb" className="w-5 h-5" />
            </a>
            <a href="#" className="bg-[#232627] p-2 rounded-md">
              <Image src={Twitter} alt="ig" className="w-5 h-5" />
            </a>
            <a href="#" className="bg-[#232627] p-2 rounded-md">
              <Image src={InstagramWhite} alt="tw" className="w-5 h-5" />
            </a>
            <a href="#" className="bg-[#232627] p-2 rounded-md">
              <Image src={Behance} alt="be" className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-white font-bold text-2xl mb-2">EXPLORE</div>
          <a href="#" className="text-gray-400 hover:text-white text-sm">
            About Hotel
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">
            Pricing
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">
            Hotel Staff
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">
            Latest News
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">
            Contact Us
          </a>
        </div>
        <div className="flex flex-col gap-3 w-1/2">
          <div className="text-white font-bold text-2xl mb-2">CONTACT</div>
          <div className="text-gray-400 text-sm">
            1963 Sabrina Path, T15 Domain Isle, Louisiana, USA
          </div>
          <div className="text-white text-sm">(+1) 967 555 3210</div>
          <div className="text-white text-sm">info@domain.com</div>
        </div>
        <div className="flex flex-col gap-4 bg-[#232323] p-8 rounded-xl w-96">
          <div className="text-white font-bold text-2xl mb-2">NEWSLETTER</div>
          <form className="flex flex-col gap-3">
            <div className="relative">
              <input
                type="email"
                placeholder="Ex. info@domain.com"
                className="w-full pl-4 pr-12 py-2 rounded-md bg-transparent border-white border-b-2 text-gray-200 placeholder-gray-500 outline-none"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white"
              >
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
              </button>
            </div>
            <label className="flex items-center gap-2 text-gray-400 text-xs">
              <input type="checkbox" className="accent-[#1f8f69] " />I agree to
              all terms and policies
            </label>
          </form>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-6 md:px-16 xl:px-32 2xl:px-64 py-4 border-t border-[#232627] bg-[#181A1B] text-gray-500 text-xs">
        <div>© Copyright 2025 Fixyland. All Rights Reserved.</div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Terms and Conditions
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
