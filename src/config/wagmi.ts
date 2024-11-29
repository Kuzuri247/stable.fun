import { createConfig, configureChains } from 'wagmi';
import { mainnet, goerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';

// Use a default project ID for development - in production, this should be environment-specific
const projectId = 'YOUR_WALLETCONNECT_PROJECT_ID';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, goerli],
  [w3mProvider({ projectId }), publicProvider()]
);

export const config = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ chains, projectId }),
  publicClient,
  webSocketPublicClient,
});

export const ethereumClient = new EthereumClient(config, chains);
export { chains, projectId };