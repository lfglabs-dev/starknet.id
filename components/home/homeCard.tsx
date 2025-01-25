import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";
import { CDNImg } from "../cdn/image";

type HomeCardProps = {
  img: string;
  title: string;
  description: string;
  numb: string
};

const HomeCard: FunctionComponent<HomeCardProps> = ({
  img,
  title,
  description,
  numb
}) => {
  return (
    <div className="w-full bg-green-400 max-w-[864px]  flex items-center justify-between flex-wrap m-4 mb-12 p-12 pl-6 text-left text-inherit no-underline rounded-lg transition-all duration-150 ease-in-out bg-background-light shadow-shadow z-10 ">
      <div className="min-w-[300px] flex-1 basis-1/2  bg-blue-700" >
        <h2 >{numb}</h2>
        <h1 className={styles.thirdTitle}>{title}</h1>
        <p className={styles.cardDescription}>{description}</p>

      </div>
      <div className="flex justify-center lg:justify-end min-w-[300px] flex-1 basis-1/2 bg-blue-700" >
      <CDNImg
          className={styles.homeCardBanner}
          alt="illustration"
          height={300}
          width={300}
          src={img}
        />
      </div>
    </div>
  );
};

export default HomeCard;
