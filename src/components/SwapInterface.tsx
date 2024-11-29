import { useState } from 'react';
import { ArrowDownUp, Settings } from 'lucide-react';

export function SwapInterface() {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Swap</h2>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-500">From</span>
            <button className="text-sm text-blue-600">Max</button>
          </div>
          <div className="flex justify-between">
            <input
              type="number"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              placeholder="0.0"
              className="bg-transparent text-2xl outline-none w-2/3"
            />
            <button className="px-3 py-1 bg-gray-200 rounded-lg text-sm font-medium">
              Select Token
            </button>
          </div>
        </div>

        <button className="mx-auto block p-2 hover:bg-gray-100 rounded-full">
          <ArrowDownUp className="w-5 h-5 text-gray-600" />
        </button>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-500">To</span>
          </div>
          <div className="flex justify-between">
            <input
              type="number"
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
              placeholder="0.0"
              className="bg-transparent text-2xl outline-none w-2/3"
            />
            <button className="px-3 py-1 bg-gray-200 rounded-lg text-sm font-medium">
              Select Token
            </button>
          </div>
        </div>
      </div>

      <button className="w-full mt-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
        Connect Wallet to Swap
      </button>
    </div>
  );
}