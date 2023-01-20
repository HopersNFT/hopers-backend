import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config();

// const redisEndpoint = process.env.REDIS_ENDPOINT;
// const redisUserName = process.env.REDIS_USERNAME;
// const redisPassword = process.env.REDIS_PASSWORD;

const redisEndpoint =
    'redis-17092.c10.us-east-1-4.ec2.cloud.redislabs.com:17092';
const redisUserName = 'default';
const redisPassword = 'uLeu2IEukbDx9X4Sxv0ISupSNM3sZdTq';

console.log('here', { redisEndpoint, redisUserName, redisPassword });

const client = createClient({
    url: `redis://${redisUserName}:${redisPassword}@${redisEndpoint}`,
});

(async () => {
    try {
        client.on('error', (err) => console.log('Redis Client Error', err));
        await client.connect();
    } catch (err) {}
})();

export default client;
