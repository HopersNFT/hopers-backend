import dotenv from 'dotenv';
import { TokenPriceType, TokenType } from '../types';
import { TokenCoingeckoIds } from '../constants';
import { getQuery } from '../utils';

dotenv.config();

const CoinGeckoAPIKey = process.env.COINGECKO_API_KEY;

const initialState: TokenPriceType = (
    Object.keys(TokenType) as Array<keyof typeof TokenType>
).reduce(
    (result, key) => ({ ...result, [TokenType[key]]: null }),
    {},
) as TokenPriceType;

const customPromiseAll = (queries: Promise<any>[]): Promise<any> => {
    return new Promise((resolve, reject) => {
        Promise.all(queries)
            .then((results) => resolve(results))
            .catch((err) => reject(err));
    });
};

export const fetchTokenPriceInfo = async () => {
    let keys: any = [];
    const fetchQueries: any[] = [];
    Object.keys(TokenCoingeckoIds).forEach((key: string) => {
        const crrCoingeckoId = TokenCoingeckoIds[key as TokenType];
        if (crrCoingeckoId) {
            keys.push(key as TokenType);
            // return getQuery({
            //   url: `https://api.coingecko.com/api/v3/coins/${
            //     TokenCoingeckoIds[key as TokenType]
            //   }`,
            // });
            // fetchQueries.push(
            //     getQuery({
            //         url: `https://api.coingecko.com/api/v3/coins/${
            //             TokenCoingeckoIds[key as TokenType]
            //         }`,
            //     }),
            // );
            fetchQueries.push(
                getQuery({
                    url: `https://pro-api.coingecko.com/api/v3/coins/${crrCoingeckoId}?x_cg_pro_api_key=${CoinGeckoAPIKey}`,
                }),
            );
        }
    });
    try {
        let tokenPrices: any = {};
        const queryResults = await customPromiseAll(fetchQueries);
        queryResults.forEach((result: any, index: number) => {
            tokenPrices[keys[index]] = { market_data: result.market_data };
        });
        return { tokenPriceInfo: tokenPrices };
    } catch (err) {
        return { tokenPriceInfo: initialState };
    }
};
