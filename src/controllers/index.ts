import fetchCollectionInfo from './collection_info';
import fetchLiquiditiesInfo from './liquidities_info';
import fetchMarketplaceNFTs from './marketplace_nfts';
import { fetchIDOSaleInfo, fetchIDOStateInfo } from './ido_info';
import { fetchCollectionBidsInfo } from './bid_info';
import { fetchTokenPriceInfo } from './token_price_info';
import { INTERVAL, PRICE_INTERVAL } from '../../src/constants';

const chainCallingFunc = (
    func: () => Promise<any>,
    callbackFunc?: (data: any) => {},
    interval?: number,
) => {
    func().then((data) => {
        if (callbackFunc) callbackFunc(data);
        if (interval)
            setTimeout(() => {
                chainCallingFunc(func, callbackFunc, interval);
            }, interval);
    });
};

const main = (resultHandler) => {
    console.log('---------- start new fetching ----------');
    try {
        chainCallingFunc(fetchCollectionInfo, resultHandler, INTERVAL);
        chainCallingFunc(fetchMarketplaceNFTs, resultHandler, INTERVAL);
        chainCallingFunc(fetchLiquiditiesInfo, resultHandler, INTERVAL);
        chainCallingFunc(fetchIDOStateInfo, resultHandler, INTERVAL);
        chainCallingFunc(fetchIDOSaleInfo, resultHandler, INTERVAL);
        chainCallingFunc(fetchCollectionBidsInfo, resultHandler, INTERVAL);
    } catch (err) {
        console.log('main logic error', err);
    }
};

export const extraLogic = (resultHandler) => {
    try {
        chainCallingFunc(fetchTokenPriceInfo, resultHandler, PRICE_INTERVAL);
        // fetchTokenPriceInfo().then(resultHandler);
    } catch (err) {
        console.log('main logic error', err);
    }
};

export default main;
