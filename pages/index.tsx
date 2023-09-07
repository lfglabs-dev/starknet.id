import React from "react";
import type { NextPage } from "next";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import HomeSection1 from "../components/home/homeSection1";
import HomeSection2 from "../components/home/homeSection2";
import HomeSection3 from "../components/home/homeSection3";
import { ParallaxProvider } from "react-scroll-parallax";

const Home: NextPage = () => {
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.container}>
        <ParallaxProvider>
          <HomeSection1 />
          <HomeSection2 />
          <HomeSection3 />
          <Footer />
        </ParallaxProvider>
      </div>
    </div>
  );
};

export default Home;
