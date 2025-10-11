import React, { FunctionComponent, useState } from "react";
import styles from "../../styles/affiliates.module.css";
import Button from "../button";
import Slider from "../UI/slider";

const AffiliationEarnings: FunctionComponent = () => {
  const [directReferrals, setDirectReferrals] = useState(2000);
  const [indirectReferrals, setIndirectReferrals] = useState(0.7);
  const averageDomainPrice = 20;

  return (
    <div className={styles.earningsCard}>
      <div className={styles.sliders}>
        <div className={styles.sliderContainer}>
          <p className={styles.sliderName}>Direct Referrals Count</p>
          <div className={styles.sliderComp}>
            <Slider
              value={directReferrals}
              onChange={setDirectReferrals}
              min={1}
              max={10000}
            />
          </div>
        </div>
        <div className={styles.sliderContainer}>
          <p className={styles.sliderName}>Each referral will refer</p>
          <div className={styles.sliderComp}>
            <Slider
              value={indirectReferrals}
              onChange={setIndirectReferrals}
              min={0.01}
              max={1.99}
              step={0.01}
            />
          </div>
        </div>
      </div>
      <div className={styles.resultContainer}>
        <div>
          <p className={styles.resultTitle}>Affiliate earnings</p>
          <p className={styles.result}>
            {Math.round(
              (directReferrals * averageDomainPrice) /
                (4 - 2 * indirectReferrals)
            )}
            $
          </p>
        </div>
        <Button
          onClick={() =>
            window.open(
              `https://${
                (process.env.NEXT_PUBLIC_NETWORK_NAME as string).includes(
                  "sepolia"
                )
                  ? "sepolia."
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
