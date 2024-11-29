import { Wallet } from 'lucide-react';
import { useWeb3Modal } from '@web3modal/react';
import { useAccount } from 'wagmi';

export function ConnectButton() {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  return (
    <button
      onClick={() => open()}
      className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2"
    >
      <Wallet className="w-4 h-4" />
      {isConnected ? `${address?.slice(0, 6)}...${address?.slice(-4)}` : 'Connect Wallet'}
    </button>
  );
}