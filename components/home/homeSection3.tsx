import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";
import Roadmap from "../roadmap";

const HomeSection3: FunctionComponent = () => {
  return (
    <div className={styles.section3}>
      <div className={styles.thirdLeavesGroup}>
        <img width="100%" alt="leaf" src="/leaves/leavesGroup02.svg" />
      </div>
      <div className={styles.fourthLeavesGroup}>
        <img width="100%" alt="leaf" src="/leaves/leavesGroup01.svg" />
      </div>
      <Roadmap />
    </div>
  );
};

export default HomeSection3;
