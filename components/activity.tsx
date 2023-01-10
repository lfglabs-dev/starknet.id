import React, { FunctionComponent } from "react";
import styles from "../styles/Profile.module.css";
import MintsquareIcon from "../components/icons/mintsquare";
import { ActivityProps } from "../types";
import { projectNames } from "../constants";
import StarknetIcon from "./icons/starknetIcon";

const Activity: FunctionComponent<ActivityProps> = ({
  type,
  date,
  transaction_hash,
}) => {
  return (
    <div
      className={styles.activity}
      onClick={() => window.open(`https://starkscan.co/tx/${transaction_hash}`)}
    >
      {type === "StarknetId" ||
      type === "StarknetIdNaming" ||
      type === "StarknetIdPricing" ||
      type === "StarknetIdVerifier" ? (
        <img
          className="cursor-pointer"
          src="/visuals/StarknetIdLogo.png"
          alt="Starknet.id Logo"
          width={60}
          height={60}
        />
      ) : type === "mintsquare" ? (
        <MintsquareIcon />
      ) : type === "aspect" ? (
        <></>
      ) : type === "Starkgate" ? (
        <StarknetIcon />
      ) : type === "JediSwap" ? (
        <></>
      ) : type === "10KSwap" ? (
        <></>
      ) : type === "Myswap" ? (
        <></>
      ) : type === "Orbiter" ? (
        <></>
      ) : type === "Nostra" ? (
        <></>
      ) : (
        <></>
      )}
      <p>
        Interacted with {projectNames[type]} contract on {date}
      </p>
    </div>
  );
};

export default Activity;
