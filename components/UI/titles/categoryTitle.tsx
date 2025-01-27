import React, { FunctionComponent } from "react";
import styles from "../../../styles/components/titles.module.css";

type CategoryTitleProps = {
  title: string;
};

const CategoryTitle: FunctionComponent<CategoryTitleProps> = ({ title }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.categoryTitle}>{title}</h2>
    </div>
  );
};

export default CategoryTitle;
