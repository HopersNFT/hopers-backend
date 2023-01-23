import { TokenType } from '../types';
import { TokenStatus } from '../constants';

export const getTOkenByContractAddress = (address: string): TokenType =>
    (Object.keys(TokenStatus) as Array<keyof typeof TokenStatus>).find(
        (token) => TokenStatus[token].contractAddress === address,
    );
