import { MarketplaceInfo } from '../types';

export const getTokenIdNumber = (id: string): string => {
    if (!id) return '';
    return id.split('.').pop() || '';
};

export const getCustomTokenId = (origin: string, target: string): string =>
    `${target}.${origin.split('.').pop()}`;

export const buildNFTItem = (
    item: any,
    contractAddress: string,
    collection: MarketplaceInfo,
    metaData: any,
) => {
    const customTokenId = collection.customTokenId;

    const tokenNumberStr = Number(getTokenIdNumber(item.token_id));
    const tokenNumber: number = isNaN(tokenNumberStr) ? 0 : tokenNumberStr;
    const crrItem = {
        ...item,
        ...(customTokenId && {
            token_id_display: getCustomTokenId(item.token_id, customTokenId),
        }),
        contractAddress,
        collectionId: collection.collectionId,
        ...(metaData &&
            metaData[tokenNumber - 1] && {
                metaData: metaData[tokenNumber - 1],
            }),
    };
    return crrItem;
};
