import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../styles/Profile.module.css";
import { fetchIdentity } from "../hooks/naming";
import ClickableTwitterIcon from "../components/clickable/clickableTwitterIcon";
import ClickableGithubIcon from "../components/clickable/clickableGithubIcon";
import ClickableDiscordIcon from "../components/clickable/clickableDiscordIcon";
import { ThreeDots } from "react-loader-spinner";
import { CDNImg } from "../components/cdn/image";
import { Identity } from "../utils/apiWrappers/identity";
import { minifyAddress, shortenDomain } from "../utils/stringService";
import { IdentityData } from "../types/frontTypes";
import { Tooltip } from "@mui/material";
import theme from "../styles/theme";
import CopyIcon from "../components/UI/iconsComponents/icons/copyIcon";
import DoneIcon from "../components/UI/iconsComponents/icons/doneIcon";

const Profile: NextPage = () => {
  const router = useRouter();
  const { idOrUsername } = router.query;
  const [initProfile, setInitProfile] = useState(false);
  const [identity, setIdentity] = useState<Identity>();
  const [ppImageUrl, setPpImageUrl] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [copied, setCopied] = useState(false);
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
        if (Number(tokenId.tokenId === 0)) {
          setNotFound(true);
          return;
        }
        fetch(
          `${process.env.NEXT_PUBLIC_SERVER_LINK}/id_to_data?id=${Number(
            tokenId.tokenId
          )}`
        )
          .then(async (response) => {
            if (!response.ok) {
              console.log("error", response.text());
            }
            return response.json();
          })
          .then((data: IdentityData) => {
            setIdentity(new Identity(data));
            setInitProfile(true);
          });
      });
    } else if (!isNaN(parseInt(idOrUsername as string))) {
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_LINK}/id_to_data?id=${idOrUsername}`
      )
        .then(async (response) => {
          if (!response.ok) {
            console.log("error", response.text());
          }
          return response.json();
        })
        .then((data: IdentityData) => {
          setIdentity(new Identity(data));
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
    if (!identity) {
      setPpImageUrl("");
      return;
    }

    const fetchProfilePic = async () => {
      try {
        const imgUrl = await identity.getPfpFromVerifierData();
        setPpImageUrl(imgUrl);
      } catch (error) {
        setPpImageUrl("");
      }
    };

    fetchProfilePic();
  }, [identity]);

  const copyToClipboard = () => {
    // if not addr, returns early
    if (!identity?.targetAddress) return;
    setCopied(true);
    navigator.clipboard.writeText(identity.targetAddress);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  if (notFound) {
    return <h2 className={styles.notFound}>Profile not found</h2>;
  }

  return initProfile && identity ? (
    <div className={styles.container}>
      <div className={styles.coconutTreeLeft}>
        <CDNImg width="100%" alt="leaf" src="/visuals/coconutTree1.webp" />
      </div>
      <div className={styles.coconutTreeRight}>
        <CDNImg width="100%" alt="leaf" src="/visuals/coconutTree2.webp" />
      </div>
      <div className="flex flex-col items-center justify-center text min-h-screen mx-10">
        <div className={styles.profileCard}>
          <div className="mx-auto">
            <CDNImg
              src={ppImageUrl}
              height={200}
              width={200}
              alt="identicon"
              className={styles.pfpImg}
            />
          </div>
          <div>
            <div className={styles.domainContainer}>
              <h2 className={styles.domainName}>
                {identity?.domain
                  ? shortenDomain(identity.domain, 25)
                  : `SID: ${identity.id}`}
              </h2>
              <div className="cursor-pointer ml-3">
                {!copied ? (
                  <Tooltip title="Copy" arrow>
                    <div
                      className={styles.contentCopy}
                      onClick={() => copyToClipboard()}
                    >
                      <CopyIcon width="25" color="#454545" />
                    </div>
                  </Tooltip>
                ) : (
                  <DoneIcon color={theme.palette.primary.main} width="25" />
                )}
              </div>
            </div>
            <p className={styles.addr}>
              {minifyAddress(identity.targetAddress)}
            </p>
          </div>
          <div className={styles.socialsContainer}>
            {/* <ClickableTwitterIcon
              socialId={Number(
                identity?.twitterData ?? identity?.oldTwitterData
              ).toString()}
            /> */}
            <ClickableGithubIcon
              socialId={Number(
                identity?.githubData ?? identity?.oldGithubData
              ).toString()}
            />
            <ClickableDiscordIcon
              socialId={Number(
                identity?.discordData ?? identity?.oldDiscordData
              ).toString()}
            />
          </div>
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
