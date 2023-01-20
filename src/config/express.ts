import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { routes } from '../routes';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use('/', routes);
app.disable('x-powered-by');

export { app };
