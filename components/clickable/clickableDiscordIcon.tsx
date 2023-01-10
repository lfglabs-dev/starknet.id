import { Tooltip } from "@mui/material";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useStarknetIdContract } from "../../hooks/contracts";
import { stringToHex } from "../../utils/felt";
import DiscordIcon from "../../components/icons/discordIcon";
import styles from "../../styles/Profile.module.css";
import { ClickableIconProps } from "../../types";

const ClickableDiscordIcon: FunctionComponent<ClickableIconProps> = ({
  width,
  color,
  tokenId,
  domain,
}) => {
  const contract = useStarknetIdContract();
  const [discordId, setDiscordId] = useState<string | undefined>();
  const [discordUsername, setDiscordUsername] = useState<string | undefined>();

  useEffect(() => {
    if (tokenId) {
      contract
        .call("get_verifier_data", [
          tokenId,
          stringToHex("discord"),
          process.env.NEXT_PUBLIC_VERIFIER_CONTRACT,
        ])
        .then((data) => {
          if (data) setDiscordId(data["data"].toString(10));
          else return;
        })
        .catch((error) => {
          return;
        });
    }
  }, [tokenId]);

  // useEffect(() => {
  //   if (discordId) {
  //     fetch(`https://discord.com/api/users/${discordId}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Authorization ": `Bot ${process.env.NEXT_PUBLIC_DISCORD_TOKEN}`,
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setDiscordUsername(data.username);
  //       });
  //   }
  // }, [discordId]);

  return discordId && discordId !== "0" ? (
    <Tooltip title="Check Discord" arrow>
      <div
        className={styles.social}
        onClick={() =>
          window.open(`https://discord.com/channels/@me/${discordId}`)
        }
      >
        <DiscordIcon width={width} color={color ? color : "#7289d9"} />
        <p>{discordId}</p>
      </div>
    </Tooltip>
  ) : null;
};

export default ClickableDiscordIcon;
