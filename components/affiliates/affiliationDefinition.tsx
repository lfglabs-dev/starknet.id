import React, { FunctionComponent } from "react";
import homeStyles from "../../styles/Home.module.css";
import styles from "../../styles/affiliates.module.css";
import { Parallax } from "react-scroll-parallax";
import { CDNImg } from "../cdn/image";

const AffiliationDefinition: FunctionComponent = () => {
  return (
    <div className={homeStyles.subsection}>
      <div className={styles.card1}>
        <div className="flex items-center justify-evenly flex-wrap">
          <Parallax speed={-4}>
            <CDNImg
              src="/leaves/lilLeaf02.svg"
              alt="leaf"
              className={styles.leaf1}
              width={20}
              height={20}
            />
          </Parallax>
          <h2 className={homeStyles.secondTitle}>
            What is the stark affiliate program ?
          </h2>
          <Parallax speed={-20}>
            <CDNImg
              src="/leaves/lilLeaf01.svg"
              alt="leaf"
              className={styles.leaf2}
              width={20}
              height={20}
            />
          </Parallax>
          <p className={styles.paragraph}>
            Our affiliate program pays you for sending your customers to our
            website. As an Affiliate you&apos;ll be able to promote starknet.id
            domains and get a commission on each domain sales made with your
            affiliate link. Earn at least 30% of commission on every sales made
            with your affiliate link !
          </p>
        </div>
      </div>
    </div>
  );
};

export default AffiliationDefinition;
