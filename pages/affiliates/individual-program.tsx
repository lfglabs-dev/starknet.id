import React from "react";
import type { NextPage } from "next";
import Navbar from "../../components/navbar";
import homeStyles from "../../styles/Home.module.css";
import AffiliateSection1 from "../../components/affiliates/affiliateSection1";
import AffiliateSection2 from "../../components/affiliates/affiliateSection2";
import AffiliateSection3 from "../../components/affiliates/affiliateSection3";
import Footer from "../../components/footer";
import { ParallaxProvider } from "react-scroll-parallax";

const IndividualProgram: NextPage = () => {
  return (
    <ParallaxProvider>
      <div className="overflow-hidden">
        <Navbar />
        <div className={homeStyles.container}>
          <AffiliateSection1 />
          <AffiliateSection2 />
          <AffiliateSection3 />
        </div>
        <Footer />
      </div>
    </ParallaxProvider>
  );
};

export default IndividualProgram;
