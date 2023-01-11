import React, { FunctionComponent } from "react";
import { IconProps } from "../../types";

const NostraIcon: FunctionComponent<IconProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height ? height : width}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_633_1154)">
        <rect width="512" height="512" rx="256" fill="#0A1326" />
        <path
          d="M97.28 291.84L225.28 217.6L97.28 143.36V291.84ZM256.006 235.429L97.28 327.68L256.006 419.84L414.72 327.68V143.36L256.006 235.429ZM253.44 112.64L181.76 156.16L256 199.68L330.24 156.16L253.44 112.64Z"
          fill="#FF4240"
        />
      </g>
      <defs>
        <clipPath id="clip0_633_1154">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NostraIcon;
