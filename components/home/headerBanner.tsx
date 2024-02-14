import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";
import { CDNImg } from "../cdn/image";

const HeaderBanner: FunctionComponent = () => {
  return (
    <CDNImg
      alt="Header banner"
      src="/visuals/home/headerBanner.webp"
      className={styles.headerBanner}
    />
  );
};

export default HeaderBanner;
