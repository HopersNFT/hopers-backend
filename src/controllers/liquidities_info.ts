import { convertStringToNumber, runQuery } from '../utils';
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
            let stakedLPBalances: any[] = [],
                configs: any[] = [];
            let stakingQueryIndices: number[] = [];
            liquidities = liquiditiesInfoResult.map((liquidityInfo, index) => {
                const pool = convertStringToNumber(
                    liquidityInfo.lp_token_supply,
                );

                const token1Reserve = convertStringToNumber(
                    liquidityInfo.token1_reserve,
                );
                const token2Reserve = convertStringToNumber(
                    liquidityInfo.token2_reserve,
                );
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
            await Promise.all(fetchStakedLPBalanceQueries)
                .then(
                    (stakedLPBalanceResults) =>
                        (stakedLPBalances = stakedLPBalanceResults),
                )
                .catch((err2) => console.log(err2));
            await Promise.all(fetchConfigQueries)
                .then((configResult) => (configs = configResult))
                .catch((err2) => console.log(err2));

            for (let index = 0; index < configs.length; index++) {
                let config = configs[index];
                const liquidityIndex = stakingQueryIndices[index];
                const distributionEnd =
                    config?.distribution_schedule?.[0]?.[1] || 0;
                liquidities[liquidityIndex].config = {
                    lockDuration: (config?.lock_duration || 0) * 1e3,
                    distributionEnd: distributionEnd * 1e3,
                };

                let totalSupplyInPresale =
                    config?.distribution_schedule?.[0]?.[2] || 0;
                totalSupplyInPresale = Number(totalSupplyInPresale);
                totalSupplyInPresale = isNaN(totalSupplyInPresale)
                    ? 0
                    : totalSupplyInPresale;

                const hopersReserve = liquidities[liquidityIndex].token1Reserve;
                const totalLPBalance = liquidities[liquidityIndex].pool * 1e6;
                let stakedLPBalance = Number(
                    stakedLPBalances[index]?.balance || 0,
                );
                stakedLPBalance = isNaN(stakedLPBalance) ? 0 : stakedLPBalance;

                if (hopersReserve && stakedLPBalance && totalLPBalance) {
                    const apr =
                        (100 * totalSupplyInPresale) /
                        ((2 * hopersReserve * stakedLPBalance) /
                            totalLPBalance);
                    liquidities[liquidityIndex].apr = `${apr.toLocaleString(
                        undefined,
                        {
                            maximumFractionDigits: 2,
                        },
                    )}%`;
                }
            }
        })
        .catch((err) => {
            console.log(err);
        });
    return { liquiditiesInfo: liquidities };
};

export default fetchLiquiditiesInfo;
