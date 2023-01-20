import { TokenType } from './tokens';

type TPoolConfig = {
    lockDuration: number;
    distributionEnd?: number;
};
export type TPool = {
    id: number;
    token1: TokenType;
    token2: TokenType;
    token1Reserve: number;
    token2Reserve: number;
    isVerified: boolean;
    apr: string;
    contract: string;
    lpAddress: string;
    stakingAddress?: string;
    pool: number;
    ratio: number;
    volume?: number;
    earned?: number;
    balance?: number;
    pendingReward?: number;
    bonded?: number;
    totalEarned?: number;
    config?: TPoolConfig;
};

export type TLiquidity = {
    tokenA: TokenType;
    tokenB: TokenType;
    contractAddress: string;
    stakingAddress?: string;
};
