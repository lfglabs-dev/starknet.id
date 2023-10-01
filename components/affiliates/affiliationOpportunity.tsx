import React, { FunctionComponent } from "react";
import homeStyles from "../../styles/Home.module.css";
import styles from "../../styles/affiliates.module.css";

const AffiliationOpportunity: FunctionComponent = () => {
  return (
    <div className={homeStyles.subsection}>
      <div className={styles.card1}>
        <div className="flex items-center justify-evenly flex-col">
          <h2 className={homeStyles.secondTitle}>Your opportunity</h2>
          <p className={styles.paragraph}>
            Join our affiliate program and become a part of the StarkNet ID
            community. As an affiliate, you'll not only enjoy the benefits of
            StarkNet ID, but also have the opportunity to earn rewards by
            referring others. The more individuals you directly refer, the
            greater your affiliate network and potential earnings become.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AffiliationOpportunity;
