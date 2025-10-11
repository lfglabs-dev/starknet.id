import React, { useEffect, useRef, useCallback } from "react";
import homeStyles from "../../styles/Home.module.css";
import HomeCard from "../home/homeCard";
import AffiliationDefinition from "./affiliationDefinition";
import { Parallax } from "react-scroll-parallax";
import useLottie from "../../hooks/useLottie";
import IntegratedBySection from "./integratedBySection";

const AffiliateSection2 = () => {
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
      img: "/visuals/affiliates/affiliationIllu1.webp",
      mobileimg: "/visuals/affiliates/affiliationIllu1.webp",
      title: "Permissionless and Trustless",
      description:
        "The particularity of our program is that it is completely trustless and permissionless, everyone can participate by just owning a stark domain and all the logic takes place on-chain so you don't have to trust any centralized entity.",
    },
    {
      img: "/visuals/affiliates/searchIllu.webp",
      mobileimg: "/visuals/affiliates/searchIllu.webp",
      title: "Track and Grow your performances",
      description:
        "As an affiliate you'll get access to ready to use designs, news in advance, a special analytics dashboard and a dedicated affiliate manager to optimize your campaigns as much as possible.",
    },
    {
      img: "/visuals/affiliates/moneyIllu.webp",
      mobileimg: "/visuals/affiliates/moneyIllu.webp",
      title: "Get paid in Crypto (ETH & STRK in the future)",
      description:
        "We share revenue fairly. Every eligible sale made earns you at least 30% commissions. And this is just the start because you could go bigger if you are a top performer.",
    },
  ];

  return (
    <div className={homeStyles.section2}>
      <IntegratedBySection />
      <Parallax speed={-5}>
        <div
          ref={leftLeafRef}
          className="hidden md:block absolute top-80 -left-20 w-[25rem] h-[25rem]"
        />
      </Parallax>
      <AffiliationDefinition />
      <Parallax speed={-10}>
        <div
          ref={rightLeafRef}
          className="absolute -right-20 top-[25rem] hidden md:block w-[25rem] h-[25rem]"
        />
      </Parallax>
      <div className={`${homeStyles.subsection} mt-8`}>
        {cardsData.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="card opacity-0 translate-y-6 transition-all duration-700 ease-out flex flex-col justify-center items-center"
          >
            <HomeCard
              img={card.img}
              title={card.title}
              description={card.description}
              mobileimg={card.mobileimg}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AffiliateSection2;
