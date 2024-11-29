import { Plus } from 'lucide-react';

export function LiquidityPools() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Liquidity Pools</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <Plus className="w-4 h-4" />
          Add Liquidity
        </button>
      </div>

      <div className="grid gap-4">
        {mockPools.map((pool) => (
          <div key={pool.id} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">{pool.name}</h3>
                <p className="text-sm text-gray-600">Fee: {pool.fee}%</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">TVL</p>
                <p className="font-semibold">${pool.tvl}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">APR</p>
                <p className="font-semibold text-green-600">{pool.apr}%</p>
              </div>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                Manage
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mockPools = [
  {
    id: 1,
    name: 'ETH/USDC',
    fee: 0.3,
    tvl: '1,234,567',
    apr: 12.5,
  },
  {
    id: 2,
    name: 'WBTC/ETH',
    fee: 0.3,
    tvl: '2,345,678',
    apr: 15.2,
  },
];