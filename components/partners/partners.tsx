import Image from "next/image";
import React, { FunctionComponent } from "react";
import MySwapIcon from "../icons/myswap";
import EkuboIcon from "../icons/ekubo";

export interface Partner {
  name?: string;
  href?: string;
  icon?: JSX.Element;
}

export const partners: Partner[] = [
  { name: "", href: "" },
  {
    name: "Meta mask",
    href: "https://metamask.io/",
    icon: (
      <Image
        src="/visuals/affiliates/metamasklogo.png"
        alt="Meta mask"
        width={40}
        height={40}
      />
    ),
  },
  {
    name: "ENS",
    href: "https://ens.domains/",
    icon: (
      <Image
        src="/visuals/affiliates/enslogo.png"
        alt="ENS"
        width={40}
        height={40}
      />
    ),
  },
  {
    name: "AVNU",
    href: "https://app.avnu.fi/en/",
    icon: (
      <Image
        src="/visuals/affiliates/avnuLogo.png"
        alt="AVNU"
        width={40}
        height={40}
      />
    ),
  },
  {
    name: "Braavos",
    href: "https://braavos.app/",
    icon: (
      <Image
        src="/visuals/affiliates/bravooslogo.png"
        alt="Braavos"
        width={40}
        height={40}
      />
    ),
  },
  {
    name: "Argent",
    href: "https://www.argent.xyz/",
    icon: (
      <Image
        src="/visuals/affiliates/argentlogo.png"
        alt="Argent"
        width={40}
        height={40}
      />
    ),
  },
  {
    name: "Nostra",
    href: "https://nostra.finance/",
    icon: (
      <Image
        src="/visuals/affiliates/nostrologo.png"
        alt="Nostra"
        width={40}
        height={40}
      />
    ),
  },

  {
    name: "Ekubo",
    href: "https://ekubo.org/",
    icon: <EkuboIcon height="40" />,
  },
  {
    name: "Voyager",
    href: "https://voyager.online/",
    icon: (
      <Image
        src="/visuals/affiliates/voyagerlogo.png"
        alt="Voyager"
        width={40}
        height={40}
        className="rounded-full"
      />
    ),
  },
  {
    name: "MySwap",
    href: "https://www.myswap.xyz/",
    icon: <MySwapIcon height="40" />,
  },
  {
    name: "",
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
    name: "Nimbora",
    href: "https://www.nimbora.io/",
    icon: (
      <Image
        src="/visuals/affiliates/nimboralogo.png"
        alt="Nimbora"
        width={40}
        height={40}
        className="rounded-full"
      />
    ),
  },
  {
    name: "Vesu",
    href: "https://vesu.xyz/",
    icon: (
      <Image
        src="/visuals/affiliates/vesulogo.png"
        alt="Vesu"
        width={40}
        height={40}
        className="rounded-full"
      />
    ),
  },
  {
    name: "Realms",
    href: "https://realmseternum.com/",
    icon: (
      <Image
        src="/visuals/affiliates/RealmsWorldlogo.png"
        alt="Realms World"
        width={40}
        height={40}
        className="rounded-full"
      />
    ),
  },
  { name: "", href: "" },
  { name: "", href: "" },
];

const Partners: FunctionComponent = () => {
  return (
    <div className="relative py-12 md:-mt-40 flex items-center flex-col sm:flex-row mb-5">
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
        <div className="absolute right-0 top-0 bottom-0 w-7 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>

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
              <div className="flex justify-center gap-4 items-center w-32 h-32">
                {partner.icon}
                {partner.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
