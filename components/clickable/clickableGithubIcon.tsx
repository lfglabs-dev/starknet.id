import { Tooltip } from "@mui/material";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useStarknetIdContract } from "../../hooks/contracts";
import { stringToHex } from "../../utils/felt";
import GitHubIcon from "../../components/icons/githubIcon";
import styles from "../../styles/Profile.module.css";
import { ClickableIconProps } from "../../types";

const ClickableGithubIcon: FunctionComponent<ClickableIconProps> = ({
  width,
  color,
  tokenId,
}) => {
  const contract = useStarknetIdContract();
  const [githubId, setGithubId] = useState<string | undefined>();
  const [githubUsername, setGithubUsername] = useState<string | undefined>();

  useEffect(() => {
    if (tokenId) {
      contract
        .call("get_verifier_data", [
          tokenId,
          stringToHex("github") as string,
          process.env.NEXT_PUBLIC_VERIFIER_CONTRACT as string,
        ])
        .then((data) => {
          if (data) setGithubId(data["data"].toString(10));
          else return;
        })
        .catch((error) => {
          return;
        });
    }
  }, [tokenId, contract]);

  useEffect(() => {
    if (githubId && githubId !== "0") {
      fetch(`https://api.github.com/user/${githubId}`)
        .then((response) => response.json())
        // TO DO : Find how to import the github response type
        .then((data) => {
          setGithubUsername(data.login);
        });
    }
  }, [githubId]);

  return githubUsername ? (
    <Tooltip title="Check github" arrow>
      <div
        className={styles.social}
        onClick={() => window.open(`https://github.com/${githubUsername}`)}
      >
        <GitHubIcon width={width} color={color ? color : "#000"} />
        <p>{githubUsername}</p>
      </div>
    </Tooltip>
  ) : null;
};

export default ClickableGithubIcon;
