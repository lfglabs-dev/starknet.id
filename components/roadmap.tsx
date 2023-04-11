import React, { FunctionComponent } from "react";
import styles from "../styles/roadmap.module.css";

const Roadmap: FunctionComponent = () => {
  return (
    <div id="roadmap" className="flex flex-col relative">
      <h1 className={styles.title}>Roadmap</h1>
      <div className="my-5">
        <h2 className={styles.secondTitle}>Phase 1 : Genesis</h2>
        <p className="text-center text-xl  line-through">Recruitment</p>
        <p className="text-center text-xl	 line-through">
          First partnership with Eykar Quest
        </p>
        <p className="text-center text-xl line-through">
          Application live on testnet
        </p>
        <p className="text-center text-xl line-through">
          Protocol partnerships (Eykar, Realms, Carbonable, Focus Tree ...)
        </p>
      </div>
      <div className="my-5">
        <h2 className={styles.secondTitle}>Phase 2 : Growth</h2>

        <p className="text-center text-xl line-through">
          Application live on mainnet
        </p>
        <p className="text-center text-xl line-through">
          Starknet id Dashboard
        </p>
        <p className="text-center text-xl line-through">
          First wallet integration
        </p>
        <p className="text-center text-xl line-through">
          First block explorer integration
        </p>
        <p className="text-center text-xl line-through">
          Massive Subdomain distribution (free)
        </p>
        <p className="text-center text-xl line-through">
          Starknetid SDK for developers
        </p>
        <p className="text-center text-xl">The Stark Tribe Campaign</p>
        <p className="text-center text-xl">Automatic Renewal Feature</p>
        <p className="text-center text-xl">Proof of PersonHood/KYC features</p>
      </div>
      <div className="my-5">
        <h2 className={styles.secondTitle}>Phase 3 : MATURATION</h2>
        <p className="text-center text-xl">Cairo 1 migration</p>
        <p className="text-center text-xl">ENS Bridging</p>
        <p className="text-center text-xl">NFT Profile pic linking</p>
        <p className="text-center text-xl">On-chain resolving</p>
        <p className="text-center text-xl">Affiliation system</p>

        <p className="text-center text-xl">More features around identity TBA</p>
      </div>
    </div>
  );
};

export default Roadmap;
