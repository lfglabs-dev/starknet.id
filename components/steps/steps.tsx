import React, { FunctionComponent } from "react";
import styles from "../../styles/components/steps.module.css";
import StepElement from "./stepElement";

type StepsProps = {
  steps: Step[];
};

const Steps: FunctionComponent<StepsProps> = ({ steps }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {steps.map((step, index) => (
          <StepElement
            index={index}
            step={step}
            key={"step_" + index}
            steps={steps}
          />
        ))}
      </div>
    </div>
  );
};

export default Steps;
