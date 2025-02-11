import React, { FunctionComponent } from "react";
import EkuboIcon from "../icons/ekubo";
import MySwapIcon from "../icons/myswap";
import Image from "next/image";
import Partners from "../partners/partners";
import { Partner } from "../partners/partners";
const IntegratedBySection: FunctionComponent = () => {
  const partners: Partner[] = [
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
  return (
    <div className="relative py-16 flex items-center flex-col sm:flex-row mb-6">
      {/* Slider Container */}
      <Partners partners={partners} showNames={true} />
    </div>
  );
};

export default IntegratedBySection;
