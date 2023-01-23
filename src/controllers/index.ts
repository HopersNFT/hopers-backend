import fetchCollectionInfo from './collection_info';
import fetchLiquiditiesInfo from './liquidities_info';
import fetchMarketplaceNFTs from './marketplace_nfts';
import { fetchIDOSaleInfo, fetchIDOStateInfo } from './ido_info';
import { fetchCollectionBidsInfo } from './bid_info';
import { fetchTokenPriceInfo } from './token_price_info';

const main = (resultHandler) => {
    console.log('---------- start new fetching ----------');
    try {
        fetchCollectionInfo().then(resultHandler);
        fetchMarketplaceNFTs().then(resultHandler);
        fetchLiquiditiesInfo().then(resultHandler);
        fetchIDOStateInfo().then(resultHandler);
        fetchIDOSaleInfo().then(resultHandler);
        fetchCollectionBidsInfo().then(resultHandler);
        fetchTokenPriceInfo().then(resultHandler);
    } catch (err) {
        console.log('main logic error', err);
    }
};

export default main;
