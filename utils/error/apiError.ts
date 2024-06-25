class ApiError extends Error {
  statusCode: number;
  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }

  static badRequest(msg: string) {
    return new ApiError(400, msg);
  }

  static unauthorized(msg: string) {
    return new ApiError(401, msg);
  }

  static internal(msg: string) {
    return new ApiError(500, msg);
  }
}

export default ApiError;
