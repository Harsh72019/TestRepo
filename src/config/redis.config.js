import { createClient } from 'redis';

// Used redis for caching posts for faster performance and to reduce the load on the database and to improve the performance of the application

const redisClient = createClient({
  url: process.env.REDIS_URL
});

redisClient.on('connect', () => {
  console.log('Redis connected successully');
});

redisClient.on('error', (err) => {
  console.error('Error connecting to redis:', err);
});


export default redisClient;
