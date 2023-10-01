import React, { FunctionComponent, useState } from "react";
import styles from "../../styles/affiliates.module.css";
import Button from "../button";
import Slider from "../UI/slider";

const AffiliationEarnings: FunctionComponent = () => {
  const [directReferrals, setDirectReferrals] = useState(8);
  const [indirectReferrals, setIndirectReferrals] = useState(8);
  return (
    <div className={styles.earningsCard}>
      <div className={styles.sliders}>
        <div className={styles.sliderContainer}>
          <p className={styles.sliderName}>Direct Referrals Count</p>
          <Slider
            value={directReferrals}
            onChange={setDirectReferrals}
            min={1}
            max={10000}
          />
        </div>
        <div className={styles.sliderContainer}>
          <p className={styles.sliderName}>Indirect Referrals Count</p>
          <Slider
            value={indirectReferrals}
            onChange={setIndirectReferrals}
            min={1}
            max={10000}
          />
        </div>
      </div>
      <div className={styles.resultContainer}>
        <p className={styles.resultTitle}>Affiliate earnings</p>
        <p className={styles.result}>948$</p>
        <Button
          onClick={() =>
            window.open(
              `https://${
                (process.env.NEXT_PUBLIC_NETWORK_NAME as string).includes(
                  "goerli"
                )
                  ? "goerli."
                  : ""
              }affiliate.starknet.id/`
            )
          }
        >
          Join now
        </Button>
      </div>
    </div>
  );
};

export default AffiliationEarnings;
