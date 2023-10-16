import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";
import CarbonableIcon from "../icons/carbonable";
import BriqIcon from "../icons/briq";
import RealmsIcon from "../icons/realms";
import NostraIcon from "../icons/nostra";
import EveraiIcon from "../icons/everai";
import AvnuIcon from "../icons/avnu";

const HomePartners: FunctionComponent = () => {
  return (
    <div className={styles.subsection}>
      <div className={styles.card2}>
        <p className="text-center">Our partners</p>
        <h2 className={styles.secondTitle}>They already integrated us</h2>
        <div className={styles.partners}>
          <a
            className="mx-10"
            target="_blank"
            rel="noreferrer"
            href="https://www.avnu.fi/"
          >
            <AvnuIcon width="100" color="black" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.argent.xyz/">
            <img
              className="mx-10"
              width={200}
              src="/visuals/partners/argent-logo-colour.svg"
              alt="Argent logo"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="https://starkscan.co/">
            <img
              className="mx-10"
              width={200}
              src="/visuals/partners/starkscan.png"
              alt="Starkscan logo"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="https://braavos.app/">
            <img
              className="mx-10"
              width={200}
              src="/visuals/partners/braavos.svg"
              alt="Braavos logo"
            />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.everai.xyz/"
            className="mx-10"
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
            className="mx-10"
          >
            <CarbonableIcon />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            className="mx-10"
            href="https://www.nostra.finance"
          >
            <NostraIcon height="40px" />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://realmseternum.com/"
            className="mx-10"
          >
            <RealmsIcon />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://voyager.online/"
            className="mx-10"
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
