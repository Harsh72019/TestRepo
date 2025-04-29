import ApiError from '../utils/apiError.utils.js';
import mongoose from 'mongoose';

// This middleware function handles errors that occur in the application
// It takes the error, request, response, and next function as parameters
// Every new error Thrown by repositories or services would be handled here


const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  if (err instanceof mongoose.Error.ValidationError) {
    const messages = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({
      success: false,
      message: 'Validation Error',
      errors: messages,
    });
  }

  if (err instanceof mongoose.Error.CastError) {
    return res.status(400).json({
      success: false,
      message: `Invalid ${err.path}: ${err.value}`,
    });
  }

  if (err.code && err.code === 11000) {
    const fields = Object.keys(err.keyValue).join(', ');
    return res.status(409).json({
      success: false,
      message: `Duplicate value for field(s): ${fields}`,
    });
  }

  return res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: err.message || 'Something went wrong',
  });
};

export default errorHandler;
