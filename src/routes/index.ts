import express, { Request, Response } from 'express';
import { catchAsync, pick } from '../utils';
import { cache } from '../controllers';

const routes = express.Router();

routes.get(
    '/cache',
    catchAsync((req: Request, res: Response) => {
        const query = req.query?.fields || '';
        const fields = query ? String(query).split(',') : [];

        res.status(200).json(fields.length ? pick(cache, fields) : cache);
    }),
);

export { routes };
