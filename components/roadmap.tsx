import React, { FunctionComponent } from "react";
import styles from "../styles/roadmap.module.css";

const Roadmap: FunctionComponent = () => {
  return (
    <div id="roadmap" className="flex flex-col relative">
      <h1 className={styles.title}>Roadmap</h1>
      <div className="my-5">
        <h2 className={styles.secondTitle}>Phase 1 : Genesis</h2>
        <p className="text-center text-xl">Recruitment</p>
        <p className="text-center text-xl	">
          First partnership with Eykar Quest
        </p>
        <p className="text-center text-xl">Application live on testnet</p>
        <p className="text-center text-xl">
          Protocol partnerships (Eykar, Realms, Carbonable, Focus Tree ...)
        </p>
      </div>
      <div className="my-5">
        <h2 className={styles.secondTitle}>Phase 2 : Growth</h2>

        <p className="text-center text-xl">Application live on mainnet</p>
        <p className="text-center text-xl">New Starknet SBT implementation</p>
        <p className="text-center text-xl">
          Ecosystem domain support (wallets, protocols, starknet.js ...)
        </p>
        <p className="text-center text-xl">Affiliation system</p>
      </div>
      <div className="my-5">
        <h2 className={styles.secondTitle}>Phase 3 : MATURATION</h2>
        <p className="text-center text-xl">ENS Bridges</p>
        <p className="text-center text-xl">Starknet id Dashboard</p>
        <p className="text-center text-xl">More features around identity</p>
        <p className="text-center text-xl">
          New DAO system based on game theory and identities
        </p>
      </div>
    </div>
  );
};

export default Roadmap;
