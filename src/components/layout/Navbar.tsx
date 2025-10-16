"use client";
import Link from "next/link";
import Facebook from "../../../public/icons/ic_baseline-facebook.svg";
import Dot from "../../../public/icons/mdi_dot.svg";
import Instagram from "../../../public/icons/mdi_instagram.svg";
import Twitter from "../../../public/icons/prime_twitter.svg";
import Behance from "../../../public/icons/ri_behance-fill.svg";
import Search from "../../../public/icons/iconamoon_search-thin.svg";
// import Menu from '../../../public/icons/mdi_hamburger-menu.svg'
import Logo from "../../../public/icons/icon-park-solid_city.svg";
import Button from "../ui/Button";
import Image from "next/image";

import "./layout.css";
import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 70);
      lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full flex items-center justify-between bg-transparent flex-col z-50 fixed top-0 left-0">
      <div className="bg-[#1f8f69] py-2 sm:py-3 w-full min-h-10 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
        {/* Contact Info - Stack on mobile, row on larger screens */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 mb-2 sm:mb-0">
          <div className="text-white font-medium flex items-center">
            <Image
              src={Dot}
              alt=""
              width={8}
              height={8}
              className="w-2 h-2 mr-1"
            />
            <span>7631 Sebina Park, 115 Devon Isle, USA</span>
          </div>
          <div className="hidden sm:block text-white/50">|</div>
          <div className="text-white font-medium flex items-center">
            <Image
              src={Dot}
              alt=""
              width={8}
              height={8}
              className="w-2 h-2 mr-1"
            />
            <a href="mailto:Info@domain.com" className="hover:underline">
              Info@domain.com
            </a>
          </div>
          <div className="hidden sm:block text-white/50">|</div>
          <div className="text-white font-medium flex items-center">
            <Image
              src={Dot}
              alt=""
              width={8}
              height={8}
              className="w-2 h-2 mr-1"
            />
            <a href="tel:+19876543210" className="hover:underline">
              (+1) 987 654 3210
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row space-x-3 sm:space-x-4">
          <a
            href="#"
            aria-label="Facebook"
            className="text-white hover:text-[#e5c464] transition-colors"
          >
            <Image
              src={Facebook}
              alt="Facebook"
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-white hover:text-[#e5c464] transition-colors"
          >
            <Image
              src={Twitter}
              alt="Twitter"
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-white hover:text-[#e5c464] transition-colors"
          >
            <Image
              src={Instagram}
              alt="Instagram"
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </a>
          <a
            href="#"
            aria-label="Behance"
            className="text-white hover:text-[#e5c464] transition-colors"
          >
            <Image
              src={Behance}
              alt="Behance"
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </a>
        </div>
      </div>
      <div className="h-16 md:h-20 lg:h-24 w-full relative overflow-hidden">
        {/* Mobile menu button */}
        <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-30">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Animated white background */}
        <div
          className="absolute left-0 top-0 h-full z-0 transition-transform duration-500 hidden md:block"
          style={{
            width: scrolled ? "100%" : "0%",
            background: "white",
            transform: scrolled ? "translateX(0)" : "translateX(-100%)",
          }}
        />

        {/* Mobile menu with overlay */}
        <div
          className={`md:hidden fixed inset-0 z-20 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div
            className={`absolute left-0 top-0 h-full w-4/5 max-w-sm bg-[#1a1a1a] shadow-2xl transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="h-full flex flex-col pt-20 px-6 overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 p-2 text-white hover:text-[#e5c464] transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Logo */}
              <div className="flex items-center mb-12 px-2">
                <Image src={Logo} alt="Fixyland Logo" width={32} height={32} />
                <span className="ml-2 text-2xl font-bold text-white">
                  Fixyland
                </span>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1">
                <ul className="space-y-6">
                  {[
                    { name: "Home", icon: "🏠" },
                    { name: "Rooms", icon: "🛏️" },
                    { name: "Services", icon: "✨" },
                    { name: "About Us", icon: "🏨" },
                    { name: "Blog", icon: "📰" },
                    { name: "Contact", icon: "📞" },
                  ].map((item) => (
                    <li key={item.name}>
                      <a
                        href={`#${item.name.toLowerCase().replace(" ", "-")}`}
                        className="flex items-center px-4 py-3 text-lg font-medium text-white hover:text-[#e5c464] transition-colors rounded-lg hover:bg-white/5"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="mr-3 text-xl">{item.icon}</span>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Contact Info */}
              <div className="mt-auto pb-8 pt-6 border-t border-white/10">
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center">
                    <span className="w-5">📍</span>
                    <span>7631 Sebina Park, 115 Devon Isle, USA</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-5">📧</span>
                    <a
                      href="mailto:info@domain.com"
                      className="hover:underline"
                    >
                      info@domain.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="w-5">📞</span>
                    <a href="tel:+19876543210" className="hover:underline">
                      (+1) 987 654 3210
                    </a>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-4 mt-4 pt-4 border-t border-white/10">
                  {[
                    { icon: Facebook, alt: "Facebook" },
                    { icon: Twitter, alt: "Twitter" },
                    { icon: Instagram, alt: "Instagram" },
                    { icon: Behance, alt: "Behance" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-white hover:text-[#e5c464] transition-colors"
                      aria-label={social.alt}
                    >
                      <Image
                        src={social.icon}
                        alt={social.alt}
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Navbar content */}
        <div
          className={`relative z-10 flex flex-row justify-between w-full h-full px-4 sm:px-6 md:pr-12 lg:pr-24 items-center transition-all duration-300 ${
            scrolled ? "bg-white/90 backdrop-blur-sm" : ""
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center h-full">
            <div
              className={`w-36 sm:w-48 lg:w-56 h-full flex font-bold text-xl md:text-2xl lg:text-3xl justify-center text-center items-center clip-diagonal ${
                scrolled ? "bg-white" : "bg-white"
              } text-black px-4`}
            >
              <Image
                src={Logo}
                alt="Fixyland Logo"
                width={40}
                height={40}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
              />
              <span className="ml-1 sm:ml-2">Fixyland</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div
            className={`hidden md:flex flex-row flex-1 justify-center items-center ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <div className="flex space-x-1 lg:space-x-2 xl:space-x-4 mx-4">
              {["Home", "Rooms", "Services", "About", "Blog", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="px-2 py-1 text-sm lg:text-base hover:text-[#e5c464] transition-colors font-medium"
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <button className="bg-[#545047] hover:bg-[#3d3a33] p-2 rounded-full transition-colors">
              <Image
                src={Search}
                alt="Search"
                width={24}
                height={24}
                className="w-4 h-4 md:w-5 md:h-5"
              />
            </button>
            <Button
              text="Book Now"
              color="#e5c464"
              className="whitespace-nowrap text-sm px-3 py-2"
            />
          </div>

          {/* Mobile Action Buttons */}
          <div className="md:hidden flex items-center space-x-2">
            <button className="bg-[#545047] hover:bg-[#3d3a33] p-2 rounded-full">
              <Image
                src={Search}
                alt="Search"
                width={20}
                height={20}
                className="w-4 h-4"
              />
            </button>
            <Button text="Book" color="#e5c464" className="text-xs px-3 py-2" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
