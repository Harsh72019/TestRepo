import mongoose from 'mongoose';
import Post from '../models/Post.model.js';
import Tag from '../models/Tag.model.js';


// this class handles the main logic for creating a post and finding posts by filters
// it uses mongoose to interact with the database and perform operations on the Post model

class PostRepository {
  async create(postData) {
    const post = new Post(postData);
    return await post.save();
  }

  async findByFilters({ keyword, tag, sortBy = 'createdAt', order = 'desc', page = 1, limit = 10 }) {
    const matchStage = {};

    // Keyword filter
    if (keyword) {
      matchStage.$or = [
        { title: { $regex: keyword, $options: 'i' } },
        { desc: { $regex: keyword, $options: 'i' } }
      ];
    }

    // Tag filter
    if (tag) {
      const tagsArray = tag.split(',').map(t => t.trim());
      const tagDocs = await Tag.find({ name: { $in: tagsArray } }, '_id');

      if (tagDocs.length > 0) {
        const tagIds = tagDocs.map(tagDoc => new mongoose.Types.ObjectId(tagDoc._id));
        matchStage.tags = { $in: tagIds };
      } else {
        return {
          posts: [],
          totalCount: 0,
          currentCount: 0
        };
      }
    }

    const skip = (page - 1) * limit;
    const sortStage = { [sortBy]: order === 'asc' ? 1 : -1 };

    // Researched that lookup and aggregate is better than populate as it works like join in SQL and populate sometimes works like N +1 query and it is not good for performance.
    
    const posts = await Post.aggregate([
      { $match: matchStage },
      { $sort: sortStage },
      { $skip: skip },
      { $limit: limit },
      {
        $lookup: {
          from: 'tags',
          localField: 'tags',
          foreignField: '_id',
          as: 'tags'
        }
      },
      {
        $project: {
          title: 1,
          desc: 1,
          image: 1,
          tags: { name: 1 },
          createdAt: 1,
          updatedAt: 1
        }
      }
    ]);

    const totalCount = await Post.countDocuments(matchStage);
    return {
      data : posts,
      totalCount,
      currentCount: posts.length
    };
  }
}

export default PostRepository;
