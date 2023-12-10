/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState, FunctionComponent } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import styles from "../styles/navbar.module.css";
import Button from "./button";
import theme from "../styles/theme";
import { CDNImg } from "./cdn/image";
import CloseFilledIcon from "./icons/closeFilledIcon";

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
              className={styles.starknetIdLogo}
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
          nav
            ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/10 z-10"
            : ""
        }
      >
        <div
          className={`fixed left-0 top-0 w-full sm:w-[60%] lg:w-[45%] h-screen bg-background px-5 ease-in flex justify-between flex-col overflow-auto
              ${nav ? styles.mobileNavbarShown : styles.mobileNavbarHidden}`}
        >
          <div className="h-full flex flex-col">
            <div className="flex w-full items-center justify-between">
              <div>
                <Link href="/" className="cursor-pointer">
                  <CDNImg
                    className="cursor-pointer"
                    src="/visuals/StarknetIdLogo.png"
                    alt="Starknet.id Logo"
                    width={72}
                    height={72}
                  />
                </Link>
              </div>

              <div
                onClick={handleNav}
                className="cursor-pointer p-1 rounded-full"
              >
                <CloseFilledIcon
                  width="32"
                  color={theme.palette.background.default}
                />
              </div>
            </div>
            <div className="py-4 my-auto text-center font-extrabold">
              <div>
                <ul className="uppercase">
                  <li className={styles.menuItemSmall} onClick={handleNav}>
                    <a
                      href="https://app.starknet.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Domains
                    </a>
                  </li>
                  <li className={styles.menuItemSmall} onClick={handleNav}>
                    <a
                      href="https://docs.starknet.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Documentation
                    </a>
                  </li>
                  <li className={styles.menuItemSmall} onClick={handleNav}>
                    <a
                      href="/affiliates/individual-program"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Affiliation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center my-4 w-full">
            <Button onClick={() => window.open("https://app.starknet.id/")}>
              Launch App
            </Button>

            <div className="flex">
              <div className="rounded-full shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 mt-2">
                <Link href="https://twitter.com/Starknet_id" target="_blank">
                  <FaTwitter size={28} color={theme.palette.grey[800]} />
                </Link>
              </div>
              <div className="rounded-full shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 mt-2">
                <Link
                  href="https://discord.com/invite/8uS2Mgcsza"
                  target="_blank"
                >
                  <FaDiscord size={28} color={theme.palette.grey[800]} />
                </Link>
              </div>
              <div className="rounded-full shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 mt-2">
                <Link href="https://github.com/starknet-id" target="_blank">
                  <FaGithub size={28} color={theme.palette.grey[800]} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
