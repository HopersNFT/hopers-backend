import { ChainTypes } from './chain';

export enum TokenType {
    JUNO = 'ujuno',
    HOPE = 'hope',
    RAW = 'raw',
    NETA = 'neta',
    ATOM = 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
    USDC = 'ibc/EAC38D55372F38F1AFD68DF7FE9EF762DCF69F26520643CF3F9D292A738D8034',
    HOPERS = 'hopers',
    PUNK = 'punk',
    HUAHUA = 'ibc/D836B191CDAE8EDACDEBE7B64B504C5E06CC17C6A072DAF278F9A96DF66F6241',
    CANLAB = 'canlab',
    RED = 'red',
    BLUE = 'blue',
    WYND = 'wynd',
    SGNL = 'sgnl',
    RACOON = 'racoon',
    GLTO = 'glto',
    AQUA = 'aqua',
	OSMO = "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
}

export type TokenStatusType = {
    isNativeCoin: boolean;
    isIBCCoin: boolean;
    contractAddress?: string;
    originChain?: ChainTypes;
    chain: ChainTypes;
    coinName?: string;
    decimal?: number;
};
