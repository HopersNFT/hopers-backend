import fetchCollectionInfo from './collection_info';
import fetchLiquiditiesInfo from './liquidities_info';
import fetchMarketplaceNFTs from './marketplace_nfts';
import { fetchIDOSaleInfo, fetchIDOStateInfo } from './ido_info';

export let cache: Record<string, any> = {};

const resultHandler = (data) => {
    cache = { ...cache, ...data };
};

const main = async () => {
    try {
        fetchCollectionInfo().then(resultHandler);
        fetchMarketplaceNFTs().then(resultHandler);
        fetchLiquiditiesInfo().then(resultHandler);
        fetchIDOStateInfo().then(resultHandler);
        fetchIDOSaleInfo().then(resultHandler);
    } catch (err) {
        console.log('main logic error', err);
    }
};

export default main;
