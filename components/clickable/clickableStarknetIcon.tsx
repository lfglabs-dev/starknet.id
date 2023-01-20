import { Tooltip } from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import styles from "../../styles/Profile.module.css";
import StarknetIcon from "../icons/starknetIcon";
import { ContentCopy } from "@mui/icons-material";
import { ClickableChainIconProps } from "../../types";
import { minifyAddress } from "../../utils/stringService";
import CopiedIcon from "../icons/copied";

const ClickableStarknetIcon: FunctionComponent<ClickableChainIconProps> = ({
  color,
  addr,
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    setCopied(true);
    navigator.clipboard.writeText(addr);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return addr && Number(addr) !== 0 ? (
    <div className={styles.network}>
      <StarknetIcon width="20" height="20" color={color ? color : "#402D28"} />
      <p>{minifyAddress(addr)}</p>
      {!copied ? (
        <Tooltip title="Copy" arrow>
          <ContentCopy
            className={styles.contentCopy}
            onClick={() => copyToClipboard()}
          />
        </Tooltip>
      ) : (
        <CopiedIcon width="20" />
      )}
    </div>
  ) : null;
};

export default ClickableStarknetIcon;
