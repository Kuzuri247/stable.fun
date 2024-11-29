export interface Token {
  name: string;
  symbol: string;
  description: string;
  totalSupply: string;
  price: string;
  startTime: Date;
  endTime: Date;
  raised: string;
  goal: string;
  status: 'upcoming' | 'live' | 'ended';
  decimals?: number;
  address?: string;
  logoURI?: string;
}