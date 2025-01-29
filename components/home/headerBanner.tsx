import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";

const HeaderBanner: FunctionComponent = () => {
  return (
    <img
      alt="Header banner"
      src="/visuals/home/headerImage.png"
      className={styles.headerBanner}
      width={700}
      height={700}
    />
  );
};

export default HeaderBanner;
