import fetchCollectionInfo from './collection_info';
import fetchLiquiditiesInfo from './liquidities_info';
import fetchMarketplaceNFTs from './marketplace_nfts';

export let cache: Record<string, any> = {};

const main = async () => {
    try {
        const collectionInfo = await fetchCollectionInfo();
        const marketplaceInfo = await fetchMarketplaceNFTs();
        const liquiditiesInfo = await fetchLiquiditiesInfo();
        cache = {
            ...cache,
            ...collectionInfo,
            ...marketplaceInfo,
            ...liquiditiesInfo,
        };
    } catch (err) {
        console.log('main logic error', err);
    }
};

export default main;
