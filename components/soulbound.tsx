import React, { FunctionComponent, useEffect, useState } from "react";
import styles from "../styles/Soulbound.module.css";

export type SoulBoundData = {
  tokenId: string;
  imageUri: string;
  name: string;
  description: string;
};

const Soulbound: FunctionComponent<SoulBoundData> = (props) => {
  const { tokenId, imageUri, name, description } = props;
  const [url, setUrl] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    if (imageUri.toLowerCase().startsWith("ipfs://")) {
      setUrl(imageUri.replace("ipfs://", "https://ipfs.io/ipfs/"));
    } else {
      setUrl(imageUri);
    }
  }, [imageUri]);

  return (
    <div
      className={styles.SbtCard}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
      onClick={() => console.log("open")}
    >
      <img src={url} alt={name} className={styles.SbtImage} />
      {showInfo && (
        <div className={styles.cardInfo}>
          <h3 className={styles.cardName}>{name}</h3>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Soulbound;
