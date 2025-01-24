import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";
import DomainCountTitle from "../UI/titles/domainCountTitle";

const HomeSection3: FunctionComponent = () => {
  return (
    <div className={styles.section3Container}>
      <DomainCountTitle
       subtitle="Domains minted"
        button={
          <button className={styles.section3ContainerButton}>Choose Your Domain</button>
        }
      />
    </div>
  );
};

export default HomeSection3;
