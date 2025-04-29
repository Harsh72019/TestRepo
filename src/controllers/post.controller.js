import PostService from '../services/post.service.js';
import ApiError from '../utils/apiError.utils.js';
import ApiResponse from '../utils/apiResponse.utils.js';

const postService = new PostService();
import uploadToCloudinary from '../utils/cloudinary.utils.js';

// This function helps creating posts
// It takes the request and response objects as parameters
// It uses the postService to create a new post in the database
// It also handles file uploads using Cloudinary
// It returns a JSON response with the created post or an error message
// It uses the ApiResponse class to format the response

export const createPost = async (req, res, next) => {
  try {
    const { title, desc, tags } = req.body;
    const imageFile = req.files?.image;

    // Can make these fields required if necessary

    // if (!title || !desc || !imageFile) {
    //   throw new ApiError(400, 'Missing required fields');
    // }

    // I chose clodinary instead of BASE64 because it is more efficient and faster to upload images to cloudinary than to convert them to base64 and store them in the database. Well i am using free tier so it might be slow but in every other case it is faster.


    let cloudResult = null;
    if(imageFile && imageFile.tempFilePath) 
    {
        cloudResult =imageFile ? await uploadToCloudinary(imageFile.tempFilePath) : null;

    }

    const newPost = await postService.createPost({
      title,
      desc,
      image: cloudResult ? cloudResult.url : null,
      tags: tags ? tags.split(',') : []
    });

    return res.status(201).json(new ApiResponse(201, newPost, 'Post created'));
  } catch (err) {
    next(err);
  }
};

// This function helps fetching posts from the database
// It takes the request and response objects as parameters
// It uses the postService to get filtered posts from the database
// It returns a JSON response with the list of posts or an error message

export const getPosts = async (req, res, next) => {
  try {
    const { keyword, tag, sortBy, order, page, limit, ...rest } = req.query;

    if (Object.keys(rest).length > 0) {
      throw new ApiError(400, 'Invalid query parameters');
    }

    const posts = await postService.getFilteredPosts({
      keyword,
      tag,
      sortBy,
      order,
      page: parseInt(page) || 1,
      limit: parseInt(limit) || 10
    });

    return  res.status(200).json(new ApiResponse(200, posts, 'Posts fetched'));
  } catch (err) {
    next(err);
  }
};
