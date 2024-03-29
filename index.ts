import store from './store';
import { app } from './src/config/express';
import main, { extraLogic } from './src/controllers';

const port = process.env.PORT || '5000';

const startServer = async () => {
    app.listen(port, () => {
        console.log(`Listening to port ${port}`);

        extraLogic(store.setData);
        // setInterval(() => {
        //     extraLogic(store.setData);
        // }, PRICE_INTERVAL);
        main(store.setData);
        // setInterval(() => {
        //     main(store.setData);
        // }, INTERVAL);
    });
};

startServer();
