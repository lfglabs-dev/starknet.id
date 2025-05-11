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
  // States to manage animation sequencing
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Sequential animation using setTimeout:
    // Title appears first, followed by subtitle, then button
    const titleTimer = setTimeout(() => setShowTitle(true), 100); // ~100ms after mount
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 700); // ~600ms after title
    const buttonTimer = setTimeout(() => setShowButton(true), 1400); // ~700ms after subtitle

    // Clear timers if component unmounts early
    return () => {
      clearTimeout(titleTimer);
      clearTimeout(subtitleTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div className={styles.headerContent}>
      {/* Title Animation */}
      <h2
        className={`${styles.mainTitle} ${showTitle ? styles.animateTitle : ""}`}
        aria-live="polite"
      >
        {title} <strong>{highlighted}</strong>
      </h2>
      {/* Description Paragraph for Desktop */}
      <p
        className={`${styles.mainSubtitle} ${showSubtitle ? styles.animateSubtitle : ""}`}
        aria-live="polite"
      >
        {subtitle}
      </p>
      {/* Description Paragraph for Mobile View */}
      <p
        className={`${styles.mainSubtitleMobile} ${showSubtitle ? styles.animateSubtitle : ""}`}
        aria-live="polite"
      >
        {mobileSubtitle}
      </p>
      {/* Button Reveal */}
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
