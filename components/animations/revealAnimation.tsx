import { useEffect } from "react";
import styles from "../../styles/components/revealanimation.module.css";

export default function RevealAnimation({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onFinish(); 
    }, 800);

    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <div className={styles.curtain}>
      <div className={styles.progressBar} />
    </div>
  );
}