import FifthSection from "@/components/layout/FifthSection";
import FourthSection from "@/components/layout/FourthSection";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import SecondSection from "@/components/layout/SecondSection";
import SevethSection from "@/components/layout/SevethSection";
import SixthSection from "@/components/layout/SixthSection";
import ThirdSection from "@/components/layout/ThirdSection";
import RibbonBanner from "@/components/ui/Ribbons";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <SecondSection/>
      <RibbonBanner/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <SevethSection/>
    </div>
  );
}
