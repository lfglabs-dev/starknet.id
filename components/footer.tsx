/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from "react";
import styles from "../styles/footer.module.css";
import ScrollUp from "./scrollUp";
import { Parallax } from "react-scroll-parallax";
import { CDNImg } from "./cdn/image";

const Footer: FunctionComponent = () => {
  return (
    <>
      <Parallax speed={-20}>
        <CDNImg
          src="/leaves/lilLeaf02.svg"
          alt="leaf"
          className="absolute right-10 mr-16"
          width={20}
          height={20}
        />
      </Parallax>
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
