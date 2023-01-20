// import store from './store';
import { setAsync } from './src/config/redis';
import { app } from './src/config/express';
import main from './src/controllers';

const port = process.env.PORT || '5000';
const INTERVAL = 1000 * 10; // == 10s

const resultHandler = (data) => {
    Object.keys(data).forEach(async (key) => {
        const value = data[key];
        await setAsync('cache', key, JSON.stringify(value));
    });
};

const startServer = async () => {
    app.listen(port, () => {
        console.log(`Listening to port ${port}`);
        setInterval(() => {
            // main(store.setData);
            main(resultHandler);
        }, INTERVAL);
    });
};

startServer();
