import React, { FunctionComponent } from "react";
import Steps from "./steps/steps";
import ParagraphWithIcon from "./UI/paragraphWithIcon";

const Roadmap: FunctionComponent = () => {
  return (
    <Steps
      steps={[
        {
          title: "2022 - GENESIS",
          banner: "/visuals/home/roadmapillu1.webp",
          icon: "/icons/starknet.svg",
          content: (
            <>
              <ParagraphWithIcon
                title="Recruitment"
                description="Assemble a talented team passionate about the StarkNet ID vision, setting the foundation for an innovative journey."
                icon="/icons/checkMark.svg"
              />
              <ParagraphWithIcon
                title="First partnership with Eykar Quest"
                description="Forge a strategic alliance with Eykar Quest, marking the initial step towards impactful collaborations within the StarkNet ecosystem."
                icon="/icons/checkMark.svg"
              />
              <ParagraphWithIcon
                title="Application live on testnet"
                description="Launch the StarkNet ID application on the testnet, enabling thorough testing and refinement of the user experience and functionality."
                icon="/icons/checkMark.svg"
              />
              <ParagraphWithIcon
                title="First app integrations"
                description="Seamlessly integrate StarkNet ID with the first wave of applications, marking the beginning of a unified blockchain identity experience across various platforms."
                icon="/icons/checkMark.svg"
              />
              <ParagraphWithIcon
                title="Application live on mainnet"
                description="Transition the StarkNet ID application to the mainnet, enabling users to harness its capabilities in a live, decentralized environment."
                icon="/icons/checkMark.svg"
              />
              <ParagraphWithIcon
                title="Starknet id Dashboard"
                description="Launch an intuitive dashboard, offering users seamless control over their StarkNet ID, domains, and associated data."
                icon="/icons/checkMark.svg"
              />
            </>
          ),
        },
        {
          title: "2023 - GROWTH",
          banner: "/visuals/home/roadmapillu2.webp",
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
                title="Automatic Renewal Feature"
                description="Implement an automatic renewal feature for domain ownership, ensuring a seamless and continuous user experience."
                icon="/icons/clock.svg"
              />
              <ParagraphWithIcon
                title="Proof of PersonHood/KYC features"
                description="Introduce advanced features for proving personhood and KYC compliance, bolstering the security and authenticity of StarkNet IDs."
                icon="/icons/clock.svg"
              />
              <ParagraphWithIcon
                title="Cairo 1 migration"
                description="Transition to Cairo 1, the next level of StarkWare's technological advancements, enhancing the scalability and capabilities of StarkNet ID."
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
