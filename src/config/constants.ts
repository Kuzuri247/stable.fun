export const SUPPORTED_CHAINS = ['ethereum'] as const;

export const TOKEN_LIST = [
  {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
    address: '0x0000000000000000000000000000000000000000',
    logoURI: 'https://cryptologos.cc/logos/ethereum-eth-logo.png'
  },
  {
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    logoURI: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png'
  }
] as const;