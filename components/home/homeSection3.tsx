import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";
import Roadmap from "../roadmap";
import CategoryTitle from "../UI/titles/categoryTitle";
import { Parallax } from "react-scroll-parallax";

const HomeSection3: FunctionComponent = () => {
  return (
    <div className={styles.section3}>
      <CategoryTitle
        title="StarkNet ID Evolution Roadmap"
        subtitle="Navigating the Future of Your Blockchain Identity"
      />
      <Roadmap />
      <Parallax speed={-10}>
        <img
          src="/leaves/lilLeaf01.svg"
          alt="leaf"
          className={styles.lilLeaf04}
          width={20}
          height={20}
        />
      </Parallax>
    </div>
  );
};

export default HomeSection3;
