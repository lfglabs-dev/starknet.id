import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";
import HomePartners from "./homePartners";
import HomeCard from "./homeCard";
import CategoryTitle from "../UI/titles/categoryTitle";
import { Parallax } from "react-scroll-parallax";

const HomeSection2: FunctionComponent = () => {
  return (
    <div id="info" className={styles.section2}>
      <Parallax speed={-5}>
        <img src="/leaves/lilLeaf01.svg" alt="leaf" width={20} height={20} />
      </Parallax>
      <CategoryTitle
        title="Forge Your Unique StarkNet Identity"
        subtitle="Seamlessly Claim, Personalize, and Elevate"
      />
      <Parallax speed={-10}>
        <img
          src="/leaves/lilLeaf02.svg"
          alt="leaf"
          className="absolute right-3"
          width={20}
          height={20}
        />
      </Parallax>
      <div className={`${styles.subsection} mt-8`}>
        <HomeCard
          img="/visuals/home/visualEverai2.webp"
          title="#1 Claim your Starknet identity"
          description="You can already mint your starknet identity for free, it'll
          act as your starknet passport and represent you during your
          on-chain interactions."
        />
        <HomeCard
          img="/visuals/home/visualEverai3.webp"
          title="#2 Register your .stark domain"
          description="You’re not 0x072d4…b2Be7, you can already register your .stark
              domain and link it with your starknet identity."
        />
        <HomeCard
          img="/visuals/home/visualEverai4.webp"
          title="#3 Build your identity"
          description="You'll also be able to attach any data to your starknet
          identity, from web2 with social media accounts to web3 with ENS
          domains."
        />
      </div>
      <Parallax speed={-10}>
        <img
          src="/leaves/lilLeaf02.svg"
          alt="leaf"
          className={`${styles.leaf05} absolute right-3`}
          width={20}
          height={20}
        />
      </Parallax>
      <HomePartners />
    </div>
  );
};

export default HomeSection2;
