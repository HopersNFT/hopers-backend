import fetchCollectionInfo from './collection_info';
import fetchLiquiditiesInfo from './liquidities_info';
import fetchMarketplaceNFTs from './marketplace_nfts';
import { fetchIDOSaleInfo, fetchIDOStateInfo } from './ido_info';
import { fetchCollectionBidsInfo } from './bid_info';

export let cache: Record<string, any> = {};
export let temp: string = '';

const resultHandler = (data) => {
    cache = { ...cache, ...data };
};

const main = () => {
    console.log('---------- start new fetching ----------');
    try {
        temp = 'started';
        fetchCollectionInfo().then(resultHandler);
        fetchMarketplaceNFTs().then(resultHandler);
        fetchLiquiditiesInfo().then(resultHandler);
        fetchIDOStateInfo().then(resultHandler);
        fetchIDOSaleInfo().then(resultHandler);
        fetchCollectionBidsInfo().then(resultHandler);
    } catch (err) {
        console.log('main logic error', err);
    }
};

export default main;
