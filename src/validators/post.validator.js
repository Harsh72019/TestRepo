import Joi from 'joi';

// This is the joi validater for validating the request body for creating a post
// it has allowUnknow false by default to prevent any extra feilds 

export const createPostSchema = Joi.object({
  title: Joi.string().trim().min(3).max(100).required(),
  desc: Joi.string().trim().min(10).required(),
  tags: Joi.string()
    .pattern(/^([a-f\d]{24},?)+$/i)
    .optional()
    .messages({
      'string.pattern.base': 'Tags must be comma-separated Mongo ObjectIds'
    })
});
