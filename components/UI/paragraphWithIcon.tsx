import React, { FunctionComponent } from "react";
import styles from "../../styles/components/paragraphWithIcon.module.css";

type ParagraphWithIconProps = {
  icon: string;
  title: string;
  description: string;
};

const ParagraphWithIcon: FunctionComponent<ParagraphWithIconProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className={styles.container}>
      <img src={icon} alt={title} className={styles.icon} />
      <div className={styles.paragraph}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ParagraphWithIcon;
