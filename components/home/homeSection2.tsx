import React, { useEffect, useRef, useCallback } from "react";
import styles from "../../styles/Home.module.css";
import HomeCard from "./homeCard";
import CategoryTitle from "../UI/titles/categoryTitle";
import { Parallax } from "react-scroll-parallax";
import useLottie from "../../hooks/useLottie";
import Partners from "../partners/partners";
import { Partner } from "../partners/partners";
import CarbonableIcon from "../icons/carbonable";
import BriqIcon from "../icons/briq";
import RealmsIcon from "../icons/realms";
import NostraIcon from "../icons/nostra";
import EveraiIcon from "../icons/everai";
import AvnuIcon from "../icons/avnu";
import EkuboIcon from "../icons/ekubo";
import MySwapIcon from "../icons/myswap";
import Image from "next/image";

const HomeSection2 = () => {
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
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const leftLeafRef = useRef<HTMLDivElement>(null);
  const rightLeafRef = useRef<HTMLDivElement>(null);

  const createObserver = useCallback(() => {
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add("animate-slide-in");
          } else {
            target.classList.remove("animate-slide-in");
          }
        });
      },
      { threshold: 0.2 }
    );
  }, []);

  useEffect(() => {
    const observer = createObserver();

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
      observer.disconnect();
    };
  }, [createObserver]);

  useLottie(leftLeafRef, "/animations/Falling.leaf.json");
  useLottie(rightLeafRef, "/animations/Falling.leaf.json");

  const cardsData = [
    {
      img: "/visuals/home/visualEverai1.webp",
      mobileimg: "/visuals/home/visualEverai-mobile1.webp",
      title: "Claim your Starknet identity",
      description:
        "You can already mint your starknet identity for free, it'll act as your starknet passport and represent you during your on-chain interactions.",
      numb: "1",
    },
    {
      img: "/visuals/home/visualEverai2.webp",
      mobileimg: "/visuals/home/visualEverai-mobile2.webp",
      title: "Register your .stark domain",
      description:
        "You’re not 0x072d4…b2Be7, you can already register your .stark domain and link it with your starknet identity.",
      numb: "2",
    },
    {
      img: "/visuals/home/visualEverai3.webp",
      mobileimg: "/visuals/home/visualEverai-mobile3.webp",
      title: "Build your identity",
      description:
        "You'll also be able to attach any data to your starknet identity, from web2 with social media accounts to web3 with ENS domains.",
      numb: "3",
    },
  ];

  return (
    <div id="info" className={styles.section2}>
      <Parallax speed={-5}>
        <div
          ref={leftLeafRef}
          className="hidden md:block absolute top-80 -left-20 w-[25rem] h-[25rem]"
        />
      </Parallax>
      <Partners partners={partners} showNames={true} />
      <CategoryTitle title="Forge Your Unique StarkNet Identity" />
      <Parallax speed={-10}>
        <div
          ref={rightLeafRef}
          className="absolute -right-20 top-[25rem] hidden md:block w-[25rem] h-[25rem]"
        />
      </Parallax>
      <div className={`${styles.subsection} mt-8`}>
        {cardsData.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="opacity-0 translate-y-6 transition-all duration-700 ease-out flex flex-col justify-center items-center"
          >
            <HomeCard
              img={card.img}
              title={card.title}
              description={card.description}
              numb={card.numb}
              mobileimg={card.mobileimg}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSection2;
