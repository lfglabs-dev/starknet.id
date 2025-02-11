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

        <div className={styles.bannerContainer}>
          <img
            alt="affiliation illustration"
            src="/visuals/affiliates/chest.svg"
            className={styles.banner}
            width={380}
          />
          <img alt="Ethereum icon" src="/icons/ethIcon.svg" className={`${styles.floatingIcons} ${styles.eth}`} width={40} />
          <img alt="Ethereum icon" src="/icons/ethIcon.svg" className={`${styles.floatingIcons} ${styles.smallEth}`} width={25} />
          <img alt="Starknet icon" src="/icons/strkIcon.svg" className={`${styles.floatingIcons} ${styles.strk}`} width={37} />
          <img alt="Starknet icon" src="/icons/strkIcon.svg" className={`${styles.floatingIcons} ${styles.smallStrk}`} width={18} />
        </div>
        <div className={styles.content}>
          <p className={styles.secondSubtitle}>Join & Earn!</p>
          <h1 className={styles.title}>The Stark Affiliate Program</h1>
          <div className={styles.highlights}>
            <div className="flex items-center gap-2 text-sm">
              <CheckIcon width="16" color="#402D28" />
              Simple Steps
            </div>
            <div className={styles.separator} />
            <div className="flex items-center gap-2 text-sm">
              <Money width="16" color="#402D28" />
              Big Gains !
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
              <div className="flex items-center gap-3">
                <p className="text-[12px] font-normal">Start earning now</p>
                <RightArrow width="18" color="white" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateSection1;
