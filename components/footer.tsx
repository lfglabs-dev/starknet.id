/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from "react";
import styles from "../styles/footer.module.css";
import ScrollUp from "./scrollUp";

const Footer: FunctionComponent = () => {
  return (
    <>
      <footer className={styles.footer}>
        <ScrollUp />
        <div className="mb-4">
          Powered by&nbsp;<strong>Starknet</strong>
        </div>
        <div className="flex text-s">
          <a
            className="underline"
            href="/pdfs/PrivacyPolicy.pdf"
            target="_blank"
          >
            Privacy policy
          </a>
          &nbsp;-&nbsp;
          <a className="underline" href="/pdfs/Terms.pdf" target="_blank">
            Terms of use
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
