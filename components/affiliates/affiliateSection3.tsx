import React, { FunctionComponent } from "react";
import styles from "../../styles/affiliates.module.css";
import AffiliationOpportunity from "./affiliationOpportunity";
import AffiliationEarnings from "./affiliationEarnings";
import Image from "next/image";

const AffiliateSection3: FunctionComponent = () => {
  return (
    <div className={styles.section3}>
      <AffiliationOpportunity />
      <Image
        alt="affiliate logo"
        src="/visuals/affiliates/newAffliateGraph.webp"
        className={styles.graph}
        width={1219}
        height={575}
      />
      <AffiliationEarnings />
    </div>
  );
};

export default AffiliateSection3;
