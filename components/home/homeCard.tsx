import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";
import { CDNImg } from "../cdn/image";

type HomeCardProps = {
  img: string;
  title: string;
  description: string;
};

const HomeCard: FunctionComponent<HomeCardProps> = ({
  img,
  title,
  description,
}) => {
  return (
    <div className={styles.card}>
      <div className="flex justify-center">
        <CDNImg alt="illustration" height={300} width={300} src={img} />
      </div>
      <h2 className={styles.thirdTitle}>{title}</h2>
      <div className="text-md max-w-3xl mt-4 sm:mt-10">
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
