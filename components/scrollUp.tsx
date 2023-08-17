import { FunctionComponent } from "react";
import styles from "../styles/components/scrollUp.module.css";
import ArrowUpIcon from "./UI/iconsComponents/icons/arrowUpIcon";

const ScrollUp: FunctionComponent = () => {
  return (
    <div
      className={styles.container}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUpIcon width={"20"} />
      <p className={styles.text}>SCROLL UP</p>
    </div>
  );
};

export default ScrollUp;
