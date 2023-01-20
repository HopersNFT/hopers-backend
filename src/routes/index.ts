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
        const data = store.getData();

        res.status(200).json(fields.length ? pick(data, fields) : data);
    }),
);
routes.get(
    '/collection-bids',
    catchAsync((req: Request, res: Response) => {
        const query = req.query?.collectionIds || '';
        const collectionIds = query ? String(query).split(',') : [];
        const data = store.getData();
        const collectionBidsInfo = data.collectionBidsInfo || {};

        res.status(200).json(
            collectionIds.length
                ? pick(collectionBidsInfo, collectionIds)
                : collectionBidsInfo,
        );
    }),
);

export { routes };
