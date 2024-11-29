import { Calendar, Clock, Coins } from 'lucide-react';
import { Token } from '../types/token';

interface TokenCardProps {
  token: Token;
}

export function TokenCard({ token }: TokenCardProps) {
  const progress = (parseFloat(token.raised) / parseFloat(token.goal)) * 100;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold">{token.name}</h3>
          <p className="text-gray-600">${token.symbol}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          token.status === 'live' ? 'bg-green-100 text-green-800' :
          token.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {token.status.charAt(0).toUpperCase() + token.status.slice(1)}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4">{token.description}</p>
      
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Coins className="w-5 h-5 text-gray-500" />
          <span className="text-gray-700">Price: {token.price} ETH</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-gray-500" />
          <span className="text-gray-700">
            {new Date(token.startTime).toLocaleDateString()} - {new Date(token.endTime).toLocaleDateString()}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-gray-500" />
          <span className="text-gray-700">Total Supply: {token.totalSupply}</span>
        </div>
      </div>
      
      <div className="mt-6">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Progress</span>
          <span className="text-gray-800 font-medium">{progress.toFixed(2)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <span className="text-gray-600">{token.raised} ETH raised</span>
          <span className="text-gray-600">Goal: {token.goal} ETH</span>
        </div>
      </div>
    </div>
  );
}