import React, { FunctionComponent } from "react";
import styles from "../../styles/affiliates.module.css";
import AffiliationOpportunity from "./affiliationOpportunity";
import AffiliationEarnings from "./affiliationEarnings";
import { CDNImg } from "../cdn/image";

const AffiliateSection3: FunctionComponent = () => {
  return (
    <div className={styles.section3}>
      <AffiliationOpportunity />
      <CDNImg
        alt="affiliate logo"
        src="/visuals/affiliates/newAffliateGraph.png"
        className={styles.graph}
      />
      <AffiliationEarnings />
    </div>
  );
};

export default AffiliateSection3;
