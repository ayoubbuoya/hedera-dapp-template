import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  rainbowWallet,
  walletConnectWallet,
  braveWallet,
  metaMaskWallet,
  trustWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { createConfig } from "wagmi";
import { hedera, hederaTestnet } from "wagmi/chains";
import { http } from "wagmi";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [
        rainbowWallet,
        walletConnectWallet,
        braveWallet,
        metaMaskWallet,
        trustWallet,
      ],
    },
  ],
  {
    appName: "Hedera DApp Template",
    projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID || "",
  }
);

export const config = createConfig({
  connectors,
  chains: [hedera, hederaTestnet],
  transports: {
    [hedera.id]: http(),
    [hederaTestnet.id]: http(),
  },
});
