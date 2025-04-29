// It is used for validating request and checking that no extra fields are passed in the request body. It uses Joi for validation and returns a 400 error if the validation fails. It is used in the createPost and createTag functions to validate the request body before creating a new post or tag. We can create it more robust if we need to pass values which are not in the model like transactions in mySQL or kafka Brokers


const validateRequest = (schema, property = 'body') => {
    return (req, res, next) => {
      const { error } = schema.validate(req[property]);
  
      if (error) {
        return res.status(400).json({
          success: false,
          message: error.details[0].message
        });
      }
  
      next();
    };
  };
  
  export default validateRequest;
  