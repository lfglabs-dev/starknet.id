import React, { FunctionComponent, useEffect, useState } from "react";
import styles from "../../styles/Profile.module.css";
import { ClickableIconProps } from "../../types/frontTypes";
import DiscordFilledIcon from "../icons/discordFilledIcon";

const ClickableDiscordIcon: FunctionComponent<ClickableIconProps> = ({
  socialId,
}) => {
  const [discordUsername, setDiscordUsername] = useState<string | undefined>();
  useEffect(() => {
    if (socialId) {
      fetch(`/api/discord/get_username?id=${socialId}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data);
          setDiscordUsername(data.username);
        });
    }
  }, [socialId]);

  return socialId && socialId !== "0" && discordUsername ? (
    <div
      className={styles.iconContainer}
      onClick={() =>
        window.open(`https://discord.com/channels/@me/${socialId}`)
      }
    >
      <DiscordFilledIcon width="24" />
      <p className={styles.socialName}>{discordUsername}</p>
    </div>
  ) : null;
};

export default ClickableDiscordIcon;
