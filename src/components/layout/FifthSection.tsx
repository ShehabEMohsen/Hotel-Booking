"use client"
import React, { useState } from "react";
import Image from "next/image";

const FifthSection: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full h-[400px] md:h-[340px] lg:h-[380px] flex items-center justify-center overflow-hidden">
      {open ? (
        <video
          src="/video/hotel-stock.mp4"
          controls
          autoPlay
          className="absolute inset-0 w-full h-full object-cover z-0 rounded-none"
          style={{ minHeight: '100%', minWidth: '100%' }}
        />
      ) : (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hotel.png"
              alt="Restaurant"
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-60" />
          </div>
          <button
            className="relative z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg hover:scale-105 transition-transform"
            onClick={() => setOpen(true)}
            aria-label="Play Video"
          >
            <svg className="w-8 h-8 text-[#1e8f69]" fill="currentColor" viewBox="0 0 24 24">
              <polygon points="10,8 16,12 10,16" fill="currentColor" />
            </svg>
          </button>
        </>
      )}

    </section>
  );
};

export default FifthSection;

