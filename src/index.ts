import { app } from './config/express';
import main from './controllers';

const port = process.env.PORT || '5000';

const startServer = async () => {
    app.listen(port, async () => {
        console.log(`Listening to port ${port}`);
        await main();
    });
};

startServer();
