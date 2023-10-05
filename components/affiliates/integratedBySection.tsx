import React, { FunctionComponent } from "react";
import homeStyles from "../../styles/Home.module.css";
import styles from "../../styles/affiliates.module.css";

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
                <img
                  className="m-5"
                  width={150}
                  src="/visuals/partners/argent-logo-colour.svg"
                  alt="Argent logo"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://starkscan.co/">
                <img
                  className="m-5"
                  width={150}
                  src="/visuals/partners/starkscan.png"
                  alt="Starkscan logo"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://braavos.app/">
                <img
                  className="m-5"
                  width={150}
                  src="/visuals/partners/braavos.svg"
                  alt="Braavos logo"
                />
              </a>
            </div>
            <p className="text-center mt-3">And +20 other Starknet Apps</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegratedBySection;
