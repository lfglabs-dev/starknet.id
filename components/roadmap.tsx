import React, { FunctionComponent } from "react";
import Steps from "./steps/steps";
import ParagraphWithIcon from "./UI/paragraphWithIcon";

const Roadmap: FunctionComponent = () => {
  return (
    <Steps
      steps={[
        {
          title: "2023 - GROWTH",
          banner: "/visuals/home/roadmapillu1.webp",
          icon: "/icons/rocket.svg",
          content: (
            <>
              <ParagraphWithIcon
                title="Wallets & block explorers integration"
                description="Facilitate a user-friendly integration of StarkNet ID with the first wallets, streamlining the process of managing identities and domains. "
                icon="/icons/checkMark.svg"
              />
              <ParagraphWithIcon
                title="Massive Subdomain distribution (free)"
                description="Initiate a widespread distribution of subdomains for free, empowering users to personalize their StarkNet IDs extensively."
                icon="/icons/checkMark.svg"
              />
              <ParagraphWithIcon
                title="Starknetid SDK for developers"
                description="Launch the StarkNet ID software development kit (SDK), enabling developers to easily integrate and harness its capabilities within their applications."
                icon="/icons/checkMark.svg"
              />
              <ParagraphWithIcon
                title="Proof of PersonHood/KYC features"
                description="Introduce advanced features for proving personhood and KYC compliance, bolstering the security and authenticity of StarkNet IDs."
                icon="/icons/checkMark.svg"
              />
              <ParagraphWithIcon
                title="Automatic Renewal Feature"
                description="Implement an automatic renewal feature for domain ownership, ensuring a seamless and continuous user experience."
                icon="/icons/checkMark.svg"
              />
              <ParagraphWithIcon
                title="Profile pic integration"
                description="Customize your StarkNet ID with an NFT profile picture, enhancing the uniqueness of your identity."
                icon="/icons/checkMark.svg"
              />
              <ParagraphWithIcon
                title="Cairo 1 migration"
                description="Transition to Cairo 1, the next level of Starknet's technological advancements, enhancing the scalability and capabilities of StarkNet ID."
                icon="/icons/clock.svg"
              />
            </>
          ),
        },
        {
          title: "2024 - MATURATION",
          banner: "/visuals/home/roadmapillu3.webp",
          icon: "/icons/crown.svg",
          content: (
            <>
              <ParagraphWithIcon
                title="Fully Audited"
                description="After  Cairo 1 Transition, we will audit our smart contracts to ensure the security of our protocol."
                icon="/icons/clock.svg"
              />
              <ParagraphWithIcon
                title="Starknet Quest"
                description="Development of a gamified Starknet experience for  sustainable crypto marketing and fair reward distributions."
                icon="/icons/clock.svg"
              />
              <ParagraphWithIcon
                title="ENS Bridging"
                description="Enable seamless integration with Ethereum Name Service (ENS), bridging the decentralized identity experience between StarkNet and the Ethereum ecosystem."
                icon="/icons/clock.svg"
              />
              <ParagraphWithIcon
                title="On-chain resolving"
                description="Implement on-chain resolving of StarkNet IDs and domains, ensuring a robust and reliable identity verification process."
                icon="/icons/clock.svg"
              />
              <ParagraphWithIcon
                title="Affiliation system"
                description="Introduce an innovative affiliation system, empowering users to establish meaningful connections within the StarkNet ecosystem."
                icon="/icons/clock.svg"
              />
            </>
          ),
        },
      ]}
    />
  );
};

export default Roadmap;
