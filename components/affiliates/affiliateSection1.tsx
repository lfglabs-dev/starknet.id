import React, { FunctionComponent } from "react";
import homeStyles from "../../styles/Home.module.css";
import styles from "../../styles/affiliates.module.css";
import Button from "../button";
import Money from "../icons/money";
import CheckIcon from "../UI/iconsComponents/icons/checkIcon";
import RightArrow from "../UI/iconsComponents/icons/rightArrow";

const AffiliateSection1: FunctionComponent = () => {
  return (
    <div className={homeStyles.section1}>
      <div className={styles.container}>
        <img
          alt="affiliation illustration"
          src="/visuals/affiliates/affiliateTreasure.webp"
          className={styles.banner}
          width={380}
        />
        <div className={styles.content}>
          <p className={styles.secondSubtitle}>Join & Earn!</p>
          <h1 className={styles.title}>The Stark Affiliate Program</h1>
          <div className={styles.highlights}>
            <div className="flex items-center gap-2">
              <CheckIcon width="16" color="#402D28" />
              Simple Steps
            </div>
            <div className={styles.separator} />
            <div className="flex items-center gap-2">
              <Money width="16" color="#402D28" />
              Big Gains!
            </div>
          </div>
          <h3 className={styles.subtitle}>
            Partner with us and <strong>Earn ETH</strong> while promoting stark
            domains.
          </h3>
          <div className={styles.button}>
            <Button
              onClick={() => window.open("https://affiliate.starknet.id/")}
            >
              <div className="flex items-center gap-6">
                <p className="text-lg font-normal">Start earning now</p>
                <RightArrow width="28" color="white" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateSection1;
