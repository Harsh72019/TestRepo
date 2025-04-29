// Class to handle error responses in the api by sending them with a proper structure

class ApiError extends Error {
    constructor(statusCode, message = 'Something went wrong') {
      super(message);
      this.statusCode = statusCode;
      this.success = false;
    }
  }
  
  export default ApiError;
  