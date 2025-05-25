import React, { useState } from "react";
import type { NextPage } from "next";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import HomeSection1 from "../components/home/homeSection1";
import HomeSection2 from "../components/home/homeSection2";
import HomeSection3 from "../components/home/homeSection3";
import { ParallaxProvider } from "react-scroll-parallax";
import RevealAnimation from "../components/animations/revealAnimation";

const Home: NextPage = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className={styles.page}>
      {!isRevealed && <RevealAnimation onFinish={() => setIsRevealed(true)} />}

      {isRevealed && (
        <>
          <Navbar />
          <div className={styles.container}>
            <ParallaxProvider>
              <HomeSection1 />
              <HomeSection2 />
              <HomeSection3 />
              <Footer />
            </ParallaxProvider>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
