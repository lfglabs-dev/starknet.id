import React, { FunctionComponent, useEffect, useState } from "react";
import styles from "../../styles/Profile.module.css";
import { ClickableIconProps } from "../../types/frontTypes";
import TwitterFilledIcon from "../icons/twitterFilledIcon";

const ClickableTwitterIcon: FunctionComponent<ClickableIconProps> = ({
  socialId,
}) => {
  const [twitterUsername, setTwitterUsername] = useState<string | undefined>();

  useEffect(() => {
    if (socialId && socialId !== "0") {
      fetch(`/api/twitter/get_username?id=${socialId}`)
        .then((response) => response.json())
        .then((data) => {
          setTwitterUsername(data[0].username);
        });
    }
  }, [socialId]);

  return twitterUsername ? (
    <div
      className={styles.iconContainer}
      onClick={() => window.open(`https://twitter.com/${twitterUsername}`)}
    >
      <TwitterFilledIcon width="24" />
      <p className={styles.socialName}>@{twitterUsername}</p>
    </div>
  ) : null;
};

export default ClickableTwitterIcon;
