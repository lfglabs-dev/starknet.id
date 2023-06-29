import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";

const HomeSection1: FunctionComponent = () => {
  return (
    <div className={styles.section1}>
      <div className={styles.firstLeavesGroup}>
        <img width="100%" alt="leaf" src="/leaves/leavesGroup02.svg" />
      </div>
      <div className={styles.secondLeavesGroup}>
        <img width="100%" alt="leaf" src="/leaves/leavesGroup01.svg" />
      </div>
      <div className="flex flex-col items-center justify-center text min-h-screen mx-10">
        <h1 className={styles.title}>Starknet.id</h1>
        <h3 className={styles.subtitle}>
          &rdquo;All in one identity service on starknet&rdquo;
        </h3>
      </div>
    </div>
  );
};

export default HomeSection1;
