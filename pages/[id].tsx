import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../styles/Profile.module.css";
import { useTokenIdFromDomain } from "../hooks/naming";
import Soulbound from "../components/soulbound";
import ClickableTwitterIcon from "../components/clickable/clickableTwitterIcon";
import ClickableGithubIcon from "../components/clickable/clickableGithubIcon";
import ClickableDiscordIcon from "../components/clickable/clickableDiscordIcon";
import ClickableStarknetIcon from "../components/clickable/clickableStarknetIcon";
import Activity from "../components/activity";
import { ThreeDots } from "react-loader-spinner";
import { BN } from "bn.js";

export type Identity = {
  id: string;
  addr: string;
  domain: string;
  domain_expiry: string;
  is_owner_main: Boolean;
  error?: string;
  hexAddr?: string;
};

const dataTest = [
  {
    tokenId: "1",
    imageUri:
      "ipfs://bafybeidshkkyv7ta4sph6am7bn6usgxmn5e7mcw3af2kknayrlqcowcsfa/373.jpg",
    name: "test",
    description: "test",
  },
  {
    tokenId: "2",
    imageUri: "ipfs://QmPBFN6oHb8vZzYNnZyjaH34XqezbBRJLdrXhk4wmCMSMy/963.gif",
    name: "test2",
    description: "test",
  },
  {
    tokenId: "3",
    imageUri: "ipfs://Qmba4N9uddmBPpZrvYvaf384qfXWKpHFFtERWc6mLUoRXK/76.png",
    name: "test3",
    description: "test",
  },
];

const activityTest = [
  {
    type: "briq",
    description: "listed #123 from Pxls for 0.04 eth on 30 dec 2022",
    timestamp: "test",
  },
  {
    type: "mintsquare",
    timestamp: "test2",
    description: "listed #123 from Pxls for 0.04 eth on 30 dec 2022",
  },
  {
    type: "briq",
    timestamp: "test3",
    description: "listed #123 from Pxls for 0.04 eth on 30 dec 2022",
  },
];

const Profile: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [initProfile, setInitProfile] = useState(false);
  const [identity, setIdentity] = useState<Identity>();

  useEffect(() => {
    setInitProfile(false);
  }, [router]);

  useEffect(() => {
    if (id?.toString().toLowerCase().endsWith(".stark")) {
      useTokenIdFromDomain(id?.toString().replace(".stark", "")).then(
        (tokenId) => {
          fetch(
            `https://app.starknet.id/api/indexer/id_to_data?id=${tokenId.tokenId?.["owner"]}`
          )
            .then((response) => response.json())
            .then((data: Identity) => {
              console.log("data fetched", data);
              if (data.error) {
                return;
              }
              setIdentity({
                ...data,
                id: tokenId.tokenId?.["owner"],
                hexAddr: parseInt(data.addr).toString(16),
              });
              setInitProfile(true);
            });
        }
      );
    } else if (!isNaN(parseInt(id as string))) {
      fetch(`https://app.starknet.id/api/indexer/id_to_data?id=${id}`)
        .then((response) => response.json())
        .then((data: Identity) => {
          if (data.error) {
            return;
          }
          setIdentity({
            ...data,
            id: id as string,
            hexAddr: parseInt(data.addr).toString(16),
          });
          setInitProfile(true);
        });
    } else {
    }
  }, [id]);

  return initProfile && identity ? (
    <div className={styles.container}>
      <div className={styles.firstLeaf}>
        <img alt="leaf" src="/leaves/leaf_2.png" />
      </div>
      <div className={styles.secondLeaf}>
        <img alt="leaf" src="/leaves/leaf_3.png" />
      </div>
      <div className={styles.thirdLeaf}>
        <img alt="leaf" src="/leaves/leaf_1.png" />
      </div>
      <div className={styles.fourthLeaf}>
        <img alt="leaf" src="/leaves/leaf_2.png" />
      </div>
      <div className="flex flex-col items-center justify-center text min-h-screen mx-10">
        <div className={styles.section1}>
          <div className={styles.pfp}>
            <img
              src={`/api/identicons/${identity?.id}`}
              height={200}
              width={200}
              alt="identicon"
            />
          </div>
          <h2
            className={
              "sm:text-5xl text-4xl my-5 break-all mx-3 " + styles.title
            }
          >
            {identity?.domain ? identity?.domain : identity?.id}
          </h2>
          <div className={styles.elemContainer}>
            <ClickableStarknetIcon
              width="20"
              color="#402D28"
              addr={identity?.hexAddr as string}
            />
          </div>
          <div className={styles.elemContainer}>
            <ClickableTwitterIcon
              width="20"
              color="#7289da"
              tokenId={identity?.id as string}
              domain={identity?.domain as string}
            />
            <ClickableGithubIcon
              width="20"
              color="black"
              tokenId={identity?.id as string}
              domain={identity?.domain as string}
            />
            <ClickableDiscordIcon
              width="20"
              color="#7289da"
              tokenId={identity?.id as string}
              domain={identity?.domain as string}
            />
          </div>
        </div>

        <div className={styles.section1}>
          <h2
            className={
              "sm:text-5xl text-4xl my-5 break-all mx-3 " + styles.title
            }
          >
            {" "}
            NFTs & Soulbound tokens
          </h2>
          <div className={styles.SbtContainer}>
            {dataTest.map((item, index) => {
              return <Soulbound {...item} key={index} />;
            })}
          </div>
        </div>

        <div className={styles.section1}>
          <h2
            className={
              "sm:text-5xl text-4xl my-5 break-all mx-3 " + styles.title
            }
          >
            Activity
          </h2>
          <div className={styles.activityContainer}>
            {activityTest.map((item, index) => {
              return <Activity {...item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <ThreeDots
      wrapperClass="flex justify-center"
      height="100"
      width="100"
      radius="9"
      color="#19AA6E"
      ariaLabel="three-dots-loading"
      visible={true}
    />
  );
};

export default Profile;
