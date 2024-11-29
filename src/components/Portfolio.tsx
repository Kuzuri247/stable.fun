import { ArrowUpRight, TrendingUp } from 'lucide-react';

export function Portfolio() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Portfolio Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-600">Total Value</p>
            <p className="text-2xl font-bold">$12,345.67</p>
            <div className="flex items-center gap-1 text-green-600 text-sm mt-1">
              <TrendingUp className="w-4 h-4" />
              <span>+5.67%</span>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-600">Active Positions</p>
            <p className="text-2xl font-bold">7</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-600">Total Earnings</p>
            <p className="text-2xl font-bold">$1,234.56</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-bold mb-4">Your Assets</h3>
        <div className="space-y-4">
          {mockAssets.map((asset) => (
            <div key={asset.symbol} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <img src={asset.icon} alt={asset.name} className="w-8 h-8 rounded-full" />
                <div>
                  <p className="font-medium">{asset.name}</p>
                  <p className="text-sm text-gray-600">{asset.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">${asset.value}</p>
                <p className="text-sm text-gray-600">{asset.amount} {asset.symbol}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const mockAssets = [
  {
    name: 'Ethereum',
    symbol: 'ETH',
    icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    value: '5,234.56',
    amount: '2.5',
  },
  {
    name: 'USD Coin',
    symbol: 'USDC',
    icon: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
    value: '3,000.00',
    amount: '3,000',
  },
];