import React, { FunctionComponent, useEffect, useState } from "react";
import styles from "../styles/Profile.module.css";
import MintsquareIcon from "../components/icons/mintsquare";
import BriqIcon from "../components/icons/briq";

export type ActivityData = {
  type: string;
  description: string;
  timestamp: string;
};

const Activity: FunctionComponent<ActivityData> = (props) => {
  const { type, description, timestamp } = props;
  const [url, setUrl] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className={styles.activity} onClick={() => console.log("open")}>
      {type === "briq" ? (
        <BriqIcon width="20" height="20" />
      ) : type === "mintsquare" ? (
        <MintsquareIcon />
      ) : type === "aspect" ? (
        <></>
      ) : (
        <></>
      )}
      <p>{description}</p>
    </div>
  );
};

export default Activity;
