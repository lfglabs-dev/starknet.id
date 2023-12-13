import React, { FunctionComponent } from "react";
import homeStyles from "../../styles/Home.module.css";
import styles from "../../styles/affiliates.module.css";
import { CDNImg } from "../cdn/image";

const IntegratedBySection: FunctionComponent = () => {
  return (
    <div className={homeStyles.subsection}>
      <div className={styles.card2}>
        <h2 className={styles.cardTitle}>Integrated in</h2>
        <div className="flex items-center justify-evenly flex-wrap w-full">
          <div className="flex flex-col">
            <div className={styles.partners}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.argent.xyz/"
              >
                <CDNImg
                  className="m-5"
                  width={150}
                  src="/visuals/partners/argent-logo-colour.svg"
                  alt="Argent logo"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://starkscan.co/">
                <CDNImg
                  className="m-5"
                  width={150}
                  src="/visuals/partners/starkscan.png"
                  alt="Starkscan logo"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://braavos.app/">
                <CDNImg
                  className="m-5"
                  width={150}
                  src="/visuals/partners/braavos.svg"
                  alt="Braavos logo"
                />
              </a>
            </div>
            <p className={styles.integratedBySubtile}>
              And +20 other Starknet Apps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegratedBySection;
