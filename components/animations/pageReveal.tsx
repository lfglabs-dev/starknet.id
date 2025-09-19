import React, { useEffect, useState } from "react";
import styles from "../../styles/components/pageReveal.module.css";

type PageRevealProps = {
  children: React.ReactNode;
};

const PageReveal: React.FunctionComponent<PageRevealProps> = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Animation duration matches CodePen: 2000ms + 100ms buffer
    const animationTime = 2000;
    const buffer = 100;

    const timer = setTimeout(() => {
      setIsAnimating(false);
      setShowContent(true);
    }, animationTime + buffer);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isAnimating && (
        <div className={styles.curtain}>
          <div className={styles.progressBar}></div>
        </div>
      )}
      <div
        className={`${styles.pageContent} ${showContent ? styles.visible : ''}`}
      >
        {children}
      </div>
    </>
  );
};

export default PageReveal;