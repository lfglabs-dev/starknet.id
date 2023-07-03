import React from "react";
import type { NextPage } from "next";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import HomeSection1 from "../components/home/homeSection1";
import HomeSection2 from "../components/home/homeSection2";
import HomeSection3 from "../components/home/homeSection3";

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className={styles.container}>
        <HomeSection1 />
        <HomeSection2 />
        <HomeSection3 />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
