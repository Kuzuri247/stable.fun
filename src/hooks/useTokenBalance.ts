import { useAccount, useBalance } from 'wagmi';

export function useTokenBalance(tokenAddress?: string) {
  const { address } = useAccount();
  
  const { data: balance } = useBalance({
    address,
    token: tokenAddress,
    watch: true,
  });

  return balance;
}