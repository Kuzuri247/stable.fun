import { useState } from 'react';
import { ArrowDownUp, Settings } from 'lucide-react';
import { TokenSelect } from './TokenSelect';
import { useAccount } from 'wagmi';
import { ConnectButton } from '../shared/ConnectButton';

export function SwapInterface() {
  const { isConnected } = useAccount();
  const [fromToken, setFromToken] = useState<any>(null);
  const [toToken, setToToken] = useState<any>(null);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Swap</h2>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="space-y-4">
        <TokenSelect
          label="From"
          value={fromToken}
          onChange={setFromToken}
          showMax
        />

        <button className="mx-auto block p-2 hover:bg-gray-100 rounded-full">
          <ArrowDownUp className="w-5 h-5 text-gray-600" />
        </button>

        <TokenSelect
          label="To"
          value={toToken}
          onChange={setToToken}
        />
      </div>

      {isConnected ? (
        <button className="w-full mt-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
          Swap
        </button>
      ) : (
        <ConnectButton />
      )}
    </div>
  );
}