import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../styles/Profile.module.css";
import { fetchIdentity } from "../hooks/naming";
import Soulbound from "../components/soulbound";
import ClickableTwitterIcon from "../components/clickable/clickableTwitterIcon";
import ClickableGithubIcon from "../components/clickable/clickableGithubIcon";
import ClickableDiscordIcon from "../components/clickable/clickableDiscordIcon";
import ClickableStarknetIcon from "../components/clickable/clickableStarknetIcon";
import Activity from "../components/activity";
import { ThreeDots } from "react-loader-spinner";
import { BN } from "bn.js";
import { getLastBlockNumber, retrieveActivities } from "../utils/profile";
import { OpenInNew } from "@mui/icons-material";
import { SoulboundProps } from "../types";

export type Identity = {
  id: string;
  addr: string;
  domain: string;
  domain_expiry: string;
  is_owner_main: Boolean;
  error?: string;
  hexAddr?: string;
};

const Profile: NextPage = () => {
  const router = useRouter();
  const { idOrUsername } = router.query;
  const [initProfile, setInitProfile] = useState(false);
  const [identity, setIdentity] = useState<Identity>();
  const [activities, setActivities] = useState<any>();
  const [soulbounds, setSoulbounds] = useState<Array<SoulboundProps>>();
  const [notFound, setNotFound] = useState(false);
  const dynamicRoute = useRouter().asPath;

  useEffect(() => setNotFound(false), [dynamicRoute]);

  useEffect(() => {
    setInitProfile(false);
  }, [router]);

  useEffect(() => {
    if (idOrUsername?.toString().toLowerCase().endsWith(".stark")) {
      fetchIdentity(
        idOrUsername?.toString().replace(".stark", "") as string
      ).then((tokenId) => {
        if (Number(tokenId.tokenId?.["owner"]) === 0) {
          setNotFound(true);
          return;
        }
        fetch(
          `https://${process.env.NEXT_PUBLIC_APP_LINK}/api/indexer/id_to_data?id=${tokenId.tokenId?.["owner"]}`
        )
          .then((response) => response.json())
          .then((data: Identity) => {
            if (data.error) {
              setNotFound(true);
              return;
            }
            setIdentity({
              ...data,
              id: tokenId.tokenId?.["owner"],
              hexAddr: "0x0" + new BN(data.addr as string, 10).toString(16),
            });
            setInitProfile(true);
          });
      });
    } else if (!isNaN(parseInt(idOrUsername as string))) {
      fetch(
        `https://${process.env.NEXT_PUBLIC_APP_LINK}/api/indexer/id_to_data?id=${idOrUsername}`
      )
        .then((response) => response.json())
        .then((data: Identity) => {
          if (data.error) {
            setNotFound(true);
            return;
          }
          setIdentity({
            ...data,
            id: idOrUsername as string,
            hexAddr: "0x0" + new BN(data.addr as string, 10).toString(16),
          });
          setInitProfile(true);
        })
        .catch((err) => {
          setNotFound(true);
        });
    } else {
      setNotFound(true);
    }
  }, [idOrUsername]);

  useEffect(() => {
    // fetch Activity
    if (identity && identity.hexAddr && Number(identity.hexAddr) !== 0) {
      getLastBlockNumber().then((block) => {
        retrieveActivities(block as number, identity.hexAddr as string).then(
          (data) => {
            console.log("data", data?.activities);
            setActivities(data?.activities);
          }
        );
      });
    }
  }, [identity]);

  useEffect(() => {
    // Fetch soulbounds
    if (identity) {
      fetch(
        `https://${process.env.NEXT_PUBLIC_APP_LINK}/api/indexer/id_to_infts?id=${identity.id}`
      )
        .then((response) => response.json())
        .then((data: Array<SoulboundProps>) => {
          if (data.length === 0) return;
          setSoulbounds(data);
        });
    }
  }, [identity]);

  if (notFound) {
    return <h2 className={styles.notFound}>Profile not found</h2>;
  }

  return initProfile && identity ? (
    <div className={styles.container}>
      <div className={styles.firstLeavesGroup}>
        <img width="100%" alt="leaf" src="/leaves/leavesGroup02.svg" />
      </div>
      <div className={styles.secondLeavesGroup}>
        <img width="100%" alt="leaf" src="/leaves/leavesGroup01.svg" />
      </div>
      <div className={styles.thirdLeavesGroup}>
        <img width="100%" alt="leaf" src="/leaves/leavesGroup02.svg" />
      </div>
      <div className={styles.fourthLeavesGroup}>
        <img width="100%" alt="leaf" src="/leaves/leavesGroup01.svg" />
      </div>
      {/* ----- Other leaves  ------  */}
      {/* <div className={styles.leaf1}>
        <img width="100%" alt="leaf" src="/leaves/leaf01.svg" />
      </div>
      <div className={styles.leaf2}>
        <img width="100%" alt="leaf" src="/leaves/leaf03.svg" />
      </div> */}
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
              color="#1DA1F2"
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
            Identity tokens
          </h2>
          {soulbounds && soulbounds.length > 0 ? (
            <div className={styles.SbtContainer}>
              {soulbounds.map((item, index) => {
                return <Soulbound {...item} key={index} />;
              })}
            </div>
          ) : (
            <p className="text-2xl">No identity token yet</p>
          )}
        </div>

        <div className={styles.section1}>
          <h2
            className={
              "sm:text-5xl text-4xl my-5 break-all mx-3 " + styles.title
            }
          >
            Activity
          </h2>
          {activities && activities.length > 0 ? (
            <div className={styles.activityContainer}>
              {activities.map((item, index) => {
                return <Activity {...item} key={index} index={index} />;
              })}
              <a
                className={styles.activityBtn}
                onClick={() =>
                  window.open(
                    `https://voyager.online/contract/${identity.hexAddr}`
                  )
                }
              >
                <OpenInNew className={styles.openInNew} />
                See more
              </a>
            </div>
          ) : (
            <p className="text-2xl">No activity yet</p>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="h-screen flex justify-center items-center">
      <ThreeDots
        wrapperClass="flex justify-center"
        height="100"
        width="100"
        radius="9"
        color="#19AA6E"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
};

export default Profile;
