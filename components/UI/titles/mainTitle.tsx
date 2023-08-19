import React, { FunctionComponent } from "react";
import styles from "../../../styles/components/titles.module.css";
import Button from "../../button";

type MainTitleProps = {
  title: string;
  highlighted: string;
  subtitle: string;
  buttonName: string;
  buttonLink: string;
};

const MainTitle: FunctionComponent<MainTitleProps> = ({
  title,
  highlighted,
  subtitle,
  buttonName,
  buttonLink,
}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>
        {title} <strong>{highlighted}</strong>
      </h2>
      <p className={styles.mainSubtitle}>{subtitle}</p>
      <div className={styles.buttonContainer}>
        <Button onClick={() => window.open(buttonLink, "_blank")}>
          {buttonName}
        </Button>
      </div>
    </div>
  );
};
export default MainTitle;
