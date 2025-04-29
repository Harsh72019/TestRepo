import TagRepository from '../repositories/tag.repository.js';
import ApiError from '../utils/apiError.utils.js';

// This Tags class handles the main logic for creating a tag and finding tags by filters
// It uses the TagRepository to interact with the database and perform operations on the Tag model

class TagService {
  constructor() {
    this.tagRepo = new TagRepository();
  }

  async createTag(name) {
    const existing = await this.tagRepo.findByName(name);
    if (existing) throw new ApiError(400, 'Tag already exists');

    return await this.tagRepo.create({ name });
  }

  async getAllTags() {
    return await this.tagRepo.findAll();
  }
}

export default TagService;
