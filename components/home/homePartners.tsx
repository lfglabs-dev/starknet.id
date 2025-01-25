import React, { FunctionComponent } from "react";
import CarbonableIcon from "../icons/carbonable";
import BriqIcon from "../icons/briq";
import RealmsIcon from "../icons/realms";
import NostraIcon from "../icons/nostra";
import EveraiIcon from "../icons/everai";
import AvnuIcon from "../icons/avnu";
import { CDNImg } from "../cdn/image";
import EkuboIcon from "../icons/ekubo";
import MySwapIcon from "../icons/myswap";

const partners = [
  {
    name: "Avnu",
    href: "https://www.avnu.fi/",
    icon: <AvnuIcon width="60" color="black" />,
  },
  {
    name: "Argent",
    href: "https://www.argent.xyz/",
    icon: (
      <CDNImg
        className="w-12 h-12 object-contain mb-1"
        src="/visuals/partners/argent-logo-colour.svg"
      />
    ),
  },
  {
    name: "Starkscan",
    href: "https://starkscan.co/",
    icon: (
      <CDNImg
        className="w-12 h-12 object-contain mb-1"
        src="/visuals/partners/starkscan.png"
      />
    ),
  },
  {
    name: "Braavos",
    href: "https://braavos.app/",
    icon: (
      <CDNImg
        className="w-12 h-12 object-contain mb-1"
        src="/visuals/partners/braavos.svg"
      />
    ),
  },
  {
    name: "Everai",
    href: "https://www.everai.xyz/",
    icon: <EveraiIcon width="60" color="black" />,
  },
  {
    name: "Ekubo",
    href: "https://ekubo.org/",
    icon: <EkuboIcon height="40" />,
  },
  {
    name: "Briq",
    href: "https://briq.construction/",
    icon: <BriqIcon />,
  },
  {
    name: "MySwap",
    href: "https://www.myswap.xyz/",
    icon: <MySwapIcon height="40" />,
  },
  {
    name: "Carbonable",
    href: "https://carbonable.io/",
    icon: <CarbonableIcon />,
  },
  {
    name: "Nostra",
    href: "https://www.nostra.finance",
    icon: <NostraIcon height="30px" />,
  },
  {
    name: "Realms",
    href: "https://realmseternum.com/",
    icon: <RealmsIcon />,
  },
  {
    name: "Voyager",
    href: "https://voyager.online/",
    icon: (
      <CDNImg
        className="w-12 h-12 object-contain mb-1"
        src="/visuals/partners/voyager.png"
      />
    ),
  },
];

const HomePartners: FunctionComponent = () => {
  return (
    <div className="relative py-8 flex items-center">
      {/* Description */}
      <div className="mr-8">
        <p className="font-poppins w-[220px] text-sm font-medium leading-5 text-left text-[14px] text-gray-500">
          Integrated by the whole Starknet ecosystem
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative w-full overflow-hidden">
        {/* Left Blur */}
        <div className="absolute left-0 top-0 bottom-0 w-12 backdrop-blur-sm bg-gradient-to-r  from-inherit via-white/70 to-transparent pointer-events-none z-10"></div>
        {/* Right Blur */}
        <div className="absolute right-0 top-0 bottom-0 w-12 backdrop-blur bg-gradient-to-l  from-inherit via-white/70 to-transparent pointer-events-none z-10"></div>

        {/* Scrolling Content */}
        <div className="flex gap-10 whitespace-nowrap animate-marquee">
          {[...partners, ...partners].map((partner, index) => (
            <a
              key={index}
              className="flex flex-col items-center text-center"
              target="_blank"
              rel="noreferrer"
              href={partner.href}
            >
              <div className="flex justify-center items-center w-16 h-16">
                {partner.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePartners;
