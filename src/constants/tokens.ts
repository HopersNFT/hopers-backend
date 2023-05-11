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
        isNativeCoin: false,
        isIBCCoin: true,
        chain: ChainTypes.AXELAR,
        originChain: ChainTypes.AXELAR,
        denom: 'uusdc',
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
    [TokenType.OSMO]: {
        isNativeCoin: true,
        isIBCCoin: true,
        chain: ChainTypes.OSMOSIS,
        originChain: ChainTypes.OSMOSIS,
    },
    [TokenType.DRGN]: {
        isNativeCoin: false,
        isIBCCoin: false,
        chain: ChainTypes.JUNO,
        contractAddress:
            'juno147t4fd3tny6hws6rha9xs5gah9qa6g7hrjv9tuvv6ce6m25sy39sq6yv52',
    },
    [TokenType.BANANA]: {
        isNativeCoin: false,
        isIBCCoin: false,
        chain: ChainTypes.JUNO,
        contractAddress:
            'juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj',
    },
    [TokenType.CZAR]: {
        isNativeCoin: false,
        isIBCCoin: false,
        chain: ChainTypes.JUNO,
        contractAddress:
            'juno1x02k67asfmjawgc96dj8nxq6se3fmx36gedgs5hvkjegdhfy97rs3jgj2h',
    },
    [TokenType.KUJIRA]: {
        isNativeCoin: true,
        isIBCCoin: true,
        chain: ChainTypes.KUJIRA,
    },
    [TokenType.EVMOS]: {
        isNativeCoin: true,
        isIBCCoin: true,
        chain: ChainTypes.EVMOS,
        originChain: ChainTypes.EVMOS,
        decimal: 18,
    },
    [TokenType.STARS]: {
        isNativeCoin: true,
        isIBCCoin: true,
        chain: ChainTypes.STARGAZE,
        originChain: ChainTypes.STARGAZE,
    },
    [TokenType.MARS]: {
        isNativeCoin: true,
        isIBCCoin: true,
        chain: ChainTypes.MARS,
        originChain: ChainTypes.MARS,
    },
    [TokenType.HOWL]: {
        isNativeCoin: false,
        isIBCCoin: false,
        chain: ChainTypes.JUNO,
        contractAddress:
            'juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz',
    },
    [TokenType.PLANQ]: {
        isNativeCoin: true,
        isIBCCoin: true,
        chain: ChainTypes.PLANQ,
        originChain: ChainTypes.PLANQ,
        decimal: 18,
    },
    [TokenType.KLEO]: {
        isNativeCoin: false,
        isIBCCoin: false,
        chain: ChainTypes.JUNO,
        contractAddress:
            'juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy',
    },
    [TokenType.JAPE]: {
        isNativeCoin: false,
        isIBCCoin: false,
        chain: ChainTypes.JUNO,
        contractAddress:
            'juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps',
    },
    [TokenType.HARBOR]: {
        isNativeCoin: false,
        isIBCCoin: true,
        chain: ChainTypes.COMDEX,
        originChain: ChainTypes.COMDEX,
        denom: 'uharbor',
    },
    [TokenType.CMDX]: {
        isNativeCoin: true,
        isIBCCoin: true,
        chain: ChainTypes.COMDEX,
        originChain: ChainTypes.COMDEX,
    },
    [TokenType.CMST]: {
        isNativeCoin: false,
        isIBCCoin: true,
        chain: ChainTypes.COMDEX,
        originChain: ChainTypes.COMDEX,
        denom: 'ucmst',
    },
    [TokenType.ETH]: {
        isNativeCoin: false,
        isIBCCoin: true,
        chain: ChainTypes.AXELAR,
        originChain: ChainTypes.AXELAR,
        denom: 'weth-wei',
        decimal: 18,
    },
    [TokenType.wBTC]: {
        isNativeCoin: false,
        isIBCCoin: true,
        chain: ChainTypes.AXELAR,
        originChain: ChainTypes.AXELAR,
        denom: 'wbtc-satoshi',
        decimal: 8,
    },
    [TokenType.PHMN]: {
        isNativeCoin: false,
        isIBCCoin: false,
        chain: ChainTypes.JUNO,
        contractAddress:
            'juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l',
    },
    [TokenType.GRDN]: {
        isNativeCoin: false,
        isIBCCoin: false,
        chain: ChainTypes.JUNO,
        contractAddress:
            'juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma',
    },
    [TokenType.PEPEC]: {
        isNativeCoin: false,
        isIBCCoin: false,
        chain: ChainTypes.JUNO,
        contractAddress:
            'juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k',
    },
    [TokenType.INVDRS]: {
        isNativeCoin: false,
        isIBCCoin: false,
        chain: ChainTypes.JUNO,
        contractAddress:
            'juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8',
    },
    // [TokenType.TEST]: {
    //     isNativeCoin: false,
    //     isIBCCoin: false,
    //     chain: ChainTypes.JUNO,
    //     contractAddress:
    //         'juno18ns4xg5x4p8vnk58xv2vwhjrj0pj752safnnrlkzewr7lvwuvz7sv2fc73',
    // },
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
    [TokenType.OSMO]: 'osmosis',
    [TokenType.DRGN]: '',
    [TokenType.BANANA]: '',
    [TokenType.CZAR]: '',
    [TokenType.KUJIRA]: 'kujira',
    [TokenType.EVMOS]: 'evmos',
    [TokenType.STARS]: 'stargaze',
    [TokenType.MARS]: '',
    [TokenType.HOWL]: '',
    [TokenType.PLANQ]: '',
    [TokenType.KLEO]: '',
    [TokenType.JAPE]: '',
    [TokenType.HARBOR]: '',
    [TokenType.CMDX]: 'cmdx',
    [TokenType.CMST]: '',
    [TokenType.ETH]: 'weth',
    [TokenType.wBTC]: 'wrapped-bitcoin',
    [TokenType.PHMN]: '',
    [TokenType.GRDN]: '',
    [TokenType.PEPEC]: '',
    [TokenType.INVDRS]: '',
    // [TokenType.TEST]: '',
};
