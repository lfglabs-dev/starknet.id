import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "./providers";
import { PageReveal } from "@/components/PageReveal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Starknet.ID",
  description: "Starknet ID - Your identity on Starknet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <PageReveal />
          {children}
        </Providers>
      </body>
    </html>
  );
}
