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
    [TokenType.SGNL]: {
        isNativeCoin: false,
        isIBCCoin: false,
        chain: ChainTypes.JUNO,
        contractAddress:
            'juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k',
    },
    [TokenType.RACOON]: {
        isNativeCoin: false,
        isIBCCoin: false,
        chain: ChainTypes.JUNO,
        contractAddress:
            'juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
    },
    [TokenType.GLTO]: {
        isNativeCoin: false,
        isIBCCoin: false,
        chain: ChainTypes.JUNO,
        contractAddress:
            'juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
    },
    [TokenType.AQUA]: {
        isNativeCoin: false,
        isIBCCoin: false,
        chain: ChainTypes.JUNO,
        contractAddress:
            'juno1hnftys64ectjfynm6qjk9my8jd3f6l9dq9utcd3dy8ehwrsx9q4q7n9uxt',
    },
};

export const TokenCoingeckoIds: { [key in TokenType]: string } = {
    [TokenType.HOPE]: 'hope-galaxy',
    [TokenType.JUNO]: 'juno-network',
    [TokenType.RAW]: '', // junoswap-raw-dao
    [TokenType.NETA]: 'neta',
    [TokenType.ATOM]: 'cosmos',
    [TokenType.USDC]: 'axlusdc',
    [TokenType.HOPERS]: '',
    [TokenType.PUNK]: 'juno-punk',
    [TokenType.HUAHUA]: 'chihuahua-token',
    [TokenType.CANLAB]: '',
    [TokenType.RED]: '',
    [TokenType.BLUE]: '',
    [TokenType.WYND]: '',
    [TokenType.SGNL]: 'signal',
    [TokenType.RACOON]: '',
    [TokenType.GLTO]: '',
    [TokenType.AQUA]: '',
};
