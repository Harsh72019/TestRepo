import redisClient from "../config/redis.config.js";
import TagRepository from "../repositories/tag.repository.js";
import ApiError from "../utils/apiError.utils.js";

// This Tags class handles the main logic for creating a tag and finding tags by filters
// It uses the TagRepository to interact with the database and perform operations on the Tag model

class TagService {
  constructor() {
    this.tagRepo = new TagRepository();
  }

  async createTag(name) {
    const existing = await this.tagRepo.findByName(name);
    if (existing) throw new ApiError(400, "Tag already exists");
    await redisClient.del('tags:all');
    return await this.tagRepo.create({ name });
  }

  async getAllTags() {
    const cacheKey = `tags:all`;

    const cached = await redisClient.get(cacheKey);

    if (cached) {
      return JSON.parse(cached);
    }
    const tags =  await this.tagRepo.findAll();
     await redisClient.setEx(cacheKey, 300, JSON.stringify(tags)); 
     return tags;
  }
}

export default TagService;
