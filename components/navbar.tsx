/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState, FunctionComponent } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import styles from "../styles/navbar.module.css";
import Button from "./button";
import theme from "../styles/theme";
import { CDNImg } from "./cdn/image";

const Navbar: FunctionComponent = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 z-[100] bg-background">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="ml-4">
          <Link href="/" className="cursor-pointer">
            <CDNImg
              className="cursor-pointer"
              src="/visuals/StarknetIdLogo.png"
              alt="Starknet.id Logo"
              width={90}
              height={90}
            />
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex uppercase items-center">
            {/* <Link href="/affiliates/individual-program">
              <li className={styles.menuItem}> Become an affiliate</li>
            </Link> */}

            <li
              onClick={() => window.open("https://docs.starknet.id/")}
              className={styles.menuItem}
            >
              Documentation
            </li>
            <li
              onClick={() => window.open("https://twitter.com/starknet_id")}
              className="ml-10 mr-5 text-sm uppercase cursor-pointer"
            >
              <FaTwitter color={theme.palette.secondary.main} size="30px" />
            </li>
            <li
              onClick={() =>
                window.open("https://discord.com/invite/8uS2Mgcsza")
              }
              className="mr-10 text-sm uppercase cursor-pointer"
            >
              <FaDiscord color={theme.palette.secondary.main} size="30px" />
            </li>
            <div className="mr-5">
              <Button onClick={() => window.open("https://app.starknet.id")}>
                Launch App
              </Button>
            </div>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu
              color={theme.palette.secondary.main}
              size={25}
              className="mr-3"
            />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/10" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-background p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div className="">
                <Link href="/">
                  <CDNImg
                    src="/visuals/StarknetIdLongLogo.png"
                    alt="Starknet.id Logo"
                    width={250}
                    height={100}
                  />
                </Link>
              </div>

              <div onClick={handleNav} className="rounded-fullcursor-pointer">
                <AiOutlineClose color={theme.palette.secondary.main} />
              </div>
            </div>
            <div className="border-b border-tertiary-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-babe-blue">
                Own your on-chain identity
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase text-babe-blue">
              {/* <Link href="/affiliates/individual-program">
                <li
                  onClick={() => setNav(false)}
                  className={styles.menuItemSmall}
                >
                  Become an affiliate
                </li>
              </Link> */}
              <Link href="https://docs.starknet.id">
                <li
                  onClick={() => setNav(false)}
                  className={styles.menuItemSmall}
                >
                  Documentation
                </li>
              </Link>
            </ul>
            <div className="pt-40 flex flex-col justify-start">
              <p className="uppercase tracking-widest white">
                Your starknet passport
              </p>
              <div className="flex items-center justify-start my-1 w-full sm:w-[80%]">
                <div className="rounded-full shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://twitter.com/Starknet_id">
                    <FaTwitter size={20} color={theme.palette.secondary.main} />
                  </Link>
                </div>
                <div className="rounded-full shadow-gray-400  cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://discord.com/invite/8uS2Mgcsza">
                    <FaDiscord size={20} color={theme.palette.secondary.main} />
                  </Link>
                </div>
              </div>
              <div className="self-start">
                <Button onClick={() => window.open("https://app.starknet.id/")}>
                  Launch App
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
