import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";

const HeaderBanner: FunctionComponent = () => {
  return (
    <img
      alt="Header banner"
      src="/visuals/home/headimg.png"
      className={styles.headerBanner}
      width={900}
      height={900}
    />
  );
};

export default HeaderBanner;
