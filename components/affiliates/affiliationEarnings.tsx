import { FunctionComponent, useState } from "react";
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
            onChange={(e) => setDirectReferrals(e.target.valueAsNumber)}
            min={1}
            max={20}
          />
        </div>
        <div className={styles.sliderContainer}>
          <p className={styles.sliderName}>Indirect Referrals Count</p>
          <Slider
            value={indirectReferrals}
            onChange={(e) => setIndirectReferrals(e.target.valueAsNumber)}
            min={1}
            max={200}
          />
        </div>
      </div>
      <div className={styles.resultContainer}>
        <p className={styles.resultTitle}>Affiliate earnings</p>
        <p className={styles.result}>948$</p>
        <Button onClick={() => ""}>Join now</Button>
      </div>
    </div>
  );
};

export default AffiliationEarnings;
