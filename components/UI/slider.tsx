import React, { FunctionComponent, useEffect, useState } from "react";
import styles from "../../styles/components/slider.module.css";

// Allow custom css properties (custom css variables)
declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

type SliderProps = {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
};

const computeValueWithUnit = (value) => {
  if (value >= 1000) return Math.round(value / 1000) + "K";
  return value;
};

const renderValue = (value) => {
  return computeValueWithUnit(value).toString();
};
const Slider: FunctionComponent<SliderProps> = ({
  value,
  onChange,
  min,
  max,
  step = 1,
}) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const range = max - min;

  useEffect(() => {
    // If the range is greater than 1000, we want to use an increasing exponential scale
    // to make the slider more user friendly
    let value = selectedValue;
    if (range >= 1000) {
      const logValue = Math.E ** (((value - range) / range) * 5);
      value = Math.ceil(logValue * selectedValue);
    }
    onChange(value);
  }, [selectedValue, range]);

  return (
    <div className={styles.slider}>
      <input
        name="directReferrals"
        type="range"
        min={min}
        max={max}
        step={step}
        onChange={(e) => setSelectedValue(e.target.valueAsNumber)}
        style={{
          "--progress": selectedValue / max,
        }}
        value={selectedValue}
      />
      <label htmlFor="directReferrals">{renderValue(value)}</label>
    </div>
  );
};

export default Slider;
