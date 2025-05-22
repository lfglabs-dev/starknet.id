import React, { FunctionComponent, useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import Button from "../button";

type HeaderSectionProps = {
  title: string;
  highlighted: string;
  subtitle: string;
  mobileSubtitle: string;
  buttonName: string;
  buttonLink: string;
};

const HeaderSection: FunctionComponent<HeaderSectionProps> = ({
  title,
  highlighted,
  subtitle,
  mobileSubtitle,
  buttonName,
  buttonLink,
}) => {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowTitle(true), 100),
      setTimeout(() => setShowSubtitle(true), 700),
      setTimeout(() => setShowButton(true), 1400),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className={styles.headerContent}>
      <h2 className={styles.mainTitle} aria-live="polite">
        <span className={styles.mainTitleLine}>
          {showTitle && <span className={styles.mainTitleText}>{title}</span>}
        </span>
        <span className={styles.mainTitleLine}>
          {showTitle && (
            <strong
              className={`${styles.mainTitleText} ${styles.highlightedText}`}
            >
              {highlighted}
            </strong>
          )}
        </span>
      </h2>

      <p
        className={`${styles.mainSubtitle} ${showSubtitle ? styles.animateSubtitle : ""}`}
        aria-live="polite"
      >
        {subtitle}
      </p>

      <p
        className={`${styles.mainSubtitleMobile} ${showSubtitle ? styles.animateSubtitle : ""}`}
        aria-live="polite"
      >
        {mobileSubtitle}
      </p>

      <div
        className={`${styles.buttonContainer} ${showButton ? styles.animateButton : ""}`}
      >
        <Button onClick={() => window.open(buttonLink, "_blank")} aria-label={buttonName}>
          {buttonName}
        </Button>
      </div>
    </div>
  );
};

export default HeaderSection;
