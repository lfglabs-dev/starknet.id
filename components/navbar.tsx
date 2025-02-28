/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState, FunctionComponent } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import styles from "../styles/navbar.module.css";
import Button from "./button";
import theme from "../styles/theme";
import CloseFilledIcon from "./UI/iconsComponents/icons/closeFilledIcon";
import Image from "next/image";

const Navbar: FunctionComponent = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 z-[100] bg-background">
      <div className="flex justify-between items-center w-full h-full px-8 2xl:px-16">
        <div className="ml-4">
          <Link href="/" className={styles.starknetIdLogo}>
            <Image
              src="/visuals/StarknetIdLogo.svg"
              alt="Starknet.id Logo"
              width={30.5}
              height={30.5}
            />
            <span className="hidden sm:block tracking-wide text-[18px] whitespace-nowrap text-nowrap">
              STARKNET ID
            </span>
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex items-center gap-7">
            <Link href="/affiliates/individual-program">
              <li className={styles.menuItem}>Become an affiliate</li>
            </Link>

            <li
              onClick={() => window.open("https://docs.starknet.id/")}
              className={styles.menuItem}
            >
              Documentation
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
            <div className={styles.mobileNavBarHeader}>
              <div className="w-full">
                <Link href="/" className={styles.starknetIdLogo}>
                  <Image
                    src="/visuals/StarknetIdLogo.svg"
                    alt="Starknet.id Logo"
                    width={30.5}
                    height={30.5}
                  />
                  <span className="hidden sm:block tracking-wide text-[18px] whitespace-nowrap text-nowrap">
                    STARKNET ID
                  </span>
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
                    <Link
                      href="https://app.starknet.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get a domain
                    </Link>
                  </li>
                  <li className={styles.menuItemSmall} onClick={handleNav}>
                    <Link
                      href="https://docs.starknet.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li className={styles.menuItemSmall} onClick={handleNav}>
                    <Link
                      href="/affiliates/individual-program"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Become an affiliate
                    </Link>
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
