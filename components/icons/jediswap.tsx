import React, { FunctionComponent } from "react";
import { IconProps } from "../../types/frontTypes";

const JediswapIcon: FunctionComponent<IconProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height ? height : width}
      viewBox="0 0 670 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M289.086 273.464L263.013 326.607H386.6L414.217 273.462L289.086 273.464Z"
        fill="#2AAAFD"
      />
      <path
        d="M454.787 369.078L440.468 396.855H184.047L158 450H413.844L413.894 449.903L519.23 449.807L454.787 369.078Z"
        fill="#2AAAFD"
      />
      <path
        d="M264.13 150L158.073 150.096L222.514 230.823L236.738 203.193H491.526L519.158 150.048H264.082L264.13 150Z"
        fill="#2AAAFD"
      />
    </svg>
  );
};

export default JediswapIcon;
