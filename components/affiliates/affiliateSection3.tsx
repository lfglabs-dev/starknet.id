import React, { FunctionComponent } from "react";
import styles from "../../styles/affiliates.module.css";
import Button from "../button";

const AffiliateSection3: FunctionComponent = () => {
  return (
    <div className={styles.section3}>
      <h3 className={styles.title}>Profit from starknet growth</h3>

      <div className="flex justify-center items-center m-w-full mx-10 flex-wrap">
        <img
          width={300}
          alt="affiliate logo"
          src="/visuals/affiliates/growIllu.webp"
        />
        <div className={styles.affiliateCard}>
          <p className="text-justify">
            {
              "Validity rollups and Starknet are growing exponentially, make sure to profit from that growth by promoting one the most popular brand of Starknet that we'll convert for you."
            }
          </p>
        </div>
      </div>
      <Button onClick={() => window.open("")}>Join now</Button>
    </div>
  );
};

export default AffiliateSection3;
