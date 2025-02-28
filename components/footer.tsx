"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#284028] text-white px-4 sm:px-6 lg:px-12 xl:px-20 -mt-[105px] lg:mt-[-220px] rounded-tl-2xl rounded-tr-2xl z-10 relative py-8 sm:py-12 md:py-16 w-full">
      <div className="w-full 2xl:max-w-none max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
          <div className="max-w-[400px] space-y-6 md:space-y-10 text-center md:text-left">
            <Image
              src="/visuals/home/footer-icon.webp"
              alt="leaf"
              width={40}
              height={40}
              className="relative mx-auto md:mx-0 w-10"
            />
            <h2 className="text-lg sm:text-xl font-bold leading-tight">
              One profile, seamlessly integrated into the whole ecosystem
            </h2>
          </div>

          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 lg:gap-[72px]">
              {/* About Section */}
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-lg font-semibold mb-4">About</h3>
                <div className="flex flex-col items-center md:items-start space-y-3">
                  <Link
                    href="https://docs.starknet.id/"
                    className="transition-opacity duration-300 hover:opacity-70"
                  >
                    Documentation
                  </Link>
                  <Link
                    href="/pdfs/Terms.pdf"
                    className="transition-opacity duration-300 hover:opacity-70"
                  >
                    Terms of use
                  </Link>
                  <Link
                    href="/pdfs/PrivacyPolicy.pdf"
                    className="transition-opacity duration-300 hover:opacity-70"
                  >
                    Privacy policy
                  </Link>
                </div>
              </div>

              {/* Starknet ID Section */}
              <div className="space-y-4 md:mt-0 mt-8 text-center md:text-left">
                <h3 className="text-lg font-semibold mb-4">Starknet ID</h3>
                <div className="flex flex-col items-center md:items-start space-y-3">
                  <Link
                    href="https://app.starknet.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity duration-300 hover:opacity-70"
                  >
                    Get Your Domain
                  </Link>
                  <Link
                    href="https://app.starknet.id/pfp-collections"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity duration-300 hover:opacity-70"
                  >
                    PFP Collections
                  </Link>
                  <Link
                    href="https://app.starknet.id/newsletter-subscription"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity duration-300 hover:opacity-70"
                  >
                    Newsletter
                  </Link>
                  <Link
                    href="/affiliates/individual-program"
                    className="transition-opacity duration-300 hover:opacity-70"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Affiliation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-12 pt-8 border-t border-white/20">
          <p className="text-sm opacity-70 font-light mb-4 md:mb-0 text-center">
            © 2025 LFG Labs. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-6 justify-center">
            <a
              href="https://twitter.com/Starknet_id"
              target="_blank"
              rel="noopener noreferrer"
              className="font-light transition-opacity duration-300 hover:opacity-50"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </a>

            
            <a
              href="https://discord.com/invite/8uS2Mgcsza"
              target="_blank"
              rel="noopener noreferrer"
              className="font-light transition-opacity duration-300 hover:opacity-50"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.175 13.175 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
              </svg>
              <span className="sr-only">Discord</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}