import React, { FunctionComponent } from "react";
import homeStyles from "../../styles/Home.module.css";
import styles from "../../styles/affiliates.module.css";
import Button from "../button";

const AffiliateSection1: FunctionComponent = () => {
  return (
    <div className={homeStyles.section1}>
      <div className="flex flex-col items-center justify-center min-h-screen mx-10">
        <img
          width={200}
          alt="affiliate logo"
          src="/visuals/affiliates/gate-logo.webp"
        />

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
        <div className="mt-4">
          <Button onClick={() => window.open("")}>Join now</Button>
        </div>
      </div>
    </div>
  );
};

export default AffiliateSection1;
