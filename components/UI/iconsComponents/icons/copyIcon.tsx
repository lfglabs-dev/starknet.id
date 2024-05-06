import React, { FunctionComponent } from "react";
import { IconProps } from "../../../../types/frontTypes";

const CopyIcon: FunctionComponent<IconProps> = ({ color, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 16 17"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.45055 13.173V5.76972C3.50715 4.99997 4.12295 3.44687 6.13338 3.39253C8.1438 3.3382 10.2765 3.36989 11.0915 3.39253C11.3632 3.40385 11.9201 3.43329 11.9745 3.46046C12.0424 3.49442 11.4311 2.00018 9.90292 2.00018H5.42022C4.31086 1.98886 2.09215 2.50279 2.09215 4.64905V11.2712C2.08083 11.6335 2.33666 12.5209 3.45055 13.173ZM4.76419 10.3794V6.98338C4.69627 6.19099 5.78842 4.60619 7.5 4.60619H11.8958C13.5 4.60618 13.8994 5.00013 13.8994 6.98338V12.7905C13.9107 13.5263 13.4783 14.9979 11.6581 14.9979H6.8018C6.09996 15.0319 4.69629 14.6583 4.69629 12.8924C4.69629 11.1265 4.74156 10.4812 4.76419 10.3794Z"
        fill={color}
      />
    </svg>
  );
};

export default CopyIcon;
