import { Tooltip } from "@mui/material";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useStarknetIdContract } from "../../hooks/contracts";
import { stringToHex } from "../../utils/felt";
import DiscordIcon from "../../components/icons/discordIcon";
import styles from "../../styles/Profile.module.css";

type ClickableDiscordIconProps = {
  color?: string;
  width: string;
  tokenId: string;
  domain?: string;
};

const ClickableDiscordIcon: FunctionComponent<ClickableDiscordIconProps> = ({
  width,
  color,
  tokenId,
  domain,
}) => {
  const contract = useStarknetIdContract();
  const [DiscordId, setDiscordId] = useState<string | undefined>();

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

  return DiscordId ? (
    <Tooltip title="Check Discord" arrow>
      <div
        className={styles.social}
        onClick={() =>
          window.open(`https://discord.com/channels/@me/${DiscordId}`)
        }
      >
        <DiscordIcon width={width} color={color ? color : "#7289d9"} />
        <p>{DiscordId}</p>
      </div>
    </Tooltip>
  ) : null;
};

export default ClickableDiscordIcon;
