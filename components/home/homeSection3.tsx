import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";
import Roadmap from "../roadmap";
import CategoryTitle from "../UI/titles/categoryTitle";
import { Parallax } from "react-scroll-parallax";
import { CDNImg } from "../cdn/image";
import DomainCountTitle from "../UI/titles/domainCountTitle";
import Button from "../button";

const HomeSection3: FunctionComponent = () => {
  return (
    <div className={styles.section3Container}>
      <DomainCountTitle
        title="475,736" subtitle="Domains minted"
        button={
          <button className={styles.section3ContainerButton}>Choose Your Domain</button>
        }
      />
    </div>
  );
};

export default HomeSection3;
