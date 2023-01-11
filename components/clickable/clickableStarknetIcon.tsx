import { Tooltip } from "@mui/material";
import React, { FunctionComponent } from "react";
import styles from "../../styles/Profile.module.css";
import StarknetIcon from "../icons/starknetIcon";
import { ContentCopy } from "@mui/icons-material";
import { ClickableChainIconProps } from "../../types";
import { minifyAddress } from "../../utils/stringService";

const ClickableStarknetIcon: FunctionComponent<ClickableChainIconProps> = ({
  color,
  addr,
}) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(addr);
  };

  return addr && Number(addr) !== 0 ? (
    <div className={styles.network}>
      <StarknetIcon width="20" height="20" color={color ? color : "#402D28"} />
      <p>{minifyAddress(addr)}</p>
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
