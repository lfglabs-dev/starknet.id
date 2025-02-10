import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";
import Button from "../button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

type HeaderSectionProps = {
  title: string;
  highlighted: string;
  buttonLink: string;
};

const HeaderSection: FunctionComponent<HeaderSectionProps> = ({
  title,
  highlighted,
  buttonLink,
}) => {
  return (
    <div className={styles.headerContent}>
      <p className="text-center  lg:text-left">
         {title}
      </p>
      <h2 className={styles.mainTitle}>
         <strong>{highlighted}</strong>
      </h2>

      <div className="flex flex-col sm:flex-row sm:w-[60%]  md:w-[50%]  bg-stone-300 px-4 py-2 rounded-lg text-sm font-medium mt-5">
      
        <div className="flex items-center mb-4 sm:mb-0 sm:pr-3">
          <FontAwesomeIcon icon={faCheckCircle} className="text-secondary w-5 h-5" />
          <span className="ml-3">Simple Steps</span>
        </div>
        
        <span className="hidden sm:block">|</span>
        
        <div className="flex items-center sm:pl-3">
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-secondary">
            <FontAwesomeIcon icon={faDollarSign} className="text-white w-3 h-3" />
          </div>
          <span className="pl-3">Big Gains!</span>
        </div>
      </div>


      <p className={styles.mainSubtitle}>
        Partner with us and <span className="font-bold text-green-600">Earn ETH</span> while promoting stark domains.
      </p>
      <p className={styles.mainSubtitleMobile}>
        Partner with us and <span className="font-bold text-green-600">Earn ETH</span> while promoting stark domains.
      </p>

      <div className={styles.buttonContainer}>
        <Button onClick={() => window.open(buttonLink, "_blank")}>
          <div className="flex">
            <p>START EARNING NOW</p>
            <div>
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 mt-[5px] pl-[10px]" />
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
};
export default HeaderSection;
