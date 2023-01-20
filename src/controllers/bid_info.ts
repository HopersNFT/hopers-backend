import {
    Collections,
    MAX_FETCH_ITEMS,
    MarketplaceContracts,
} from '../constants';
import { runQuery } from '../utils';

export const fetchCollectionBidsInfo = async () => {
    const fetchCollectionBidsByAddress = async (address: string) => {
        let offers: any[] = [];
        const fetchCollectionBids = async (startAfter?: any) => {
            const fetchedBidsResult = await runQuery(MarketplaceContracts[0], {
                collection_bid_by_collection: {
                    collection: address,
                    start_after: startAfter,
                    limit: MAX_FETCH_ITEMS,
                },
            });
            const fetchedBids = fetchedBidsResult?.bids || [];
            offers = offers.concat(fetchedBids);
            if (fetchedBids.length === MAX_FETCH_ITEMS) {
                await fetchCollectionBids(
                    fetchedBids[MAX_FETCH_ITEMS - 1].bidder,
                );
            }
        };
        await fetchCollectionBids();
        return offers;
    };
    const queries = Collections.map((collection) =>
        fetchCollectionBidsByAddress(collection.nftContract),
    );
    let collectionBidsInfo: any = {};
    await Promise.all(queries).then((queryResults) => {
        queryResults.forEach((result, index: number) => {
            collectionBidsInfo[Collections[index].collectionId] = result;
        });
    });
    return { collectionBidsInfo };
};
