import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import HomeSection1 from "../components/home/homeSection1";
import HomeSection2 from "../components/home/homeSection2";
import HomeSection3 from "../components/home/homeSection3";
import { ParallaxProvider } from "react-scroll-parallax";
import { Faqs, type FaqItem } from "../components/faq";

const Home: NextPage = () => {
  return (
    <div className={styles.page}>
      <Head>
        <title>Starknet ID — Your Starknet domain name</title>
        <meta
          name="description"
          content="Own your identity on Starknet. Register a .stark name, link it to your wallet, and use it across the ecosystem."
        />
        <meta
          name="keywords"
          content="Starknet, Starknet ID, .stark, identity, naming, wallet, blockchain, crypto"
        />
        <link rel="canonical" href="https://starknet.id" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Starknet ID — Your Identity on Starknet" />
        <meta
          property="og:description"
          content="Own your identity on Starknet. Register a .stark name, link it to your wallet, and use it across the ecosystem."
        />
        <meta property="og:url" content="https://starknet.id" />
        <meta property="og:site_name" content="Starknet ID" />
        <meta property="og:image" content="/visuals/StarknetIdLogo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Starknet ID — Your Identity on Starknet" />
        <meta
          name="twitter:description"
          content="Own your identity on Starknet. Register a .stark name, link it to your wallet, and use it across the ecosystem."
        />
        <meta name="twitter:image" content="/visuals/StarknetIdLogo.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Starknet ID",
              url: "https://starknet.id",
              logo: "/visuals/StarknetIdLogo.png",
              sameAs: [
                "https://twitter.com/Starknet_id",
                "https://discord.com/invite/8uS2Mgcsza",
                "https://github.com/starknet-id",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Starknet ID",
              url: "https://starknet.id",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://starknet.id/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <ParallaxProvider>
          <HomeSection1 />
          <HomeSection2 />
          {(() => {
            const faqItems: FaqItem[] = [
              { question: "What is Starknet ID?", answer: "Starknet ID is a decentralized identity and naming protocol on Starknet. It lets you mint a free identity (NFT), register a human‑readable .stark domain, and link data like addresses or socials for use across apps." },
              { question: "What’s the difference between an identity and a domain?", answer: "An identity is your profile NFT on Starknet; a domain (e.g., yourname.stark) is a name you register and link to that identity to use it across the ecosystem." },
              { question: "Do I need ETH to register a domain on mainnet?", answer: "Yes. Registration and renewals cost gas, so you need ETH bridged to Starknet." },
              { question: "How can I bridge ETH to Starknet?", answer: "Use bridges like Orbiter Finance or the official Starknet Bridge (Ethereum → Starknet)." },
              { question: "Why does bridging sometimes take hours?", answer: "Cross‑chain transactions require confirmations and batching; delays are normal depending on network conditions." },
              { question: "How much does a .stark domain cost?", answer: "Pricing depends on length: 1–4 character names are premium; 5+ letters are cheaper." },
              { question: "How do I register a .stark domain?", answer: "Open the Starknet ID app, connect your wallet, search your name, review details, and complete payment to register." },
              { question: "What is Domain Subscription (auto‑renew)?", answer: "A smart‑contract feature that automatically renews your domains annually so they don’t expire." },
              { question: "Are there safeguards for subscription payments?", answer: "Yes: you set a limit_price cap; renewals occur only when near expiry; you can disable anytime; no hidden fees." },
              { question: "Can I personalize my identity (PFP, socials)?", answer: "Yes. Choose an NFT you own on Starknet as PFP, verify socials like Twitter/Discord, and add an EVM address or snid.eth for interoperability." },
              { question: "How does the affiliate program work?", answer: "Domain holders get a referral link. You earn 25% on direct referrals and 12.5% on your referrals’ referrals (sub‑affiliates)." },
              { question: "Are subscription contracts audited?", answer: "Yes, the subscription and auto‑renew smart contracts have been independently audited." },
            ];

            const faqJsonLd = {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqItems.map((i) => ({
                "@type": "Question",
                name: i.question,
                acceptedAnswer: { "@type": "Answer", text: i.answer },
              })),
            } as const;

            return <Faqs items={faqItems} jsonLd={faqJsonLd} />;
          })()}
          <HomeSection3 />
          <Footer />
        </ParallaxProvider>
      </div>
    </div>
  );
};

export default Home;
