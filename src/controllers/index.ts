import fetchCollectionInfo from './collection_info';
import fetchMarketplaceNFTs from './marketplace_nfts';

export let cache: Record<string, any> = {};

const main = async () => {
    const collectionInfo = await fetchCollectionInfo();
    cache.collectionInfo = collectionInfo;
    const marketplaceInfo = await fetchMarketplaceNFTs();
    cache = { ...cache, ...marketplaceInfo };
};

export default main;
