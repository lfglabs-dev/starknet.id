import React from "react";
import type { NextPage } from "next";
import Footer from "../components/footer";
import Roadmap from "../components/roadmap";
import styles from "../styles/Home.module.css";
import CarbonableIcon from "../components/icons/carbonable";
import MintsquareIcon from "../components/icons/mintsquare";
import BriqIcon from "../components/icons/briq";
import RealmsIcon from "../components/icons/realms";
import Navbar from "../components/navbar";
import NostraIcon from "../components/icons/nostra";
import EveraiIcon from "../components/icons/everai";

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className={styles.container}>
        <div className={styles.section1}>
          <div className={styles.firstLeavesGroup}>
            <img width="100%" alt="leaf" src="/leaves/leavesGroup02.svg" />
          </div>
          <div className={styles.secondLeavesGroup}>
            <img width="100%" alt="leaf" src="/leaves/leavesGroup01.svg" />
          </div>
          <div className="flex flex-col items-center justify-center text min-h-screen mx-10">
            <h1 className={styles.title}>Starknet.id</h1>
            <h3 className={styles.subtitle}>
              &rdquo;All in one identity service on starknet&rdquo;
            </h3>
          </div>
        </div>
        <div id="info" className={styles.section2}>
          <div className={styles.subsection}>
            <div className={styles.card}>
              <div className="flex justify-center">
                <img
                  alt="identicon"
                  height={300}
                  width={300}
                  src="/visuals/passeport.png"
                />
              </div>
              <h2 className={styles.secondTitle}>
                #1 Claim your Starknet identity
              </h2>
              <div className="text-md max-w-3xl mt-4 sm:mt-10">
                <p className="text-xl">
                  You can already mint your starknet identity for free,
                  it&apos;ll act as your starknet passport and represent you
                  during your on-chain interactions.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className="flex justify-center">
                <img
                  alt="identicon"
                  height={300}
                  width={300}
                  src="/visuals/passeportWithUsername.png"
                />
              </div>
              <h2 className={styles.secondTitle}>
                #2 Register your .stark domain
              </h2>
              <div className="text-md max-w-3xl mt-4 sm:mt-10">
                <p className="text-xl">
                  You’re not 0x072d4…b2Be7, you can already register your .stark
                  domain and link it with your starknet identity.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className="flex justify-center">
                <img
                  alt="identicon"
                  height={300}
                  width={300}
                  src="/visuals/passeportWithEverything.png"
                />
              </div>
              <h2 className={styles.secondTitle}>#3 Build your identity</h2>
              <div className="text-md max-w-3xl mt-4 sm:mt-10">
                <p className="text-xl">
                  You&apos;ll also be able to attach any data to your starknet
                  identity, from web2 with social media accounts to web3 with
                  ENS domains.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.subsection}>
            <div className={styles.card2}>
              <h2 className={styles.secondTitle}>They already integrated us</h2>
              <div className={styles.partners}>
                {/* <BriqIcon /> */}
                {/* <StarkwareIcon /> */}

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://mintsquare.io/"
                >
                  <div className="flex items-center justify-center m-5">
                    <MintsquareIcon />
                    <h3 className={styles.mintsquareTitle}>Mintsquare</h3>
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.argent.xyz/"
                >
                  <img
                    className="m-10"
                    width={200}
                    src="/visuals/partners/argent-logo-colour.svg"
                    alt="Argent logo"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://starkscan.co/"
                >
                  <img
                    className="m-10"
                    width={200}
                    src="/visuals/partners/starkscan.png"
                    alt="Starkscan logo"
                  />
                </a>
                <a target="_blank" rel="noreferrer" href="https://braavos.app/">
                  <img
                    className="m-10"
                    width={200}
                    src="/visuals/partners/braavos.svg"
                    alt="Braavos logo"
                  />
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.everai.xyz/"
                  className="m-10"
                >
                  <EveraiIcon width={"100"} color="black" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://briq.construction/"
                >
                  <BriqIcon />
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://carbonable.io/"
                  className="m-10"
                >
                  <CarbonableIcon />
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  className="m-10"
                  href="https://www.nostra.finance"
                >
                  <NostraIcon height="40px" />
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://realmseternum.com/"
                  className="m-10"
                >
                  <RealmsIcon />
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://voyager.online/"
                  className="m-10"
                >
                  <img
                    width={200}
                    src="/visuals/partners/voyager.png"
                    alt="Voyager logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section3}>
          <div className={styles.thirdLeavesGroup}>
            <img width="100%" alt="leaf" src="/leaves/leavesGroup02.svg" />
          </div>
          <div className={styles.fourthLeavesGroup}>
            <img width="100%" alt="leaf" src="/leaves/leavesGroup01.svg" />
          </div>
          <Roadmap />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
