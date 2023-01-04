import { Tooltip } from "@mui/material";
import React, { FunctionComponent, useEffect, useState } from "react";
import styles from "../../styles/Profile.module.css";
import StarknetIcon from "../icons/starknetIcon";
import { ContentCopy } from "@mui/icons-material";

type ClickableStarknetIconProps = {
  color?: string;
  width: string;
  addr: string;
};

const ClickableStarknetIcon: FunctionComponent<ClickableStarknetIconProps> = ({
  width,
  color,
  addr,
}) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(addr as string);
  };

  return addr ? (
    <div className={styles.network}>
      <StarknetIcon width="20" height="20" color={color ? color : "#402D28"} />
      <p>
        {addr.substring(0, 6) +
          "..." +
          addr.substring(addr.length - 4, addr.length)}
      </p>
      <Tooltip title="Copy" arrow>
        <ContentCopy
          className={styles.contentCopy}
          onClick={() => copyToClipboard()}
        />
      </Tooltip>
    </div>
  ) : null;
};

export default ClickableStarknetIcon;
