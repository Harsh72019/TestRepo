import TagService from '../services/tag.service.js';
import ApiResponse from '../utils/apiResponse.utils.js';
import ApiError from '../utils/apiError.utils.js';

const tagService = new TagService();

// This function helps creating tags
// It takes the request and response objects as parameters
// It uses the tagService to create a new tag in the database
// It returns a JSON response with the created tag or an error message

export const createTag = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) throw new ApiError(400, 'Tag name is required');

    const tag = await tagService.createTag(name);
    return res.status(201).json(new ApiResponse(201, tag, 'Tag created'));
  } catch (err) {
    next(err);
  }
};

// This function helps fetching all tags from the database
// It takes the request and response objects as parameters
// It uses the tagService to get all tags from the database
// It returns a JSON response with the list of tags or an error message

export const getTags = async (req, res, next) => {
  try {
    const tags = await tagService.getAllTags();
    return res.status(200).json(new ApiResponse(200, tags, 'Tags fetched'));
  } catch (err) {
    next(err);
  }
};
