import { Token } from '../types/token';

export const mockTokens: Token[] = [
  {
    name: 'DeFi Protocol',
    symbol: 'DFP',
    description: 'Next-generation decentralized finance protocol with advanced yield optimization',
    totalSupply: '10,000,000',
    price: '0.001',
    startTime: new Date('2024-03-20'),
    endTime: new Date('2024-04-20'),
    raised: '150',
    goal: '300',
    status: 'live',
  },
  {
    name: 'GameFi Token',
    symbol: 'GFT',
    description: 'Revolutionary gaming platform powered by blockchain technology',
    totalSupply: '5,000,000',
    price: '0.002',
    startTime: new Date('2024-04-01'),
    endTime: new Date('2024-05-01'),
    raised: '0',
    goal: '500',
    status: 'upcoming',
  },
  {
    name: 'AI Network',
    symbol: 'AIN',
    description: 'Decentralized artificial intelligence computing network',
    totalSupply: '20,000,000',
    price: '0.0005',
    startTime: new Date('2024-02-01'),
    endTime: new Date('2024-03-01'),
    raised: '400',
    goal: '400',
    status: 'ended',
  },
];