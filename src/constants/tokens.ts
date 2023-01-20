import { ChainTypes, TokenStatusType, TokenType } from '../types';

export const TokenStatus: { [key in TokenType]: TokenStatusType } = {
    [TokenType.JUNO]: {
        isNativeCoin: true,
        isIBCCoin: false,
        chain: ChainTypes.JUNO,
    },
    [TokenType.HOPE]: {
        isNativeCoin: false,
        isIBCCoin: false,
        chain: ChainTypes.JUNO,
        contractAddress:
            'juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
    },
    [TokenType.RAW]: {
        isNativeCoin: false,
        isIBCCoin: false,
        chain: ChainTypes.JUNO,
        contractAddress:
            'juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
        // "juno1sn67lmh4gzx8kcz9cpek4suyglvley2vnksj7tdadfeamfe4089ssvfkgx", // this is only for swap testing
    },
    [TokenType.NETA]: {
        isNativeCoin: false,
        isIBCCoin: false,
        chain: ChainTypes.JUNO,
        contractAddress:
            'juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
    },
    [TokenType.ATOM]: {
        isNativeCoin: true,
        isIBCCoin: true,
        chain: ChainTypes.COSMOS,
        originChain: ChainTypes.COSMOS,
    },
    [TokenType.USDC]: {
        isNativeCoin: true,
        isIBCCoin: true,
        chain: ChainTypes.AXELAR,
        originChain: ChainTypes.AXELAR,
    },
    [TokenType.HOPERS]: {
        isNativeCoin: false,
        isIBCCoin: false,
        chain: ChainTypes.JUNO,
        contractAddress:
            'juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n',
    },
    [TokenType.PUNK]: {
        isNativeCoin: false,
        isIBCCoin: false,
        chain: ChainTypes.JUNO,
        contractAddress:
            'juno13926947pmrjly5p9hf5juey65c6rget0gqrnx3us3r6pvnpf4hwqm8mchy',
    },
    [TokenType.HUAHUA]: {
        isNativeCoin: true,
        isIBCCoin: true,
        chain: ChainTypes.CHIHUAHUA,
        originChain: ChainTypes.CHIHUAHUA,
    },
    [TokenType.CANLAB]: {
        isNativeCoin: false,
        isIBCCoin: false,
        chain: ChainTypes.JUNO,
        contractAddress:
            'juno1vn38rzq0wc7zczp4dhy0h5y5kxh2jjzeahwe30c9cc6dw3lkyk5qn5rmfa',
        decimal: 3,
    },
    [TokenType.RED]: {
        isNativeCoin: false,
        isIBCCoin: false,
        chain: ChainTypes.JUNO,
        contractAddress:
            'juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za',
    },
    [TokenType.BLUE]: {
        isNativeCoin: false,
        isIBCCoin: false,
        chain: ChainTypes.JUNO,
        contractAddress:
            'juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7',
    },
    [TokenType.WYND]: {
        isNativeCoin: false,
        isIBCCoin: false,
        chain: ChainTypes.JUNO,
        contractAddress:
            'juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9',
    },
};
