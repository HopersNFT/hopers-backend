import { buildNFTItem, getQuery, runQuery } from '../utils';
import { AttributeType, MetaDataItemType } from '../types';
import {
    Collections,
    MAX_FETCH_ITEMS,
    MarketplaceContracts,
} from '../constants';
import store from '../../store';

const getTraitsStatus = (
    metaData: MetaDataItemType[],
): { total: number; [key: string]: number } => {
    let result: { total: number; [key: string]: number } = { total: 0 };
    metaData.forEach((metaDataItem: MetaDataItemType) => {
        result.total += 1;
        const attributes: AttributeType[] = metaDataItem.attributes;
        attributes.forEach((attribute: AttributeType) => {
            result[attribute.value] = (result[attribute.value] || 0) + 1;
        });
    });
    return result;
};

const fetchMarketplaceNFTs = async () => {
    let collectionTraits: any = store.getData().collectionTraits || {},
        marketplaceNFTs: any = store.getData().marketplaceNFTs || {};
    for (const collection of Collections) {
        let queries: any[] = [];
        let contractAddresses: string[] = [];
        if (
            collection.isLaunched &&
            collection.marketplaceContract &&
            collection.marketplaceContract.length
        ) {
            collection.marketplaceContract.forEach((contract: string) => {
                if (contract) {
                    queries.push(
                        runQuery(contract, {
                            get_offerings: {},
                        }),
                    );
                    contractAddresses.push(contract);
                }
            });
        }
        let metaData: MetaDataItemType[] | null = collection.metaDataUrl
            ? await getQuery({ url: collection.metaDataUrl })
            : null;
        if (metaData) {
            metaData = metaData?.sort((item1: any, item2: any) => {
                if (item1.edition) {
                    return item1.edition > item2.edition ? 1 : -1;
                } else {
                    return Number(item1.image.split('.')[0]) >
                        Number(item2.image.split('.')[0])
                        ? 1
                        : -1;
                }
            });
            collectionTraits[collection.collectionId] =
                getTraitsStatus(metaData);
        }

        let fetchedMarketplaceNFTs: any[] = [];

        const fetchMarketplaceNfts = async (startAfter?: any) => {
            const fetchedResult = await runQuery(MarketplaceContracts[0], {
                asks: {
                    collection: collection.nftContract,
                    start_after: startAfter,
                    limit: MAX_FETCH_ITEMS,
                },
            });
            const fetchedNfts = fetchedResult?.asks || [];
            fetchedNfts.forEach((item: any) => {
                const crrItem = buildNFTItem(
                    item,
                    MarketplaceContracts[0],
                    collection,
                    metaData,
                );
                fetchedMarketplaceNFTs = [...fetchedMarketplaceNFTs, crrItem];
            });
            if (fetchedNfts.length === MAX_FETCH_ITEMS) {
                await fetchMarketplaceNfts(
                    fetchedNfts[MAX_FETCH_ITEMS - 1].token_id,
                );
            }
        };
        await fetchMarketplaceNfts();

        await Promise.all(queries).then((queryResults: any) => {
            queryResults.forEach((queryResult: any, index: number) => {
                const fetchedResult =
                    queryResult?.offerings ||
                    (!!queryResult?.length && queryResult) ||
                    [];
                fetchedResult?.forEach((item: any) => {
                    const crrItem = buildNFTItem(
                        item,
                        contractAddresses[index],
                        collection,
                        metaData,
                    );
                    fetchedMarketplaceNFTs = [
                        ...fetchedMarketplaceNFTs,
                        crrItem,
                    ];
                });
            });
        });
        marketplaceNFTs[collection.collectionId] = fetchedMarketplaceNFTs;
    }

    return { collectionTraits, marketplaceNFTs };
};

export default fetchMarketplaceNFTs;
