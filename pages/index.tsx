/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Footer from "../components/footer";
import Roadmap from "../components/roadmap";
import styles from "../styles/Home.module.css";
import CarbonableIcon from "../components/icons/carbonable";
import MintsquareIcon from "../components/icons/mintsquare";
import FocusTreeIcon from "../components/icons/focustree";
import CartridgeIcon from "../components/icons/cartridge";
import RealmsIcon from "../components/icons/realms";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <div className={styles.firstLeaf}>
          <img width="100%" alt="leaf" src="/leaves/leaf_2.png" />
        </div>
        <div className={styles.secondLeaf}>
          <img width="100%" alt="leaf" src="/leaves/leaf_1.png" />
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
                height={250}
                width={250}
                src="/identicons/identicon_3.svg"
              />
            </div>
            <h2 className={styles.secondTitle}>
              #1 Claim your on-chain identity
            </h2>
            <div className="text-md max-w-3xl mt-4 sm:mt-10">
              <p className="text-xl">
                Mint your starknet identity for free and connect it to your
                twitter, discord or github account.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className="flex justify-center">
              <img
                alt="identicon"
                height={250}
                width={250}
                src="/identicons/identicon_4.svg"
              />
            </div>
            <h2 className={styles.secondTitle}>
              #2 Claim your .stark username
            </h2>
            <div className="text-md max-w-3xl mt-4 sm:mt-10">
              <p className="text-xl">
                You’re not 0x072d4…b2Be7, transact directly from domain to
                domain instead of a cryptic key by claiming your unique .stark
                domain linked to your starknet identity.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className="flex justify-center">
              <img
                alt="identicon"
                height={250}
                width={250}
                src="/identicons/identicon_5.svg"
              />
            </div>
            <h2 className={styles.secondTitle}>#3 ENS Bridge</h2>
            <div className="text-md max-w-3xl mt-4 sm:mt-10">
              <p className="text-xl">
                We&rsquo;ll implement a bridging system to allow each .stark
                domain owner to get a free .eth domain on Ethereum but also each
                .eth owner to get a free .stark domain on Starknet.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.subsection}>
          <div className={styles.card2}>
            <h2 className={styles.secondTitle}>They are already using us</h2>
            <div className={styles.partners}>
              {/* <BriqIcon /> */}
              {/* <StarkwareIcon /> */}
              <a href="https://carbonable.io/">
                <CarbonableIcon />
              </a>

              <a href="https://onlydust.xyz/">
                <img
                  height={100}
                  width={100}
                  src="/visuals/OnlyDustLogo.png"
                  alt="only dust logo"
                  className="m-5"
                />
              </a>

              <a href="https://mintsquare.io/">
                <div className="flex items-center justify-center m-5">
                  <MintsquareIcon />
                  <h3 className={styles.mintsquareTitle}>Mintsquare</h3>
                </div>
              </a>
              <a href="https://eykar.org/">
                <img
                  className="m-5"
                  height={100}
                  width={100}
                  src="/visuals/EykarLogo.svg"
                  alt="Eykar logo"
                />
              </a>

              <a href="https://focustree.app/">
                <FocusTreeIcon />
              </a>

              <a href="https://cartridge.gg/">
                <CartridgeIcon />
              </a>
              <a href="https://imperiumwars.xyz/">
                <img
                  className="m-5 rounded-xl"
                  height={100}
                  width={100}
                  src="/visuals/ImperiumWarsLogo.png"
                  alt="Imperium Wars logo"
                />
              </a>

              <a href="https://www.frenslands.xyz/">
                <img
                  className="m-5 rounded-xl"
                  height={120}
                  width={120}
                  src="/visuals/FrenslandsLogo.png"
                  alt="Frenslands logo"
                />
              </a>

              <a href="https://www.earlystarkers.io/">
                <img
                  className="m-5 rounded-xl"
                  height={180}
                  width={180}
                  src="/visuals/EarlyStarkersLogo.svg"
                  alt="Early Starkers logo"
                />
              </a>

              <a href="https://realmseternum.com/">
                <RealmsIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.thirdLeaf}>
          <img width={"100%"} alt="leaf" src="/leaves/leaf_2.png" />
        </div>
        <div className={styles.fourthLeaf}>
          <img width={"100%"} alt="leaf" src="/leaves/leaf_1.png" />
        </div>
        <Roadmap />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
