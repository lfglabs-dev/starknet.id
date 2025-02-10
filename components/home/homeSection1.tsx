import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";
import HeaderBanner from "./headerBanner";
import HeaderSection from "./headerSection";

const HomeSection1: FunctionComponent = () => {
  const isTestnet = Boolean(process.env.NEXT_PUBLIC_IS_TESTNET === "true");

  return (
    <div className={styles.section1}>
      <HeaderBanner />

      <HeaderSection
        title="Join & Earn!"
        highlighted="THE STARK AFFILIATE PROGRAM"
        buttonLink={
          isTestnet
            ? "https://sepolia.app.starknet.id/"
            : "https://app.starknet.id/"
        }
      />
      
    </div>
  );
};

export default HomeSection1;
