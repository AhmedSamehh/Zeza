export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, any>;
}

export const successResponse = <T>(
  res: any,
  statusCode: number,
  message: string,
  data?: T
) => {
  const response: ApiResponse<T> = {
    success: true,
    message,
    data,
  };
  return res.status(statusCode).json(response);
};

export const errorResponse = (
  res: any,
  statusCode: number,
  message: string,
  errors?: Record<string, any>
) => {
  const response: ApiResponse = {
    success: false,
    message,
    errors,
  };
  return res.status(statusCode).json(response);
};
