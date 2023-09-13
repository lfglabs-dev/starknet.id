import React, { FunctionComponent } from "react";
import { IconProps } from "../../types";

const AvnuIcon: FunctionComponent<IconProps> = ({ color, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 574 131"
      enableBackground="new 0 0 574 131"
      xmlSpace="preserve"
    >
      <path
        d="m134.46 7.45 60.19 113.61h14.93L269.77 7.45h-15.09l-52.4 98.84-52.4-98.84h-15.42zm264.03 0v93.65L305.85 7.45h-14.76v113.61h13.3V24.81l95.4 96.25h12.01V7.45h-13.31zm154.84 0v59.24c0 27.92-16.71 45.12-46.24 45.12-29.69 0-46.4-17.2-46.4-45.12V7.45h-13.63V67.5c0 33.11 20.93 56.97 60.03 56.97s59.87-23.86 59.87-56.97V7.45h-13.63zM140.39 120.69 80.18 7.45H65.24L5.03 120.69h15.09l52.42-98.52 52.42 98.52h15.43z"
        fill={color}
      />
    </svg>
  );
};

export default AvnuIcon;
