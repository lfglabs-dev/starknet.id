import React, { FunctionComponent, useEffect, useState } from "react";
import styles from "../styles/Profile.module.css";
import MintsquareIcon from "../components/icons/mintsquare";
import { ActivityProps } from "../types";
import { projectNames } from "../utils/constants";
import StarknetIcon from "./icons/starknetIcon";
import AspectIcon from "./icons/aspect";
import JediswapIcon from "./icons/jediswap";
import NostraIcon from "./icons/nostra";

const Activity: FunctionComponent<ActivityProps> = ({
  type,
  date,
  transaction_hash,
  index,
}) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if ((index as number) % 2 === 0)
      setUrl(`https://starkscan.co/tx/${transaction_hash}`);
    else setUrl(`https://voyager.online/tx/${transaction_hash}`);
  }, [index]);

  return (
    <div className={styles.activity} onClick={() => window.open(url)}>
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
        <AspectIcon width="60" />
      ) : type === "Starkgate" ? (
        <StarknetIcon width="50" />
      ) : type === "JediSwap" ? (
        <JediswapIcon width="60" />
      ) : type === "10KSwap" ? (
        <></>
      ) : type === "Myswap" ? (
        <img
          src="/visuals/myswap.jpg"
          alt="MySwap Logo"
          width={40}
          height={40}
        />
      ) : type === "Orbiter" ? (
        <></>
      ) : type === "Nostra" ? (
        <NostraIcon width="50" />
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
