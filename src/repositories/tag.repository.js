import Tag from '../models/Tag.model.js';

// this class handles the main logic for creating a tag and finding tags by filters

class TagRepository {
  async create(tagData) {
    return await Tag.create(tagData);
  }

  async findAll() {
    return await Tag.find();
  }

  async findByName(name) {
    return await Tag.findOne({ name });
  }

  async findById(id) {
    return await Tag.findById(id);
  }
}

export default TagRepository;
