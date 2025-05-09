// This unified classs helps send response efficiently


class ApiResponse {
    constructor(statusCode, data, message = 'Success') {
      this.status = true;
      this.data =data && data.data ? data.data : data;
      this.message = message;
      if(data.currentCount)
      {
        this.currentCount = data.currentCount ? data.currentCount : null;
      }
      if(data.totalCount)
      {
        this.totalCount = data.totalCount ? data.totalCount : null;
      }
    }
  }
  
  export default ApiResponse;
  