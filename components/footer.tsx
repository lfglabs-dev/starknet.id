/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from "react";
import styles from "../styles/footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.fifthLeavesGroup}>
        <img width={"100%"} alt="leaf" src="/leaves/leavesGroup02.svg" />
      </div>
      <div className={styles.sixthLeavesGroup}>
        <img width={"100%"} alt="leaf" src="/leaves/leavesGroup01.svg" />
      </div>
      <div className="my-4">
        Powered by&nbsp;<strong>Starknet</strong>
      </div>
      <div className="flex text-s">
        <a className="underline" href="/pdfs/PrivacyPolicy.pdf">
          Privacy policy
        </a>
        &nbsp;-&nbsp;
        <a className="underline" href="/pdfs/Terms.pdf">
          Terms of use
        </a>
      </div>
    </footer>
  );
};

export default Footer;
