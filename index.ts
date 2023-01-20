// import store from './store';
import { app } from './src/config/express';
import main from './src/controllers';

const port = process.env.PORT || '5000';
const INTERVAL = 1000 * 10; // == 10s

const resultHandler = (data) => {
    const exist = app.get('cache') || {};
    app.set('cache', { ...exist, ...data });
};

const startServer = async () => {
    app.listen(port, () => {
        console.log(`Listening to port ${port}`);
        app.set('cache', {});

        setInterval(() => {
            // main(store.setData);
            main(resultHandler);
        }, INTERVAL);
    });
};

startServer();
