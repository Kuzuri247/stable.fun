import { ReactNode } from 'react';
import { WagmiConfig } from 'wagmi';
import { Web3Modal } from '@web3modal/react';
import { config, ethereumClient, projectId } from '../config/wagmi';

interface WagmiProviderProps {
  children: ReactNode;
}

export function WagmiProvider({ children }: WagmiProviderProps) {
  return (
    <>
      <WagmiConfig config={config}>
        {children}
      </WagmiConfig>
      
      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        themeMode="light"
        themeVariables={{
          '--w3m-font-family': 'Inter, sans-serif',
          '--w3m-accent-color': '#2563eb',
        }}
      />
    </>
  );
}