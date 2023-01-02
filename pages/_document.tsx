import { Html, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    <Html>
      <link rel="icon" href="/visuals/StarknetIdLogo.png" />

      <body className="default_background_color">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
