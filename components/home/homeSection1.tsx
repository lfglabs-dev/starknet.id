import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";
import HeaderSection from "./headerSection";
import HeaderBanner from "./headerBanner";

const HomeSection1: FunctionComponent = () => {
  return (
    <div className={styles.section1}>
      <HeaderSection
        title="One profile,"
        highlighted="Connected to all the Starknet Ecosystem."
        subtitle="Create your Starknet Profile by claiming your stark domain and start using it everywhere in the ecosystem."
        buttonName="Choose your domain"
        buttonLink="https://app.starknet.id/"
      />
      <HeaderBanner />
    </div>
  );
};

export default HomeSection1;
