import { runQuery } from '../utils';
import { Liquidities, TokenStatus } from '../constants';
import { TPool } from 'src/types';

const fetchLiquiditiesInfo = async () => {
    const fetchLiquiditiesInfoQueries = Liquidities.map((liquidity) =>
        runQuery(liquidity.contractAddress, { info: {} }),
    );
    let liquidities: TPool[] = [];
    await Promise.all(fetchLiquiditiesInfoQueries)
        .then(async (liquiditiesInfoResult) => {
            let fetchStakedLPBalanceQueries: any[] = [],
                fetchConfigQueries: any[] = [];
            let balances: any[] = [],
                rewards: any[] = [];
            let stakingQueryIndices: number[] = [];
            liquidities = liquiditiesInfoResult.map((liquidityInfo, index) => {
                let pool = Number(liquidityInfo.lp_token_supply);
                pool = isNaN(pool) ? 0 : pool / 1e6;

                let token1Reserve = Number(liquidityInfo.token1_reserve);
                let token2Reserve = Number(liquidityInfo.token2_reserve);
                token1Reserve = isNaN(token1Reserve) ? 0 : token1Reserve;
                token2Reserve = isNaN(token2Reserve) ? 0 : token2Reserve;
                const lpAddress = liquidityInfo.lp_token_address || '';

                const stakingAddress = Liquidities[index].stakingAddress;
                if (stakingAddress) {
                    stakingQueryIndices.push(index);
                    fetchStakedLPBalanceQueries.push(
                        runQuery(lpAddress, {
                            balance: { address: stakingAddress },
                        }),
                    );
                    fetchConfigQueries.push(
                        runQuery(stakingAddress, { config: {} }),
                    );
                }

                const token1 = Liquidities[index].tokenA,
                    token2 = Liquidities[index].tokenB;

                const ratio = token1Reserve
                    ? token2Reserve /
                      Math.pow(10, TokenStatus[token2].decimal || 6) /
                      (token1Reserve /
                          Math.pow(10, TokenStatus[token1].decimal || 6))
                    : 0;

                return {
                    id: index + 1,
                    token1,
                    token2,
                    isVerified: true,
                    apr: '',
                    pool,
                    contract: Liquidities[index].contractAddress,
                    lpAddress,
                    stakingAddress,
                    volume: 18000,
                    token1Reserve,
                    token2Reserve,
                    ratio,
                };
            });
            if (balances.length) {
                for (let index = 0; index < balances.length; index++) {
                    let balance = balances[index]?.balance;
                    balance = Number(balance);
                    balance = isNaN(balance) ? 0 : balance / 1e6;
                    liquidities[index].balance = balance;
                }
            }
            if (rewards.length) {
                for (let index = 0; index < rewards.length; index++) {
                    const liquidityIndex = stakingQueryIndices[index];
                    let reward = rewards[index]?.pending_reward;
                    reward = Number(reward);
                    reward = isNaN(reward) ? 0 : reward / 1e6;
                    liquidities[liquidityIndex].pendingReward = reward;

                    let bonded = rewards[index]?.bond_amount;
                    bonded = Number(bonded);
                    bonded = isNaN(bonded) ? 0 : bonded / 1e6;
                    liquidities[liquidityIndex].bonded = bonded;

                    let totalEarned = rewards[index]?.bond_amount;
                    totalEarned = Number(totalEarned);
                    totalEarned = isNaN(totalEarned) ? 0 : totalEarned / 1e6;
                    liquidities[liquidityIndex].totalEarned = totalEarned;
                }
            }
        })
        .catch((err) => {
            console.log(err);
        });
    return { liquiditiesInfo: liquidities };
};

export default fetchLiquiditiesInfo;
