import React from "react";
import type { NextPage } from "next";
import Navbar from "../../components/navbar";
import homeStyles from "../../styles/Home.module.css";
import AffiliateSection1 from "../../components/affiliates/affiliateSection1";
import AffiliateSection2 from "../../components/affiliates/affiliateSection2";
import AffiliateSection3 from "../../components/affiliates/affiliateSection3";

const IndividualProgram: NextPage = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className={homeStyles.container}>
        <AffiliateSection1 />
        <AffiliateSection2 />
        <AffiliateSection3 />
      </div>
    </div>
  );
};

export default IndividualProgram;
