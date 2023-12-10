'use client';

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react';

// 1. Get projectId
const projectId = 'ffbc591b7f2ca81ccc0b822fd73489a1';

// 2. Set chains
const chains = [
  {
    chainId: 1440002,
    name: 'XRPL EVM Sidechain',
    currency: 'XRP',
    explorerUrl: 'https://evm-sidechain.xrpl.org',
    rpcUrl: 'https://rpc-evm-sidechain.xrpl.org',
  },
];

// 3. Create modal
const ethersConfig = defaultConfig({
  metadata: {
    name: 'Web3Modal',
    description: 'Web3Modal Laboratory',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
  },
  defaultChainId: 1440002,
  rpcUrl: 'https://rpc-evm-sidechain.xrpl.org',
});

// 3. Create modal
createWeb3Modal({
  ethersConfig,
  chains,
  projectId,
  enableAnalytics: true,
  themeMode: 'light',
});

export function Web3ModalProvider({ children }: { children: React.ReactNode }) {
  return children;
}
