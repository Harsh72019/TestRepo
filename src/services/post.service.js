import PostRepository from '../repositories/post.repository.js';
import redisClient from '../config/redis.config.js';

// This Posts class handles the main logic for creating a post and finding posts by filters
// It uses the PostRepository to interact with the database and perform operations on the Post model

class PostService {
  constructor() {
    this.postRepo = new PostRepository();
  }

  async createPost(data) {
    const post = await this.postRepo.create(data);
    // Invalidate cache after new post
    await redisClient.del('posts_cache');
    return post;
  }

  async getFilteredPosts(filters) {
    const cacheKey = `posts:${JSON.stringify(filters)}`;

    const cached = await redisClient.get(cacheKey);
    if (cached) {
      return JSON.parse(cached);
    }

    const posts = await this.postRepo.findByFilters(filters);
    await redisClient.setEx(cacheKey, 300, JSON.stringify(posts)); // cache for 5 mins
    return posts;
  }
}

export default PostService;
