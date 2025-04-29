import Joi from 'joi';

// This is the joi validater for validating the request body for creating a tag
// it has allowUnknow false by default to prevent any extra feilds 


export const createTagSchema = Joi.object({
  name: Joi.string().trim().min(2).max(30).required()
});
