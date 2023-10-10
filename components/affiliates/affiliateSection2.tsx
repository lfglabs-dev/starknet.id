import React, { FunctionComponent } from "react";
import homeStyles from "../../styles/Home.module.css";
import HomeCard from "../home/homeCard";
import IntegratedBySection from "./integratedBySection";
import AffiliationDefinition from "./affiliationDefinition";

const AffiliateSection2: FunctionComponent = () => {
  return (
    <div className={homeStyles.section2}>
      <AffiliationDefinition />
      <div className={homeStyles.subsection}>
        <HomeCard
          img="/visuals/affiliates/affiliationIllu1.webp"
          title="Permissionless and Trustless"
          description="The particularity of our program is that it is
          completely trustless and permissionless, everyone can participate by
          just owning a stark domain and all the logic takes place on-chain so
          you don't have to trust any centralized entity."
        />
        <HomeCard
          img="/visuals/affiliates/searchIllu.webp"
          title="Track and Grow your performances"
          description="As an affiliate you'll get access to ready to use designs, news in advance, a special analytics dashboard and a dedicated affiliate manager to optimize your campaigns as much as possible."
        />
        <HomeCard
          img="/visuals/affiliates/moneyIllu.webp"
          title="Get paid in Crypto (ETH & STRK in the future)"
          description="We share revenue fairly. Every eligible sale made earns you at least 30% commissions. And this is just the start because you could go bigger if you are a top performer."
        />
      </div>
      <IntegratedBySection />
    </div>
  );
};

export default AffiliateSection2;
