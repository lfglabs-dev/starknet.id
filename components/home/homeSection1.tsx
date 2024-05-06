import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";
import HeaderBanner from "./headerBanner";
import HeaderSection from "./headerSection";

const HomeSection1: FunctionComponent = () => {
  const isTestnet = process.env.NEXT_PUBLIC_IS_TESTNET;

  return (
    <div className={styles.section1}>
      <HeaderSection
        title="One profile,"
        highlighted="Connected to all the Starknet Ecosystem."
        subtitle="Create your Starknet Profile by claiming your stark domain and start using it everywhere in the ecosystem."
        mobileSubtitle="Step into the future with StarkNet ID. Begin by claiming your free StarkNet identity, your passport to the blockchain world. Register your unique .stark domain to transform your presence—say goodbye to the complex addresses. Elevate your StarkNet experience today."
        buttonName="Choose your domain"
        buttonLink={
          isTestnet
            ? "https://sepolia.app.starknet.id/"
            : "https://app.starknet.id/"
        }
      />
      <HeaderBanner />
    </div>
  );
};

export default HomeSection1;
