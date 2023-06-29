import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";
import CarbonableIcon from "../icons/carbonable";
import MintsquareIcon from "../icons/mintsquare";
import BriqIcon from "../icons/briq";
import RealmsIcon from "../icons/realms";
import NostraIcon from "../icons/nostra";
import EveraiIcon from "../icons/everai";

const HomePartners: FunctionComponent = () => {
  return (
    <div className={styles.subsection}>
      <div className={styles.card2}>
        <h2 className={styles.secondTitle}>They already integrated us</h2>
        <div className={styles.partners}>
          {/* <BriqIcon /> */}
          {/* <StarkwareIcon /> */}

          <a target="_blank" rel="noreferrer" href="https://mintsquare.io/">
            <div className="flex items-center justify-center m-5">
              <MintsquareIcon />
              <h3 className={styles.mintsquareTitle}>Mintsquare</h3>
            </div>
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.argent.xyz/">
            <img
              className="m-10"
              width={200}
              src="/visuals/partners/argent-logo-colour.svg"
              alt="Argent logo"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="https://starkscan.co/">
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
          <a target="_blank" rel="noreferrer" href="https://briq.construction/">
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
  );
};

export default HomePartners;
