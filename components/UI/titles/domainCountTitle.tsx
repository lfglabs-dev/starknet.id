import React, { FunctionComponent, ReactNode } from "react";
import styles from "../../../styles/components/titles.module.css";
import Counter from "../../home/counterComponent";

type CategoryTitleProps = {
  subtitle: string;
  button: ReactNode;
};

const DomainCountTitle: FunctionComponent<CategoryTitleProps> = ({
  subtitle,
  button,
}) => {
  return (
    <div className={styles.domainCountTitleContainer}>
      <Counter />
      <p className={styles.domainCountSubtitle}>{subtitle}</p>
     {button}
    </div>
  );
};

export default DomainCountTitle;
