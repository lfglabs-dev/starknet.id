/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from "react";
import styles from "../styles/footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.fifthLeavesGroup}>
        <img width={"100%"} alt="leaf" src="/leaves/leavesGroup02.svg" />
      </div>
      <div className={styles.sixthLeavesGroup}>
        <img width={"100%"} alt="leaf" src="/leaves/leavesGroup01.svg" />
      </div>
      Powered by&nbsp;<strong>Starknet</strong>
    </footer>
  );
};

export default Footer;
