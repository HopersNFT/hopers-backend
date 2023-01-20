import { createClient } from 'redis';
import { promisify } from 'util';
import dotenv from 'dotenv';

dotenv.config();

const redisEndpoint = process.env.REDIS_ENDPOINT;
const redisUserName = process.env.REDIS_USERNAME;
const redisPassword = process.env.REDIS_PASSWORD;

console.log('here', { redisEndpoint, redisUserName, redisPassword });

const client = createClient({
    url: `redis://${redisUserName}:${redisPassword}@${redisEndpoint}`,
});

(async () => {
    client.on('error', (err) => console.log('Redis Client Error', err));
    await client.connect();
})();

export const getAsync = promisify(client.hGetAll).bind(client);
export const setAsync = promisify(client.hSet).bind(client);
