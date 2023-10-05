import React, { FunctionComponent } from "react";
import homeStyles from "../../styles/Home.module.css";
import styles from "../../styles/affiliates.module.css";
import Button from "../button";

const AffiliateSection1: FunctionComponent = () => {
  return (
    <div className={homeStyles.section1}>
      <div className={styles.container}>
        <div className="flex flex-col justify-center">
          <h1 className={styles.title}>The Stark Affiliate Program</h1>
          <h3 className={styles.subtitle}>
            Earn&nbsp;
            <span style={{ fontFamily: "QuickZap" }} className="text-primary">
              STRK
            </span>
            &nbsp;and&nbsp;
            <span style={{ fontFamily: "QuickZap" }} className="text-primary">
              ETH
            </span>
            &nbsp;by promoting stark domains.
          </h3>
          <div className={styles.button}>
            <Button
              onClick={() => window.open("https://affiliate.starknet.id/")}
            >
              Join now
            </Button>
          </div>
        </div>
        <img
          alt="affiliation illustration"
          src="/visuals/affiliates/affiliationIllu.webp"
          className={styles.banner}
          width={380}
        />
      </div>
    </div>
  );
};

export default AffiliateSection1;
