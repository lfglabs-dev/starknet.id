import React, { FunctionComponent } from "react";
import { IconProps } from "../../../../types/frontTypes";

const ArrowUpIcon: FunctionComponent<IconProps> = ({ width, color }) => {
  return (
    <svg
      width={width}
      height={width}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 15.75l7.5-7.5 7.5 7.5"
      />
    </svg>
  );
};

export default ArrowUpIcon;
