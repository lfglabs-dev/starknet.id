import React, { FunctionComponent } from "react";
import styles from "../../../styles/components/titles.module.css";

type CategoryTitleProps = {
  title: string;
  subtitle: string;
  mobileTitle?: string;
};

const CategoryTitle: FunctionComponent<CategoryTitleProps> = ({
  title,
  subtitle,
  mobileTitle = title,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.categorySubtitle}>{subtitle}</p>
      <h2 className={styles.categoryTitle}>{title}</h2>
      <p className={styles.categoryTitleMobile}>{mobileTitle}</p>
    </div>
  );
};

export default CategoryTitle;
