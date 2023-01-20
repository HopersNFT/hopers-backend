import store from './src/config/store';
import { app } from './src/config/express';
import main from './src/controllers';

const port = process.env.PORT || '5000';
const INTERVAL = 1000 * 10; // == 10s

const startServer = async () => {
    app.listen(port, () => {
        console.log(`Listening to port ${port}`);
        setInterval(() => {
            main(store.setData);
        }, INTERVAL);
    });
};

startServer();
