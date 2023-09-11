import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";

const HeaderBanner: FunctionComponent = () => {
  return (
    <img
      alt="Header banner"
      src="/visuals/home/visualEverai1.webp"
      className={styles.headerBanner}
    />
  );
};

export default HeaderBanner;
