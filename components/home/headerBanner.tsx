import { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";

const HeaderBanner: FunctionComponent = () => {
  return (
    <img
      alt="Header banner"
      src="https://www.starknet.id/visuals/affiliates/affiliationIllu.webp"
      className={styles.headerBanner}
    />
  );
};

export default HeaderBanner;
