import EightSection from "@/components/layout/EigthSection";
import FifthSection from "@/components/layout/FifthSection";
import Footer from "@/components/layout/Footer";
import FourthSection from "@/components/layout/FourthSection";
import Hero from "@/components/layout/Hero";
// import Navbar from "@/components/layout/Navbar";
import NinthSection from "@/components/layout/NinthSection";
import SecondSection from "@/components/layout/SecondSection";
import SevethSection from "@/components/layout/SevethSection";
import SixthSection from "@/components/layout/SixthSection";
import TenthSection from "@/components/layout/TenthSection";
import ThirdSection from "@/components/layout/ThirdSection";
import RibbonBanner from "@/components/ui/Ribbons";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero />
      <SecondSection />
      <RibbonBanner />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SevethSection />
      <EightSection />
      <NinthSection />
      <TenthSection />
      <Footer />
    </div>
  );
}
