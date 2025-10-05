import { ApiResponse } from '../types/response.interface';

export class ResponseUtil {
  static success<T>(data: T, message: string = 'Success', statusCode: number = 200): ApiResponse<T> {
    return {
      success: true,
      message,
      statusCode,
      data,
    };
  }

  static error(message: string = 'Error', statusCode: number = 400): ApiResponse {
    return {
      success: false,
      message,
      statusCode,
    };
  }
}
