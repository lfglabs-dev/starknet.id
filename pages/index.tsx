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
                You can already mint your starknet identity for free, it&apos;ll
                act as your starknet passeport and represent you during your
                on-chain interactions.
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
                You&apos;ll also able to attach any data to your starknet
                identity, from web2 with social media accounts to web3 with ENS
                domains.
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
                  src="/visuals/partners/OnlyDustLogo.png"
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
                  src="/visuals/partners/EykarLogo.svg"
                  alt="Eykar logo"
                />
              </a>

              <a href="https://focustree.app/">
                <img
                  className="m-5 rounded-xl"
                  height={100}
                  width={100}
                  src="/visuals/partners/focustreeLogo.png"
                  alt="Imperium Wars logo"
                />{" "}
              </a>

              <a href="https://cartridge.gg/">
                <CartridgeIcon />
              </a>
              <a href="https://imperiumwars.xyz/">
                <img
                  className="m-5 rounded-xl"
                  height={100}
                  width={100}
                  src="/visuals/partners/ImperiumWarsLogo.png"
                  alt="Imperium Wars logo"
                />
              </a>

              <a href="https://www.frenslands.xyz/">
                <img
                  className="m-5 rounded-xl"
                  height={120}
                  width={120}
                  src="/visuals/partners/FrenslandsLogo.png"
                  alt="Frenslands logo"
                />
              </a>

              <a href="https://www.earlystarkers.io/">
                <img
                  className="m-5 rounded-xl"
                  height={180}
                  width={180}
                  src="/visuals/partners/EarlyStarkersLogo.svg"
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
