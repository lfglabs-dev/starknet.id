"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, http } from "wagmi";
import { mainnet } from "wagmi/chains";
import { StarknetConfig, starkscan } from "starknetkit";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const [wagmiConfig] = useState(() => ({
    chains: [mainnet],
    transports: {
      [mainnet.id]: http(),
    },
    connectors: [
      { id: "argentX", name: "Argent X", priority: 1 },
      { id: "braavos", name: "Braavos", priority: 2 },
      { id: "metamask", name: "MetaMask", priority: 3 },
    ],
  }));

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <StarknetConfig
          chains={[mainnet]}
          provider={http("https://starknet-mainnet.public.blastapi.io")}
          connectors={wagmiConfig.connectors}
        >
          {children}
        </StarknetConfig>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
