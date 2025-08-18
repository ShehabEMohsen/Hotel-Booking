import Link from "next/link";
import Facebook from '../../../public/icons/ic_baseline-facebook.svg'
import Dot from '../../../public/icons/mdi_dot.svg'
import Instagram from '../../../public/icons/mdi_instagram.svg'
import Twitter from '../../../public/icons/prime_twitter.svg'
import Behance from '../../../public/icons/ri_behance-fill.svg'
import Search from '../../../public/icons/iconamoon_search-thin.svg'
import Menu from '../../../public/icons/mdi_hamburger-menu.svg'
import Button from '../ui/Button'
import Image from "next/image";

import './layout.css'

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex items-center justify-between bg-transparent flex-col z-10 fixed top-0 left-0">
      <div className="bg-[#1f8f69] py-4 w-full h-12 px-24 flex flex-row justify-between items-center">
        <div className="flex flex-row w-1/2 gap-4 items-center">
          <div className="text-white font-semibold flex flex-row items-center"><Image src={Dot} alt={""}/>7631 Sebina Park, 115 Devon Isle, USA</div>
          <div className="text-white font-semibold flex flex-row items-center"><Image src={Dot} alt={""}/>Info@domain.com</div>
          <div className="text-white font-semibold flex flex-row items-center"><Image src={Dot} alt={""}/>(+1) 987 654 3210</div>
        </div>
        <div className="flex flex-row justify-between w-1/8">
          <Image src={Facebook} alt={""}/>
          <Image src={Twitter} alt={""}/>
          <Image src={Instagram} alt={""}/>
          <Image src={Behance} alt={""}/>
        </div>
      </div>
      <div className="h-24 flex flex-row justify-between w-full pr-24 items-center">
        <div className="bg-white w-96 h-full flex font-bold text-3xl justify-center text-center items-center clip-diagonal">Fixyland</div>
        <div className="text-white flex flex-row w-1/3 justify-between items-center">
          <div>Home</div>
          <div>Pages</div>
          <div>Rooms & Suites</div>
          <div>Services</div>
          <div>Blog</div>
          <div>Contact</div>
        </div>
        <div className="flex flex-row h-12 justify-between gap-4">
          <div className="bg-[#545047] px-3 items-center flex rounded-full"><Image src={Search} alt={""}/></div>
          <div className="bg-[#545047] px-3 items-center flex rounded-full"><Image src={Menu} alt={""}/></div>
          <Button text={"Book Your Stay"} color={"#e5c464"}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
