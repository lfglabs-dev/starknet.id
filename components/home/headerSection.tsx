import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";
import Button from "../button";

type HeaderSectionProps = {
  title: string;
  highlighted: string;
  subtitle: string;
  buttonName: string;
  buttonLink: string;
};

const HeaderSection: FunctionComponent<HeaderSectionProps> = ({
  title,
  highlighted,
  subtitle,
  buttonName,
  buttonLink,
}) => {
  return (
    <div className={styles.headerContent}>
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
export default HeaderSection;
