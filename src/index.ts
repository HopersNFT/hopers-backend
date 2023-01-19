import { app } from './config/express';

const port = process.env.PORT || '5000';

const startServer = async () => {
    app.listen(port, () => {
        console.log(`Listening to port ${port}`);
        MongoConnect();
    });
};

startServer();
