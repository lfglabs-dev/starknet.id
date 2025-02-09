import React, { FunctionComponent } from "react";
import CarbonableIcon from "../icons/carbonable";
import BriqIcon from "../icons/briq";
import RealmsIcon from "../icons/realms";
import NostraIcon from "../icons/nostra";
import EveraiIcon from "../icons/everai";
import AvnuIcon from "../icons/avnu";
import EkuboIcon from "../icons/ekubo";
import MySwapIcon from "../icons/myswap";
import Image from "next/image";

const partners = [
  {
    name: "Avnu",
    href: "https://www.avnu.fi/",
    icon: <AvnuIcon width="140" color="black" />,
  },
  {
    name: "Argent",
    href: "https://www.argent.xyz/",
    icon: (
      <Image
        src="/visuals/partners/argent-logo-colour.svg"
        alt="Argent"
        width={128}
        height={128}
      />
    ),
  },
  {
    name: "Starkscan",
    href: "https://starkscan.co/",
    icon: (
      <Image
        src="/visuals/partners/starkscan.png"
        alt="Starkscan"
        width={192}
        height={192}
      />
    ),
  },
  {
    name: "Braavos",
    href: "https://braavos.app/",
    icon: (
      <Image
        src="/visuals/partners/braavos.svg"
        alt="Braavos"
        width={80}
        height={80}
      />
    ),
  },
  {
    name: "Everai",
    href: "https://www.everai.xyz/",
    icon: <EveraiIcon width="100" color="black" />,
  },
  {
    name: "Ekubo",
    href: "https://ekubo.org/",
    icon: <EkuboIcon height="60" />,
  },
  {
    name: "Briq",
    href: "https://briq.construction/",
    icon: <BriqIcon width="100" />,
  },
  {
    name: "MySwap",
    href: "https://www.myswap.xyz/",
    icon: <MySwapIcon height="60" />,
  },
  {
    name: "Carbonable",
    href: "https://carbonable.io/",
    icon: <CarbonableIcon width="120" />,
  },
  {
    name: "Nostra",
    href: "https://www.nostra.finance",
    icon: <NostraIcon height="50px" />,
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
      <Image
        src="/visuals/partners/voyager.png"
        alt="Voyager"
        width={80}
        height={80}
      />
    ),
  },
];

const HomePartners: FunctionComponent = () => {
  return (
    <div className="relative py-16 flex items-center flex-col sm:flex-row mb-6">
      {/* Description */}
      <div className="sm:mr-8 w-full sm:w-fit">
        <p className="font-poppins w-full sm:w-[240px] text-base font-medium leading-6 sm:text-left text-gray-500 text-center">
          Integrated by the whole Starknet ecosystem
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative w-full overflow-hidden">
        {/* Left Blur */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
        {/* Right Blur */}
        <div className="absolute right-0 top-0 bottom-0 w-7 bg-gradient-to-l  from-background  to-transparent pointer-events-none z-10"></div>

        {/* Scrolling Content */}
        <div className="flex gap-16 whitespace-nowrap animate-marquee w-fit">
          {[...partners, ...partners].map((partner, index) => (
            <a
              key={index}
              className="flex flex-col items-center text-center"
              target="_blank"
              rel="noreferrer"
              href={partner.href}
            >
              <div className="flex justify-center items-center w-32 h-32">
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
