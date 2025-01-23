import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";
import HeaderBanner from "./headerBanner";
import HeaderSection from "./headerSection";

const HomeSection1: FunctionComponent = () => {
  const isTestnet = Boolean(process.env.NEXT_PUBLIC_IS_TESTNET === "true");

  return (
    <div className={styles.section1}>
      <HeaderSection
        title="One profile,"
        highlighted="Connected to all the Starknet Ecosystem."
        subtitle="Create your Starknet Profile by claiming your stark domain and start using it everywhere in the ecosystem."
        mobileSubtitle="Create your Starknet Profile by claiming your stark domain and start using it everywhere in the ecosystem."
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
