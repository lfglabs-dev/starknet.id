import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";
import MainTitle from "../UI/titles/mainTitle";

const HomeSection1: FunctionComponent = () => {
  return (
    <div className={styles.section1}>
      <MainTitle
        title="Empower StarkNet Identity:"
        highlighted="Connect, Personalize & Thrive"
        subtitle="Step into the future with StarkNet ID. Begin by claiming your free StarkNet identity, your passport to the blockchain world. Register your unique .stark domain to transform your presence—say goodbye to the complex addresses. Elevate your StarkNet experience today."
        buttonName="Choose your domain"
        buttonLink="https://app.starknet.id/"
      />
    </div>
  );
};

export default HomeSection1;
