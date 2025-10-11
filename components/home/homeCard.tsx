import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

type HomeCardProps = {
  img: string;
  title: string;
  description: string;
  numb?: string;
  mobileimg: string;
};

const HomeCard: FunctionComponent<HomeCardProps> = ({
  img,
  title,
  description,
  numb,
  mobileimg,
}) => {
  return (
    <div className="w-full overflow-hidden bg-white max-w-[864px]  flex items-stretch justify-between flex-wrap mt-2 mb-2  text-left text-inherit no-underline rounded-xl shadow-custom  transition-all duration-150 ease-in-out bg-background-light z-10">
      <div className="min-w-[300px] flex flex-col items-center lg:items-start gap-4 px-3 py-10 lg:pl-12 flex-1 lg:basis-1/2 text-center lg:text-left ">
        {numb !== undefined && (
          <h2 className="text-[#fff] bg-[#402D28] w-7 h-6 p-2 rounded-md text-sm font-medium text-center flex items-center justify-center ">
            {numb}
          </h2>
        )}
        <h1
          className="text-xl  text-[#454545] card-title "
          style={{
            textShadow: "none",
            fontFamily: "'Poppins-Regular', sans-serif",
            fontWeight: "bold",
          }}
        >
          {title}
        </h1>
        <p className="text-[#8C8989] text-xs leading-5 font-normal  ">
          {description}
        </p>
      </div>
      <div className=" justify-center hidden  lg:flex items-center lg:items-stretch lg:justify-end min-w-[300px] lg:flex-1 lg:basis-1/2">
        <Image
          className={`  object-cover ${styles.homeCardBanner}`}
          alt="illustration"
          height={300}
          width={300}
          src={img}
        />
      </div>
      <div className="w-full flex items-center justify-center lg:hidden lg:flex-1 lg:basis-1/2">
        <Image
          className={`object-cover lg:hidden ${styles.homeCardBanner}`}
          alt="illustration"
          height={358}
          width={300}
          src={mobileimg}
        />
      </div>
    </div>
  );
};

export default HomeCard;
