// import store from './store';
import { app } from './src/config/express';
import main from './src/controllers';

const port = process.env.PORT || '5000';
const INTERVAL = 1000 * 10; // == 10s

const resultHandler = (data) => {
    global.cache = {
        ...(global.cache || {}),
        ...data,
    };
};

const startServer = async () => {
    app.listen(port, () => {
        console.log(`Listening to port ${port}`);
        global.cache = {};
        setInterval(() => {
            main(resultHandler);
            // main(store.setData);
        }, INTERVAL);
    });
};

startServer();
