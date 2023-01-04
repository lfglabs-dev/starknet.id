import { Tooltip } from "@mui/material";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useStarknetIdContract } from "../../hooks/contracts";
import { stringToHex } from "../../utils/felt";
import styles from "../../styles/Profile.module.css";
import TwitterIcon from "../icons/twitterIcon";

type ClickableTwitterIconProps = {
  color?: string;
  width: string;
  tokenId: string;
  domain?: string;
};

const ClickableTwitterIcon: FunctionComponent<ClickableTwitterIconProps> = ({
  width,
  color,
  tokenId,
  domain,
}) => {
  const contract = useStarknetIdContract();
  const [twitterId, setTwitterId] = useState<string | undefined>();
  const [twitterUsername, setTwitterUsername] = useState<string | undefined>();

  useEffect(() => {
    if (tokenId) {
      contract
        .call("get_verifier_data", [
          tokenId,
          stringToHex("twitter"),
          process.env.NEXT_PUBLIC_VERIFIER_CONTRACT,
        ])
        .then((data) => {
          if (data) setTwitterId(data["data"].toString(10));
          else return;
        })
        .catch((error) => {
          return;
        });
    }
  }, [tokenId]);

  useEffect(() => {
    if (twitterId) {
      fetch(`/api/twitter/get_username?id=${twitterId}`)
        .then((response) => response.json())
        // TO DO : Find how to import the twitter response type
        .then((data) => {
          setTwitterUsername(data[0].username);
        });
    }
  }, [twitterId]);

  return twitterUsername ? (
    <Tooltip title="Check twitter" arrow>
      <div
        className={styles.social}
        onClick={() => window.open(`https://twitter.com/${twitterUsername}`)}
      >
        <TwitterIcon width={width} color={color ? color : "#1DA1F2"} />
        <p>{twitterUsername}</p>
      </div>
    </Tooltip>
  ) : null;
};

export default ClickableTwitterIcon;
