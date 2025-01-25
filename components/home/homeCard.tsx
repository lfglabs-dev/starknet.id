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
    <div className="w-full bg-white max-w-[864px]  flex items-stretch justify-between flex-wrap m-4 mb-12  text-left text-inherit no-underline rounded-lg shadow-xl transition-all duration-150 ease-in-out bg-background-light z-10 ">
      <div className="min-w-[300px] flex flex-col gap-4 px-3 py-10 lg:pl-12 flex-1 basis-1/2 text-left " >
        <h2 className="text-[#fff] bg-[#402D28] w-7 h-6 p-2 rounded-md text-sm font-medium text-center flex items-center justify-center " >{numb}</h2>
        <h1 className="text-xl font-bold text-[#454545] " >{title}</h1>
        <p className="text-[#8C8989] text-xs font-normal " >{description}</p>

      </div>
      <div className="flex justify-center lg:justify-end min-w-[300px] flex-1 basis-1/2 " >
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
