import React, { useEffect, useRef, useCallback } from "react";
import styles from "../../styles/Home.module.css";
import HomeCard from "./homeCard";
import CategoryTitle from "../UI/titles/categoryTitle";
import { Parallax } from "react-scroll-parallax";
import HomePartners from "./homePartners";
import Image from "next/image";

const HomeSection2 = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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
        <Image
          src="/leaves/lilLeaf01.svg"
          alt="leaf"
          width={54}
          height={53}
          className="hidden md:block"
        />
      </Parallax>
      <HomePartners />
      <CategoryTitle
        title="Forge Your Unique StarkNet Identity"
        subtitle="Seamlessly Claim, Personalize, and Elevate"
      />
      <Parallax speed={-10}>
        <Image
          src="/leaves/lilLeaf02.svg"
          alt="leaf"
          className="absolute right-3 hidden md:block"
          width={54}
          height={53}
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
