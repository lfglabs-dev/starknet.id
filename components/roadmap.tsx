import React, { FunctionComponent } from "react";
import styles from "../styles/roadmap.module.css";

const Roadmap: FunctionComponent = () => {
  return (
    <div id="roadmap" className="flex flex-col relative">
      <h1 className={styles.title}>Roadmap</h1>
      <div className="my-5">
        <h2 className={styles.secondTitle}>Phase 1 : Genesis</h2>
        <p className="text-center text-xl">Recruitment</p>
        <p className="text-center text-xl">
          First partnership with Eykar Quest
        </p>
        <p className="text-center text-xl">Live testnet</p>
      </div>
      <div className="my-5">
        <h2 className={styles.secondTitle}>Phase 2 : Growth</h2>
        <p className="text-center text-xl">Live mainnet</p>
        <p className="text-center text-xl">Wallets .stark support</p>
        <p className="text-center text-xl">
          New partnerships (cartridge, Imperium Wars, Only Dust, Matchbox ...)
        </p>
        <p className="text-center text-xl">ENS bridge (free .eth domain)</p>
        <p className="text-center text-xl">New Starknet SFT implementation</p>
      </div>
      <div className="my-5">
        <h2 className={styles.secondTitle}>Phase 3 : Maturation</h2>
        <p className="text-center text-xl">
          Eternal contract (deletion of upgradable functions)
        </p>
        <p className="text-center text-xl">
          New DAO system based on game theory and identities
        </p>
      </div>
    </div>
  );
};

export default Roadmap;
