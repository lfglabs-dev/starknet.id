import React, { FunctionComponent, useEffect, useState } from "react";
import styles from "../../styles/Profile.module.css";
import { ClickableIconProps } from "../../types/frontTypes";
import GitHubFilledIcon from "../icons/githubFilledIcon";

const ClickableGithubIcon: FunctionComponent<ClickableIconProps> = ({
  socialId,
}) => {
  const [githubUsername, setGithubUsername] = useState<string | undefined>();

  useEffect(() => {
    if (socialId && socialId !== "0") {
      fetch(`https://api.github.com/user/${socialId}`)
        .then((response) => response.json())
        // TO DO : Find how to import the github response type
        .then((data) => {
          setGithubUsername(data.login);
        });
    }
  }, [socialId]);

  return githubUsername ? (
    <div
      className={styles.iconContainer}
      onClick={() => window.open(`https://github.com/${githubUsername}`)}
    >
      <GitHubFilledIcon width="24" />
      <p className={styles.socialName}>{githubUsername}</p>
    </div>
  ) : null;
};

export default ClickableGithubIcon;
