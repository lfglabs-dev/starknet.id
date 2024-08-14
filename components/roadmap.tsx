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
                title="Domain Subscription Feature"
                description="Implement an automatic renewal feature for domain ownership, ensuring a seamless and continuous user experience."
                icon="/icons/checkMark.svg"
              />
              <ParagraphWithIcon
                title="Profile pic integration"
                description="Customize your StarkNet ID with an NFT profile picture, enhancing the uniqueness of your identity."
                icon="/icons/checkMark.svg"
              />
              <ParagraphWithIcon
                title="Referral system"
                description="Introduce an innovative referral system, empowering users and businesses to earn crypto while recommending Starknet ID."
                icon="/icons/checkMark.svg"
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
                title="Cairo 1 migration"
                description="Transition to Cairo 1, the next level of Starknet's technological advancements, enhancing the scalability and capabilities of StarkNet ID."
                icon="/icons/checkMark.svg"
              />
              <ParagraphWithIcon
                title="Starkurabu Customizable PFP"
                description="To showcase our profile pic feature we created a customized PFP collection called Starkurabu."
                icon="/icons/checkMark.svg"
              />
              <ParagraphWithIcon
                title="Fully Audited"
                description="After Cairo 1 Transition, we will audit our smart contracts to ensure the security of our protocol."
                icon="/icons/checkMark.svg"
              />
              <ParagraphWithIcon
                title="Multichain Bridging"
                description="Enable seamless integration with Ethereum Name Service (ENS), Solana Naming Service (SNS) and potentially other relevant identity protocols. Linking your Starknet Identity to the rest of your on-chain identity."
                icon="/icons/checkMark.svg"
              />
              <ParagraphWithIcon
                title="Domain Marketplace"
                description="Enable domain liquidity by integrating a domain marketplace directly in the Starknet ID app."
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
