import { Request, Response, Router } from 'express';
import { catchAsync, pick } from '../utils';
import * as constants from '../constants';
import store from '../../store';

const formatMemoryUsage = (data) =>
    `${Math.round((data / 1024 / 1024) * 100) / 100} MB`;

const routes = Router();

routes.get(
    '/',
    catchAsync((_req: Request, res: Response) => {
        const result = {...constants}
        delete result.sender;
        res.status(200).json({ success: true, constants: result });
    }),
);

routes.get(
    '/cache',
    catchAsync((req: Request, res: Response) => {
        const query = req.query?.fields || '';
        const fields = query ? String(query).split(',') : [];

        res.status(200).json(
            fields.length ? pick(store.getData(), fields) : store.getData(),
        );
    }),
);
routes.get(
    '/collection-bids',
    catchAsync((req: Request, res: Response) => {
        const query = req.query?.collectionIds || '';
        const collectionIds = query ? String(query).split(',') : [];
        const collectionBidsInfo = store.getData().collectionBidsInfo || {};

        res.status(200).json(
            collectionIds.length
                ? pick(collectionBidsInfo, collectionIds)
                : collectionBidsInfo,
        );
    }),
);

routes.get(
    '/memory-usage',
    catchAsync((_req: Request, res: Response) => {
        const memoryData = process.memoryUsage();

        const memoryUsage = {
            rss: `${formatMemoryUsage(
                memoryData.rss,
            )} -> Resident Set Size - total memory allocated for the process execution`,
            heapTotal: `${formatMemoryUsage(
                memoryData.heapTotal,
            )} -> total size of the allocated heap`,
            heapUsed: `${formatMemoryUsage(
                memoryData.heapUsed,
            )} -> actual memory used during the execution`,
            external: `${formatMemoryUsage(
                memoryData.external,
            )} -> V8 external memory`,
        };
        res.status(200).json(memoryUsage);
    }),
);

export { routes };
