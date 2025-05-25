import { useEffect, useState } from "react";
import styles from "../../styles/components/revealanimation.module.css";

export default function RevealAnimation() {
  const [fadeOut, setFadeOut] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const startFade = setTimeout(() => {
      setFadeOut(true);
    }, 800); 

    const remove = setTimeout(() => {
      setHide(true);
    }, 1000);

    return () => {
      clearTimeout(startFade);
      clearTimeout(remove);
    };
  }, []);

  if (hide) return null;

  return (
    <div className={`${styles.curtain} ${fadeOut ? styles.fadeOut : ""}`}>
      <div className={styles.progressBar} />
    </div>
  );
}