import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";
import HomePartners from "./homePartners";
import HomeCard from "./homeCard";

const HomeSection2: FunctionComponent = () => {
  return (
    <div id="info" className={styles.section2}>
      <div className={styles.subsection}>
        <HomeCard
          img="/visuals/home/passport.png"
          title="#1 Claim your Starknet identity"
          description="You can already mint your starknet identity for free, it'll
          act as your starknet passport and represent you during your
          on-chain interactions."
        />
        <HomeCard
          img="/visuals/home/passportWithUsername.png"
          title="#2 Register your .stark domain"
          description="You’re not 0x072d4…b2Be7, you can already register your .stark
              domain and link it with your starknet identity."
        />
        <HomeCard
          img="/visuals/home/passportWithEverything.png"
          title="#3 Build your identity"
          description="You'll also be able to attach any data to your starknet
          identity, from web2 with social media accounts to web3 with ENS
          domains."
        />
      </div>
      <HomePartners />
    </div>
  );
};

export default HomeSection2;
