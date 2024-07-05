'use client';

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react';

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '4266fdab50ba80c97472fbb0b38c0b87';

let mainnet = {
  chainId: 696969,
  name: 'Galadriel',
  currency: 'GAL',
  explorerUrl: 'https://explorer.galadriel.com',
  rpcUrl: 'https://devnet.galadriel.com/',
};

// 3. Create modal
const metadata = {
  name: 'Middle Earth',
  description: 'Middle Earth AI simulation',
  // TODO:
  url: 'https://galadriel.com', // origin must match your domain & subdomain
  icons: [],
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

export function Web3ModalProvider({ children }: any) {
  return children;
}
