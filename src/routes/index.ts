import express, { Request, Response } from 'express';
import { catchAsync, pick } from '../utils';
import * as constants from '../constants';
import store from '../../store';

const routes = express.Router();

routes.get(
    '/',
    catchAsync((_req: Request, res: Response) => {
        res.status(200).json({ success: true, constants });
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

export { routes };
