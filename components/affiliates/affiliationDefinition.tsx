import React, { FunctionComponent } from "react";
import homeStyles from "../../styles/Home.module.css";
import styles from "../../styles/affiliates.module.css";

const AffiliationDefinition: FunctionComponent = () => {
  return (
    <div className={homeStyles.subsection}>
      <div className={styles.card2}>
        <div className="flex items-center justify-evenly flex-wrap">
          <h2 className={homeStyles.secondTitle}>
            What is the stark affiliate program ?
          </h2>
          <p className="mt-3">
            Our affiliate program pays you for sending your customers to our
            website. As an Affiliate you&apos;ll be able to promote starknet.id
            domains and get a commission on each domain sales made with your
            affiliate link. Earn at least&nbsp;
            <strong>30% of commission</strong> on every sales&nbsp; made with
            your affiliate link !
          </p>
        </div>
      </div>
    </div>
  );
};

export default AffiliationDefinition;
