import { Tooltip } from "@mui/material";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useStarknetIdContract } from "../../hooks/contracts";
import { stringToHex } from "../../utils/felt";
import styles from "../../styles/Profile.module.css";
import { ClickableIconProps } from "../../types";
import DiscordIcon from "../icons/discordIcon";

const ClickableDiscordIcon: FunctionComponent<ClickableIconProps> = ({
  width,
  color,
  tokenId,
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
  }, [tokenId, contract]);

  useEffect(() => {
    if (discordId) {
      fetch(`/api/discord/get_username?id=${discordId}`)
        .then((response) => response.json())
        .then((data) => {
          setDiscordUsername(data.username);
        });
    }
  }, [tokenId, discordId]);

  return discordId && discordId !== "0" && discordUsername ? (
    <Tooltip title="Check Discord" arrow>
      <div
        className={styles.social}
        onClick={() =>
          window.open(`https://discord.com/channels/@me/${discordId}`)
        }
      >
        <DiscordIcon width={width} color={color ? color : "#7289d9"} />
        <p>{discordUsername}</p>
      </div>
    </Tooltip>
  ) : null;
};

export default ClickableDiscordIcon;
