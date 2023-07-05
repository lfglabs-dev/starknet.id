import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";
import Roadmap from "../roadmap";

const HomeSection3: FunctionComponent = () => {
  return (
    <div className={styles.section3}>
      <Roadmap />
    </div>
  );
};

export default HomeSection3;
