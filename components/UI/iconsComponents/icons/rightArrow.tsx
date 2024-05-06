import React, { FunctionComponent } from "react";
import { IconProps } from "../../../../types/frontTypes";

const RightArrow: FunctionComponent<IconProps> = ({ width, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
      width={width}
      height={width}
      fill="none"
    >
      <path
        d="M3.8652 16.9318C7.36822 17.237 15.0554 17.0589 18.4611 16.9318C17.6097 18.2033 15.8338 21.0517 15.5418 22.2724C15.1768 23.7983 17.0014 24.1798 17.7312 22.6539C18.461 21.128 22.475 18.0762 25.0292 16.5503C27.5835 15.0244 25.3941 13.1171 25.0292 13.1171C24.6643 13.1171 19.9207 10.0653 19.1909 8.15791C18.4612 6.25055 15.9068 5.10613 15.9068 7.39497C15.9068 9.6838 19.9207 12.7356 19.1909 13.1171C18.6071 13.4222 8.73051 13.4985 3.8652 13.4985C3.12196 13.4985 1.74984 13.711 1.74984 15.4573C1.74984 16.1649 2.41004 16.805 3.8652 16.9318Z"
        fill={color}
      />
    </svg>
  );
};

export default RightArrow;
