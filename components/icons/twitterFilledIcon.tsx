import React, { FunctionComponent } from "react";
import { IconProps } from "../../types/frontTypes";

const TwitterFilledIcon: FunctionComponent<IconProps> = ({ width }) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" width="24" height="24" rx="6.93878" fill="black" />
      <path
        d="M15.9505 6.57666H17.7905L13.7705 11.1717L18.5 17.4232H14.797L11.897 13.6312L8.578 17.4232H6.737L11.037 12.5082L6.5 6.57716H10.297L12.9185 10.0432L15.9505 6.57666ZM15.305 16.3222H16.3245L9.743 7.62016H8.649L15.305 16.3222Z"
        fill="white"
      />
    </svg>
  );
};

export default TwitterFilledIcon;
