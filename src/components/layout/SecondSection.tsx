import React from "react";
import Button from "../ui/Button";
import Lounge from "../../../public/images/Lounge.png";
import Tick from "../../../public/icons/mdi_tick-circle.svg";
import Person from "../../../public/images/person.png";
import Image from "next/image";

import "./layout.css";
import Flare from "../ui/Flare";

const SecondSection: React.FC = () => (
  <section className="py-16 md:py-24 lg:py-32 bg-[#e9efeb] overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
        <div className="w-full lg:w-1/2 xl:w-5/12 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={Lounge}
              alt="Luxury hotel lounge area"
              width={600}
              height={800}
              className="w-full h-auto object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#1f8f69]">30+</div>
                <div className="text-xs font-semibold text-gray-600 uppercase">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 xl:w-2/5 mt-10 lg:mt-0">
          <Flare text="About Fixyland" />

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6 leading-tight">
            World Class Luxury Hotel and Resort Near City
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don`&apos;`t look even slightly
            believable.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              "24-Hours Emergency Service",
              "Comfortable Atmosphere",
              "Luxury Accommodation",
              "Fine Dining Experience",
              "Flexible and Cost-Effective",
              "Free Consultation Anytime",
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <Image
                    src={Tick}
                    alt=""
                    width={20}
                    height={20}
                    className="text-[#1f8f69]"
                  />
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-6 pt-4 border-t border-gray-200">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={Person}
                alt="Robert L. Robinson"
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div>
              <p className="font-bold text-lg">Robert L. Robinson</p>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="hidden sm:block ml-auto">
              <Button
                text="Contact Us"
                color="#e5c464"
                className="px-6 py-3 text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SecondSection;
