import VerticalBar from "../shapes/verticalBar";
import OnScrollIntoView from "../animations/onScrollIntoView";
import styles from "../../styles/components/steps.module.css";
import React, { FunctionComponent } from "react";

type StepElementProps = {
  index: number;
  step: Step;
  steps: Step[];
};

const StepElement: FunctionComponent<StepElementProps> = ({
  index,
  step,
  steps,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.barsContainer}>
        <img alt="Card Icon" className={styles.icon} src={step.icon} />
      </div>
      <OnScrollIntoView animation="slideInFromTop">
        <div key={"step_card_" + index} className={styles.card}>
          {index !== steps.length - 1 && (
            <div className={styles.verticalBarContainer}>
              <VerticalBar />
            </div>
          )}
          <div className={styles.content}>
            <h3 key={`step_${index}_title`} className={styles.title}>
              {step.title}
            </h3>
            {step.content}
          </div>
          <img alt="Card banner" className={styles.banner} src={step.banner} />
        </div>
      </OnScrollIntoView>
    </div>
  );
};

export default StepElement;
