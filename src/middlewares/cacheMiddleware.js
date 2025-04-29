import redisClient from '../config/redis.config.js';

// Middleware for caching the posts in redis

const cacheMiddleware = async (req, res, next) => {
  try {
    const cacheKey = `posts:${JSON.stringify(req.query)}`;
    const cachedData = await redisClient.get(cacheKey);

    if (cachedData) {
      return res.status(200).json({
        success: true,
        message: 'Posts fetched from cache',
        data: JSON.parse(cachedData)
      });
    }


    res.locals.cacheKey = cacheKey; 
    next();
  } catch (err) {
    console.error('❌ Redis cache error:', err);
    next();
  }
};

export default cacheMiddleware;
