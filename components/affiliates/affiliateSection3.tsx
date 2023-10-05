import React, { FunctionComponent } from "react";
import styles from "../../styles/affiliates.module.css";
import AffiliationOpportunity from "./affiliationOpportunity";
import AffiliationEarnings from "./affiliationEarnings";

const AffiliateSection3: FunctionComponent = () => {
  return (
    <div className={styles.section3}>
      <AffiliationOpportunity />
      <img
        alt="affiliate logo"
        src="/visuals/affiliates/affiliationGraph.svg"
        className={styles.graph}
      />
      <AffiliationEarnings />
    </div>
  );
};

export default AffiliateSection3;
