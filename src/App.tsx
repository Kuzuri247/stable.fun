import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { TokenCard } from './components/TokenCard';
import { LaunchpadFilters } from './components/LaunchpadFilters';
import { SwapInterface } from './components/swap/SwapInterface';
import { LiquidityPools } from './components/LiquidityPools';
import { Portfolio } from './components/Portfolio';
import { WagmiProvider } from './providers/WagmiProvider';
import { mockTokens } from './utils/mockData';
import { Token } from './types/token';

function App() {
  const [activeTab, setActiveTab] = useState('launchpad');
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTokens = mockTokens.filter((token: Token) => {
    const matchesFilter = filter === 'all' || token.status === filter;
    const matchesSearch = token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         token.symbol.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <WagmiProvider>
      <div className="min-h-screen bg-gray-50">
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
          {activeTab === 'launchpad' && (
            <>
              <LaunchpadFilters
                onFilterChange={setFilter}
                onSearch={setSearchQuery}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTokens.map((token, index) => (
                  <TokenCard key={index} token={token} />
                ))}
              </div>
              {filteredTokens.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No tokens found matching your criteria</p>
                </div>
              )}
            </>
          )}

          {activeTab === 'swap' && (
            <div className="flex justify-center">
              <SwapInterface />
            </div>
          )}

          {activeTab === 'liquidity' && <LiquidityPools />}

          {activeTab === 'portfolio' && <Portfolio />}
        </main>
      </div>
    </WagmiProvider>
  );
}

export default App;