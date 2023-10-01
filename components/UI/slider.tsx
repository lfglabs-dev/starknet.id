import React, { ChangeEvent, FunctionComponent } from "react";
import styles from "../../styles/components/slider.module.css";

// Allow custom css properties (custom css variables)
declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

type SliderProps = {
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
};

const Slider: FunctionComponent<SliderProps> = ({
  value,
  onChange,
  min,
  max,
}) => {
  return (
    <div className={styles.slider}>
      <input
        name="directReferrals"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(e)}
        style={{
          "--progress": value / max,
        }}
      />
      <label htmlFor="directReferrals">
        {value.toString().padStart(max.toString().length, "0")}
      </label>
    </div>
  );
};

export default Slider;
